import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('tags', function () {
  it('should be created/updated', function (done) {
    nock('https://api.intercom.io').post('/tags').reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.tags.create({ name: 'haven' }).then(function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should tag users and companies', function (done) {
    nock('https://api.intercom.io').post('/tags', { name: 'haven', users: [{ id: '5534534' }] }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.tags.tag({ name: 'haven', users: [{ id: '5534534' }] }).then(function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should untag users', function (done) {
    nock('https://api.intercom.io').post('/tags', { name: 'haven', users: [{ id: '5534534', untag: true }] }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.tags.untag({ name: 'haven', users: [{ id: '5534534' }] }).then(function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should untag companies', function (done) {
    nock('https://api.intercom.io').post('/tags', { name: 'haven', companies: [{ id: '5534534', untag: true }] }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.tags.untag({ name: 'haven', companies: [{ id: '5534534' }] }).then(function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should delete tags', function (done) {
    nock('https://api.intercom.io').delete('/tags/baz').reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.tags.delete({ id: 'baz' }).then(function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should list', function (done) {
    nock('https://api.intercom.io').get('/tags').reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.tags.list().then(function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
});
