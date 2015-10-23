import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('clients', () => {
  it('should be constructed', () => {
    const client = new Client('foo', 'bar');
    assert.equal('foo', client.appId);
    assert.equal('bar', client.appApiKey);
  });
  it('ping', done => {
    nock('https://api.intercom.io').get('/admins').reply(200, {});
    const client = new Client('foo', 'bar');
    client.ping(r => {
      assert.equal(200, r);
      done();
    });
  });
  it('paginate', done => {
    nock('https://api.intercom.io').get('/foo/bar/baz').query({ blue: 'red' }).reply(200, { foo: 'bar' });
    const client = new Client('foo', 'bar').usePromises();
    const paginationObject = { next: 'https://api.intercom.io/foo/bar/baz?blue=red' };
    client.nextPage(paginationObject).then(r => {
      assert.deepEqual({foo: 'bar'}, r.body);
      done();
    });
  });
});
