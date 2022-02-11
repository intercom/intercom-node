import assert from 'assert';
import nock from 'nock';
import { Client } from '../../lib';

describe('errors', () => {
    it('should fail with unauthorized (401) error', async () => {
        nock('https://api.intercom.io')
            .replyContentLength()
            .get('/admins')
            .reply(
                401,
                {
                    type: 'error.list',
                    request_id: 'b2i3ri5909msvfqskol0',
                    errors: [
                        {
                            code: 'token_unauthorized',
                            message: 'Not authorized to access resource',
                        },
                    ],
                },
                {
                    'X-Intercom-Version':
                        '3736ab533ad11d88d93cdef3fcef9a98a5724229',
                    'X-RateLimit-Limit': '83',
                    'X-RateLimit-Remaining': '27',
                    'X-RateLimit-Reset': '1522850540',
                    'X-Request-Id': 'b2i3ri5909msvfqskol0',
                    'X-Runtime': '0.037708',
                }
            );
        const client = new Client({
            usernameAuth: { username: 'foo', password: 'bar' },
        });
        try {
            const response = await client.admins.list();
            assert.strictEqual(response, null, 'Valid response');
        } catch (err) {
            assert.strictEqual(err.statusCode, 401);
            assert.strictEqual(err.body.request_id, 'b2i3ri5909msvfqskol0');
            assert.deepStrictEqual(err.body.errors, [
                {
                    code: 'token_unauthorized',
                    message: 'Not authorized to access resource',
                },
            ]);
            assert.deepStrictEqual(
                err.message,
                'Not authorized to access resource'
            );
            assert.strictEqual(
                err.headers['x-request-id'],
                'b2i3ri5909msvfqskol0'
            );
        }
    });
    it('should fail with too many requests (429) error', async () => {
        nock('https://api.intercom.io')
            .replyContentLength()
            .get('/admins')
            .reply(
                429,
                {
                    type: 'error.list',
                    request_id: 'b2i3mhcboc6pcbe33q80',
                    errors: [
                        {
                            code: 'rate_limit_exceeded',
                            message: 'Exceeded rate limit of 83 in 10_seconds',
                        },
                    ],
                },
                {
                    'X-Intercom-Version':
                        '3736ab533ad11d88d93cdef3fcef9a98a5724229',
                    'X-RateLimit-Limit': '83',
                    'X-RateLimit-Remaining': '0',
                    'X-RateLimit-Reset': '1522849880',
                    'X-Request-Id': 'b2i3mhcboc6pcbe33q80',
                    'X-Runtime': '0.037708',
                }
            );
        const client = new Client({
            usernameAuth: { username: 'foo', password: 'bar' },
        });
        try {
            const response = await client.admins.list();
            assert.strictEqual(response, null, 'Valid response');
        } catch (err) {
            assert.strictEqual(err.statusCode, 429);
            assert.strictEqual(err.body.request_id, 'b2i3mhcboc6pcbe33q80');
            assert.deepStrictEqual(err.body.errors, [
                {
                    code: 'rate_limit_exceeded',
                    message: 'Exceeded rate limit of 83 in 10_seconds',
                },
            ]);
            assert.deepStrictEqual(
                err.message,
                'Exceeded rate limit of 83 in 10_seconds'
            );
            assert.strictEqual(
                err.headers['x-request-id'],
                'b2i3mhcboc6pcbe33q80'
            );
            assert.strictEqual(err.headers['x-ratelimit-reset'], '1522849880');
        }
    });
});
