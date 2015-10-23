import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('admins', () => {
  it('should be listed', done => {
    nock('https://api.intercom.io').get('/admins').reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.admins.list().then(r => {
      assert.equal(200, r.status);
      done();
    });
  });
});
