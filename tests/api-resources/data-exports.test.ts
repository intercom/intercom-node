// File generated from our OpenAPI spec by Stainless.

import Intercom from 'intercom';
import { Response } from 'node-fetch';

const intercom = new Intercom({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource dataExports', () => {
  test('contentData: only required params', async () => {
    const responsePromise = intercom.dataExports.contentData({
      created_at_after: 1698309467,
      created_at_before: 1698327467,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('contentData: required and optional params', async () => {
    const response = await intercom.dataExports.contentData({
      created_at_after: 1698309467,
      created_at_before: 1698327467,
      'Intercom-Version': 'Unstable',
    });
  });
});
