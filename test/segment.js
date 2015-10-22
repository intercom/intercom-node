import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('segments', function () {
  it('should be listed', function (done) {
    nock('https://api.intercom.io').get('/segments').reply(200, {});
    let client = new Client('foo', 'bar');
    client.segments.list(function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
  it('find by id', function (done) {
    nock('https://api.intercom.io').get('/segments/baz').reply(200, {});
    let client = new Client('foo', 'bar');
    client.segments.find({ id: 'baz' }, function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
});
