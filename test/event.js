// TO-DO: Rethink testing framework
// Workaround for old gulp-mocha to use async functions
import '@babel/polyfill';

import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('events', () => {
  it('should be created', async () => {
    nock('https://api.intercom.io').post('/events', { event_name: 'Foo', created_at: 1234, user_id: 'bar' }).reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.events.create({
      event_name: 'Foo',
      created_at: 1234,
      user_id: 'bar'
    });

    assert.equal(200, response.status);
    assert.deepStrictEqual({}, response.data);
  });
  it('should list by params', async () => {
    nock('https://api.intercom.io').get('/events').query({ type: 'user', user_id: '1234' }).reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.events.listBy({ type: 'user', user_id: '1234' });

    assert.equal(200, response.status);
    assert.deepStrictEqual({}, response.data);
  });
});
