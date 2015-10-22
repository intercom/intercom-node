import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('admins', function () {
  it('should be listed', function (done) {
    nock('https://api.intercom.io').get('/admins').reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.admins.list().then(function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
});
