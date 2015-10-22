import assert from 'assert';
import {Client} from '../lib';

describe('clients', () => {
  it('should callback with errors', done => {
    let callback = (err, d) => {
      assert.equal('error.list', err.body.type);
      assert.equal(null, d);
      done();
    };
    let client = new Client('foo', 'bar');
    client.callback(callback, { body: { type: 'error.list' }});
  });
  it('should not crash if the callback is missing', () => {
    let client = new Client('foo', 'bar');
    assert.doesNotThrow(() => {
      client.callback();
    });
  });
  it('should construct with two fields', () => {
    let client = new Client('foo', 'bar');
    assert.equal('foo', client.appId);
    assert.equal('bar', client.appApiKey);
  });
  it('should construct with an object', () => {
    let client = new Client({ appId: 'foo', appApiKey: 'bar' });
    assert.equal('foo', client.appId);
    assert.equal('bar', client.appApiKey);
  });
  it('should throw if no credentials found', () => {
    assert.throws(() => {
      let client = new Client('baz');
      console.log(client.appId);
    }, /Could not construct a client with those parameters/);
  });
});
