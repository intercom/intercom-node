import assert from 'assert';
import {Client} from '../lib';
var nock = require('nock');

describe('bulk', () => {
  it('should send bulk users', done => {
    nock('https://api.intercom.io').post('/bulk/users', {
      items: [
        {
          method: 'post',
          data_type: 'user',
          data: {
            email: 'wash@serenity.io'
          }
        },
        {
          method: 'post',
          data_type: 'user',
          data: {
            email: 'mal@serenity.io'
          }
        }
      ]
    }).reply(200, {});
    let client = new Client('foo', 'bar');
    client.users.bulk([
      { create: { email: 'wash@serenity.io' }},
      { create: { email: 'mal@serenity.io'}}
    ], r => {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should send bulk events', done => {
    nock('https://api.intercom.io').post('/bulk/events', {
      items: [
        {
          method: 'post',
          data_type: 'event',
          data: {
            foo: 'bar'
          }
        },
        {
          method: 'post',
          data_type: 'event',
          data: {
            bar: 'baz'
          }
        }
      ]
    }).reply(200, {});
    let client = new Client('foo', 'bar');
    client.events.bulk([
      { create: { foo: 'bar' }},
      { create: { bar: 'baz'}}
    ], r => {
      assert.equal(200, r.status);
      done();
    });
  });
});
