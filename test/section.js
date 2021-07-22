import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('collections', () => {
  it('should create a section', done => {
    nock('https://api.intercom.io').post('/help_center/sections', { name: 'Section name', parent_id: 1 }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.sections.create({ name: 'Section name', parent_id: 1 }).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should retrieve a section', done => {
    nock('https://api.intercom.io').get('/help_center/sections/baz').reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.sections.find('baz').then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should update a section', done => {
    nock('https://api.intercom.io').put('/help_center/sections/baz', { name: 'New name', parent_id: 2 }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.sections.update('baz', { name: 'New name', parent_id: 2 }).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should delete a section', done => {
    nock('https://api.intercom.io').delete('/help_center/sections/baz').reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.sections.delete('baz').then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should list all sections', done => {
    nock('https://api.intercom.io').get('/help_center/sections').reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.sections.list().then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
});
