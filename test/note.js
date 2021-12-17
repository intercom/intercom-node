// TO-DO: Rethink testing framework
// Workaround for old gulp-mocha to use async functions
import '@babel/polyfill';

import assert from 'assert';
import { Client } from '../lib';
import nock from 'nock';

describe('notes', () => {
    it('should be created', async () => {
        nock('https://api.intercom.io')
            .post('/notes', { foo: 'bar' })
            .reply(200, {});
        const client = new Client('foo', 'bar');
        const response = await client.notes.create({ foo: 'bar' });

        assert.deepStrictEqual({}, response);
    });
    it('should list', async () => {
        nock('https://api.intercom.io')
            .get('/notes')
            .query({ foo: 'bar' })
            .reply(200, {});
        const client = new Client('foo', 'bar');
        const response = await client.notes.list({ foo: 'bar' });

        assert.deepStrictEqual({}, response);
    });
    it('should find notes by id', async () => {
        nock('https://api.intercom.io').get('/notes/bar').reply(200, {});
        const client = new Client('foo', 'bar');
        const response = await client.notes.find({ id: 'bar' });

        assert.deepStrictEqual({}, response);
    });
});
