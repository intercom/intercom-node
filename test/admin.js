import assert from 'assert';
import {Client} from '../lib';
var nock = require('nock');

describe('admins', () => {
  it('should be listed', done => {
    nock('https://api.intercom.io').get('/admins').reply(200, {});
    let client = new Client('foo', 'bar');
    client.admins.list(r => {
      assert.equal(200, r.status);
      done();
    });
  });
});
