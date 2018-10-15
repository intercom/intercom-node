import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('users', () => {
  it('should be created', done => {
    nock('https://api.intercom.io').post('/users', { email: 'foo@bar.com' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.users.create({ email: 'foo@bar.com' }).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should be updated', done => {
    nock('https://api.intercom.io').post('/users', { email: 'foo@bar.com' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.users.update({ email: 'foo@bar.com' }).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should list', done => {
    nock('https://api.intercom.io').get('/users').reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.users.list().then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should list by params', done => {
    nock('https://api.intercom.io').get('/users').query({ tag_id: '1234' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.users.listBy({ tag_id: '1234' }).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should find users by id', done => {
    nock('https://api.intercom.io').get('/users/baz').reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.users.find({ id: 'baz' }).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should find users by user_id', done => {
    nock('https://api.intercom.io').get('/users').query({ user_id: 'foo' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.users.find({ user_id: 'foo' }).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should find users by email', done => {
    nock('https://api.intercom.io').get('/users').query({ email: 'foo' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.users.find({ email: 'foo' }).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should archive users by id', done => {
    nock('https://api.intercom.io').delete('/users/baz').reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.users.archive({ id: 'baz' }).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should archive users by user_id', done => {
    nock('https://api.intercom.io').delete('/users').query({ user_id: 'foo' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.users.archive({ user_id: 'foo' }).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should archive users by email', done => {
    nock('https://api.intercom.io').delete('/users').query({ email: 'foo' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.users.archive({ email: 'foo' }).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should archive (using old delete function) users by id', done => {
    nock('https://api.intercom.io').delete('/users/baz').reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.users.delete({ id: 'baz' }).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should archive (using old delete function) users by user_id', done => {
    nock('https://api.intercom.io').delete('/users').query({ user_id: 'foo' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.users.delete({ user_id: 'foo' }).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should archive (using old delete function) users by email', done => {
    nock('https://api.intercom.io').delete('/users').query({ email: 'foo' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.users.delete({ email: 'foo' }).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should permanently delete users by intercom user ID', done => {
    nock('https://api.intercom.io').post('/user_delete_requests', { intercom_user_id: 'foo' }).reply(200, { id: 10 });
    const client = new Client('foo', 'bar').usePromises();
    client.users.requestPermanentDeletion('foo').then(r => {
      assert.equal(200, r.statusCode);
      assert.deepStrictEqual({ id: 10 }, r.body);
      done();
    });
  });
  it('should permanently delete users by Intercom user ID in params', (done) => {
    nock('https://api.intercom.io')
      .post('/user_delete_requests', { intercom_user_id: 'foo' })
      .reply(200, { id: 10 });
    const client = new Client('foo', 'bar').usePromises();
    client.users.requestPermanentDeletionByParams({id: 'foo'}).then((r) => {
      assert.equal(200, r.statusCode);
      assert.deepStrictEqual({ id: 10 }, r.body);
      done();
    });
  });
  it('should permanently delete users by user_id', (done) => {
    nock('https://api.intercom.io')
      .get('/users')
      .query({ user_id: 'foo' })
      .reply(200, { id: 10 })
      .post('/user_delete_requests', { intercom_user_id: 10 })
      .reply(200, { id: 10 });
    const client = new Client('foo', 'bar').usePromises();
    client.users.requestPermanentDeletionByParams({user_id: 'foo'}).then((r) => {
      assert.equal(200, r.statusCode);
      assert.deepStrictEqual({ id: 10 }, r.body);
      done();
    });
  });
  it('should permanently delete users by email', (done) => {
    nock('https://api.intercom.io')
      .get('/users')
      .query({ email: 'foo' })
      .reply(200, { id: 10 })
      .post('/user_delete_requests', { intercom_user_id: 10 })
      .reply(200, { id: 10 });
    const client = new Client('foo', 'bar').usePromises();
    client.users.requestPermanentDeletionByParams({email: 'foo'}).then((r) => {
      assert.equal(200, r.statusCode);
      assert.deepStrictEqual({ id: 10 }, r.body);
      done();
    });
  });
  it('should callback with errors if calls fail', (done) => {
    nock('https://api.intercom.io')
      .get('/users')
      .query({ email: 'foo' })
      .reply(200, {type: 'error.list'});
    const client = new Client('foo', 'bar');
    client.users.requestPermanentDeletionByParams({email: 'foo'}, (err) => {
      assert.equal(true, err instanceof Error);
      done();
    });
  });
  it('should reject promises if calls fail', (done) => {
    nock('https://api.intercom.io')
      .get('/users')
      .query({ email: 'foo' })
      .reply(200, {type: 'error.list'});
    const client = new Client('foo', 'bar').usePromises();
    client.users.requestPermanentDeletionByParams({email: 'foo'}).catch(err => {
      assert.equal(true, err instanceof Error);
      done();
    });
  });
});
