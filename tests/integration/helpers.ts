import { Intercom, IntercomClient } from "../../src";
import { dateToUnixTimestamp } from "./utils/date";
import { randomString } from "./utils/random";

export async function createCompany(client: IntercomClient) {
    return await client.companies.createOrUpdate({
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
}

export async function tryDeleteCompany(client: IntercomClient, companyId: string) {
    try {
        await client.companies.delete({ company_id: companyId });
    } catch (error) {
        console.error("Failed to delete company:", error);
    }
}

export async function createContact(client: IntercomClient) {
    return await client.contacts.create({
        external_id: randomString(),
        phone: "+353871234567",
    });
}

export async function tryDeleteContact(client: IntercomClient, contactId: string) {
    try {
        await client.contacts.delete({ contact_id: contactId });
    } catch (error) {
        console.error("Failed to delete contact:", error);
    }
}

export async function tryDeleteTag(client: IntercomClient, tagId: string) {
    try {
        await client.tags.delete({ tag_id: tagId });
    } catch (error) {
        console.error(error);
    }
}

export async function createConversation(client: IntercomClient, contactId: string) {
    return await client.conversations.create({
        from: { id: contactId, type: "user" },
        body: randomString(),
    });
}

export async function tryUntagContact(client: IntercomClient, contactId: string, tagId: string) {
    try {
        await client.tags.untagContact({ contact_id: contactId, tag_id: tagId });
    } catch (error) {
        console.error(error);
    }
}

export async function tryUntagConversation(
    client: IntercomClient,
    conversationId: string,
    tagId: string,
    adminId: string
) {
    try {
        await client.tags.untagConversation({ conversation_id: conversationId, tag_id: tagId, admin_id: adminId });
    } catch (error) {
        console.error(error);
    }
}

export async function tryUntagCompany(client: IntercomClient, tagName: string, company: Intercom.Company) {
    try {
        await client.tags.create({
            name: tagName,
            companies: [{ id: company.id, company_id: company.company_id, untag: true }],
        });
    } catch (error) {
        console.error(error);
    }
}
