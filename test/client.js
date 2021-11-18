// TO-DO: Rethink testing framework
// Workaround for old gulp-mocha to use async functions
import '@babel/polyfill';

import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('clients', () => {
  it('should resolve promises', async () => {
    nock('https://api.intercom.io').get('/admins').reply(200, {});
    const client = new Client('foo', 'bar');

    const response = await client.admins.list();

    assert.equal(200, response.status);
    assert.deepStrictEqual({}, response.data);
  });
  it('should reject promises', async () => {
    nock('https://api.intercom.io').get('/admins').reply(200, {type: 'error.list'});
    const client = new Client('foo', 'bar');

    try {
      await client.admins.list();
    } catch (err) {
      assert.deepStrictEqual({ type: 'error.list' }, err.body);
    }
  });
  it('should reject promises with error objects', async () => {
    nock('https://api.intercom.io').get('/admins').reply(200, {type: 'error.list'});
    const client = new Client('foo', 'bar');

    try {
      await client.admins.list();
    } catch (err) {
      assert.equal(true, err instanceof Error);
    }
  });
  it('should construct with two fields', () => {
    const client = new Client('foo', 'bar');
    assert.equal('foo', client.usernamePart);
    assert.equal('bar', client.passwordPart);
  });
  it('should construct with an object', () => {
    const client = new Client({ appId: 'foo', appApiKey: 'bar' });
    assert.equal('foo', client.usernamePart);
    assert.equal('bar', client.passwordPart);
  });
  it('should construct with an object containing an OAuth token', () => {
    const client = new Client({ token: 'foo' });
    assert.equal('foo', client.usernamePart);
    assert.equal('', client.passwordPart);
  });
  it('should throw if no credentials found', () => {
    assert.throws(() => {
      const client = new Client('baz');
      console.log(client.usernamePart);
    }, /Could not construct a client with those parameters/);
  });
});
