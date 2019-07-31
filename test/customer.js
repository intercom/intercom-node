import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('customers', () => {
  it('should search', done => {
    nock('https://api.intercom.io').post('/customers/search', { query: { field: 'name', operator: '=', name: 'Alice'}, sort: { field: 'name', order: 'ascending'}, pagination: { per_page: 10 }}).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.customers.search({ query: { field: 'name', operator: '=', name: 'Alice'}, sort: { field: 'name', order: 'ascending'}, pagination: { per_page: 10 }}).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
});
