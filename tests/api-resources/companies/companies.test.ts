// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Intercom from 'intercom';
import { Response } from 'node-fetch';

const intercom = new Intercom({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource companies', () => {
  test('create', async () => {
    const responsePromise = intercom.companies.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(intercom.companies.create({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Intercom.NotFoundError,
    );
  });

  test('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      intercom.companies.create(
        {
          company_id: 'company_remote_id',
          custom_attributes: { paid_subscriber: 'string', monthly_spend: 'string', team_mates: 'string' },
          industry: 'Manufacturing',
          monthly_spend: 1000,
          name: 'my company',
          plan: 'Enterprise',
          remote_created_at: 1374138000,
          size: 0,
          website: 'https://www.example.com',
          'Intercom-Version': '2.10',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Intercom.NotFoundError);
  });

  test('retrieve', async () => {
    const responsePromise = intercom.companies.retrieve('5f4d3c1c-7b1b-4d7d-a97e-6095715c6632');
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
      intercom.companies.retrieve('5f4d3c1c-7b1b-4d7d-a97e-6095715c6632', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Intercom.NotFoundError);
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      intercom.companies.retrieve(
        '5f4d3c1c-7b1b-4d7d-a97e-6095715c6632',
        { 'Intercom-Version': '2.10' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Intercom.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = intercom.companies.update('5f4d3c1c-7b1b-4d7d-a97e-6095715c6632');
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
      intercom.companies.update('5f4d3c1c-7b1b-4d7d-a97e-6095715c6632', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Intercom.NotFoundError);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      intercom.companies.update(
        '5f4d3c1c-7b1b-4d7d-a97e-6095715c6632',
        { 'Intercom-Version': '2.10' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Intercom.NotFoundError);
  });

  test('list: only required params', async () => {
    const responsePromise = intercom.companies.list({ filter: { tag_id: 'string' } });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await intercom.companies.list({
      filter: { tag_id: 'string' },
      order: 'string',
      page: 'string',
      per_page: 'string',
      'Intercom-Version': '2.10',
    });
  });

  test('delete', async () => {
    const responsePromise = intercom.companies.delete('5f4d3c1c-7b1b-4d7d-a97e-6095715c6632');
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
      intercom.companies.delete('5f4d3c1c-7b1b-4d7d-a97e-6095715c6632', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Intercom.NotFoundError);
  });

  test('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      intercom.companies.delete(
        '5f4d3c1c-7b1b-4d7d-a97e-6095715c6632',
        { 'Intercom-Version': '2.10' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Intercom.NotFoundError);
  });

  test('scroll', async () => {
    const responsePromise = intercom.companies.scroll();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('scroll: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(intercom.companies.scroll({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Intercom.NotFoundError,
    );
  });

  test('scroll: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      intercom.companies.scroll(
        { scroll_param: 'string', 'Intercom-Version': '2.10' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Intercom.NotFoundError);
  });
});
