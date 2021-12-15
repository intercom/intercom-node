// TO-DO: Rethink testing framework
// Workaround for old gulp-mocha to use async functions
import '@babel/polyfill';

import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('admins', () => {
  it('should be listed', async () => {
    nock('https://api.intercom.io').get('/admins').reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.admins.list();


    assert.deepStrictEqual({}, response);
  });
  it('should find current admin', async () => {
    nock('https://api.intercom.io').get('/me').reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.admins.me();


    assert.deepStrictEqual({}, response);
  });
  it('should find admins by id', async () => {
    nock('https://api.intercom.io').get('/admins/baz').reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.admins.find('baz');


    assert.deepStrictEqual({}, response);
  });
  it('should update admin away mode and reassign settings', async () => {
    const params = { away_mode_enabled: true, away_mode_reassign: false };
    nock('https://api.intercom.io').put('/admins/baz/away', params).reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.admins.away('baz', params);


    assert.deepStrictEqual({}, response);
  });
});
