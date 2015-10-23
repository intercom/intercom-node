import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('contacts', function () {
  it('should be created', function (done) {
    nock('https://api.intercom.io').post('/contacts').reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.contacts.create().then(function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should be created with parameters', function (done) {
    nock('https://api.intercom.io').post('/contacts', { foo: 'bar' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.contacts.create({ foo: 'bar' }).then(function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should be updated', function (done) {
    nock('https://api.intercom.io').post('/contacts', { id: 'baz', email: 'foo@intercom.io' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.contacts.update({ id: 'baz', email: 'foo@intercom.io' }).then(function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should list', function (done) {
    nock('https://api.intercom.io').get('/contacts').reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.contacts.list().then(function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should list by params', function (done) {
    nock('https://api.intercom.io').get('/contacts').query({ email: 'jayne@serenity.io' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.contacts.listBy({ email: 'jayne@serenity.io' }).then(function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should find by id', function (done) {
    nock('https://api.intercom.io').get('/contacts/baz').reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.contacts.find({ id: 'baz' }).then(function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
  it('delete by id', function (done) {
    nock('https://api.intercom.io').delete('/contacts/baz').reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.contacts.delete({ id: 'baz' }).then(function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should convert', function (done) {
    const conversionObject = {
      contact: { user_id: 'baz' },
      user: { email: 'bang' }
    };
    nock('https://api.intercom.io').post('/contacts/convert', conversionObject).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.contacts.convert(conversionObject).then(function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
});
