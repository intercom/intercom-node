import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('events', () => {
  it('should be created', done => {
    nock('https://api.intercom.io').post('/events', { event_name: 'Foo', created_at: 1234, user_id: 'bar' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.events.create({
      event_name: 'Foo',
      created_at: 1234,
      user_id: 'bar'
    }).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should list by params', done => {
    nock('https://api.intercom.io').get('/events').query({ type: 'user', user_id: '1234' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.events.listBy({ type: 'user', user_id: '1234' }).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
});
