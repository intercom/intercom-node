import { Client, ContactObject, MessageObject } from '../../dist';
import assert from 'assert';
import { token } from './utils/config';
import { randomInt } from 'crypto';

describe('Integration between Contact, Conversation, Company and Tag APIs', () => {
    let adminId: string;
    let contact: ContactObject;
    let conversation: MessageObject;
    let companyId: string;
    let lead: ContactObject;
    let user: ContactObject;

    before(async () => {
        const randomCompanies = await client.companies.list({
            perPage: 1,
        });
        const admins = await client.admins.list();

        adminId = admins.admins[0].id;
        companyId = randomCompanies.data[0].id;
    });

    const client = new Client({ tokenAuth: { token } });

    it('Create User', async () => {
        const response = await client.contacts.createUser({
            externalId: `${randomInt(9999)}-${randomInt(9999)}-${randomInt(
                9999
            )}`,
        });

        user = response;

        assert.notEqual(response, undefined);
    });

    it('Create Lead', async () => {
        const response = await client.contacts.createLead({
            name: 'Marek Barek',
        });

        lead = response;

        assert.notEqual(response, undefined);
    });
    it('Convert Lead to Contact', async () => {
        const response = await client.contacts.mergeLeadInUser({
            leadId: lead.id,
            userId: user.id,
        });

        contact = response;

        assert.notEqual(response, undefined);
    });
    it('Add Contact to Company', async () => {
        const response = await client.companies.attachContact({
            contactId: contact.id,
            companyId,
        });

        assert.notEqual(response, undefined);
    });
    it('Create Conversation with Contact', async () => {
        const response = await client.conversations.create({
            userId: contact.id,
            body: 'Welcome to the club, buddy!',
        });

        conversation = response;

        assert.notEqual(response, undefined);
    });
    it('Tag the Conversation', async () => {
        const tags = await client.tags.list();
        const response = await client.tags.tagConversation({
            conversationId: conversation.conversation_id as string,
            tagId: tags.data[0].id,
            adminId,
        });

        assert.notEqual(response, undefined);
    });
});
