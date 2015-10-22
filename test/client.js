import assert from 'assert';
import {Client} from '../lib';

describe('clients', function () {
  it('should callback with errors', function (done) {
    const callback = function (err, d) {
      assert.equal('error.list', err.body.type);
      assert.equal(null, d);
      done();
    };
    const client = new Client('foo', 'bar');
    client.callback(callback, { body: { type: 'error.list' }});
  });
  it('should not crash if the callback is missing', function () {
    const client = new Client('foo', 'bar');
    assert.doesNotThrow(function () {
      client.callback();
    });
  });
  it('should construct with two fields', function () {
    const client = new Client('foo', 'bar');
    assert.equal('foo', client.appId);
    assert.equal('bar', client.appApiKey);
  });
  it('should construct with an object', function () {
    const client = new Client({ appId: 'foo', appApiKey: 'bar' });
    assert.equal('foo', client.appId);
    assert.equal('bar', client.appApiKey);
  });
  it('should throw if no credentials found', function () {
    assert.throws(function () {
      const client = new Client('baz');
      console.log(client.appId);
    }, /Could not construct a client with those parameters/);
  });
});
