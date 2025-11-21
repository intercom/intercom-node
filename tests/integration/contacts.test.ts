import { Intercom } from "../../src";
import { dateToUnixTimestamp } from "./utils/date";
import { randomString } from "./utils/random";
import { createContact, tryDeleteCompany, tryDeleteContact, tryUntagContact } from "./helpers";
import { createClient } from "./utils/createClient";

describe("Contacts", () => {
    let subscriptionId: string;
    let tag: Intercom.Tag;
    let contact: Intercom.Contact;
    let company: Intercom.Company;

    const client = createClient();

    beforeAll(async () => {
        // arrange
        contact = await createContact(client);

        company = await client.companies.createOrUpdate({
            remote_created_at: dateToUnixTimestamp(new Date()),
            company_id: randomString(),
            name: randomString(),
            monthly_spend: 9001,
            plan: "1. Get pizzaid",
            size: 62049,
            website: "http://the-best.one",
            industry: "The Best One",
            custom_attributes: {},
        });

        await client.companies.attachContact({
            id: company.id,
            contact_id: parseInt(contact.id!, 10),
        });

        const subscriptionTypes = await client.subscriptionTypes.list();
        subscriptionId = subscriptionTypes.data?.[0]?.id ?? "0";
        await client.contacts.attachSubscription({
            contact_id: contact.id!,
            id: subscriptionId,
            consent_type: "opt_in",
        });

        tag = await client.tags.create({
            name: randomString(),
        });
        await client.tags.tagContact({
            contact_id: contact.id!,
            id: tag.id,
        });
    });

    afterAll(async () => {
        // cleanup
        try {
            await client.contacts.detachSubscription({
                contact_id: contact.id!,
                subscription_id: subscriptionId,
            });
        } catch (error) {
            console.error("Failed to detach subscription:", error);
        }
        await tryUntagContact(client, contact.id!, tag.id!);
        await tryDeleteCompany(client, company.id!);
        await tryDeleteContact(client, contact.id!);
    });

    it("list", async () => {
        // act
        const response = await client.contacts.list({
            per_page: 5,
        });

        // assert
        expect(response).toBeDefined();
    });

    it("createUser", async () => {
        // act
        const response = await client.contacts.create({
            external_id: randomString(),
            phone: "+353871234567",
        });

        // assert
        expect(response).toBeDefined();

        // cleanup
        await tryDeleteContact(client, response.id!);
    });

    it("createLead", async () => {
        // act
        const response = await client.contacts.create({
            name: "Roman Bowling",
            role: "lead",
        });

        // assert
        expect(response).toBeDefined();

        // cleanup
        await tryDeleteContact(client, response.id!);
    });

    it("find - by id", async () => {
        // act
        const response = await client.contacts.find({
            contact_id: contact.id!,
        });

        // assert
        expect(response).toBeDefined();
    });

    it("update", async () => {
        // arrange
        const contact = await createContact(client);

        // act
        const response = await client.contacts.update({
            contact_id: contact.id!,
            name: "Nico Bellic",
        });

        // assert
        expect(response).toBeDefined();

        // cleanup
        await tryDeleteContact(client, contact.id!);
    });

    it("archive", async () => {
        // arrange
        const contact = await createContact(client);

        // act
        const response = await client.contacts.archive({
            contact_id: contact.id!,
        });

        // assert
        expect(response).toBeDefined();

        // cleanup
        await tryDeleteContact(client, contact.id!);
    });

    it("unarchive", async () => {
        // arrange
        const contact = await createContact(client);

        // act
        const response = await client.contacts.unarchive({
            contact_id: contact.id!,
        });

        // assert
        expect(response).toBeDefined();

        // cleanup
        await tryDeleteContact(client, contact.id!);
    });

    it("delete", async () => {
        // arrange
        const contact = await client.contacts.create({
            external_id: randomString(),
            phone: "+353871234567",
        });

        // act
        const response = await client.contacts.delete({
            contact_id: contact.id!,
        });

        // assert
        expect(response).toBeDefined();
    });

    it("mergeLeadInUser", async () => {
        // arrange
        const createdUser = await client.contacts.create({
            external_id: randomString(),
            phone: "+353871234567",
        });
        const createdLead = await client.contacts.create({
            name: "Roman Bowling",
            role: "lead",
        });
        const response = await client.contacts.mergeLeadInUser({
            from: createdLead.id!,
            into: createdUser.id!,
        });

        // assert
        expect(response).toBeDefined();

        // cleanup
        await tryDeleteContact(client, createdUser.id!);
        await tryDeleteContact(client, createdLead.id!);
    });

    it("listAttachedCompanies", async () => {
        // act
        const response = await client.contacts.listAttachedCompanies({
            contact_id: contact.id!,
        });

        // assert
        expect(response).toBeDefined();
    });

    it("listAttachedEmailSubscriptions", async () => {
        // act
        const response = await client.contacts.listAttachedSubscriptions({
            contact_id: contact.id!,
        });

        // assert
        expect(response).toBeDefined();
    });

    it("listAttachedSegments", async () => {
        // act
        const response = await client.contacts.listAttachedSegments({
            contact_id: contact.id!,
        });

        // assert
        expect(response).toBeDefined();
    });

    it("listAttachedTags", async () => {
        // act
        const response = await client.contacts.listAttachedTags({
            contact_id: contact.id!,
        });

        // assert
        expect(response).toBeDefined();
    });
});
