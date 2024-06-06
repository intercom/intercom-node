// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Intercom from 'intercom';
import { Response } from 'node-fetch';

const intercom = new Intercom({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource contacts', () => {
  test('create: only required params', async () => {
    const responsePromise = intercom.contacts.create({ body: {} });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await intercom.contacts.create({ body: {}, 'Intercom-Version': '2.10' });
  });

  test('retrieve', async () => {
    const responsePromise = intercom.contacts.retrieve('63a07ddf05a32042dffac965');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      intercom.contacts.retrieve('63a07ddf05a32042dffac965', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Intercom.NotFoundError);
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      intercom.contacts.retrieve(
        '63a07ddf05a32042dffac965',
        { 'Intercom-Version': '2.10' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Intercom.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = intercom.contacts.update('63a07ddf05a32042dffac965');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      intercom.contacts.update('63a07ddf05a32042dffac965', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Intercom.NotFoundError);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      intercom.contacts.update(
        '63a07ddf05a32042dffac965',
        {
          avatar: 'https://www.example.com/avatar_image.jpg',
          custom_attributes: {},
          email: 'jdoe@example.com',
          external_id: 'string',
          last_seen_at: 1571672154,
          name: 'John Doe',
          owner_id: 123,
          phone: '+353871234567',
          role: 'string',
          signed_up_at: 1571672154,
          unsubscribed_from_emails: true,
          'Intercom-Version': '2.10',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Intercom.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = intercom.contacts.list();
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
    await expect(intercom.contacts.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Intercom.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      intercom.contacts.list({ 'Intercom-Version': '2.10' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Intercom.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = intercom.contacts.delete('string');
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
    await expect(intercom.contacts.delete('string', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Intercom.NotFoundError,
    );
  });

  test('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      intercom.contacts.delete(
        'string',
        { 'Intercom-Version': '2.10' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Intercom.NotFoundError);
  });

  test('archive', async () => {
    const responsePromise = intercom.contacts.archive('63a07ddf05a32042dffac965');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('archive: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      intercom.contacts.archive('63a07ddf05a32042dffac965', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Intercom.NotFoundError);
  });

  test('archive: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      intercom.contacts.archive(
        '63a07ddf05a32042dffac965',
        { 'Intercom-Version': '2.10' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Intercom.NotFoundError);
  });

  test('merge', async () => {
    const responsePromise = intercom.contacts.merge();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('merge: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(intercom.contacts.merge({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Intercom.NotFoundError,
    );
  });

  test('merge: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      intercom.contacts.merge(
        { from: '654b709a6abd01feb7c11060', into: '654b709a6abd01feb7c11061', 'Intercom-Version': '2.10' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Intercom.NotFoundError);
  });

  test('search: only required params', async () => {
    const responsePromise = intercom.contacts.search({ query: {} });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('search: required and optional params', async () => {
    const response = await intercom.contacts.search({
      query: { field: 'custom_attributes.social_network', operator: '=', value: 'string' },
      pagination: {
        page: 2,
        starting_after:
          '1HaSB+xrOyyMXAkS/c1RteCL7BzOzTvYjmjakgTergIH31eoe2v4/sbLsJWP\nIncfQLD3ouPkZlCwJ86F\n',
      },
      'Intercom-Version': '2.10',
    });
  });

  test('unarchive', async () => {
    const responsePromise = intercom.contacts.unarchive('63a07ddf05a32042dffac965');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('unarchive: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      intercom.contacts.unarchive('63a07ddf05a32042dffac965', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Intercom.NotFoundError);
  });

  test('unarchive: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      intercom.contacts.unarchive(
        '63a07ddf05a32042dffac965',
        { 'Intercom-Version': '2.10' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Intercom.NotFoundError);
  });
});
