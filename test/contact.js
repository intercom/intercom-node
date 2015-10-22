import assert from 'assert';
import {Client} from '../lib';
var nock = require('nock');

describe('contacts', () => {
  it('should be created', done => {
    nock('https://api.intercom.io').post('/contacts').reply(200, {});
    let client = new Client('foo', 'bar');
    client.contacts.create(r => {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should be created with parameters', done => {
    nock('https://api.intercom.io').post('/contacts', { foo: 'bar' }).reply(200, {});
    let client = new Client('foo', 'bar');
    client.contacts.create({ foo: 'bar' }, r => {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should be updated', done => {
    nock('https://api.intercom.io').post('/contacts', { id: 'baz', email: 'foo@intercom.io' }).reply(200, {});
    let client = new Client('foo', 'bar');
    client.contacts.update({ id: 'baz', email: 'foo@intercom.io' }, r => {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should list', done => {
    nock('https://api.intercom.io').get('/contacts').reply(200, {});
    let client = new Client('foo', 'bar');
    client.contacts.list(r => {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should list by params', done => {
    nock('https://api.intercom.io').get('/contacts').query({ email: 'jayne@serenity.io' }).reply(200, {});
    let client = new Client('foo', 'bar');
    client.contacts.listBy({ email: 'jayne@serenity.io' }, r => {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should find by id', done => {
    nock('https://api.intercom.io').get('/contacts/baz').reply(200, {});
    let client = new Client('foo', 'bar');
    client.contacts.find({ id: 'baz' }, r => {
      assert.equal(200, r.status);
      done();
    });
  });
  it('delete by id', done => {
    nock('https://api.intercom.io').delete('/contacts/baz').reply(200, {});
    let client = new Client('foo', 'bar');
    client.contacts.delete({ id: 'baz' }, r => {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should convert', done => {
    let conversionObject = {
      contact: { user_id: 'baz' },
      user: { email: 'bang' }
    };
    nock('https://api.intercom.io').post('/contacts/convert', conversionObject).reply(200, {});
    let client = new Client('foo', 'bar');
    client.contacts.convert(conversionObject, r => {
      assert.equal(200, r.status);
      done();
    });
  });
});
