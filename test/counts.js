import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('counts', () => {
  it('app counts', done => {
    nock('https://api.intercom.io').get('/counts').reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.counts.appCounts().then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('conversation app counts', done => {
    nock('https://api.intercom.io').get('/counts').query({ type: 'conversation' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.counts.conversationCounts().then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('conversation admin counts', done => {
    nock('https://api.intercom.io').get('/counts').query({ type: 'conversation', count: 'admin' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.counts.conversationAdminCounts().then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('user tag counts', done => {
    nock('https://api.intercom.io').get('/counts').query({ type: 'user', count: 'tag' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.counts.userTagCounts().then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('user segment counts', done => {
    nock('https://api.intercom.io').get('/counts').query({ type: 'user', count: 'segment' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.counts.userSegmentCounts().then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('company tag counts', done => {
    nock('https://api.intercom.io').get('/counts').query({ type: 'company', count: 'tag' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.counts.companyTagCounts().then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('company segment counts', done => {
    nock('https://api.intercom.io').get('/counts').query({ type: 'company', count: 'segment' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.counts.companySegmentCounts().then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('company user counts', done => {
    nock('https://api.intercom.io').get('/counts').query({ type: 'company', count: 'user' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.counts.companyUserCounts().then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
});
