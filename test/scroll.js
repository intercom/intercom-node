import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('scroll', () => {
  it('should get users with scroll', done => {
    nock('https://api.intercom.io').get('/users/scroll').reply(200, {
      type: 'user.list',
      scroll_param: '123_soleil',
      users: [
        {
          type: 'user',
          id: 'abc123',
          name: 'dummy user'
        }
      ]
    });
    nock('https://api.intercom.io').get('/users/scroll?scroll_param=123_soleil').reply(200, {
      type: 'user.list',
      scroll_param: '123_soleil',
      users: []
    });
    const client = new Client('foo', 'bar');
    client.users.scroll.each({}, function (res) {
      assert.equal(200, res.status);
      console.log(res.body.users.length);
      if (res.body.users.length === 0) {
        done();
      }
    });
  });
});
