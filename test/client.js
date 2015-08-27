import assert from 'assert';
import {Client} from '../lib';

describe('users', function () {
  it('should callback with errors', function (done) {
    let callback = function (err, d) {
      assert.equal('error.list', err.body.type);
      assert.equal(null, d);
      done();
    };
    let client = new Client('foo', 'bar');
    client.callback(callback, { body: { type: 'error.list' }});
  });
  it('should construct with two fields', function () {
    let client = new Client('foo', 'bar');
    assert.equal('foo', client.appId);
    assert.equal('bar', client.appApiKey);
  });
  it('should construct with an object', function () {
    let client = new Client({ appId: 'foo', appApiKey: 'bar' });
    assert.equal('foo', client.appId);
    assert.equal('bar', client.appApiKey);
  });
  it('should throw if no credentials found', function () {
    assert.throws(function () {
      let client = new Client('baz');
      console.log(client.appId);
    }, /Could not construct a client with those parameters/);
  });
});
