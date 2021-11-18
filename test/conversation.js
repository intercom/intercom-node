// TO-DO: Rethink testing framework
// Workaround for old gulp-mocha to use async functions
import '@babel/polyfill';

import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('conversations', () => {
  it('should be listed', async () => {
    nock('https://api.intercom.io').get('/conversations').query({ foo: 'bar' }).reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.conversations.list({ foo: 'bar' });

    assert.equal(200, response.status);
    assert.deepStrictEqual({}, response.data);
  });
  it('should find', async () => {
    nock('https://api.intercom.io').get('/conversations/bar').query({ id: 'bar' }).reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.conversations.find({ id: 'bar' });

    assert.equal(200, response.status);
    assert.deepStrictEqual({}, response.data);
  });
  it('should reply', async () => {
    nock('https://api.intercom.io').post('/conversations/bar/reply', { id: 'bar', baz: 'bang' }).reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.conversations.reply({ id: 'bar', baz: 'bang' });

    assert.equal(200, response.status);
    assert.deepStrictEqual({}, response.data);
  });
  it('should mark as read', async () => {
    nock('https://api.intercom.io').put('/conversations/bar', { read: true }).reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.conversations.markAsRead({ id: 'bar' });

    assert.equal(200, response.status);
    assert.deepStrictEqual({}, response.data);
  });
});
