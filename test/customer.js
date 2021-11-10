// TO-DO: Rethink testing framework
// Workaround for old gulp-mocha to use async functions
import '@babel/polyfill';

import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('customers', () => {
  it('should search', async () => {
    nock('https://api.intercom.io').post('/customers/search', { query: { field: 'name', operator: '=', name: 'Alice'}, sort: { field: 'name', order: 'ascending'}, pagination: { per_page: 10 }}).reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.customers.search({ query: { field: 'name', operator: '=', name: 'Alice'}, sort: { field: 'name', order: 'ascending'}, pagination: { per_page: 10 }});

    assert.equal(200, response.status);
    assert.deepStrictEqual({}, response.data);
  });
});
