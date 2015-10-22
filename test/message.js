import assert from 'assert';
import {Client} from '../lib';
var nock = require('nock');

describe('messages', function () {
  it('should be created', function (done) {
    nock('https://api.intercom.io').post('/messages', { message_type: 'foo' }).reply(200, {});
    const client = new Client('foo', 'bar');
    client.messages.create({ message_type: 'foo' }, function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
});
