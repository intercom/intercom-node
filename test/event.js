import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('events', function () {
  it('should be created', function (done) {
    nock('https://api.intercom.io').post('/events', { event_name: 'Foo', created_at: 1234, user_id: 'bar' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.events.create({
      event_name: 'Foo',
      created_at: 1234,
      user_id: 'bar'
    }).then(function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
});
