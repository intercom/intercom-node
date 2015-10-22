import assert from 'assert';
import {Client} from '../lib';
var nock = require('nock');

describe('conversations', () => {
  it('should be listed', done => {
    nock('https://api.intercom.io').get('/conversations').query({ foo: 'bar' }).reply(200, {});
    let client = new Client('foo', 'bar');
    client.conversations.list({ foo: 'bar' }, r => {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should find', done => {
    nock('https://api.intercom.io').get('/conversations/bar').query({ id: 'bar' }).reply(200, {});
    let client = new Client('foo', 'bar');
    client.conversations.find({ id: 'bar' }, r => {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should reply', done => {
    nock('https://api.intercom.io').post('/conversations/bar/reply', { id: 'bar', baz: 'bang' }).reply(200, {});
    let client = new Client('foo', 'bar');
    client.conversations.reply({ id: 'bar', baz: 'bang' }, r => {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should mark as read', done => {
    nock('https://api.intercom.io').put('/conversations/bar', { read: true }).reply(200, {});
    let client = new Client('foo', 'bar');
    client.conversations.markAsRead({ id: 'bar' }, r => {
      assert.equal(200, r.status);
      done();
    });
  });
});
