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
    let client = new Client('foo', 'bar');
    client.users.bulk([
      { create: { email: 'wash@serenity.io' }},
      { create: { email: 'mal@serenity.io'}}
    ], function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
});
