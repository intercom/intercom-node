import assert from 'assert';
import {Client} from '../lib';
var nock = require('nock');

describe('clients', function () {
  it('should be constructed', function () {
    let client = new Client('foo', 'bar');
    assert.equal('foo', client.appId);
    assert.equal('bar', client.appApiKey);
  });
  it('ping', function (done) {
    nock('https://api.intercom.io').get('/admins').reply(200, {});
    let client = new Client('foo', 'bar');
    client.ping(function (r) {
      assert.equal(200, r);
      done();
    });
  });
});
