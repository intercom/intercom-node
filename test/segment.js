import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('segments', () => {
  it('should be listed', done => {
    nock('https://api.intercom.io').get('/segments').reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.segments.list().then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('find by id', done => {
    nock('https://api.intercom.io').get('/segments/baz').reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.segments.find({ id: 'baz' }).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
});
