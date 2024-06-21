// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Intercom from 'intercom-client';
import { Response } from 'node-fetch';

const intercom = new Intercom({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource collections', () => {
  test('create: only required params', async () => {
    const responsePromise = intercom.helpCenter.collections.create({ name: 'Thanks for everything' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await intercom.helpCenter.collections.create({
      name: 'Thanks for everything',
      description: 'English description',
      help_center_id: 0,
      parent_id: '6871118',
      translated_content: {
        type: 'group_translated_content',
        ar: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
        bg: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
        bs: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
        ca: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
        cs: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
        da: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
        de: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
        el: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
        en: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
        es: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
        et: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
        fi: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
        fr: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
        he: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
        hr: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
        hu: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
        id: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
        it: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
        ja: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
        ko: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
        lt: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
        lv: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
        mn: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
        nb: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
        nl: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
        pl: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
        pt: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
        ro: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
        ru: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
        sl: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
        sr: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
        sv: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
        tr: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
        vi: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
        'pt-BR': { type: 'group_content', name: 'Collection name', description: ' Collection description' },
        'zh-CN': { type: 'group_content', name: 'Collection name', description: ' Collection description' },
        'zh-TW': { type: 'group_content', name: 'Collection name', description: ' Collection description' },
      },
      'Intercom-Version': '2.11',
    });
  });

  test('retrieve', async () => {
    const responsePromise = intercom.helpCenter.collections.retrieve(123);
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
      intercom.helpCenter.collections.retrieve(123, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Intercom.NotFoundError);
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      intercom.helpCenter.collections.retrieve(
        123,
        { 'Intercom-Version': '2.11' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Intercom.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = intercom.helpCenter.collections.update(123);
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
      intercom.helpCenter.collections.update(123, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Intercom.NotFoundError);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      intercom.helpCenter.collections.update(
        123,
        {
          description: 'English description',
          name: 'Update collection name',
          parent_id: '6871118',
          translated_content: {
            type: 'group_translated_content',
            ar: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
            bg: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
            bs: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
            ca: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
            cs: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
            da: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
            de: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
            el: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
            en: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
            es: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
            et: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
            fi: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
            fr: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
            he: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
            hr: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
            hu: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
            id: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
            it: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
            ja: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
            ko: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
            lt: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
            lv: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
            mn: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
            nb: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
            nl: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
            pl: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
            pt: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
            ro: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
            ru: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
            sl: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
            sr: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
            sv: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
            tr: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
            vi: { type: 'group_content', name: 'Collection name', description: ' Collection description' },
            'pt-BR': {
              type: 'group_content',
              name: 'Collection name',
              description: ' Collection description',
            },
            'zh-CN': {
              type: 'group_content',
              name: 'Collection name',
              description: ' Collection description',
            },
            'zh-TW': {
              type: 'group_content',
              name: 'Collection name',
              description: ' Collection description',
            },
          },
          'Intercom-Version': '2.11',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Intercom.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = intercom.helpCenter.collections.list();
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
    await expect(intercom.helpCenter.collections.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Intercom.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      intercom.helpCenter.collections.list(
        { 'Intercom-Version': '2.11' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Intercom.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = intercom.helpCenter.collections.delete(123);
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
      intercom.helpCenter.collections.delete(123, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Intercom.NotFoundError);
  });

  test('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      intercom.helpCenter.collections.delete(
        123,
        { 'Intercom-Version': '2.11' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Intercom.NotFoundError);
  });
});
