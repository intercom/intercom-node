// TO-DO: Rethink testing framework
// Workaround for old gulp-mocha to use async functions
import '@babel/polyfill';

import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('tags', () => {
  it('should be created/updated', async () => {
    nock('https://api.intercom.io').post('/tags').reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.tags.create({ name: 'haven' });

    assert.equal(200, response.status);
    assert.deepStrictEqual({}, response.data);
  });
  it('should tag users and companies', async () => {
    nock('https://api.intercom.io').post('/tags', { name: 'haven', users: [{ id: '5534534' }] }).reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.tags.tag({ name: 'haven', users: [{ id: '5534534' }] });

    assert.equal(200, response.status);
    assert.deepStrictEqual({}, response.data);
  });
  it('should untag users', async () => {
    nock('https://api.intercom.io').post('/tags', { name: 'haven', users: [{ id: '5534534', untag: true }] }).reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.tags.untag({ name: 'haven', users: [{ id: '5534534' }] });

    assert.equal(200, response.status);
    assert.deepStrictEqual({}, response.data);
  });
  it('should untag companies', async () => {
    nock('https://api.intercom.io').post('/tags', { name: 'haven', companies: [{ id: '5534534', untag: true }] }).reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.tags.untag({ name: 'haven', companies: [{ id: '5534534' }] });

    assert.equal(200, response.status);
    assert.deepStrictEqual({}, response.data);
  });
  it('should delete tags', async () => {
    nock('https://api.intercom.io').delete('/tags/baz').reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.tags.delete({ id: 'baz' });

    assert.equal(200, response.status);
    assert.deepStrictEqual({}, response.data);
  });
  it('should list', async () => {
    nock('https://api.intercom.io').get('/tags').reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.tags.list();

    assert.equal(200, response.status);
    assert.deepStrictEqual({}, response.data);
  });
});
