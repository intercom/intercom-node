import assert from 'assert';
import {Client} from '../lib';
var nock = require('nock');

describe('companies', function () {
  it('should be created', function (done) {
    nock('https://api.intercom.io').post('/companies', { name: 'baz' }).reply(200, {});
    let client = new Client('foo', 'bar').usePromises();
    client.companies.create({ name: 'baz' }).then(function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should list', function (done) {
    nock('https://api.intercom.io').get('/companies').reply(200, {});
    let client = new Client('foo', 'bar').usePromises();
    client.companies.list().then(function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should list by params', function (done) {
    nock('https://api.intercom.io').get('/companies').query({ tag_id: '1234' }).reply(200, {});
    let client = new Client('foo', 'bar').usePromises();
    client.companies.listBy({ tag_id: '1234' }).then(function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
  it('find companies by id', function (done) {
    nock('https://api.intercom.io').get('/companies/baz').reply(200, {});
    let client = new Client('foo', 'bar').usePromises();
    client.companies.find({ id: 'baz' }).then(function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
  it('list company users by id', function (done) {
    nock('https://api.intercom.io').get('/companies/baz/users').reply(200, {});
    let client = new Client('foo', 'bar').usePromises();
    client.companies.listUsers({ id: 'baz' }).then(function (r) {
      assert.equal(200, r.status);
      done();
    });
  });
});
