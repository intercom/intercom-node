import assert from 'assert';
import {Client} from '../lib';
var nock = require('nock');

describe('messages', () => {
  it('should be created', done => {
    nock('https://api.intercom.io').post('/messages', { message_type: 'foo' }).reply(200, {});
    let client = new Client('foo', 'bar');
    client.messages.create({ message_type: 'foo' }, r => {
      assert.equal(200, r.status);
      done();
    });
  });
});
