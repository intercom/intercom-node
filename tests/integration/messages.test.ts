import { Intercom } from "../../src";
import { tryDeleteContact } from "./helpers";
import { randomString } from "./utils/random";
import { wait } from "./utils/wait";
import { createClient } from "./utils/createClient";

describe("Messages", () => {
    let adminId: string;
    let user: Intercom.Contact;

    const client = createClient();

    beforeAll(async () => {
        // arrange
        const admins = await client.admins.list();
        const adminList = admins.admins.filter((admin) => admin.has_inbox_seat);

        adminId = adminList[0].id;
        user = await client.contacts.create({
            external_id: randomString(),
            name: "Message Test User",
        });
    });

    afterAll(async () => {
        // cleanup
        await tryDeleteContact(client, user.id);
    });

    it("Message that creates a converation", async () => {
        // act
        const response = await client.messages.create({
            message_type: "inapp",
            body: "Hey, look at me! I am the conversations creator now!",
            from: {
                type: "admin",
                id: Number(adminId),
            },
            to: {
                type: "user",
                id: user.id,
            },
            create_conversation_without_contact_reply: true,
        });

        const messageId = response.id;

        // Give Intercom a few seconds to index conversation
        await wait(10_000);

        const searchResults = await client.conversations.search({
            query: {
                field: "source.id",
                operator: "=",
                value: messageId,
            },
        });

        // assert
        expect(searchResults.data.length).toBeGreaterThan(0);
    }, 20_000);

    it("Create message, no conversation", async () => {
        // act
        const response = await client.messages.create({
            message_type: "inapp",
            body: "Message without creating conversation",
            from: {
                type: "admin",
                id: Number(adminId),
            },
            to: {
                type: "user",
                id: user.id,
            },
        });

        // assert
        expect(response).toBeDefined();
    });
});
