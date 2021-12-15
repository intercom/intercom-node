// TO-DO: Rethink testing framework
// Workaround for old gulp-mocha to use async functions
import '@babel/polyfill';

import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('visitors', () => {
  it('should be updated', async () => {
    nock('https://api.intercom.io').post('/visitors', { id: 'baz', email: 'foo@intercom.io' }).reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.visitors.update({ id: 'baz', email: 'foo@intercom.io' });


  });
  it('should find by user_id', async () => {
    nock('https://api.intercom.io').get('/visitors').query({ user_id: '1234-5678-9876' }).reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.visitors.find({ user_id: '1234-5678-9876' });


  });
  it('should find by id', async () => {
    nock('https://api.intercom.io').get('/visitors/baz').reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.visitors.find({ id: 'baz' });


  });
  it('delete by id', async () => {
    nock('https://api.intercom.io').delete('/visitors/baz').reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.visitors.delete({ id: 'baz' });


  });
  it('should convert to user', async () => {
    const conversionObject = {
      visitor: { user_id: 'baz' },
      user: { email: 'bang' },
      type: 'user'
    };
    nock('https://api.intercom.io').post('/visitors/convert', conversionObject).reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.visitors.convert(conversionObject);


  });
  it('should convert to lead', async () => {
    const conversionObject = {
      visitor: { user_id: 'baz' },
      type: 'lead'
    };
    nock('https://api.intercom.io').post('/visitors/convert', conversionObject).reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.visitors.convert(conversionObject);


  });
});
