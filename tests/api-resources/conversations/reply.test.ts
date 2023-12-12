// File generated from our OpenAPI spec by Stainless.

import Intercom from 'intercom';
import { Response } from 'node-fetch';

const intercom = new Intercom({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource reply', () => {
  test('create: only required params', async () => {
    const responsePromise = intercom.conversations.reply.create('123', {
      body: 'string',
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
    const response = await intercom.conversations.reply.create('123', {
      body: 'string',
      message_type: 'comment',
      type: 'user',
      attachment_urls: ['https://example.com', 'https://example.com', 'https://example.com'],
      created_at: 1590000000,
      email: 'string',
      intercom_user_id: 'string',
      user_id: 'string',
      'Intercom-Version': 'Unstable',
    });
  });
});
