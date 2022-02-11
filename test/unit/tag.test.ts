import assert from 'assert';
import { Client } from '../../lib';
import nock from 'nock';

describe('tags', () => {
    it('should be created', async () => {
        const requestBody = {
            name: 'haven',
        };

        nock('https://api.intercom.io')
            .post('/tags', requestBody)
            .reply(200, {});

        const client = new Client({
            usernameAuth: { username: 'foo', password: 'bar' },
        });
        const response = await client.tags.create({ name: 'haven' });

        assert.deepStrictEqual({}, response);
    });
    it('should be updated', async () => {
        const requestBody = {
            id: '123',
            name: 'haven',
        };

        nock('https://api.intercom.io')
            .post('/tags', requestBody)
            .reply(200, {});
        const client = new Client({
            usernameAuth: { username: 'foo', password: 'bar' },
        });
        const response = await client.tags.update({ id: '123', name: 'haven' });

        assert.deepStrictEqual({}, response);
    });
    it('should delete tags', async () => {
        nock('https://api.intercom.io').delete('/tags/baz').reply(200, {});
        const client = new Client({
            usernameAuth: { username: 'foo', password: 'bar' },
        });
        const response = await client.tags.delete({ id: 'baz' });

        assert.deepStrictEqual({}, response);
    });
    it('should tag contacts', async () => {
        const contactId = 'contactid123';
        const requestBody = {
            id: 'tagid123',
        };

        nock('https://api.intercom.io')
            .post(`/contacts/${contactId}/tags`, requestBody)
            .reply(200, {});
        const client = new Client({
            usernameAuth: { username: 'foo', password: 'bar' },
        });
        const response = await client.tags.tagContact({
            contactId,
            tagId: requestBody.id,
        });

        assert.deepStrictEqual({}, response);
    });
    it('should tag conversations', async () => {
        const conversationId = 'contactid123';
        const requestBody = {
            id: 'tagid123',
            admin_id: 'adminid123',
        };

        nock('https://api.intercom.io')
            .post(`/conversations/${conversationId}/tags`, requestBody)
            .reply(200, {});
        const client = new Client({
            usernameAuth: { username: 'foo', password: 'bar' },
        });
        const response = await client.tags.tagConversation({
            conversationId,
            tagId: requestBody.id,
            adminId: requestBody.admin_id,
        });

        assert.deepStrictEqual({}, response);
    });
    it('should tag companies', async () => {
        const requestBody = {
            name: 'tagname_69',
            companies: [{ id: '123' }, { id: '234' }, { id: '456' }],
        };

        nock('https://api.intercom.io')
            .post(`/tags`, requestBody)
            .reply(200, {});
        const client = new Client({
            usernameAuth: { username: 'foo', password: 'bar' },
        });
        const response = await client.tags.tagCompanies({
            tagName: requestBody.name,
            companiesIds: ['123', '234', '456'],
        });

        assert.deepStrictEqual({}, response);
    });
    it('should untag contacts', async () => {
        const { contactId, tagId } = {
            contactId: 'contactId123',
            tagId: 'tagId123',
        };

        nock('https://api.intercom.io')
            .delete(`/contacts/${contactId}/tags/${tagId}`)
            .reply(200, {});
        const client = new Client({
            usernameAuth: { username: 'foo', password: 'bar' },
        });
        const response = await client.tags.untagContact({ contactId, tagId });

        assert.deepStrictEqual({}, response);
    });
    it('should untag conversations', async () => {
        const conversationId = 'contactid123';
        const requestBody = {
            id: 'tagid123',
            admin_id: 'adminid123',
        };

        nock('https://api.intercom.io')
            .delete(`/conversations/${conversationId}/tags/${requestBody.id}`)
            .reply(200, {});
        const client = new Client({
            usernameAuth: { username: 'foo', password: 'bar' },
        });
        const response = await client.tags.untagConversation({
            conversationId,
            tagId: requestBody.id,
            adminId: requestBody.admin_id,
        });

        assert.deepStrictEqual({}, response);
    });
    it('should untag companies', async () => {
        const requestBody = {
            name: 'tagname_69',
            companies: [
                { id: '123', untag: true },
                { id: '234', untag: true },
                { id: '456', untag: true },
            ],
        };

        nock('https://api.intercom.io')
            .post(`/tags`, requestBody)
            .reply(200, {});
        const client = new Client({
            usernameAuth: { username: 'foo', password: 'bar' },
        });
        const response = await client.tags.untagCompanies({
            tagName: requestBody.name,
            companiesIds: ['123', '234', '456'],
        });

        assert.deepStrictEqual({}, response);
    });
    it('should list', async () => {
        nock('https://api.intercom.io').get('/tags').reply(200, {});
        const client = new Client({
            usernameAuth: { username: 'foo', password: 'bar' },
        });
        const response = await client.tags.list();

        assert.deepStrictEqual({}, response);
    });
});
