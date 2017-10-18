import Bluebird from 'bluebird';
import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('scroll', () => {
  before(function () {
    nock('https://api.intercom.io').get('/users/scroll').times(3).reply(200, {
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

    nock('https://api.intercom.io').get('/users/scroll?scroll_param=123_soleil').times(3).reply(200, {
      type: 'user.list',
      scroll_param: '123_soleil',
      users: []
    });
  });

  it('should get users with scroll', done => {
    const client = new Client('foo', 'bar');

    client.users.scroll.each({}, function (res) {
      assert.equal(200, res.statusCode);
      if (res.body.users.length === 0) {
        done();
      }
    });
  });

  it('should return a promise that resolves at the end of the scroll', done => {
    const client = new Client('foo', 'bar');
    let nbCalls = 0;

    const promise = client.users.scroll.each({}, function () {
      nbCalls++;
    });

    promise.then(() => {
      assert.equal(2, nbCalls);

      done();
    });
  });

  it('should wait for promises returned by the callback before scrolling', done => {
    const client = new Client('foo', 'bar');
    let nbCalls = 0;

    client.users.scroll.each({}, function (res) {
      nbCalls++;

      return res.body.users.length === 0 ?
        done() :
        new Bluebird((resolve) => {
          setTimeout(() => {
            assert.equal(1, nbCalls, 'hasn\'t re-scrolled before resolve');
            resolve();
          }, 500);
        });
    });
  });
});
