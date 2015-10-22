import assert from 'assert';
import {Client} from '../lib';
var nock = require('nock');

describe('clients', function () {
  it('should be constructed', function () {
    const client = new Client('foo', 'bar');
    assert.equal('foo', client.appId);
    assert.equal('bar', client.appApiKey);
  });
  it('ping', function (done) {
    nock('https://api.intercom.io').get('/admins').reply(200, {});
    const client = new Client('foo', 'bar');
    client.ping(function (r) {
      assert.equal(200, r);
      done();
    });
  });
  it('paginate', function (done) {
    nock('https://api.intercom.io').get('/foo/bar/baz').query({ blue: 'red' }).reply(200, { foo: 'bar' });
    const client = new Client('foo', 'bar');
    const paginationObject = { next: 'https://api.intercom.io/foo/bar/baz?blue=red' };
    client.nextPage(paginationObject, function (r) {
      assert.deepEqual({foo: 'bar'}, r.body);
      done();
    });
  });
});
