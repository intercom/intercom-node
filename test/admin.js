import assert from 'assert';
import {Client} from '../lib';
var nock = require('nock');

describe('admins', function () {
  it('should be listed', function (done) {
    nock('https://api.intercom.io').get('/admins').reply(200, {});
    const client = new Client('foo', 'bar');
    client.admins.list(function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
});
