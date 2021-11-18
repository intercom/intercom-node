// TO-DO: Rethink testing framework
// Workaround for old gulp-mocha to use async functions
import '@babel/polyfill';

import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('counts', () => {
  it('app counts', async () => {
    nock('https://api.intercom.io').get('/counts').reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.counts.appCounts();

    assert.equal(200, response.status);
    assert.deepStrictEqual({}, response.data);
  });
  it('conversation app counts', async () => {
    nock('https://api.intercom.io').get('/counts').query({ type: 'conversation' }).reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.counts.conversationCounts();

    assert.equal(200, response.status);
    assert.deepStrictEqual({}, response.data);
  });
  it('conversation admin counts', async () => {
    nock('https://api.intercom.io').get('/counts').query({ type: 'conversation', count: 'admin' }).reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.counts.conversationAdminCounts();

    assert.equal(200, response.status);
    assert.deepStrictEqual({}, response.data);
  });
  it('user tag counts', async () => {
    nock('https://api.intercom.io').get('/counts').query({ type: 'user', count: 'tag' }).reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.counts.userTagCounts();

    assert.equal(200, response.status);
    assert.deepStrictEqual({}, response.data);
  });
  it('user segment counts', async () => {
    nock('https://api.intercom.io').get('/counts').query({ type: 'user', count: 'segment' }).reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.counts.userSegmentCounts();

    assert.equal(200, response.status);
    assert.deepStrictEqual({}, response.data);
  });
  it('company tag counts', async () => {
    nock('https://api.intercom.io').get('/counts').query({ type: 'company', count: 'tag' }).reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.counts.companyTagCounts();

    assert.equal(200, response.status);
    assert.deepStrictEqual({}, response.data);
  });
  it('company segment counts', async () => {
    nock('https://api.intercom.io').get('/counts').query({ type: 'company', count: 'segment' }).reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.counts.companySegmentCounts();

    assert.equal(200, response.status);
    assert.deepStrictEqual({}, response.data);
  });
  it('company user counts', async () => {
    nock('https://api.intercom.io').get('/counts').query({ type: 'company', count: 'user' }).reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.counts.companyUserCounts();

    assert.equal(200, response.status);
    assert.deepStrictEqual({}, response.data);
  });
});
