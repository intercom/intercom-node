import assert from 'assert';
import { Client } from '../../lib';
import nock from 'nock';

describe('segments', () => {
    const client = new Client({
        usernameAuth: { username: 'foo', password: 'bar' },
    });

    it('should be listed', async () => {
        const queryParams = {
            include_count: true,
        };

        nock('https://api.intercom.io')
            .get('/segments')
            .query(queryParams)
            .reply(200, {});
        const response = await client.segments.list({
            includeCount: queryParams.include_count,
        });

        assert.deepStrictEqual({}, response);
    });
    it('find by id', async () => {
        const id = 'baz';
        const queryParams = {
            include_count: true,
        };

        nock('https://api.intercom.io')
            .get(`/segments/${id}`)
            .query(queryParams)
            .reply(200, {});

        const response = await client.segments.find({
            id,
            includeCount: queryParams.include_count,
        });

        assert.deepStrictEqual({}, response);
    });
});
