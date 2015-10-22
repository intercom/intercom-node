import assert from 'assert';
import {Client} from '../lib';
var nock = require('nock');

describe('tags', () => {
  it('should be created/updated', done => {
    nock('https://api.intercom.io').post('/tags').reply(200, {});
    let client = new Client('foo', 'bar');
    client.tags.create({ name: 'haven' }, r => {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should tag users and companies', done => {
    nock('https://api.intercom.io').post('/tags', { name: 'haven', users: [{ id: '5534534' }] }).reply(200, {});
    let client = new Client('foo', 'bar');
    client.tags.tag({ name: 'haven', users: [{ id: '5534534' }] }, r => {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should untag users', done => {
    nock('https://api.intercom.io').post('/tags', { name: 'haven', users: [{ id: '5534534', untag: true }] }).reply(200, {});
    let client = new Client('foo', 'bar');
    client.tags.untag({ name: 'haven', users: [{ id: '5534534' }] }, r => {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should untag companies', done => {
    nock('https://api.intercom.io').post('/tags', { name: 'haven', companies: [{ id: '5534534', untag: true }] }).reply(200, {});
    let client = new Client('foo', 'bar');
    client.tags.untag({ name: 'haven', companies: [{ id: '5534534' }] }, r => {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should delete tags', done => {
    nock('https://api.intercom.io').delete('/tags/baz').reply(200, {});
    let client = new Client('foo', 'bar');
    client.tags.delete({ id: 'baz' }, r => {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should list', done => {
    nock('https://api.intercom.io').get('/tags').reply(200, {});
    let client = new Client('foo', 'bar');
    client.tags.list(r => {
      assert.equal(200, r.status);
      done();
    });
  });
});
