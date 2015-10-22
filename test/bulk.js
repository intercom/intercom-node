import assert from 'assert';
import {Client} from '../lib';
var nock = require('nock');

describe('bulk', function () {
  it('should send bulk users', function (done) {
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
    const client = new Client('foo', 'bar');
    client.users.bulk([
      { create: { email: 'wash@serenity.io' }},
      { create: { email: 'mal@serenity.io'}}
    ], function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should send bulk events', function (done) {
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
    const client = new Client('foo', 'bar');
    client.events.bulk([
      { create: { foo: 'bar' }},
      { create: { bar: 'baz'}}
    ], function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
});
