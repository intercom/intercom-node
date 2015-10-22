import assert from 'assert';
import {Client} from '../lib';
var nock = require('nock');

describe('users', () => {
  it('should be created', done => {
    nock('https://api.intercom.io').post('/users', { email: 'foo@bar.com' }).reply(200, {});
    let client = new Client('foo', 'bar');
    client.users.create({ email: 'foo@bar.com' }, r => {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should list', done => {
    nock('https://api.intercom.io').get('/users').reply(200, {});
    let client = new Client('foo', 'bar');
    client.users.list(r => {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should list by params', done => {
    nock('https://api.intercom.io').get('/users').query({ tag_id: '1234' }).reply(200, {});
    let client = new Client('foo', 'bar');
    client.users.listBy({ tag_id: '1234' }, r => {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should find users by id', done => {
    nock('https://api.intercom.io').get('/users/baz').reply(200, {});
    let client = new Client('foo', 'bar');
    client.users.find({ id: 'baz' }, r => {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should delete users by id', done => {
    nock('https://api.intercom.io').delete('/users/baz').reply(200, {});
    let client = new Client('foo', 'bar');
    client.users.delete({ id: 'baz' }, r => {
      assert.equal(200, r.status);
      done();
    });
  });
});
