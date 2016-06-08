import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('users', () => {
  it('should be created', done => {
    nock('https://api.intercom.io').post('/users', { email: 'foo@bar.com' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.users.create({ email: 'foo@bar.com' }).then(r => {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should list', done => {
    nock('https://api.intercom.io').get('/users').reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.users.list({}).then(r => {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should list by params', done => {
    nock('https://api.intercom.io').get('/users').query({ tag_id: '1234' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.users.listBy({ tag_id: '1234' }).then(r => {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should find users by id', done => {
    nock('https://api.intercom.io').get('/users/baz').reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.users.find({ id: 'baz' }).then(r => {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should find users by user_id', done => {
    nock('https://api.intercom.io').get('/users').query({ user_id: 'foo' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.users.find({ user_id: 'foo' }).then(r => {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should find users by email', done => {
    nock('https://api.intercom.io').get('/users').query({ email: 'foo' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.users.find({ email: 'foo' }).then(r => {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should delete users by id', done => {
    nock('https://api.intercom.io').delete('/users/baz').reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.users.delete({ id: 'baz' }).then(r => {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should delete users by user_id', done => {
    nock('https://api.intercom.io').delete('/users').query({ user_id: 'foo' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.users.delete({ user_id: 'foo' }).then(r => {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should delete users by email', done => {
    nock('https://api.intercom.io').delete('/users').query({ email: 'foo' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.users.delete({ email: 'foo' }).then(r => {
      assert.equal(200, r.status);
      done();
    });
  });
});
