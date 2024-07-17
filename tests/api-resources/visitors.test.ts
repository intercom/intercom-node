// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Intercom from 'intercom-client';
import { Response } from 'node-fetch';

const intercom = new Intercom({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource visitors', () => {
  test('retrieve: only required params', async () => {
    const responsePromise = intercom.visitors.retrieve({ user_id: 'user_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await intercom.visitors.retrieve({ user_id: 'user_id', 'Intercom-Version': '2.11' });
  });

  test('update: only required params', async () => {
    const responsePromise = intercom.visitors.update({ body: {} });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await intercom.visitors.update({ body: {}, 'Intercom-Version': '2.11' });
  });

  test('convert: only required params', async () => {
    const responsePromise = intercom.visitors.convert({ type: 'user', user: {}, visitor: {} });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('convert: required and optional params', async () => {
    const response = await intercom.visitors.convert({
      type: 'user',
      user: {
        id: '8a88a590-e1c3-41e2-a502-e0649dbf721c',
        user_id: '8a88a590-e1c3-41e2-a502-e0649dbf721c',
        email: 'foo@bar.com',
      },
      visitor: {
        id: '8a88a590-e1c3-41e2-a502-e0649dbf721c',
        user_id: '3ecf64d0-9ed1-4e9f-88e1-da7d6e6782f3',
        email: 'winstonsmith@truth.org',
      },
      'Intercom-Version': '2.11',
    });
  });
});
