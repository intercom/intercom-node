import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('contacts', () => {
  it('keep the Contacts alias', () => {
    nock('https://api.intercom.io').post('/contacts').reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    assert.deepEqual(client.leads, client.contacts);
  });
  it('should be created', done => {
    nock('https://api.intercom.io').post('/contacts').reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.leads.create().then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should be created with parameters', done => {
    nock('https://api.intercom.io').post('/contacts', { foo: 'bar' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.leads.create({ foo: 'bar' }).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should be updated', done => {
    nock('https://api.intercom.io').post('/contacts', { id: 'baz', email: 'foo@intercom.io' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.leads.update({ id: 'baz', email: 'foo@intercom.io' }).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should list', done => {
    nock('https://api.intercom.io').get('/contacts').reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.leads.list().then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should list by params', done => {
    nock('https://api.intercom.io').get('/contacts').query({ email: 'jayne@serenity.io' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.leads.listBy({ email: 'jayne@serenity.io' }).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should find by id', done => {
    nock('https://api.intercom.io').get('/contacts/baz').reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.leads.find({ id: 'baz' }).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should find by user_id', done => {
    nock('https://api.intercom.io').get('/contacts?user_id=baz').reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.leads.find({ user_id: 'baz' }).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('delete by id', done => {
    nock('https://api.intercom.io').delete('/contacts/baz').reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.leads.delete({ id: 'baz' }).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should convert', done => {
    const conversionObject = {
      contact: { user_id: 'baz' },
      user: { email: 'bang' }
    };
    nock('https://api.intercom.io').post('/contacts/convert', conversionObject).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.leads.convert(conversionObject).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
});
