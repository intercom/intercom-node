// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Intercom from 'intercom-client';
import { Response } from 'node-fetch';

const client = new Intercom({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource parts', () => {
  test('create: only required params', async () => {
    const responsePromise = client.conversations.parts.create('123', {
      admin_id: '12345',
      message_type: 'close',
      type: 'admin',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.conversations.parts.create('123', {
      admin_id: '12345',
      message_type: 'close',
      type: 'admin',
      body: ' This conversation is now closed!',
      'Intercom-Version': '2.11',
    });
  });
});
