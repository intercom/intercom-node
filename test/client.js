import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('clients', () => {
  it('should resolve promises', done => {
    nock('https://api.intercom.io').get('/users').reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    assert.equal(true, client.promises);
    client.users.list().then(r => {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should reject promises', done => {
    nock('https://api.intercom.io').get('/users').reply(200, {type: 'error.list'});
    const client = new Client('foo', 'bar').usePromises();
    assert.equal(true, client.promises);
    client.users.list().catch(err => {
      assert.equal('error.list', err.body.type);
      done();
    });
  });
  it('should callback with errors', done => {
    const callback = function (err, d) {
      assert.equal('error.list', err.body.type);
      assert.equal(null, d);
      done();
    };
    const client = new Client('foo', 'bar');
    client.callback(callback, { body: { type: 'error.list' }});
  });
  it('should not crash if the callback is missing', () => {
    const client = new Client('foo', 'bar');
    assert.doesNotThrow(() => {
      client.callback();
    });
  });
  it('should construct with two fields', () => {
    const client = new Client('foo', 'bar');
    assert.equal('foo', client.appId);
    assert.equal('bar', client.appApiKey);
  });
  it('should construct with an object', () => {
    const client = new Client({ appId: 'foo', appApiKey: 'bar' });
    assert.equal('foo', client.appId);
    assert.equal('bar', client.appApiKey);
  });
  it('should throw if no credentials found', () => {
    assert.throws(() => {
      const client = new Client('baz');
      console.log(client.appId);
    }, /Could not construct a client with those parameters/);
  });
});
