// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Intercom from 'intercom';
import { Response } from 'node-fetch';

const intercom = new Intercom({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource subscriptions', () => {
  test('create: only required params', async () => {
    const responsePromise = intercom.contacts.subscriptions.create('63a07ddf05a32042dffac965', {
      id: 'string',
      consent_type: 'opt_in',
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
    const response = await intercom.contacts.subscriptions.create('63a07ddf05a32042dffac965', {
      id: 'string',
      consent_type: 'opt_in',
      'Intercom-Version': '2.11',
    });
  });

  test('list', async () => {
    const responsePromise = intercom.contacts.subscriptions.list('63a07ddf05a32042dffac965');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      intercom.contacts.subscriptions.list('63a07ddf05a32042dffac965', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Intercom.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      intercom.contacts.subscriptions.list(
        '63a07ddf05a32042dffac965',
        { 'Intercom-Version': '2.11' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Intercom.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = intercom.contacts.subscriptions.delete('63a07ddf05a32042dffac965', '37846');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      intercom.contacts.subscriptions.delete('63a07ddf05a32042dffac965', '37846', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Intercom.NotFoundError);
  });

  test('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      intercom.contacts.subscriptions.delete(
        '63a07ddf05a32042dffac965',
        '37846',
        { 'Intercom-Version': '2.11' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Intercom.NotFoundError);
  });
});
