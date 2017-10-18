import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('conversations', () => {
  it('should be listed', done => {
    nock('https://api.intercom.io').get('/conversations').query({ foo: 'bar' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.conversations.list({ foo: 'bar' }).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should find', done => {
    nock('https://api.intercom.io').get('/conversations/bar').query({ id: 'bar' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.conversations.find({ id: 'bar' }).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should reply', done => {
    nock('https://api.intercom.io').post('/conversations/bar/reply', { id: 'bar', baz: 'bang' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.conversations.reply({ id: 'bar', baz: 'bang' }).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should mark as read', done => {
    nock('https://api.intercom.io').put('/conversations/bar', { read: true }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.conversations.markAsRead({ id: 'bar' }).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
});
