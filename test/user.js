// TO-DO: Rethink testing framework
// Workaround for old gulp-mocha to use async functions
import '@babel/polyfill';

import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('users', () => {
  it('should be created', async () => {
    nock('https://api.intercom.io').post('/users', { email: 'foo@bar.com' }).reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.users.create({ email: 'foo@bar.com' });


    assert.deepStrictEqual({}, response);
  });
  it('should be updated', async () => {
    nock('https://api.intercom.io').post('/users', { email: 'foo@bar.com' }).reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.users.update({ email: 'foo@bar.com' });


    assert.deepStrictEqual({}, response);
  });
  it('should list', async () => {
    nock('https://api.intercom.io').get('/users').reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.users.list();


    assert.deepStrictEqual({}, response);
  });
  it('should list by params', async () => {
    nock('https://api.intercom.io').get('/users').query({ tag_id: '1234' }).reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.users.listBy({ tag_id: '1234' });


    assert.deepStrictEqual({}, response);
  });
  it('should find users by id', async () => {
    nock('https://api.intercom.io').get('/users/baz').reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.users.find({ id: 'baz' });


    assert.deepStrictEqual({}, response);
  });
  it('should find users by user_id', async () => {
    nock('https://api.intercom.io').get('/users').query({ user_id: 'foo' }).reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.users.find({ user_id: 'foo' });


    assert.deepStrictEqual({}, response);
  });
  it('should find users by email', async () => {
    nock('https://api.intercom.io').get('/users').query({ email: 'foo' }).reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.users.find({ email: 'foo' });


    assert.deepStrictEqual({}, response);
  });
  it('should archive users by id', async () => {
    nock('https://api.intercom.io').delete('/users/baz').reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.users.archive({ id: 'baz' });


    assert.deepStrictEqual({}, response);
  });
  it('should archive users by user_id', async () => {
    nock('https://api.intercom.io').delete('/users').query({ user_id: 'foo' }).reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.users.archive({ user_id: 'foo' });


    assert.deepStrictEqual({}, response);
  });
  it('should archive users by email', async () => {
    nock('https://api.intercom.io').delete('/users').query({ email: 'foo' }).reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.users.archive({ email: 'foo' });


    assert.deepStrictEqual({}, response);
  });
  it('should archive (using old delete function) users by id', async () => {
    nock('https://api.intercom.io').delete('/users/baz').reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.users.delete({ id: 'baz' });


    assert.deepStrictEqual({}, response);
  });
  it('should archive (using old delete function) users by user_id', async () => {
    nock('https://api.intercom.io').delete('/users').query({ user_id: 'foo' }).reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.users.delete({ user_id: 'foo' });


    assert.deepStrictEqual({}, response);
  });
  it('should archive (using old delete function) users by email', async () => {
    nock('https://api.intercom.io').delete('/users').query({ email: 'foo' }).reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.users.delete({ email: 'foo' });


    assert.deepStrictEqual({}, response);
  });
  it('should permanently delete users by intercom user ID', async () => {
    nock('https://api.intercom.io').post('/user_delete_requests', { intercom_user_id: 'foo' }).reply(200, { id: 10 });
    const client = new Client('foo', 'bar');
    const response = await client.users.requestPermanentDeletion('foo');


    assert.deepStrictEqual({ id: 10 }, response);
  });
  it('should permanently delete users by Intercom user ID in params', async () => {
    nock('https://api.intercom.io')
      .post('/user_delete_requests', { intercom_user_id: 'foo' })
      .reply(200, { id: 10 });
    const client = new Client('foo', 'bar');
    const response = await client.users.requestPermanentDeletionByParams({id: 'foo'});


    assert.deepStrictEqual({ id: 10 }, response);
  });
  it('should permanently delete users by user_id', async () => {
    nock('https://api.intercom.io')
      .get('/users')
      .query({ user_id: 'foo' })
      .reply(200, { id: 10 })
      .post('/user_delete_requests', { intercom_user_id: 10 })
      .reply(200, { id: 10 });
    const client = new Client('foo', 'bar');
    const response = await client.users.requestPermanentDeletionByParams({user_id: 'foo'});


    assert.deepStrictEqual({ id: 10 }, response);
  });
  it('should permanently delete users by email', async () => {
    nock('https://api.intercom.io')
      .get('/users')
      .query({ email: 'foo' })
      .reply(200, { id: 10 })
      .post('/user_delete_requests', { intercom_user_id: 10 })
      .reply(200, { id: 10 });
    const client = new Client('foo', 'bar');
    const response = await client.users.requestPermanentDeletionByParams({email: 'foo'});


    assert.deepStrictEqual({ id: 10 }, response);
  });
  it('should reject promises if calls fail', async () => {
    nock('https://api.intercom.io')
      .get('/users')
      .query({ email: 'foo' })
      .reply(200, {type: 'error.list'});
    const client = new Client('foo', 'bar');
    try {
      await client.users.requestPermanentDeletionByParams({email: 'foo'})
    }
    catch (err) {
      assert.equal(true, err instanceof Error);
    }
  });
});
