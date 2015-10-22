import assert from 'assert';
import {Client} from '../lib';
var nock = require('nock');

describe('counts', () => {
  it('app counts', done => {
    nock('https://api.intercom.io').get('/counts').reply(200, {});
    let client = new Client('foo', 'bar');
    client.counts.appCounts(r => {
      assert.equal(200, r.status);
      done();
    });
  });
  it('conversation app counts', done => {
    nock('https://api.intercom.io').get('/counts').query({ type: 'conversation' }).reply(200, {});
    let client = new Client('foo', 'bar');
    client.counts.conversationCounts(r => {
      assert.equal(200, r.status);
      done();
    });
  });
  it('conversation admin counts', done => {
    nock('https://api.intercom.io').get('/counts').query({ type: 'conversation', count: 'admin' }).reply(200, {});
    let client = new Client('foo', 'bar');
    client.counts.conversationAdminCounts(r => {
      assert.equal(200, r.status);
      done();
    });
  });
  it('user tag counts', done => {
    nock('https://api.intercom.io').get('/counts').query({ type: 'user', count: 'tag' }).reply(200, {});
    let client = new Client('foo', 'bar');
    client.counts.userTagCounts(r => {
      assert.equal(200, r.status);
      done();
    });
  });
  it('user segment counts', done => {
    nock('https://api.intercom.io').get('/counts').query({ type: 'user', count: 'segment' }).reply(200, {});
    let client = new Client('foo', 'bar');
    client.counts.userSegmentCounts(r => {
      assert.equal(200, r.status);
      done();
    });
  });
  it('company tag counts', done => {
    nock('https://api.intercom.io').get('/counts').query({ type: 'company', count: 'tag' }).reply(200, {});
    let client = new Client('foo', 'bar');
    client.counts.companyTagCounts(r => {
      assert.equal(200, r.status);
      done();
    });
  });
  it('company segment counts', done => {
    nock('https://api.intercom.io').get('/counts').query({ type: 'company', count: 'segment' }).reply(200, {});
    let client = new Client('foo', 'bar');
    client.counts.companySegmentCounts(r => {
      assert.equal(200, r.status);
      done();
    });
  });
  it('company user counts', done => {
    nock('https://api.intercom.io').get('/counts').query({ type: 'company', count: 'user' }).reply(200, {});
    let client = new Client('foo', 'bar');
    client.counts.companyUserCounts(r => {
      assert.equal(200, r.status);
      done();
    });
  });
});
