import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('segments', function () {
  it('should be listed', function (done) {
    nock('https://api.intercom.io').get('/segments').reply(200, {});
    let client = new Client('foo', 'bar').usePromises();
    client.segments.list().then(function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
  it('find by id', function (done) {
    nock('https://api.intercom.io').get('/segments/baz').reply(200, {});
    let client = new Client('foo', 'bar').usePromises();
    client.segments.find({ id: 'baz' }).then(function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
});
