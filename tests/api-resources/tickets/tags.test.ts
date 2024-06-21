// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Intercom from 'intercom-client';
import { Response } from 'node-fetch';

const intercom = new Intercom({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tags', () => {
  test('create: only required params', async () => {
    const responsePromise = intercom.tickets.tags.create('64619700005694', {
      id: 'string',
      admin_id: 'string',
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
    const response = await intercom.tickets.tags.create('64619700005694', {
      id: 'string',
      admin_id: 'string',
      'Intercom-Version': '2.11',
    });
  });

  test('remove: only required params', async () => {
    const responsePromise = intercom.tickets.tags.remove('64619700005694', '7522907', { admin_id: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('remove: required and optional params', async () => {
    const response = await intercom.tickets.tags.remove('64619700005694', '7522907', {
      admin_id: 'string',
      'Intercom-Version': '2.11',
    });
  });
});
