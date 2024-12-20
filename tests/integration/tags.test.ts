import { Intercom } from "../../src";
import {
    tryDeleteTag,
    createContact,
    tryDeleteContact,
    createConversation,
    tryDeleteCompany,
    createCompany,
    tryUntagContact,
    tryUntagConversation,
    tryUntagCompany,
} from "./helpers";
import { createClient } from "./utils/createClient";
import { randomString } from "./utils/random";
import { wait } from "./utils/wait";

describe("Tags", () => {
    let adminId: string;
    let tag: Intercom.Tag;

    const client = createClient();

    beforeAll(async () => {
        // arrange
        const randomAdmins = await client.admins.list();
        adminId = randomAdmins.admins[0].id;
        tag = await client.tags.create({
            name: randomString(),
        });
    });

    afterAll(async () => {
        // cleanup
        await tryDeleteTag(client, tag.id);
    });

    it("create", async () => {
        // act
        const response = await client.tags.create({
            name: "Bellic and Partners",
        });

        // assert
        expect(response).toBeDefined();

        // cleanup
        await tryDeleteTag(client, response.id);
    });

    it("update", async () => {
        // arrange
        const tag = await client.tags.create({
            name: randomString(),
        });

        // act
        const response = await client.tags.create({ id: tag.id, name: "Poor" });

        // assert
        expect(response).toBeDefined();

        // cleanup
        await tryDeleteTag(client, response.id);
    });

    it("find", async () => {
        // act
        const response = await client.tags.find({ tag_id: tag.id });

        // assert
        expect(response).toBeDefined();
    });

    it("list", async () => {
        // act
        const response = await client.tags.list();

        // assert
        expect(response).toBeDefined();
    });

    it("delete", async () => {
        // arrange
        const tag = await client.tags.create({
            name: randomString(),
        });

        // act & assert
        expect(async () => await client.tags.delete({ tag_id: tag.id })).not.toThrow();

        // cleanup
        await tryDeleteTag(client, tag.id);
    });

    it("tagContact", async () => {
        // arrange
        const contact = await createContact(client);

        // act
        const response = await client.tags.tagContact({
            contact_id: contact.id,
            id: tag.id,
        });

        // assert
        expect(response).toBeDefined();

        // cleanup
        await tryUntagContact(client, contact.id, tag.id);
        await tryDeleteContact(client, contact.id);
    });

    it("tagConversation", async () => {
        // arrange
        const contact = await createContact(client);
        const message = await createConversation(client, contact.id);

        // act
        const response = await client.tags.tagConversation({
            conversation_id: message.conversation_id,
            id: tag.id,
            admin_id: adminId,
        });

        // assert
        expect(response).toBeDefined();

        // cleanup
        await tryUntagConversation(client, message.conversation_id, tag.id, adminId);
        await tryDeleteContact(client, contact.id);
    }, 10_000);

    it("tagCompany", async () => {
        // arrange
        const company = await createCompany(client);

        // act
        const response = await client.tags.create({
            name: "Poor",
            companies: [{ company_id: company.company_id }],
        });

        // assert
        expect(response).toBeDefined();

        // cleanup
        await tryUntagCompany(client, "Poor", company);
        await tryDeleteCompany(client, company.id);
    });

    it("untagContact", async () => {
        // arrange
        const contact = await createContact(client);
        await client.tags.tagContact({
            contact_id: contact.id,
            id: tag.id,
        });

        // act
        const response = await client.tags.untagContact({
            contact_id: contact.id,
            tag_id: tag.id,
        });

        // assert
        expect(response).toBeDefined();

        // cleanup
        await tryDeleteContact(client, contact.id);
    });

    it("untagConversation", async () => {
        // arrange
        const contact = await createContact(client);
        const message = await createConversation(client, contact.id);

        await client.tags.tagConversation({
            conversation_id: message.conversation_id,
            id: tag.id,
            admin_id: adminId,
        });

        // act
        const response = await client.tags.untagConversation({
            conversation_id: message.conversation_id,
            tag_id: tag.id,
            admin_id: adminId,
        });

        // assert
        expect(response).toBeDefined();

        // cleanup
        await tryDeleteContact(client, contact.id);
    }, 10_000);

    it("untagCompany", async () => {
        // arrange
        const company = await createCompany(client);
        await client.tags.create({
            name: "Poor",
            companies: [{ id: company.id, company_id: company.company_id }],
        });

        // act
        const response = await client.tags.create({
            name: "Poor",
            companies: [{ id: company.id, company_id: company.company_id, untag: true }],
        });

        // assert
        expect(response).toBeDefined();

        // cleanup
        await tryDeleteCompany(client, company.id);
    });
});
