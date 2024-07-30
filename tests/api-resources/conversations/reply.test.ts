// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Intercom from 'intercom-client';
import { Response } from 'node-fetch';

const client = new Intercom({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource reply', () => {
  test('create: only required params', async () => {
    const responsePromise = client.conversations.reply.create('123 or "last"', {
      body: 'body',
      message_type: 'comment',
      type: 'user',
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
    const response = await client.conversations.reply.create('123 or "last"', {
      body: 'body',
      message_type: 'comment',
      type: 'user',
      attachment_urls: ['https://example.com', 'https://example.com', 'https://example.com'],
      created_at: 1590000000,
      'Intercom-Version': '2.11',
    });
  });
});
