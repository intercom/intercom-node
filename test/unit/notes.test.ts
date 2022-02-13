import assert from 'assert';
import { Client } from '../../lib';
import nock from 'nock';

describe('notes', () => {
    const client = new Client({
        usernameAuth: { username: 'foo', password: 'bar' },
    });

    it('creates new', async () => {
        const contactId = 'baz';
        const requestBody = {
            body: 'Shiny',
            admin_id: '12345',
        };

        nock('https://api.intercom.io')
            .post(`/contacts/${contactId}/notes`, requestBody)
            .reply(200, {});
        const response = await client.notes.create({
            adminId: requestBody.admin_id,
            body: requestBody.body,
            contactId,
        });

        assert.deepStrictEqual({}, response);
    });
    it('finds by id', async () => {
        const id = 'beb';

        nock('https://api.intercom.io').get(`/notes/${id}`).reply(200, {});
        const response = await client.notes.find({ id });

        assert.deepStrictEqual({}, response);
    });
    it('lists all for specific contact by id', async () => {
        const contactId = 'yoopi';

        nock('https://api.intercom.io')
            .get(`/contacts/${contactId}/notes`)
            .query({ page: 2, per_page: 3 })
            .reply(200, {});
        const response = await client.notes.list({
            contactId,
            page: 2,
            perPage: 3,
        });

        assert.deepStrictEqual({}, response);
    });
});
