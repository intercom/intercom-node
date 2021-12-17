// TO-DO: Rethink testing framework
// Workaround for old gulp-mocha to use async functions
import '@babel/polyfill';

import assert from 'assert';
import { Client } from '../lib';
import nock from 'nock';

describe('segments', () => {
    it('should be listed', async () => {
        nock('https://api.intercom.io').get('/segments').reply(200, {});
        const client = new Client('foo', 'bar');
        const response = await client.segments.list();

        assert.deepStrictEqual({}, response);
    });
    it('find by id', async () => {
        nock('https://api.intercom.io').get('/segments/baz').reply(200, {});
        const client = new Client('foo', 'bar');
        const response = await client.segments.find({ id: 'baz' });

        assert.deepStrictEqual({}, response);
    });
});
