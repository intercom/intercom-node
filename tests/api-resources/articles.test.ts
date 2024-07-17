// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Intercom from 'intercom-client';
import { Response } from 'node-fetch';

const intercom = new Intercom({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource articles', () => {
  test('create: only required params', async () => {
    const responsePromise = intercom.articles.create({
      author_id: 991268363,
      title: 'Thanks for everything',
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
    const response = await intercom.articles.create({
      author_id: 991268363,
      title: 'Thanks for everything',
      body: 'Body of the Article',
      description: 'Description of the Article',
      parent_id: 290,
      parent_type: 'collection',
      state: 'published',
      translated_content: {
        type: 'article_translated_content',
        ar: {
          type: 'article_content',
          title: 'How to create a new article',
          description: 'This article will show you how to create a new article.',
          body: 'This is the body of the article.',
          author_id: 0,
          state: 'draft',
          created_at: 1663597223,
          updated_at: 1663597260,
          url: 'http://intercom.test/help/en/articles/3-default-language',
        },
        bg: {
          type: 'article_content',
          title: 'How to create a new article',
          description: 'This article will show you how to create a new article.',
          body: 'This is the body of the article.',
          author_id: 0,
          state: 'draft',
          created_at: 1663597223,
          updated_at: 1663597260,
          url: 'http://intercom.test/help/en/articles/3-default-language',
        },
        bs: {
          type: 'article_content',
          title: 'How to create a new article',
          description: 'This article will show you how to create a new article.',
          body: 'This is the body of the article.',
          author_id: 0,
          state: 'draft',
          created_at: 1663597223,
          updated_at: 1663597260,
          url: 'http://intercom.test/help/en/articles/3-default-language',
        },
        ca: {
          type: 'article_content',
          title: 'How to create a new article',
          description: 'This article will show you how to create a new article.',
          body: 'This is the body of the article.',
          author_id: 0,
          state: 'draft',
          created_at: 1663597223,
          updated_at: 1663597260,
          url: 'http://intercom.test/help/en/articles/3-default-language',
        },
        cs: {
          type: 'article_content',
          title: 'How to create a new article',
          description: 'This article will show you how to create a new article.',
          body: 'This is the body of the article.',
          author_id: 0,
          state: 'draft',
          created_at: 1663597223,
          updated_at: 1663597260,
          url: 'http://intercom.test/help/en/articles/3-default-language',
        },
        da: {
          type: 'article_content',
          title: 'How to create a new article',
          description: 'This article will show you how to create a new article.',
          body: 'This is the body of the article.',
          author_id: 0,
          state: 'draft',
          created_at: 1663597223,
          updated_at: 1663597260,
          url: 'http://intercom.test/help/en/articles/3-default-language',
        },
        de: {
          type: 'article_content',
          title: 'How to create a new article',
          description: 'This article will show you how to create a new article.',
          body: 'This is the body of the article.',
          author_id: 0,
          state: 'draft',
          created_at: 1663597223,
          updated_at: 1663597260,
          url: 'http://intercom.test/help/en/articles/3-default-language',
        },
        el: {
          type: 'article_content',
          title: 'How to create a new article',
          description: 'This article will show you how to create a new article.',
          body: 'This is the body of the article.',
          author_id: 0,
          state: 'draft',
          created_at: 1663597223,
          updated_at: 1663597260,
          url: 'http://intercom.test/help/en/articles/3-default-language',
        },
        en: {
          type: 'article_content',
          title: 'How to create a new article',
          description: 'This article will show you how to create a new article.',
          body: 'This is the body of the article.',
          author_id: 0,
          state: 'draft',
          created_at: 1663597223,
          updated_at: 1663597260,
          url: 'http://intercom.test/help/en/articles/3-default-language',
        },
        es: {
          type: 'article_content',
          title: 'How to create a new article',
          description: 'This article will show you how to create a new article.',
          body: 'This is the body of the article.',
          author_id: 0,
          state: 'draft',
          created_at: 1663597223,
          updated_at: 1663597260,
          url: 'http://intercom.test/help/en/articles/3-default-language',
        },
        et: {
          type: 'article_content',
          title: 'How to create a new article',
          description: 'This article will show you how to create a new article.',
          body: 'This is the body of the article.',
          author_id: 0,
          state: 'draft',
          created_at: 1663597223,
          updated_at: 1663597260,
          url: 'http://intercom.test/help/en/articles/3-default-language',
        },
        fi: {
          type: 'article_content',
          title: 'How to create a new article',
          description: 'This article will show you how to create a new article.',
          body: 'This is the body of the article.',
          author_id: 0,
          state: 'draft',
          created_at: 1663597223,
          updated_at: 1663597260,
          url: 'http://intercom.test/help/en/articles/3-default-language',
        },
        fr: {
          type: 'article_content',
          title: 'Merci pour tout',
          description: "Description de l'article",
          body: "Corps de l'article",
          author_id: 991268363,
          state: 'published',
          created_at: 1663597223,
          updated_at: 1663597260,
          url: 'http://intercom.test/help/en/articles/3-default-language',
        },
        he: {
          type: 'article_content',
          title: 'How to create a new article',
          description: 'This article will show you how to create a new article.',
          body: 'This is the body of the article.',
          author_id: 0,
          state: 'draft',
          created_at: 1663597223,
          updated_at: 1663597260,
          url: 'http://intercom.test/help/en/articles/3-default-language',
        },
        hr: {
          type: 'article_content',
          title: 'How to create a new article',
          description: 'This article will show you how to create a new article.',
          body: 'This is the body of the article.',
          author_id: 0,
          state: 'draft',
          created_at: 1663597223,
          updated_at: 1663597260,
          url: 'http://intercom.test/help/en/articles/3-default-language',
        },
        hu: {
          type: 'article_content',
          title: 'How to create a new article',
          description: 'This article will show you how to create a new article.',
          body: 'This is the body of the article.',
          author_id: 0,
          state: 'draft',
          created_at: 1663597223,
          updated_at: 1663597260,
          url: 'http://intercom.test/help/en/articles/3-default-language',
        },
        id: {
          type: 'article_content',
          title: 'How to create a new article',
          description: 'This article will show you how to create a new article.',
          body: 'This is the body of the article.',
          author_id: 0,
          state: 'draft',
          created_at: 1663597223,
          updated_at: 1663597260,
          url: 'http://intercom.test/help/en/articles/3-default-language',
        },
        it: {
          type: 'article_content',
          title: 'How to create a new article',
          description: 'This article will show you how to create a new article.',
          body: 'This is the body of the article.',
          author_id: 0,
          state: 'draft',
          created_at: 1663597223,
          updated_at: 1663597260,
          url: 'http://intercom.test/help/en/articles/3-default-language',
        },
        ja: {
          type: 'article_content',
          title: 'How to create a new article',
          description: 'This article will show you how to create a new article.',
          body: 'This is the body of the article.',
          author_id: 0,
          state: 'draft',
          created_at: 1663597223,
          updated_at: 1663597260,
          url: 'http://intercom.test/help/en/articles/3-default-language',
        },
        ko: {
          type: 'article_content',
          title: 'How to create a new article',
          description: 'This article will show you how to create a new article.',
          body: 'This is the body of the article.',
          author_id: 0,
          state: 'draft',
          created_at: 1663597223,
          updated_at: 1663597260,
          url: 'http://intercom.test/help/en/articles/3-default-language',
        },
        lt: {
          type: 'article_content',
          title: 'How to create a new article',
          description: 'This article will show you how to create a new article.',
          body: 'This is the body of the article.',
          author_id: 0,
          state: 'draft',
          created_at: 1663597223,
          updated_at: 1663597260,
          url: 'http://intercom.test/help/en/articles/3-default-language',
        },
        lv: {
          type: 'article_content',
          title: 'How to create a new article',
          description: 'This article will show you how to create a new article.',
          body: 'This is the body of the article.',
          author_id: 0,
          state: 'draft',
          created_at: 1663597223,
          updated_at: 1663597260,
          url: 'http://intercom.test/help/en/articles/3-default-language',
        },
        mn: {
          type: 'article_content',
          title: 'How to create a new article',
          description: 'This article will show you how to create a new article.',
          body: 'This is the body of the article.',
          author_id: 0,
          state: 'draft',
          created_at: 1663597223,
          updated_at: 1663597260,
          url: 'http://intercom.test/help/en/articles/3-default-language',
        },
        nb: {
          type: 'article_content',
          title: 'How to create a new article',
          description: 'This article will show you how to create a new article.',
          body: 'This is the body of the article.',
          author_id: 0,
          state: 'draft',
          created_at: 1663597223,
          updated_at: 1663597260,
          url: 'http://intercom.test/help/en/articles/3-default-language',
        },
        nl: {
          type: 'article_content',
          title: 'How to create a new article',
          description: 'This article will show you how to create a new article.',
          body: 'This is the body of the article.',
          author_id: 0,
          state: 'draft',
          created_at: 1663597223,
          updated_at: 1663597260,
          url: 'http://intercom.test/help/en/articles/3-default-language',
        },
        pl: {
          type: 'article_content',
          title: 'How to create a new article',
          description: 'This article will show you how to create a new article.',
          body: 'This is the body of the article.',
          author_id: 0,
          state: 'draft',
          created_at: 1663597223,
          updated_at: 1663597260,
          url: 'http://intercom.test/help/en/articles/3-default-language',
        },
        pt: {
          type: 'article_content',
          title: 'How to create a new article',
          description: 'This article will show you how to create a new article.',
          body: 'This is the body of the article.',
          author_id: 0,
          state: 'draft',
          created_at: 1663597223,
          updated_at: 1663597260,
          url: 'http://intercom.test/help/en/articles/3-default-language',
        },
        ro: {
          type: 'article_content',
          title: 'How to create a new article',
          description: 'This article will show you how to create a new article.',
          body: 'This is the body of the article.',
          author_id: 0,
          state: 'draft',
          created_at: 1663597223,
          updated_at: 1663597260,
          url: 'http://intercom.test/help/en/articles/3-default-language',
        },
        ru: {
          type: 'article_content',
          title: 'How to create a new article',
          description: 'This article will show you how to create a new article.',
          body: 'This is the body of the article.',
          author_id: 0,
          state: 'draft',
          created_at: 1663597223,
          updated_at: 1663597260,
          url: 'http://intercom.test/help/en/articles/3-default-language',
        },
        sl: {
          type: 'article_content',
          title: 'How to create a new article',
          description: 'This article will show you how to create a new article.',
          body: 'This is the body of the article.',
          author_id: 0,
          state: 'draft',
          created_at: 1663597223,
          updated_at: 1663597260,
          url: 'http://intercom.test/help/en/articles/3-default-language',
        },
        sr: {
          type: 'article_content',
          title: 'How to create a new article',
          description: 'This article will show you how to create a new article.',
          body: 'This is the body of the article.',
          author_id: 0,
          state: 'draft',
          created_at: 1663597223,
          updated_at: 1663597260,
          url: 'http://intercom.test/help/en/articles/3-default-language',
        },
        sv: {
          type: 'article_content',
          title: 'How to create a new article',
          description: 'This article will show you how to create a new article.',
          body: 'This is the body of the article.',
          author_id: 0,
          state: 'draft',
          created_at: 1663597223,
          updated_at: 1663597260,
          url: 'http://intercom.test/help/en/articles/3-default-language',
        },
        tr: {
          type: 'article_content',
          title: 'How to create a new article',
          description: 'This article will show you how to create a new article.',
          body: 'This is the body of the article.',
          author_id: 0,
          state: 'draft',
          created_at: 1663597223,
          updated_at: 1663597260,
          url: 'http://intercom.test/help/en/articles/3-default-language',
        },
        vi: {
          type: 'article_content',
          title: 'How to create a new article',
          description: 'This article will show you how to create a new article.',
          body: 'This is the body of the article.',
          author_id: 0,
          state: 'draft',
          created_at: 1663597223,
          updated_at: 1663597260,
          url: 'http://intercom.test/help/en/articles/3-default-language',
        },
        'pt-BR': {
          type: 'article_content',
          title: 'How to create a new article',
          description: 'This article will show you how to create a new article.',
          body: 'This is the body of the article.',
          author_id: 0,
          state: 'draft',
          created_at: 1663597223,
          updated_at: 1663597260,
          url: 'http://intercom.test/help/en/articles/3-default-language',
        },
        'zh-CN': {
          type: 'article_content',
          title: 'How to create a new article',
          description: 'This article will show you how to create a new article.',
          body: 'This is the body of the article.',
          author_id: 0,
          state: 'draft',
          created_at: 1663597223,
          updated_at: 1663597260,
          url: 'http://intercom.test/help/en/articles/3-default-language',
        },
        'zh-TW': {
          type: 'article_content',
          title: 'How to create a new article',
          description: 'This article will show you how to create a new article.',
          body: 'This is the body of the article.',
          author_id: 0,
          state: 'draft',
          created_at: 1663597223,
          updated_at: 1663597260,
          url: 'http://intercom.test/help/en/articles/3-default-language',
        },
      },
      'Intercom-Version': '2.11',
    });
  });

  test('retrieve', async () => {
    const responsePromise = intercom.articles.retrieve(123);
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
    await expect(intercom.articles.retrieve(123, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Intercom.NotFoundError,
    );
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      intercom.articles.retrieve(123, { 'Intercom-Version': '2.11' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Intercom.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = intercom.articles.update(123);
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
    await expect(intercom.articles.update(123, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Intercom.NotFoundError,
    );
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      intercom.articles.update(
        123,
        {
          author_id: 1295,
          body: '<p>New gifts in store for the jolly season</p>',
          description: 'Description of the Article',
          parent_id: '18',
          parent_type: 'collection',
          state: 'draft',
          title: 'Christmas is here!',
          translated_content: {
            type: 'article_translated_content',
            ar: {
              type: 'article_content',
              title: 'How to create a new article',
              description: 'This article will show you how to create a new article.',
              body: 'This is the body of the article.',
              author_id: 0,
              state: 'draft',
              created_at: 1663597223,
              updated_at: 1663597260,
              url: 'http://intercom.test/help/en/articles/3-default-language',
            },
            bg: {
              type: 'article_content',
              title: 'How to create a new article',
              description: 'This article will show you how to create a new article.',
              body: 'This is the body of the article.',
              author_id: 0,
              state: 'draft',
              created_at: 1663597223,
              updated_at: 1663597260,
              url: 'http://intercom.test/help/en/articles/3-default-language',
            },
            bs: {
              type: 'article_content',
              title: 'How to create a new article',
              description: 'This article will show you how to create a new article.',
              body: 'This is the body of the article.',
              author_id: 0,
              state: 'draft',
              created_at: 1663597223,
              updated_at: 1663597260,
              url: 'http://intercom.test/help/en/articles/3-default-language',
            },
            ca: {
              type: 'article_content',
              title: 'How to create a new article',
              description: 'This article will show you how to create a new article.',
              body: 'This is the body of the article.',
              author_id: 0,
              state: 'draft',
              created_at: 1663597223,
              updated_at: 1663597260,
              url: 'http://intercom.test/help/en/articles/3-default-language',
            },
            cs: {
              type: 'article_content',
              title: 'How to create a new article',
              description: 'This article will show you how to create a new article.',
              body: 'This is the body of the article.',
              author_id: 0,
              state: 'draft',
              created_at: 1663597223,
              updated_at: 1663597260,
              url: 'http://intercom.test/help/en/articles/3-default-language',
            },
            da: {
              type: 'article_content',
              title: 'How to create a new article',
              description: 'This article will show you how to create a new article.',
              body: 'This is the body of the article.',
              author_id: 0,
              state: 'draft',
              created_at: 1663597223,
              updated_at: 1663597260,
              url: 'http://intercom.test/help/en/articles/3-default-language',
            },
            de: {
              type: 'article_content',
              title: 'How to create a new article',
              description: 'This article will show you how to create a new article.',
              body: 'This is the body of the article.',
              author_id: 0,
              state: 'draft',
              created_at: 1663597223,
              updated_at: 1663597260,
              url: 'http://intercom.test/help/en/articles/3-default-language',
            },
            el: {
              type: 'article_content',
              title: 'How to create a new article',
              description: 'This article will show you how to create a new article.',
              body: 'This is the body of the article.',
              author_id: 0,
              state: 'draft',
              created_at: 1663597223,
              updated_at: 1663597260,
              url: 'http://intercom.test/help/en/articles/3-default-language',
            },
            en: {
              type: 'article_content',
              title: 'How to create a new article',
              description: 'This article will show you how to create a new article.',
              body: 'This is the body of the article.',
              author_id: 0,
              state: 'draft',
              created_at: 1663597223,
              updated_at: 1663597260,
              url: 'http://intercom.test/help/en/articles/3-default-language',
            },
            es: {
              type: 'article_content',
              title: 'How to create a new article',
              description: 'This article will show you how to create a new article.',
              body: 'This is the body of the article.',
              author_id: 0,
              state: 'draft',
              created_at: 1663597223,
              updated_at: 1663597260,
              url: 'http://intercom.test/help/en/articles/3-default-language',
            },
            et: {
              type: 'article_content',
              title: 'How to create a new article',
              description: 'This article will show you how to create a new article.',
              body: 'This is the body of the article.',
              author_id: 0,
              state: 'draft',
              created_at: 1663597223,
              updated_at: 1663597260,
              url: 'http://intercom.test/help/en/articles/3-default-language',
            },
            fi: {
              type: 'article_content',
              title: 'How to create a new article',
              description: 'This article will show you how to create a new article.',
              body: 'This is the body of the article.',
              author_id: 0,
              state: 'draft',
              created_at: 1663597223,
              updated_at: 1663597260,
              url: 'http://intercom.test/help/en/articles/3-default-language',
            },
            fr: {
              type: 'article_content',
              title: 'How to create a new article',
              description: 'This article will show you how to create a new article.',
              body: 'This is the body of the article.',
              author_id: 0,
              state: 'draft',
              created_at: 1663597223,
              updated_at: 1663597260,
              url: 'http://intercom.test/help/en/articles/3-default-language',
            },
            he: {
              type: 'article_content',
              title: 'How to create a new article',
              description: 'This article will show you how to create a new article.',
              body: 'This is the body of the article.',
              author_id: 0,
              state: 'draft',
              created_at: 1663597223,
              updated_at: 1663597260,
              url: 'http://intercom.test/help/en/articles/3-default-language',
            },
            hr: {
              type: 'article_content',
              title: 'How to create a new article',
              description: 'This article will show you how to create a new article.',
              body: 'This is the body of the article.',
              author_id: 0,
              state: 'draft',
              created_at: 1663597223,
              updated_at: 1663597260,
              url: 'http://intercom.test/help/en/articles/3-default-language',
            },
            hu: {
              type: 'article_content',
              title: 'How to create a new article',
              description: 'This article will show you how to create a new article.',
              body: 'This is the body of the article.',
              author_id: 0,
              state: 'draft',
              created_at: 1663597223,
              updated_at: 1663597260,
              url: 'http://intercom.test/help/en/articles/3-default-language',
            },
            id: {
              type: 'article_content',
              title: 'How to create a new article',
              description: 'This article will show you how to create a new article.',
              body: 'This is the body of the article.',
              author_id: 0,
              state: 'draft',
              created_at: 1663597223,
              updated_at: 1663597260,
              url: 'http://intercom.test/help/en/articles/3-default-language',
            },
            it: {
              type: 'article_content',
              title: 'How to create a new article',
              description: 'This article will show you how to create a new article.',
              body: 'This is the body of the article.',
              author_id: 0,
              state: 'draft',
              created_at: 1663597223,
              updated_at: 1663597260,
              url: 'http://intercom.test/help/en/articles/3-default-language',
            },
            ja: {
              type: 'article_content',
              title: 'How to create a new article',
              description: 'This article will show you how to create a new article.',
              body: 'This is the body of the article.',
              author_id: 0,
              state: 'draft',
              created_at: 1663597223,
              updated_at: 1663597260,
              url: 'http://intercom.test/help/en/articles/3-default-language',
            },
            ko: {
              type: 'article_content',
              title: 'How to create a new article',
              description: 'This article will show you how to create a new article.',
              body: 'This is the body of the article.',
              author_id: 0,
              state: 'draft',
              created_at: 1663597223,
              updated_at: 1663597260,
              url: 'http://intercom.test/help/en/articles/3-default-language',
            },
            lt: {
              type: 'article_content',
              title: 'How to create a new article',
              description: 'This article will show you how to create a new article.',
              body: 'This is the body of the article.',
              author_id: 0,
              state: 'draft',
              created_at: 1663597223,
              updated_at: 1663597260,
              url: 'http://intercom.test/help/en/articles/3-default-language',
            },
            lv: {
              type: 'article_content',
              title: 'How to create a new article',
              description: 'This article will show you how to create a new article.',
              body: 'This is the body of the article.',
              author_id: 0,
              state: 'draft',
              created_at: 1663597223,
              updated_at: 1663597260,
              url: 'http://intercom.test/help/en/articles/3-default-language',
            },
            mn: {
              type: 'article_content',
              title: 'How to create a new article',
              description: 'This article will show you how to create a new article.',
              body: 'This is the body of the article.',
              author_id: 0,
              state: 'draft',
              created_at: 1663597223,
              updated_at: 1663597260,
              url: 'http://intercom.test/help/en/articles/3-default-language',
            },
            nb: {
              type: 'article_content',
              title: 'How to create a new article',
              description: 'This article will show you how to create a new article.',
              body: 'This is the body of the article.',
              author_id: 0,
              state: 'draft',
              created_at: 1663597223,
              updated_at: 1663597260,
              url: 'http://intercom.test/help/en/articles/3-default-language',
            },
            nl: {
              type: 'article_content',
              title: 'How to create a new article',
              description: 'This article will show you how to create a new article.',
              body: 'This is the body of the article.',
              author_id: 0,
              state: 'draft',
              created_at: 1663597223,
              updated_at: 1663597260,
              url: 'http://intercom.test/help/en/articles/3-default-language',
            },
            pl: {
              type: 'article_content',
              title: 'How to create a new article',
              description: 'This article will show you how to create a new article.',
              body: 'This is the body of the article.',
              author_id: 0,
              state: 'draft',
              created_at: 1663597223,
              updated_at: 1663597260,
              url: 'http://intercom.test/help/en/articles/3-default-language',
            },
            pt: {
              type: 'article_content',
              title: 'How to create a new article',
              description: 'This article will show you how to create a new article.',
              body: 'This is the body of the article.',
              author_id: 0,
              state: 'draft',
              created_at: 1663597223,
              updated_at: 1663597260,
              url: 'http://intercom.test/help/en/articles/3-default-language',
            },
            ro: {
              type: 'article_content',
              title: 'How to create a new article',
              description: 'This article will show you how to create a new article.',
              body: 'This is the body of the article.',
              author_id: 0,
              state: 'draft',
              created_at: 1663597223,
              updated_at: 1663597260,
              url: 'http://intercom.test/help/en/articles/3-default-language',
            },
            ru: {
              type: 'article_content',
              title: 'How to create a new article',
              description: 'This article will show you how to create a new article.',
              body: 'This is the body of the article.',
              author_id: 0,
              state: 'draft',
              created_at: 1663597223,
              updated_at: 1663597260,
              url: 'http://intercom.test/help/en/articles/3-default-language',
            },
            sl: {
              type: 'article_content',
              title: 'How to create a new article',
              description: 'This article will show you how to create a new article.',
              body: 'This is the body of the article.',
              author_id: 0,
              state: 'draft',
              created_at: 1663597223,
              updated_at: 1663597260,
              url: 'http://intercom.test/help/en/articles/3-default-language',
            },
            sr: {
              type: 'article_content',
              title: 'How to create a new article',
              description: 'This article will show you how to create a new article.',
              body: 'This is the body of the article.',
              author_id: 0,
              state: 'draft',
              created_at: 1663597223,
              updated_at: 1663597260,
              url: 'http://intercom.test/help/en/articles/3-default-language',
            },
            sv: {
              type: 'article_content',
              title: 'How to create a new article',
              description: 'This article will show you how to create a new article.',
              body: 'This is the body of the article.',
              author_id: 0,
              state: 'draft',
              created_at: 1663597223,
              updated_at: 1663597260,
              url: 'http://intercom.test/help/en/articles/3-default-language',
            },
            tr: {
              type: 'article_content',
              title: 'How to create a new article',
              description: 'This article will show you how to create a new article.',
              body: 'This is the body of the article.',
              author_id: 0,
              state: 'draft',
              created_at: 1663597223,
              updated_at: 1663597260,
              url: 'http://intercom.test/help/en/articles/3-default-language',
            },
            vi: {
              type: 'article_content',
              title: 'How to create a new article',
              description: 'This article will show you how to create a new article.',
              body: 'This is the body of the article.',
              author_id: 0,
              state: 'draft',
              created_at: 1663597223,
              updated_at: 1663597260,
              url: 'http://intercom.test/help/en/articles/3-default-language',
            },
            'pt-BR': {
              type: 'article_content',
              title: 'How to create a new article',
              description: 'This article will show you how to create a new article.',
              body: 'This is the body of the article.',
              author_id: 0,
              state: 'draft',
              created_at: 1663597223,
              updated_at: 1663597260,
              url: 'http://intercom.test/help/en/articles/3-default-language',
            },
            'zh-CN': {
              type: 'article_content',
              title: 'How to create a new article',
              description: 'This article will show you how to create a new article.',
              body: 'This is the body of the article.',
              author_id: 0,
              state: 'draft',
              created_at: 1663597223,
              updated_at: 1663597260,
              url: 'http://intercom.test/help/en/articles/3-default-language',
            },
            'zh-TW': {
              type: 'article_content',
              title: 'How to create a new article',
              description: 'This article will show you how to create a new article.',
              body: 'This is the body of the article.',
              author_id: 0,
              state: 'draft',
              created_at: 1663597223,
              updated_at: 1663597260,
              url: 'http://intercom.test/help/en/articles/3-default-language',
            },
          },
          'Intercom-Version': '2.11',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Intercom.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = intercom.articles.list();
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
    await expect(intercom.articles.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Intercom.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      intercom.articles.list({ 'Intercom-Version': '2.11' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Intercom.NotFoundError);
  });

  test('remove', async () => {
    const responsePromise = intercom.articles.remove(123);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('remove: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(intercom.articles.remove(123, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Intercom.NotFoundError,
    );
  });

  test('remove: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      intercom.articles.remove(123, { 'Intercom-Version': '2.11' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Intercom.NotFoundError);
  });

  test('search', async () => {
    const responsePromise = intercom.articles.search();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('search: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(intercom.articles.search({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Intercom.NotFoundError,
    );
  });

  test('search: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      intercom.articles.search(
        { help_center_id: 0, highlight: true, phrase: 'phrase', state: 'state', 'Intercom-Version': '2.11' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Intercom.NotFoundError);
  });
});
