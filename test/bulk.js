// TO-DO: Rethink testing framework
// Workaround for old gulp-mocha to use async functions
import '@babel/polyfill';

import assert from 'assert';
import { Client } from '../lib';
import nock from 'nock';

describe('bulk', () => {
    it('should send bulk users', async () => {
        nock('https://api.intercom.io')
            .post('/bulk/users', {
                items: [
                    {
                        method: 'post',
                        data_type: 'user',
                        data: {
                            email: 'wash@serenity.io',
                        },
                    },
                    {
                        method: 'post',
                        data_type: 'user',
                        data: {
                            email: 'mal@serenity.io',
                        },
                    },
                ],
            })
            .reply(200, {});

        const client = new Client('foo', 'bar');
        const response = await client.users.bulk([
            { create: { email: 'wash@serenity.io' } },
            { create: { email: 'mal@serenity.io' } },
        ]);

        assert.deepStrictEqual({}, response);
    });
    it('should send bulk events', async () => {
        nock('https://api.intercom.io')
            .post('/bulk/events', {
                items: [
                    {
                        method: 'post',
                        data_type: 'event',
                        data: {
                            foo: 'bar',
                        },
                    },
                    {
                        method: 'post',
                        data_type: 'event',
                        data: {
                            bar: 'baz',
                        },
                    },
                ],
            })
            .reply(200, {});

        const client = new Client('foo', 'bar');
        const response = await client.events.bulk([
            { create: { foo: 'bar' } },
            { create: { bar: 'baz' } },
        ]);

        assert.deepStrictEqual({}, response);
    });
});
