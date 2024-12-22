import { Intercom } from "../../src";
import { randomString } from "./utils/random";
import { createConversation, tryDeleteContact } from "./helpers";
import { wait } from "./utils/wait";
import { createClient } from "./utils/createClient";

describe("Conversations", () => {
    let user: Intercom.Contact;
    let secondUser: Intercom.Contact;
    let lead: Intercom.Contact;

    let adminId: string;
    let secondAdminId: string;
    let conversationId: string;
    let conversation: Intercom.Conversation;

    const client = createClient();

    beforeAll(async () => {
        // arrange
        const admins = await client.admins.list();

        const adminList = admins.admins.filter((admin) => admin.has_inbox_seat);
        // Only admins with inbox seat can interact with conversations.
        adminId = adminList[0].id;
        secondAdminId = adminList[1].id;
        user = await client.contacts.create({
            external_id: randomString(),
            name: "Baba Booey",
        });
        secondUser = await client.contacts.create({
            external_id: randomString(),
            name: "Babushka Boy",
            email: "babushka_boy@bababooey.com",
        });
        lead = await client.contacts.create({
            name: "Babushka Lead",
            email: "babushka_lead@bababooey.com",
            role: "lead",
        });

        const conversationMessage = await client.conversations.create({
            from: { id: user.id, type: "user" },
            body: "Raz-dwa-try kalyna, czorniawaja diwczyna",
        });
        conversationId = conversationMessage.conversation_id;

        // Give Intercom a few seconds to index conversation
        await wait(5000);

        conversation = await client.conversations.find({
            conversation_id: conversationId,
        });
    }, 20_000);

    afterAll(async () => {
        // cleanup
        await tryDeleteContact(client, user.id);
        await tryDeleteContact(client, secondUser.id);
        await tryDeleteContact(client, lead.id);
    });

    it("create conversation with user as default", async () => {
        // act
        const response = await client.conversations.create({
            from: { id: user.id, type: "user" },
            body: "Raz-dwa-try kalyna, czorniawaja diwczyna",
        });

        // assert
        expect(response).toBeDefined();
    });

    it("create conversation with user", async () => {
        // act
        const response = await client.conversations.create({
            from: { id: user.id, type: "user" },
            body: "Raz-dwa-try kalyna, czorniawaja diwczyna",
        });

        // assert
        expect(response).toBeDefined();
    });

    it("create conversation with lead", async () => {
        // act
        const response = await client.conversations.create({
            from: { id: lead.id, type: "lead" },
            body: "Raz-dwa-try kalyna, czorniawaja diwczyna",
        });

        // assert
        expect(response).toBeDefined();
    });

    it("find - by id", async () => {
        // act
        const response = await client.conversations.find({
            conversation_id: conversationId,
        });

        // assert
        expect(response).toBeDefined();
    });

    it("update", async () => {
        // act
        const response = await client.conversations.update({
            conversation_id: conversationId,
            read: false,
        });

        // assert
        expect(response).toBeDefined();
    });

    it("replyByIdAsAdmin", async () => {
        // act
        const response = await client.conversations.reply({
            conversation_id: conversationId,
            body: {
                message_type: "comment",
                type: "admin",
                body: "test",
                admin_id: adminId,
            }
        });

        // assert
        expect(response).toBeDefined();
    });

    it("replyByIdAsUser", async () => {
        // act
        const response = await client.conversations.reply({
            conversation_id: conversationId,
            body: {
                message_type: "comment",
                type: "user",
                body: "*click* Nice!",
                intercom_user_id: user.id,
            }
        });

        // assert
        expect(response).toBeDefined();
    });

    it("assign", async () => {
        // arrange
        const message = await createConversation(client, user.id);

        // act
        const response = await client.conversations.manage({
            conversation_id: message.conversation_id,
            body: {
                message_type: "assignment",
                type: "admin",
                admin_id: adminId,
                assignee_id: secondAdminId,
                body: "Goodbye :)",
            }
        });

        // assert
        expect(response).toBeDefined();
    });

    it("run assignment rules", async () => {
        // arrange
        const message = await createConversation(client, user.id);

        // act
        const response = await client.conversations.runAssignmentRules({
            conversation_id: message.conversation_id,
        });

        // assert
        expect(response).toBeDefined();
    });

    it("snooze", async () => {
        // act
        const response = await client.conversations.manage({
            conversation_id: conversationId,
            body: {
                message_type: "snoozed",
                admin_id: adminId,
                snoozed_until: new Date("2040.06.19").getTime() / 1000,
            }
        });

        // assert
        expect(response).toBeDefined();
    });

    it("open", async () => {
        // act
        const response = await client.conversations.manage({
            conversation_id: conversationId,
            body: {
                message_type: "open",
                admin_id: adminId,
            }
        });

        // assert
        expect(response).toBeDefined();
    });

    it("attachContactAsAdmin", async () => {
        // act
        const response = await client.conversations.attachContactAsAdmin({
            conversation_id: conversationId,
            customer: { intercom_user_id: secondUser.id },
            admin_id: adminId,
        });

        // assert
        expect(response).toBeDefined();
    });

    it("detachContactAsAdmin", async () => {
        // act
        const response = await client.conversations.detachContactAsAdmin({
            admin_id: adminId,
            contact_id: secondUser.id,
            conversation_id: conversationId,
        });

        // assert
        expect(response).toBeDefined();
    });

    it("redactConversationPart", async () => {
        // arrange
        const conversation = await client.conversations.find({
            conversation_id: conversationId,
        });

        // act
        const response = await client.conversations.redactConversationPart({
            type: "conversation_part",
            conversation_id: conversationId,
            conversation_part_id: conversation.conversation_parts?.conversation_parts[2].id ?? "",
        });

        // assert
        expect(response).toBeDefined();
    });

    it("close", async () => {
        // act
        const response = await client.conversations.manage({
            conversation_id: conversationId,
            body: {
                type: "admin",
                message_type: "close",
                admin_id: adminId,
                body: "Hasta la vista, baby",
            }
        });

        // assert
        expect(response).toBeDefined();
    });

    it("search", async () => {
        // act
        const response = await client.conversations.search({
            query: {
                operator: "AND",
                value: [
                    {
                        field: "id",
                        operator: "!=",
                        value: "123",
                    },
                ],
            },
        });

        // assert
        expect(response).toBeDefined();
    });
});
