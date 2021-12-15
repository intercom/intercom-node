// TO-DO: Rethink testing framework
// Workaround for old gulp-mocha to use async functions
import '@babel/polyfill';

import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('companies', () => {
  it('should be created', async () => {
    nock('https://api.intercom.io').post('/companies', { name: 'baz' }).reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.companies.create({ name: 'baz' });


    assert.deepStrictEqual({}, response);
  });
  it('should list', async () => {
    nock('https://api.intercom.io').get('/companies').reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.companies.list();


    assert.deepStrictEqual({}, response);
  });
  it('should list by params', async () => {
    nock('https://api.intercom.io').get('/companies').query({ tag_id: '1234' }).reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.companies.listBy({ tag_id: '1234' });


    assert.deepStrictEqual({}, response);
  });
  it('should find companies by id', async () => {
    nock('https://api.intercom.io').get('/companies/baz').reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.companies.find({ id: 'baz' });


    assert.deepStrictEqual({}, response);
  });
  it('should find companies by company_id', async () => {
    nock('https://api.intercom.io').get('/companies').query({ company_id: 'baz' }).reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.companies.find({ company_id: 'baz' });


    assert.deepStrictEqual({}, response);
  });
  it('should find companies by name', async () => {
    nock('https://api.intercom.io').get('/companies').query({ name: 'baz' }).reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.companies.find({ name: 'baz' });


    assert.deepStrictEqual({}, response);
  });
  it('should list company users by id', async () => {
    nock('https://api.intercom.io').get('/companies/baz/users').reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.companies.listUsers({ id: 'baz' });


    assert.deepStrictEqual({}, response);
  });
  it('should list company users by company_id', async () => {
    nock('https://api.intercom.io').get('/companies').query({ company_id: 'baz', type: 'user' }).reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.companies.listUsers({ company_id: 'baz' });


    assert.deepStrictEqual({}, response);
  });
  it('should list company users by company name', async () => {
    nock('https://api.intercom.io').get('/companies').query({ name: 'baz', type: 'user' }).reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.companies.listUsers({ name: 'baz' });


    assert.deepStrictEqual({}, response);
  });
});
