import assert from 'assert';
import {Client} from '../lib';
var nock = require('nock');

describe('notes', function () {
  it('should be created', function (done) {
    nock('https://api.intercom.io').post('/notes', { foo: 'bar' }).reply(200, {});
    let client = new Client('foo', 'bar');
    client.notes.create({ foo: 'bar' }, function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should list', function (done) {
    nock('https://api.intercom.io').get('/notes').query({ foo: 'bar' }).reply(200, {});
    let client = new Client('foo', 'bar');
    client.notes.list({ foo: 'bar' }, function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should find notes by id', function (done) {
    nock('https://api.intercom.io').get('/notes/bar').reply(200, {});
    let client = new Client('foo', 'bar');
    client.notes.find({ id: 'bar' }, function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
});
