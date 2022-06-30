import assert from 'assert';
import { Client } from '../../lib';
import nock from 'nock';

describe('subscriptions', () => {
    const client = new Client({
        usernameAuth: { username: 'foo', password: 'bar' },
    });

    it('should be listed', async () => {
        nock('https://api.intercom.io')
            .get('/subscription_types')
            .reply(200, { type: 'list', data: [] });
        const response = await client.subscriptions.listTypes();

        assert.deepStrictEqual({ type: 'list', data: [] }, response);
    });
});
