// TO-DO: Rethink testing framework
// Workaround for old gulp-mocha to use async functions
import '@babel/polyfill';

import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('messages', () => {
  it('should be created', async () => {
    nock('https://api.intercom.io').post('/messages', { message_type: 'foo' }).reply(200, {});
    const client = new Client('foo', 'bar');
    const response = await client.messages.create({ message_type: 'foo' });


    assert.deepStrictEqual({}, response);
  });
});
