// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Intercom from 'intercom';
import { Response } from 'node-fetch';

const intercom = new Intercom({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource conversations', () => {
  test('create: only required params', async () => {
    const responsePromise = intercom.conversations.create({
      body: 'Hello there',
      from: { type: 'user', id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
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
    const response = await intercom.conversations.create({
      body: 'Hello there',
      from: { type: 'user', id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
      'Intercom-Version': '2.11',
    });
  });

  test('retrieve', async () => {
    const responsePromise = intercom.conversations.retrieve(123);
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
    await expect(intercom.conversations.retrieve(123, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Intercom.NotFoundError,
    );
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      intercom.conversations.retrieve(
        123,
        { display_as: 'string', 'Intercom-Version': '2.11' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Intercom.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = intercom.conversations.update(123);
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
    await expect(intercom.conversations.update(123, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Intercom.NotFoundError,
    );
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      intercom.conversations.update(
        123,
        {
          display_as: 'string',
          custom_attributes: { issue_type: 'Billing', priority: 'High' },
          read: true,
          'Intercom-Version': '2.11',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Intercom.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = intercom.conversations.list();
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
    await expect(intercom.conversations.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Intercom.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      intercom.conversations.list(
        { per_page: 0, starting_after: 'string', 'Intercom-Version': '2.11' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Intercom.NotFoundError);
  });

  test('convert: only required params', async () => {
    const responsePromise = intercom.conversations.convert(123, { ticket_type_id: '120' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('convert: required and optional params', async () => {
    const response = await intercom.conversations.convert(123, {
      ticket_type_id: '120',
      attributes: { _default_title_: 'Found a bug', _default_description_: 'The button is not working' },
      'Intercom-Version': '2.11',
    });
  });

  test('redact: only required params', async () => {
    const responsePromise = intercom.conversations.redact({
      conversation_id: '19894788788',
      conversation_part_id: '19381789428',
      type: 'conversation_part',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('redact: required and optional params', async () => {
    const response = await intercom.conversations.redact({
      conversation_id: '19894788788',
      conversation_part_id: '19381789428',
      type: 'conversation_part',
      'Intercom-Version': '2.11',
    });
  });

  test('search: only required params', async () => {
    const responsePromise = intercom.conversations.search({ query: {} });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('search: required and optional params', async () => {
    const response = await intercom.conversations.search({
      query: { field: 'created_at', operator: '=', value: 'string' },
      pagination: { per_page: 5, starting_after: 'your-cursor-from-response' },
      'Intercom-Version': '2.11',
    });
  });
});
