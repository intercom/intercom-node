import { Client, TagObject } from '../../dist';
import assert from 'assert';
import { token } from './utils/config';

describe('Tags', () => {
    let adminId: string;
    let conversationId: string;
    let companyId: string;
    let contactId: string;
    let tag: TagObject;

    before(async () => {
        const randomAdmins = await client.admins.list();
        const randomConversations = await client.conversations.list({
            perPage: 1,
        });
        const randomCompanies = await client.companies.list({
            perPage: 1,
        });
        const randomContacts = await client.contacts.list({
            perPage: 1,
        });

        adminId = randomAdmins.admins[0].id;
        conversationId = randomConversations.conversations[0].id;
        companyId = randomCompanies.data[0].id;
        contactId = randomContacts.data[0].id;
    });

    const client = new Client({ tokenAuth: { token } });

    it('create', async () => {
        const response = await client.tags.create({
            name: 'Bellic and Partners',
        });

        tag = response;

        assert.notEqual(response, undefined);
    });
    it('update', async () => {
        const response = await client.tags.update({ id: tag.id, name: 'Poor' });

        assert.notEqual(response, undefined);
    });
    it('tagContact', async () => {
        const response = await client.tags.tagContact({
            contactId,
            tagId: tag.id,
        });

        assert.notEqual(response, undefined);
    });
    it('tagConversation', async () => {
        const response = await client.tags.tagConversation({
            conversationId,
            tagId: tag.id,
            adminId,
        });

        assert.notEqual(response, undefined);
    });
    it('tagCompanies', async () => {
        const response = await client.tags.tagCompanies({
            tagName: 'Poor',
            companiesIds: [companyId],
        });

        assert.notEqual(response, undefined);
    });
    it('untagContact', async () => {
        const response = await client.tags.untagContact({
            contactId,
            tagId: tag.id,
        });

        assert.notEqual(response, undefined);
    });
    it('untagConversation', async () => {
        const response = await client.tags.untagConversation({
            conversationId,
            tagId: tag.id,
            adminId,
        });

        assert.notEqual(response, undefined);
    });
    it('untagCompanies', async () => {
        const response = await client.tags.untagCompanies({
            tagName: 'Poor',
            companiesIds: [companyId],
        });

        assert.notEqual(response, undefined);
    });
    it('list', async () => {
        const response = await client.tags.list();

        assert.notEqual(response, undefined);
    });
    it('delete', async () => {
        const response = await client.tags.delete({ id: tag.id });

        assert.notEqual(response, undefined);
    });
});
