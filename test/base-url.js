import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('base-url', () => {
  it('should be able to change base url', done => {
    nock('http://local.test-server.com').get('/admins').reply(200, {});
    const client = new Client('foo', 'bar')
      .usePromises()
      .useBaseUrl('http://local.test-server.com');

    client.admins.list().then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
});
