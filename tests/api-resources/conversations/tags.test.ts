// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Intercom from 'intercom-client';
import { Response } from 'node-fetch';

const client = new Intercom({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tags', () => {
  test('create: only required params', async () => {
    const responsePromise = client.conversations.tags.create('64619700005694', {
      id: 'id',
      admin_id: 'admin_id',
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
    const response = await client.conversations.tags.create('64619700005694', {
      id: 'id',
      admin_id: 'admin_id',
      'Intercom-Version': '2.11',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.conversations.tags.delete('64619700005694', '7522907', {
      admin_id: 'admin_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.conversations.tags.delete('64619700005694', '7522907', {
      admin_id: 'admin_id',
      'Intercom-Version': '2.11',
    });
  });
});
