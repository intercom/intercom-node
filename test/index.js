import assert from 'assert';
import {Client} from '../lib';
var nock = require('nock');

describe('clients', () => {
  it('should be constructed', () => {
    let client = new Client('foo', 'bar');
    assert.equal('foo', client.appId);
    assert.equal('bar', client.appApiKey);
  });
  it('ping', done => {
    nock('https://api.intercom.io').get('/admins').reply(200, {});
    let client = new Client('foo', 'bar');
    client.ping(r => {
      assert.equal(200, r);
      done();
    });
  });
  it('paginate', done => {
    nock('https://api.intercom.io').get('/foo/bar/baz').query({ blue: 'red' }).reply(200, { foo: 'bar' });
    let client = new Client('foo', 'bar');
    let paginationObject = { next: 'https://api.intercom.io/foo/bar/baz?blue=red' };
    client.nextPage(paginationObject, r => {
      assert.deepEqual({foo: 'bar'}, r.body);
      done();
    });
  });
});
