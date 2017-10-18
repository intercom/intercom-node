import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('admins', () => {
  it('should be listed', done => {
    nock('https://api.intercom.io').get('/admins').reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.admins.list().then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should find current admin', done => {
    nock('https://api.intercom.io').get('/me').reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.admins.me().then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should find admins by id', done => {
    nock('https://api.intercom.io').get('/admins/baz').reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.admins.find('baz').then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
});
