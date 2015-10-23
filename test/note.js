import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('notes', function () {
  it('should be created', function (done) {
    nock('https://api.intercom.io').post('/notes', { foo: 'bar' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.notes.create({ foo: 'bar' }).then(function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should list', function (done) {
    nock('https://api.intercom.io').get('/notes').query({ foo: 'bar' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.notes.list({ foo: 'bar' }).then(function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should find notes by id', function (done) {
    nock('https://api.intercom.io').get('/notes/bar').reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.notes.find({ id: 'bar' }).then(function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
});
