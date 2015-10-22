import assert from 'assert';
import {Client} from '../lib';
var nock = require('nock');

describe('conversations', function () {
  it('should be listed', function (done) {
    nock('https://api.intercom.io').get('/conversations').query({ foo: 'bar' }).reply(200, {});
    let client = new Client('foo', 'bar').usePromises();
    client.conversations.list({ foo: 'bar' }).then(function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should find', function (done) {
    nock('https://api.intercom.io').get('/conversations/bar').query({ id: 'bar' }).reply(200, {});
    let client = new Client('foo', 'bar').usePromises();
    client.conversations.find({ id: 'bar' }).then(function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should reply', function (done) {
    nock('https://api.intercom.io').post('/conversations/bar/reply', { id: 'bar', baz: 'bang' }).reply(200, {});
    let client = new Client('foo', 'bar').usePromises();
    client.conversations.reply({ id: 'bar', baz: 'bang' }).then(function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should mark as read', function (done) {
    nock('https://api.intercom.io').put('/conversations/bar', { read: true }).reply(200, {});
    let client = new Client('foo', 'bar').usePromises();
    client.conversations.markAsRead({ id: 'bar' }).then(function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
});
