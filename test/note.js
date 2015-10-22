import assert from 'assert';
import {Client} from '../lib';
var nock = require('nock');

describe('notes', () => {
  it('should be created', done => {
    nock('https://api.intercom.io').post('/notes', { foo: 'bar' }).reply(200, {});
    let client = new Client('foo', 'bar');
    client.notes.create({ foo: 'bar' }, r => {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should list', done => {
    nock('https://api.intercom.io').get('/notes').query({ foo: 'bar' }).reply(200, {});
    let client = new Client('foo', 'bar');
    client.notes.list({ foo: 'bar' }, r => {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should find notes by id', done => {
    nock('https://api.intercom.io').get('/notes/bar').reply(200, {});
    let client = new Client('foo', 'bar');
    client.notes.find({ id: 'bar' }, r => {
      assert.equal(200, r.status);
      done();
    });
  });
});
