// TO-DO: Rethink testing framework
// Workaround for old gulp-mocha to use async functions
import '@babel/polyfill';

import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('contacts', () => {
  it('keep the Contacts alias', () => {
    nock('https://api.intercom.io').post('/contacts').reply(200, {});
    const client = new Client('foo', 'bar');

    assert.deepEqual(client.leads, client.contacts);
  });
  it('should be created', async () => {
    nock('https://api.intercom.io').post('/contacts').reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.leads.create();


    assert.equal(200, response.status);
    assert.deepStrictEqual({}, response.data);
  });
  it('should be created with parameters', async () => {
    nock('https://api.intercom.io').post('/contacts', { foo: 'bar' }).reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.leads.create({ foo: 'bar' });


    assert.equal(200, response.status);
    assert.deepStrictEqual({}, response.data);
  });
  it('should be updated', async () => {
    nock('https://api.intercom.io').post('/contacts', { id: 'baz', email: 'foo@intercom.io' }).reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.leads.update({ id: 'baz', email: 'foo@intercom.io' });


    assert.equal(200, response.status);
    assert.deepStrictEqual({}, response.data);
  });
  it('should list', async () => {
    nock('https://api.intercom.io').get('/contacts').reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.leads.list();


    assert.equal(200, response.status);
    assert.deepStrictEqual({}, response.data);
  });
  it('should list by params', async () => {
    nock('https://api.intercom.io').get('/contacts').query({ email: 'jayne@serenity.io' }).reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.leads.listBy({ email: 'jayne@serenity.io' });


    assert.equal(200, response.status);
    assert.deepStrictEqual({}, response.data);
  });
  it('should find by id', async () => {
    nock('https://api.intercom.io').get('/contacts/baz').reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.leads.find({ id: 'baz' });


    assert.equal(200, response.status);
    assert.deepStrictEqual({}, response.data);
  });
  it('should find by user_id', async () => {
    nock('https://api.intercom.io').get('/contacts?user_id=baz').reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.leads.find({ user_id: 'baz' });


    assert.equal(200, response.status);
    assert.deepStrictEqual({}, response.data);
  });
  it('delete by id', async () => {
    nock('https://api.intercom.io').delete('/contacts/baz').reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.leads.delete({ id: 'baz' });


    assert.equal(200, response.status);
    assert.deepStrictEqual({}, response.data);
  });
  it('should convert', async () => {
    const conversionObject = {
      contact: { user_id: 'baz' },
      user: { email: 'bang' }
    };
    nock('https://api.intercom.io').post('/contacts/convert', conversionObject).reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.leads.convert(conversionObject);

    assert.equal(200, response.status);
    assert.deepStrictEqual({}, response.data);
  });
});
