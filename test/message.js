import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('messages', () => {
  it('should be created', done => {
    nock('https://api.intercom.io').post('/messages', { message_type: 'foo' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.messages.create({ message_type: 'foo' }).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
});
