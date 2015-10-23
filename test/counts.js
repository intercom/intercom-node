import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('counts', function () {
  it('app counts', function (done) {
    nock('https://api.intercom.io').get('/counts').reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.counts.appCounts().then(function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
  it('conversation app counts', function (done) {
    nock('https://api.intercom.io').get('/counts').query({ type: 'conversation' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.counts.conversationCounts().then(function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
  it('conversation admin counts', function (done) {
    nock('https://api.intercom.io').get('/counts').query({ type: 'conversation', count: 'admin' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.counts.conversationAdminCounts().then(function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
  it('user tag counts', function (done) {
    nock('https://api.intercom.io').get('/counts').query({ type: 'user', count: 'tag' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.counts.userTagCounts().then(function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
  it('user segment counts', function (done) {
    nock('https://api.intercom.io').get('/counts').query({ type: 'user', count: 'segment' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.counts.userSegmentCounts().then(function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
  it('company tag counts', function (done) {
    nock('https://api.intercom.io').get('/counts').query({ type: 'company', count: 'tag' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.counts.companyTagCounts().then(function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
  it('company segment counts', function (done) {
    nock('https://api.intercom.io').get('/counts').query({ type: 'company', count: 'segment' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.counts.companySegmentCounts().then(function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
  it('company user counts', function (done) {
    nock('https://api.intercom.io').get('/counts').query({ type: 'company', count: 'user' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.counts.companyUserCounts().then(function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
});
