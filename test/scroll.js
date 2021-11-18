// TO-DO: Rethink testing framework
// Workaround for old gulp-mocha to use async functions
import '@babel/polyfill';
import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

const dummyUsers = {
  dummyUser:
  {
    type: 'user',
    id: 'abc123',
    name: 'dummy user'
  },
  dummierUser: {
    type: 'user',
    id: 'def456',
    name: 'dummier user'
  },
  dummiestUser:
  {
    type: 'user',
    id: 'ghj789',
    name: 'dummiest user'
  }
};


describe('scroll', () => {
  it('should get users with scroll', async () => {
    nock('https://api.intercom.io').get('/users/scroll').reply(200, {
      type: 'user.list',
      scroll_param: '123_soleil',
      users: [
        dummyUsers.dummyUser
      ]
    });

    nock('https://api.intercom.io').get('/users/scroll?scroll_param=123_soleil').reply(200, {
      type: 'user.list',
      scroll_param: '123_soleil',
      users: []
    });

    const client = new Client('foo', 'bar');

    const response = await client.users.scroll.each({});

    assert.equal(1, response.length);
    assert.deepStrictEqual(dummyUsers.dummyUser, response[0]);
  });

  it('should return a promise that resolves at the end of the scroll', async () => {
    nock('https://api.intercom.io').get('/users/scroll').reply(200, {
      type: 'user.list',
      scroll_param: '123_soleil',
      users: [
        dummyUsers.dummyUser,
      ]
    });

    nock('https://api.intercom.io').get('/users/scroll?scroll_param=123_soleil').reply(200, {
      type: 'user.list',
      scroll_param: '456_crimea',
      users: [ dummyUsers.dummierUser,  dummyUsers.dummiestUser]
    });

    nock('https://api.intercom.io').get('/users/scroll?scroll_param=456_crimea').reply(200, {
      type: 'user.list',
      scroll_param: '456_crimea',
      users: []
    });

    const client = new Client('foo', 'bar');

    const response = await client.users.scroll.each({});

    assert.equal(3, response.length);
    assert.deepStrictEqual([dummyUsers.dummierUser, dummyUsers.dummiestUser, dummyUsers.dummyUser], response);
  });
});
