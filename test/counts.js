import assert from 'assert';
import {Client} from '../lib';
var nock = require('nock');

describe('counts', function () {
  it('app counts', function (done) {
    nock('https://api.intercom.io').get('/counts').reply(200, {});
    let client = new Client('foo', 'bar');
    client.counts.appCounts(function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
  it('conversation app counts', function (done) {
    nock('https://api.intercom.io').get('/counts').query({ type: 'conversation' }).reply(200, {});
    let client = new Client('foo', 'bar');
    client.counts.conversationCounts(function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
  it('conversation admin counts', function (done) {
    nock('https://api.intercom.io').get('/counts').query({ type: 'conversation', count: 'admin' }).reply(200, {});
    let client = new Client('foo', 'bar');
    client.counts.conversationAdminCounts(function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
  it('user tag counts', function (done) {
    nock('https://api.intercom.io').get('/counts').query({ type: 'user', count: 'tag' }).reply(200, {});
    let client = new Client('foo', 'bar');
    client.counts.userTagCounts(function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
  it('user segment counts', function (done) {
    nock('https://api.intercom.io').get('/counts').query({ type: 'user', count: 'segment' }).reply(200, {});
    let client = new Client('foo', 'bar');
    client.counts.userSegmentCounts(function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
  it('company tag counts', function (done) {
    nock('https://api.intercom.io').get('/counts').query({ type: 'company', count: 'tag' }).reply(200, {});
    let client = new Client('foo', 'bar');
    client.counts.companyTagCounts(function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
  it('company segment counts', function (done) {
    nock('https://api.intercom.io').get('/counts').query({ type: 'company', count: 'segment' }).reply(200, {});
    let client = new Client('foo', 'bar');
    client.counts.companySegmentCounts(function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
  it('company user counts', function (done) {
    nock('https://api.intercom.io').get('/counts').query({ type: 'company', count: 'user' }).reply(200, {});
    let client = new Client('foo', 'bar');
    client.counts.companyUserCounts(function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
});
