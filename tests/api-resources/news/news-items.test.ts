// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Intercom from 'intercom';
import { Response } from 'node-fetch';

const intercom = new Intercom({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource newsItems', () => {
  test('create: only required params', async () => {
    const responsePromise = intercom.news.newsItems.create({
      sender_id: 991268887,
      title: 'Halloween is here!',
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
    const response = await intercom.news.newsItems.create({
      sender_id: 991268887,
      title: 'Halloween is here!',
      body: '<p>New costumes in store for this spooky season</p>',
      deliver_silently: true,
      labels: ['Product', 'Update', 'New'],
      newsfeed_assignments: [{ newsfeed_id: 103, published_at: 1664638214 }],
      reactions: ['😆', '😅'],
      state: 'live',
      'Intercom-Version': '2.10',
    });
  });

  test('retrieve', async () => {
    const responsePromise = intercom.news.newsItems.retrieve(123);
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
    await expect(intercom.news.newsItems.retrieve(123, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Intercom.NotFoundError,
    );
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      intercom.news.newsItems.retrieve(
        123,
        { 'Intercom-Version': '2.10' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Intercom.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = intercom.news.newsItems.update(123, {
      sender_id: 991268898,
      title: 'Christmas is here!',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await intercom.news.newsItems.update(123, {
      sender_id: 991268898,
      title: 'Christmas is here!',
      body: '<p>New gifts in store for the jolly season</p>',
      deliver_silently: true,
      labels: ['Product', 'Update', 'New'],
      newsfeed_assignments: [
        { newsfeed_id: 198313, published_at: 1674917488 },
        { newsfeed_id: 198313, published_at: 1674917488 },
        { newsfeed_id: 198313, published_at: 1674917488 },
      ],
      reactions: ['😝', '😂'],
      state: 'live',
      'Intercom-Version': '2.10',
    });
  });

  test('list', async () => {
    const responsePromise = intercom.news.newsItems.list();
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
    await expect(intercom.news.newsItems.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Intercom.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      intercom.news.newsItems.list({ 'Intercom-Version': '2.10' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Intercom.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = intercom.news.newsItems.delete(123);
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
    await expect(intercom.news.newsItems.delete(123, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Intercom.NotFoundError,
    );
  });

  test('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      intercom.news.newsItems.delete(
        123,
        { 'Intercom-Version': '2.10' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Intercom.NotFoundError);
  });
});
