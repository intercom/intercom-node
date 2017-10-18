import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('notes', () => {
  it('should be created', done => {
    nock('https://api.intercom.io').post('/notes', { foo: 'bar' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.notes.create({ foo: 'bar' }).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should list', done => {
    nock('https://api.intercom.io').get('/notes').query({ foo: 'bar' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.notes.list({ foo: 'bar' }).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should find notes by id', done => {
    nock('https://api.intercom.io').get('/notes/bar').reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.notes.find({ id: 'bar' }).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
});
