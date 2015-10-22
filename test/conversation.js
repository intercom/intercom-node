import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('conversations', function () {
  it('should be listed', function (done) {
    nock('https://api.intercom.io').get('/conversations').query({ foo: 'bar' }).reply(200, {});
    let client = new Client('foo', 'bar');
    client.conversations.list({ foo: 'bar' }, function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should find', function (done) {
    nock('https://api.intercom.io').get('/conversations/bar').query({ id: 'bar' }).reply(200, {});
    let client = new Client('foo', 'bar');
    client.conversations.find({ id: 'bar' }, function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should reply', function (done) {
    nock('https://api.intercom.io').post('/conversations/bar/reply', { id: 'bar', baz: 'bang' }).reply(200, {});
    let client = new Client('foo', 'bar');
    client.conversations.reply({ id: 'bar', baz: 'bang' }, function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should mark as read', function (done) {
    nock('https://api.intercom.io').put('/conversations/bar', { read: true }).reply(200, {});
    let client = new Client('foo', 'bar');
    client.conversations.markAsRead({ id: 'bar' }, function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
});
