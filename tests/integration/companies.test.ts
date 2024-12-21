import { Intercom } from "../../src";
import { dateToUnixTimestamp } from "./utils/date";
import { createCompany, tryDeleteCompany } from "./helpers";
import { createClient } from "./utils/createClient";

describe("Companies", () => {
    let contactId: string;
    let company: Intercom.Company;

    const client = createClient();

    beforeAll(async () => {
        // arrange
        const randomContacts = await client.contacts.list({
            per_page: 1,
        });

        contactId = randomContacts.data[0].id;
        company = await createCompany(client);
    });

    afterAll(async () => {
        // cleanup
        await tryDeleteCompany(client, company.id);
    });

    it("create", async () => {
        // act
        const company = await createCompany(client);

        // assert
        expect(company).toBeDefined();

        // cleanup
        await tryDeleteCompany(client, company.id);
    });

    it("update", async () => {
        // arrange
        const company = await createCompany(client);

        // act
        const response = await client.companies.createOrUpdate({
            company_id: company.company_id,
            remote_created_at: dateToUnixTimestamp(new Date()),
            name: "BestCompanyInc",
            monthly_spend: 9001,
            plan: "1. Get pizzaid",
            size: 62049,
            website: "http://the-best.one",
            industry: "The Best One",
            custom_attributes: {},
        });

        // assert
        expect(response).toBeDefined();

        // cleanup
        await tryDeleteCompany(client, company.id);
    });

    it("find - by id", async () => {
        // act
        const response = await client.companies.find({
            company_id: company.id,
        });

        // assert
        expect(response).toBeDefined();
    });

    it("list", async () => {
        // act
        const response = await client.companies.list({
            page: 1,
            per_page: 35,
            order: "desc",
        });

        // assert
        expect(response).toBeDefined();
    });

    it("delete", async () => {
        // arrange
        const company = await createCompany(client);

        // act
        const response = await client.companies.delete({
            company_id: company.id,
        });

        // assert
        expect(response).toBeDefined();
    });

    it.skip("scroll - infinite one", async () => {
        // act
        const response = await client.companies.scroll();

        // assert
        expect(response.data).toBeDefined();
    });

    it("attachContact", async () => {
        // act
        const response = await client.companies.attachContact({
            contact_id: contactId,
            id: company.id,
        });

        // assert
        expect(response).toBeDefined();
    });

    it("detachContact", async () => {
        // act
        const response = await client.companies.detachContact({
            contact_id: contactId,
            company_id: company.id,
        });

        // assert
        expect(response).toBeDefined();
    });

    it("listAttachedContacts", async () => {
        // act
        const response = await client.companies.listAttachedContacts({
            company_id: company.id,
            page: 1,
            per_page: 25,
        });

        // assert
        expect(response).toBeDefined();
    });

    it("listAttachedSegments", async () => {
        // act
        const response = await client.companies.listAttachedSegments({
            company_id: company.id,
        });

        // assert
        expect(response).toBeDefined();
    });
});
