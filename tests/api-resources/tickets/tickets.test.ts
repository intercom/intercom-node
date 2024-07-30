// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Intercom from 'intercom-client';
import { Response } from 'node-fetch';

const client = new Intercom({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tickets', () => {
  test('create: only required params', async () => {
    const responsePromise = client.tickets.create({
      contacts: [{ id: '6657af026abd0167d9419def' }],
      ticket_type_id: 'ticket_type_id',
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
    const response = await client.tickets.create({
      contacts: [{ id: '6657af026abd0167d9419def' }],
      ticket_type_id: 'ticket_type_id',
      company_id: '1234',
      created_at: 1590000000,
      ticket_attributes: { _default_title_: 'example', _default_description_: 'there is a problem' },
      'Intercom-Version': '2.11',
    });
  });

  test('reply: only required params', async () => {
    const responsePromise = client.tickets.reply('123', {
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

  test('reply: required and optional params', async () => {
    const response = await client.tickets.reply('123', {
      body: 'body',
      message_type: 'comment',
      type: 'user',
      attachment_urls: ['https://example.com', 'https://example.com', 'https://example.com'],
      created_at: 1590000000,
      'Intercom-Version': '2.11',
    });
  });

  test('retrieveById', async () => {
    const responsePromise = client.tickets.retrieveById('id');
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
    await expect(client.tickets.retrieveById('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Intercom.NotFoundError,
    );
  });

  test('retrieveById: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.tickets.retrieveById('id', { 'Intercom-Version': '2.11' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Intercom.NotFoundError);
  });

  test('search: only required params', async () => {
    const responsePromise = client.tickets.search({ query: {} });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('search: required and optional params', async () => {
    const response = await client.tickets.search({
      query: { field: 'created_at', operator: '=', value: 'value' },
      pagination: { per_page: 5, starting_after: 'your-cursor-from-response' },
      'Intercom-Version': '2.11',
    });
  });

  test('updateById', async () => {
    const responsePromise = client.tickets.updateById('id');
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
    await expect(client.tickets.updateById('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Intercom.NotFoundError,
    );
  });

  test('updateById: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.tickets.updateById(
        'id',
        {
          assignment: { admin_id: '991268839', assignee_id: '991268841' },
          is_shared: true,
          open: true,
          snoozed_until: 1673609604,
          state: 'in_progress',
          ticket_attributes: { _default_title_: 'example', _default_description_: 'there is a problem' },
          'Intercom-Version': '2.11',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Intercom.NotFoundError);
  });
});
