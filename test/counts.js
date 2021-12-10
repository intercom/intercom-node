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


    assert.deepStrictEqual({}, response);
  });
  it('conversation app counts', async () => {
    nock('https://api.intercom.io').get('/counts').query({ type: 'conversation' }).reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.counts.conversationCounts();


    assert.deepStrictEqual({}, response);
  });
  it('conversation admin counts', async () => {
    nock('https://api.intercom.io').get('/counts').query({ type: 'conversation', count: 'admin' }).reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.counts.conversationAdminCounts();


    assert.deepStrictEqual({}, response);
  });
  it('user tag counts', async () => {
    nock('https://api.intercom.io').get('/counts').query({ type: 'user', count: 'tag' }).reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.counts.userTagCounts();


    assert.deepStrictEqual({}, response);
  });
  it('user segment counts', async () => {
    nock('https://api.intercom.io').get('/counts').query({ type: 'user', count: 'segment' }).reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.counts.userSegmentCounts();


    assert.deepStrictEqual({}, response);
  });
  it('company tag counts', async () => {
    nock('https://api.intercom.io').get('/counts').query({ type: 'company', count: 'tag' }).reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.counts.companyTagCounts();


    assert.deepStrictEqual({}, response);
  });
  it('company segment counts', async () => {
    nock('https://api.intercom.io').get('/counts').query({ type: 'company', count: 'segment' }).reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.counts.companySegmentCounts();


    assert.deepStrictEqual({}, response);
  });
  it('company user counts', async () => {
    nock('https://api.intercom.io').get('/counts').query({ type: 'company', count: 'user' }).reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.counts.companyUserCounts();


    assert.deepStrictEqual({}, response);
  });
});
