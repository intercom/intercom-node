import assert from 'assert';
import { Client, IdentityVerification } from '../../lib';
import nock from 'nock';

describe('clients', () => {
    it('ping', async () => {
        nock('https://api.intercom.io').get('/admins').reply(200, {});
        const client = new Client({
            usernameAuth: { username: 'foo', password: 'bar' },
        });
        const response = await client.ping();

        assert.deepStrictEqual({}, response);
    });
    it('paginate', async () => {
        nock('https://api.intercom.io')
            .get('/foo/bar/baz')
            .query({ blue: 'red' })
            .reply(200, { foo: 'bar' });
        const client = new Client({
            usernameAuth: { username: 'foo', password: 'bar' },
        });
        const paginationObject = {
            next: 'https://api.intercom.io/foo/bar/baz?blue=red',
        };
        const response = await client.nextPage(paginationObject);

        assert.deepStrictEqual({ foo: 'bar' }, response);
    });
    it('should compute user hashes', () => {
        assert.equal(
            'c8acc43edc084edb8207a50320ba4ec5d113686cf8050274a305480c98512e45',
            IdentityVerification.userHash({
                secretKey: 'bar',
                identifier: 'baz',
            })
        );
    });
});
