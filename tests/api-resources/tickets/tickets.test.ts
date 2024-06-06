// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Intercom from 'intercom';
import { Response } from 'node-fetch';

const intercom = new Intercom({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tickets', () => {
  test('create: only required params', async () => {
    const responsePromise = intercom.tickets.create({
      contacts: [{ id: '654b84736abd01feb7c111a1' }],
      ticket_type_id: 'string',
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
    const response = await intercom.tickets.create({
      contacts: [{ id: '654b84736abd01feb7c111a1' }],
      ticket_type_id: 'string',
      ticket_attributes: { title: 'example', description: 'there is a problem' },
      'Intercom-Version': '2.10',
    });
  });

  test('reply: only required params', async () => {
    const responsePromise = intercom.tickets.reply('123', {
      body: 'string',
      intercom_user_id: 'string',
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

  test('reply: required and optional params', async () => {
    const response = await intercom.tickets.reply('123', {
      body: 'string',
      intercom_user_id: 'string',
      message_type: 'comment',
      type: 'user',
      attachment_urls: ['https://example.com', 'https://example.com', 'https://example.com'],
      'Intercom-Version': '2.10',
    });
  });

  test('retrieveById', async () => {
    const responsePromise = intercom.tickets.retrieveById('string');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveById: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      intercom.tickets.retrieveById('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Intercom.NotFoundError);
  });

  test('retrieveById: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      intercom.tickets.retrieveById(
        'string',
        { 'Intercom-Version': '2.10' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Intercom.NotFoundError);
  });

  test('search: only required params', async () => {
    const responsePromise = intercom.tickets.search({ query: {} });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('search: required and optional params', async () => {
    const response = await intercom.tickets.search({
      query: { field: 'custom_attributes.social_network', operator: '=', value: 'string' },
      pagination: {
        page: 2,
        starting_after:
          '1HaSB+xrOyyMXAkS/c1RteCL7BzOzTvYjmjakgTergIH31eoe2v4/sbLsJWP\nIncfQLD3ouPkZlCwJ86F\n',
      },
      'Intercom-Version': '2.10',
    });
  });

  test('updateById', async () => {
    const responsePromise = intercom.tickets.updateById('string');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateById: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(intercom.tickets.updateById('string', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Intercom.NotFoundError,
    );
  });

  test('updateById: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      intercom.tickets.updateById(
        'string',
        {
          assignment: { admin_id: '991269042', assignee_id: '991269044' },
          is_shared: true,
          open: true,
          snoozed_until: 1673609604,
          state: 'in_progress',
          ticket_attributes: { title: 'example', description: 'there is a problem' },
          'Intercom-Version': '2.10',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Intercom.NotFoundError);
  });
});
