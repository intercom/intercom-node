import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('users', function () {
  it('should be created', function (done) {
    nock('https://api.intercom.io').post('/users', { email: 'foo@bar.com' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.users.create({ email: 'foo@bar.com' }).then(function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should list', function (done) {
    nock('https://api.intercom.io').get('/users').reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.users.list().then(function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should list by params', function (done) {
    nock('https://api.intercom.io').get('/users').query({ tag_id: '1234' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.users.listBy({ tag_id: '1234' }).then(function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should find users by id', function (done) {
    nock('https://api.intercom.io').get('/users/baz').reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.users.find({ id: 'baz' }).then(function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should delete users by id', function (done) {
    nock('https://api.intercom.io').delete('/users/baz').reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.users.delete({ id: 'baz' }).then(function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
});
