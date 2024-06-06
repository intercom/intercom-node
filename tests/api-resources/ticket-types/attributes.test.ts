// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Intercom from 'intercom';
import { Response } from 'node-fetch';

const intercom = new Intercom({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource attributes', () => {
  test('create: only required params', async () => {
    const responsePromise = intercom.ticketTypes.attributes.create('string', {
      data_type: 'string',
      description: 'Attribute Description',
      name: 'Attribute Title',
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
    const response = await intercom.ticketTypes.attributes.create('string', {
      data_type: 'string',
      description: 'Attribute Description',
      name: 'Attribute Title',
      allow_multiple_values: false,
      list_items: 'Low Priority,Medium Priority,High Priority',
      multiline: false,
      required_to_create: false,
      required_to_create_for_contacts: false,
      visible_on_create: true,
      visible_to_contacts: true,
      'Intercom-Version': '2.10',
    });
  });

  test('update', async () => {
    const responsePromise = intercom.ticketTypes.attributes.update('string', 'string');
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
      intercom.ticketTypes.attributes.update('string', 'string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Intercom.NotFoundError);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      intercom.ticketTypes.attributes.update(
        'string',
        'string',
        {
          allow_multiple_values: false,
          archived: false,
          description: 'New Attribute Description',
          list_items: 'Low Priority,Medium Priority,High Priority',
          multiline: false,
          name: 'Bug Priority',
          required_to_create: false,
          required_to_create_for_contacts: false,
          visible_on_create: true,
          visible_to_contacts: true,
          'Intercom-Version': '2.10',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Intercom.NotFoundError);
  });
});
