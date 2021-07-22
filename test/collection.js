import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('collections', () => {
  it('should create a collection', done => {
    nock('https://api.intercom.io').post('/help_center/collections', { name: 'My collection', description: 'Collection of my articles' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.collections.create({ name: 'My collection', description: 'Collection of my articles' }).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should retrieve a collection', done => {
    nock('https://api.intercom.io').get('/help_center/collections/baz').reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.collections.find('baz').then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should update a collection', done => {
    nock('https://api.intercom.io').put('/help_center/collections/baz', { name: 'New name', description: 'New description' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.collections.update('baz', { name: 'New name', description: 'New description' }).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should delete a collection', done => {
    nock('https://api.intercom.io').delete('/help_center/collections/baz').reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.collections.delete('baz').then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should list all collections', done => {
    nock('https://api.intercom.io').get('/help_center/collections').reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.collections.list().then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
});
