import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('tags', () => {
  it('should be created/updated', done => {
    nock('https://api.intercom.io').post('/tags').reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.tags.create({ name: 'haven' }).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should tag users and companies', done => {
    nock('https://api.intercom.io').post('/tags', { name: 'haven', users: [{ id: '5534534' }] }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.tags.tag({ name: 'haven', users: [{ id: '5534534' }] }).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should untag users', done => {
    nock('https://api.intercom.io').post('/tags', { name: 'haven', users: [{ id: '5534534', untag: true }] }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.tags.untag({ name: 'haven', users: [{ id: '5534534' }] }).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should untag companies', done => {
    nock('https://api.intercom.io').post('/tags', { name: 'haven', companies: [{ id: '5534534', untag: true }] }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.tags.untag({ name: 'haven', companies: [{ id: '5534534' }] }).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should delete tags', done => {
    nock('https://api.intercom.io').delete('/tags/baz').reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.tags.delete({ id: 'baz' }).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should list', done => {
    nock('https://api.intercom.io').get('/tags').reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.tags.list().then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
});
