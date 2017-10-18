import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('companies', () => {
  it('should be created', done => {
    nock('https://api.intercom.io').post('/companies', { name: 'baz' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.companies.create({ name: 'baz' }).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should list', done => {
    nock('https://api.intercom.io').get('/companies').reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.companies.list().then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should list by params', done => {
    nock('https://api.intercom.io').get('/companies').query({ tag_id: '1234' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.companies.listBy({ tag_id: '1234' }).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should find companies by id', done => {
    nock('https://api.intercom.io').get('/companies/baz').reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.companies.find({ id: 'baz' }).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should find companies by company_id', done => {
    nock('https://api.intercom.io').get('/companies').query({ company_id: 'baz' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.companies.find({ company_id: 'baz' }).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should find companies by name', done => {
    nock('https://api.intercom.io').get('/companies').query({ name: 'baz' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.companies.find({ name: 'baz' }).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should list company users by id', done => {
    nock('https://api.intercom.io').get('/companies/baz/users').reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.companies.listUsers({ id: 'baz' }).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should list company users by company_id', done => {
    nock('https://api.intercom.io').get('/companies').query({ company_id: 'baz', type: 'user' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.companies.listUsers({ company_id: 'baz' }).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should list company users by company name', done => {
    nock('https://api.intercom.io').get('/companies').query({ name: 'baz', type: 'user' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.companies.listUsers({ name: 'baz' }).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
});
