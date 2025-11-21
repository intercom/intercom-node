import { Intercom } from "../../src";
import { randomString } from "./utils/random";
import { createCompany, tryDeleteCompany, tryDeleteContact, tryDeleteTag } from "./helpers";
import { createClient } from "./utils/createClient";

describe("Integration between Contact, Conversation, Company and Tag APIs", () => {
    let adminId: string;
    let company: Intercom.Company;
    let user: Intercom.Contact;
    let lead: Intercom.Contact;
    let tag: Intercom.Tag;

    const client = createClient();

    beforeAll(async () => {
        // arrange
        const admins = await client.admins.list();
        adminId = admins.admins?.[0]?.id ?? "0";

        company = await createCompany(client);
        user = await client.contacts.create({
            external_id: randomString(),
        });
        lead = await client.contacts.create({
            name: "Marek Barek",
            role: "lead",
        });
        tag = await client.tags.create({
            name: randomString(),
        });
    });

    afterAll(async () => {
        // cleanup
        await tryDeleteContact(client, lead.id!);
        await tryDeleteContact(client, user.id!);
        await tryDeleteCompany(client, company.id);
        await tryDeleteTag(client, tag.id);
    });

    it("Add Contact to Company", async () => {
        // act
        const response = await client.companies.attachContact({
            contact_id: parseInt(user.id!, 10),
            id: company.id,
        });

        // assert
        expect(response).toBeDefined();
    });

    it("Create Conversation with Contact", async () => {
        // act
        const response = await client.conversations.create({
            from: {
                type: "user",
                id: user.id!,
            },
            body: "Welcome to the club, buddy!",
        });

        // assert
        expect(response).toBeDefined();
    });

    it("Tag the Conversation", async () => {
        // arrange
        const conversation = await client.conversations.create({
            from: {
                type: "user",
                id: user.id!,
            },
            body: "Welcome to the club, buddy!",
        });

        // act
        const response = await client.tags.tagConversation({
            conversation_id: conversation.conversation_id!,
            id: tag.id,
            admin_id: adminId,
        });

        // assert
        expect(response).toBeDefined();
    });
});
