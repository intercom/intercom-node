import assert from 'assert';
import {Client} from '../lib';
var nock = require('nock');

describe('users', function () {
  it('should be created', function (done) {
    nock('https://api.intercom.io').post('/users', { email: 'foo@bar.com' }).reply(200, {});
    const client = new Client('foo', 'bar');
    client.users.create({ email: 'foo@bar.com' }, function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should list', function (done) {
    nock('https://api.intercom.io').get('/users').reply(200, {});
    const client = new Client('foo', 'bar');
    client.users.list(function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should list by params', function (done) {
    nock('https://api.intercom.io').get('/users').query({ tag_id: '1234' }).reply(200, {});
    const client = new Client('foo', 'bar');
    client.users.listBy({ tag_id: '1234' }, function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should find users by id', function (done) {
    nock('https://api.intercom.io').get('/users/baz').reply(200, {});
    const client = new Client('foo', 'bar');
    client.users.find({ id: 'baz' }, function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should delete users by id', function (done) {
    nock('https://api.intercom.io').delete('/users/baz').reply(200, {});
    const client = new Client('foo', 'bar');
    client.users.delete({ id: 'baz' }, function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
});
