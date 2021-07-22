import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('articles', () => {
  it('should create an article', done => {
    nock('https://api.intercom.io').post('/articles', { title: 'Article Title', body: '<p>Article body</p>', author_id: 5534534 }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.articles.create({ title: 'Article Title', body: '<p>Article body</p>', author_id: 5534534 }).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should retrieve an article', done => {
    nock('https://api.intercom.io').get('/articles/baz').reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.articles.find('baz').then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should update an article', done => {
    nock('https://api.intercom.io').put('/articles/baz', { title: 'New title', body: '<p>New body</p>', author_id: 5534534 }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.articles.update('baz', { title: 'New title', body: '<p>New body</p>', author_id: 5534534 }).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should delete an article', done => {
    nock('https://api.intercom.io').delete('/articles/baz').reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.articles.delete('baz').then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should list all articles', done => {
    nock('https://api.intercom.io').get('/articles').reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.articles.list().then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
});
