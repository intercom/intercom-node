import assert from 'assert';
import {Client} from '../lib';
var nock = require('nock');

describe('segments', () => {
  it('should be listed', done => {
    nock('https://api.intercom.io').get('/segments').reply(200, {});
    let client = new Client('foo', 'bar');
    client.segments.list(r => {
      assert.equal(200, r.status);
      done();
    });
  });
  it('find by id', done => {
    nock('https://api.intercom.io').get('/segments/baz').reply(200, {});
    let client = new Client('foo', 'bar');
    client.segments.find({ id: 'baz' }, r => {
      assert.equal(200, r.status);
      done();
    });
  });
});
