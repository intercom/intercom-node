// File generated from our OpenAPI spec by Stainless.

import * as Core from 'intercom/core';
import { APIResource } from 'intercom/resource';
import { isRequestOptions } from 'intercom/core';
import * as ArticlesAPI from 'intercom/resources/articles';

export class Articles extends APIResource {
  /**
   * You can create a new article by making a POST request to
   * `https://api.intercom.io/articles`.
   */
  create(params: ArticleCreateParams, options?: Core.RequestOptions): Core.APIPromise<Article> {
    const { 'Intercom-Version': intercomVersion, ...body } = params;
    return this._client.post('/articles', {
      body,
      ...options,
      headers: { 'Intercom-Version': intercomVersion?.toString() || '', ...options?.headers },
    });
  }

  /**
   * You can fetch the details of a single article by making a GET request to
   * `https://api.intercom.io/articles/<id>`.
   */
  retrieve(
    id: number,
    params?: ArticleRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Article>;
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<Article>;
  retrieve(
    id: number,
    params: ArticleRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Article> {
    if (isRequestOptions(params)) {
      return this.retrieve(id, {}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.get(`/articles/${id}`, {
      ...options,
      headers: { 'Intercom-Version': intercomVersion?.toString() || '', ...options?.headers },
    });
  }

  /**
   * You can update the details of a single article by making a PUT request to
   * `https://api.intercom.io/articles/<id>`.
   */
  update(id: number, params?: ArticleUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Article>;
  update(id: number, options?: Core.RequestOptions): Core.APIPromise<Article>;
  update(
    id: number,
    params: ArticleUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Article> {
    if (isRequestOptions(params)) {
      return this.update(id, {}, params);
    }
    const { 'Intercom-Version': intercomVersion, ...body } = params;
    return this._client.put(`/articles/${id}`, {
      body,
      ...options,
      headers: { 'Intercom-Version': intercomVersion?.toString() || '', ...options?.headers },
    });
  }

  /**
   * You can fetch a list of all articles by making a GET request to
   * `https://api.intercom.io/articles`.
   *
   * > 📘 How are the articles sorted and ordered?
   * >
   * > Articles will be returned in descending order on the `updated_at` attribute.
   * > This means if you need to iterate through results then we'll show the most
   * > recently updated articles first.
   */
  list(params?: ArticleListParams, options?: Core.RequestOptions): Core.APIPromise<ArticleList>;
  list(options?: Core.RequestOptions): Core.APIPromise<ArticleList>;
  list(
    params: ArticleListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ArticleList> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.get('/articles', {
      ...options,
      headers: { 'Intercom-Version': intercomVersion?.toString() || '', ...options?.headers },
    });
  }

  /**
   * You can delete a single article by making a DELETE request to
   * `https://api.intercom.io/articles/<id>`.
   */
  remove(
    id: number,
    params?: ArticleRemoveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeletedArticleObject>;
  remove(id: number, options?: Core.RequestOptions): Core.APIPromise<DeletedArticleObject>;
  remove(
    id: number,
    params: ArticleRemoveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeletedArticleObject> {
    if (isRequestOptions(params)) {
      return this.remove(id, {}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.delete(`/articles/${id}`, {
      ...options,
      headers: { 'Intercom-Version': intercomVersion?.toString() || '', ...options?.headers },
    });
  }

  /**
   * You can search for articles by making a GET request to
   * `https://api.intercom.io/articles/search`.
   */
  search(params?: ArticleSearchParams, options?: Core.RequestOptions): Core.APIPromise<ArticleSearchResponse>;
  search(options?: Core.RequestOptions): Core.APIPromise<ArticleSearchResponse>;
  search(
    params: ArticleSearchParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ArticleSearchResponse> {
    if (isRequestOptions(params)) {
      return this.search({}, params);
    }
    const { 'Intercom-Version': intercomVersion, ...query } = params;
    return this._client.get('/articles/search', {
      query,
      ...options,
      headers: { 'Intercom-Version': intercomVersion?.toString() || '', ...options?.headers },
    });
  }
}

/**
 * The Articles API is a central place to gather all information and take actions
 * on your articles. Articles can live within collections and sections, or
 * alternatively they can stand alone.
 */
export interface Article {
  /**
   * The unique identifier for the article which is given by Intercom.
   */
  id?: string;

  /**
   * The id of the author of the article. For multilingual articles, this will be the
   * id of the author of the default language's content. Must be a teammate on the
   * help center's workspace.
   */
  author_id?: number;

  /**
   * The body of the article in HTML. For multilingual articles, this will be the
   * body of the default language's content.
   */
  body?: string | null;

  /**
   * The time when the article was created. For multilingual articles, this will be
   * the timestamp of creation of the default language's content.
   */
  created_at?: number;

  /**
   * The default locale of the help center. This field is only returned for
   * multilingual help centers.
   */
  default_locale?: string;

  /**
   * The description of the article. For multilingual articles, this will be the
   * description of the default language's content.
   */
  description?: string | null;

  /**
   * The id of the article's parent collection or section. An article without this
   * field stands alone.
   */
  parent_id?: number | null;

  /**
   * The ids of the article's parent collections or sections. An article without this
   * field stands alone.
   */
  parent_ids?: Array<number>;

  /**
   * The type of parent, which can either be a `collection` or `section`.
   */
  parent_type?: string | null;

  /**
   * Whether the article is `published` or is a `draft`. For multilingual articles,
   * this will be the state of the default language's content.
   */
  state?: 'published' | 'draft';

  /**
   * The statistics of an article.
   */
  statistics?: Article.Statistics | null;

  /**
   * The title of the article. For multilingual articles, this will be the title of
   * the default language's content.
   */
  title?: string;

  /**
   * The Translated Content of an Article. The keys are the locale codes and the
   * values are the translated content of the article.
   */
  translated_content?: Article.TranslatedContent | null;

  /**
   * The type of object - `article`.
   */
  type?: 'article';

  /**
   * The time when the article was last updated. For multilingual articles, this will
   * be the timestamp of last update of the default language's content.
   */
  updated_at?: number;

  /**
   * The URL of the article. For multilingual articles, this will be the URL of the
   * default language's content.
   */
  url?: string | null;

  /**
   * The id of the workspace which the article belongs to.
   */
  workspace_id?: string;
}

export namespace Article {
  /**
   * The statistics of an article.
   */
  export interface Statistics {
    /**
     * The number of conversations started from the article.
     */
    conversions?: number;

    /**
     * The percentage of happy reactions the article has received against other types
     * of reaction.
     */
    happy_reaction_percentage?: number;

    /**
     * The percentage of neutral reactions the article has received against other types
     * of reaction.
     */
    neutral_reaction_percentage?: number;

    /**
     * The number of total reactions the article has received.
     */
    reactions?: number;

    /**
     * The percentage of sad reactions the article has received against other types of
     * reaction.
     */
    sad_reaction_percentage?: number;

    /**
     * The type of object - `article_statistics`.
     */
    type?: 'article_statistics';

    /**
     * The number of total views the article has received.
     */
    views?: number;
  }

  /**
   * The Translated Content of an Article. The keys are the locale codes and the
   * values are the translated content of the article.
   */
  export interface TranslatedContent {
    /**
     * The content of the article in Indonesian
     */
    id?: TranslatedContent.ID | null;

    /**
     * The content of the article in Arabic
     */
    ar?: TranslatedContent.Ar | null;

    /**
     * The content of the article in Bulgarian
     */
    bg?: TranslatedContent.Bg | null;

    /**
     * The content of the article in Bosnian
     */
    bs?: TranslatedContent.Bs | null;

    /**
     * The content of the article in Catalan
     */
    ca?: TranslatedContent.Ca | null;

    /**
     * The content of the article in Czech
     */
    cs?: TranslatedContent.Cs | null;

    /**
     * The content of the article in Danish
     */
    da?: TranslatedContent.Da | null;

    /**
     * The content of the article in German
     */
    de?: TranslatedContent.De | null;

    /**
     * The content of the article in Greek
     */
    el?: TranslatedContent.El | null;

    /**
     * The content of the article in English
     */
    en?: TranslatedContent.En | null;

    /**
     * The content of the article in Spanish
     */
    es?: TranslatedContent.Es | null;

    /**
     * The content of the article in Estonian
     */
    et?: TranslatedContent.Et | null;

    /**
     * The content of the article in Finnish
     */
    fi?: TranslatedContent.Fi | null;

    /**
     * The content of the article in French
     */
    fr?: TranslatedContent.Fr | null;

    /**
     * The content of the article in Hebrew
     */
    he?: TranslatedContent.He | null;

    /**
     * The content of the article in Croatian
     */
    hr?: TranslatedContent.Hr | null;

    /**
     * The content of the article in Hungarian
     */
    hu?: TranslatedContent.Hu | null;

    /**
     * The content of the article in Italian
     */
    it?: TranslatedContent.It | null;

    /**
     * The content of the article in Japanese
     */
    ja?: TranslatedContent.Ja | null;

    /**
     * The content of the article in Korean
     */
    ko?: TranslatedContent.Ko | null;

    /**
     * The content of the article in Lithuanian
     */
    lt?: TranslatedContent.Lt | null;

    /**
     * The content of the article in Latvian
     */
    lv?: TranslatedContent.Lv | null;

    /**
     * The content of the article in Mongolian
     */
    mn?: TranslatedContent.Mn | null;

    /**
     * The content of the article in Norwegian
     */
    nb?: TranslatedContent.Nb | null;

    /**
     * The content of the article in Dutch
     */
    nl?: TranslatedContent.Nl | null;

    /**
     * The content of the article in Polish
     */
    pl?: TranslatedContent.Pl | null;

    /**
     * The content of the article in Portuguese (Portugal)
     */
    pt?: TranslatedContent.Pt | null;

    /**
     * The content of the article in Portuguese (Brazil)
     */
    'pt-BR'?: TranslatedContent.PtBr | null;

    /**
     * The content of the article in Romanian
     */
    ro?: TranslatedContent.Ro | null;

    /**
     * The content of the article in Russian
     */
    ru?: TranslatedContent.Ru | null;

    /**
     * The content of the article in Slovenian
     */
    sl?: TranslatedContent.Sl | null;

    /**
     * The content of the article in Serbian
     */
    sr?: TranslatedContent.Sr | null;

    /**
     * The content of the article in Swedish
     */
    sv?: TranslatedContent.Sv | null;

    /**
     * The content of the article in Turkish
     */
    tr?: TranslatedContent.Tr | null;

    /**
     * The type of object - article_translated_content.
     */
    type?: 'article_translated_content' | null;

    /**
     * The content of the article in Vietnamese
     */
    vi?: TranslatedContent.Vi | null;

    /**
     * The content of the article in Chinese (China)
     */
    'zh-CN'?: TranslatedContent.ZhCn | null;

    /**
     * The content of the article in Chinese (Taiwan)
     */
    'zh-TW'?: TranslatedContent.ZhTw | null;
  }

  export namespace TranslatedContent {
    /**
     * The content of the article in Indonesian
     */
    export interface ID {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Arabic
     */
    export interface Ar {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Bulgarian
     */
    export interface Bg {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Bosnian
     */
    export interface Bs {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Catalan
     */
    export interface Ca {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Czech
     */
    export interface Cs {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Danish
     */
    export interface Da {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in German
     */
    export interface De {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Greek
     */
    export interface El {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in English
     */
    export interface En {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Spanish
     */
    export interface Es {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Estonian
     */
    export interface Et {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Finnish
     */
    export interface Fi {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in French
     */
    export interface Fr {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Hebrew
     */
    export interface He {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Croatian
     */
    export interface Hr {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Hungarian
     */
    export interface Hu {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Italian
     */
    export interface It {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Japanese
     */
    export interface Ja {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Korean
     */
    export interface Ko {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Lithuanian
     */
    export interface Lt {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Latvian
     */
    export interface Lv {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Mongolian
     */
    export interface Mn {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Norwegian
     */
    export interface Nb {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Dutch
     */
    export interface Nl {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Polish
     */
    export interface Pl {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Portuguese (Portugal)
     */
    export interface Pt {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Portuguese (Brazil)
     */
    export interface PtBr {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Romanian
     */
    export interface Ro {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Russian
     */
    export interface Ru {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Slovenian
     */
    export interface Sl {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Serbian
     */
    export interface Sr {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Swedish
     */
    export interface Sv {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Turkish
     */
    export interface Tr {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Vietnamese
     */
    export interface Vi {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Chinese (China)
     */
    export interface ZhCn {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Chinese (Taiwan)
     */
    export interface ZhTw {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }
  }
}

/**
 * This will return a list of articles for the App.
 */
export interface ArticleList {
  /**
   * An array of Article objects
   */
  data?: Array<Article>;

  /**
   * Cursor-based pagination is a technique used in the Intercom API to navigate
   * through large amounts of data. A "cursor" or pointer is used to keep track of
   * the current position in the result set, allowing the API to return the data in
   * small chunks or "pages" as needed.
   */
  pages?: ArticleList.Pages | null;

  /**
   * A count of the total number of articles.
   */
  total_count?: number;

  /**
   * The type of the object - `list`.
   */
  type?: 'list';
}

export namespace ArticleList {
  /**
   * Cursor-based pagination is a technique used in the Intercom API to navigate
   * through large amounts of data. A "cursor" or pointer is used to keep track of
   * the current position in the result set, allowing the API to return the data in
   * small chunks or "pages" as needed.
   */
  export interface Pages {
    next?: Pages.Next | null;

    /**
     * The current page
     */
    page?: number;

    /**
     * Number of results per page
     */
    per_page?: number;

    /**
     * Total number of pages
     */
    total_pages?: number;

    /**
     * the type of object `pages`.
     */
    type?: 'pages';
  }

  export namespace Pages {
    export interface Next {
      page?: number;

      starting_after?: string;
    }
  }
}

/**
 * The results of an Article search
 */
export interface ArticleSearchResponse {
  /**
   * An object containing the results of the search.
   */
  data?: ArticleSearchResponse.Data;

  /**
   * Cursor-based pagination is a technique used in the Intercom API to navigate
   * through large amounts of data. A "cursor" or pointer is used to keep track of
   * the current position in the result set, allowing the API to return the data in
   * small chunks or "pages" as needed.
   */
  pages?: ArticleSearchResponse.Pages | null;

  /**
   * The total number of Articles matching the search query
   */
  total_count?: number;

  /**
   * The type of the object - `list`.
   */
  type?: 'list';
}

export namespace ArticleSearchResponse {
  /**
   * An object containing the results of the search.
   */
  export interface Data {
    /**
     * An array of Article objects
     */
    articles?: Array<ArticlesAPI.Article>;

    /**
     * A corresponding array of highlighted Article content
     */
    highlights?: Array<Data.Highlight>;
  }

  export namespace Data {
    /**
     * The highlighted results of an Article search. In the examples provided my search
     * query is always "my query".
     */
    export interface Highlight {
      /**
       * The ID of the corresponding article.
       */
      article_id?: string;

      /**
       * An Article description and body text highlighted.
       */
      highlighted_summary?: Array<Array<Highlight.HighlightedSummary>>;

      /**
       * An Article title highlighted.
       */
      highlighted_title?: Array<Highlight.HighlightedTitle>;
    }

    export namespace Highlight {
      /**
       * An instance of highlighted summary text.
       */
      export interface HighlightedSummary {
        /**
         * The text of the title.
         */
        text?: string;

        /**
         * The type of text - `highlight` or `plain`.
         */
        type?: 'highlight' | 'plain';
      }

      /**
       * A highlighted article title.
       */
      export interface HighlightedTitle {
        /**
         * The text of the title.
         */
        text?: string;

        /**
         * The type of text - `highlight` or `plain`.
         */
        type?: 'highlight' | 'plain';
      }
    }
  }

  /**
   * Cursor-based pagination is a technique used in the Intercom API to navigate
   * through large amounts of data. A "cursor" or pointer is used to keep track of
   * the current position in the result set, allowing the API to return the data in
   * small chunks or "pages" as needed.
   */
  export interface Pages {
    next?: Pages.Next | null;

    /**
     * The current page
     */
    page?: number;

    /**
     * Number of results per page
     */
    per_page?: number;

    /**
     * Total number of pages
     */
    total_pages?: number;

    /**
     * the type of object `pages`.
     */
    type?: 'pages';
  }

  export namespace Pages {
    export interface Next {
      page?: number;

      starting_after?: string;
    }
  }
}

/**
 * Response returned when an object is deleted
 */
export interface DeletedArticleObject {
  /**
   * The unique identifier for the article which you provided in the URL.
   */
  id?: string;

  /**
   * Whether the article was deleted successfully or not.
   */
  deleted?: boolean;

  /**
   * The type of object which was deleted. - article
   */
  object?: 'article';
}

export interface ArticleCreateParams {
  /**
   * Body param: The id of the author of the article. For multilingual articles, this
   * will be the id of the author of the default language's content. Must be a
   * teammate on the help center's workspace.
   */
  author_id: number;

  /**
   * Body param: The title of the article.For multilingual articles, this will be the
   * title of the default language's content.
   */
  title: string;

  /**
   * Body param: The content of the article. For multilingual articles, this will be
   * the body of the default language's content.
   */
  body?: string;

  /**
   * Body param: The description of the article. For multilingual articles, this will
   * be the description of the default language's content.
   */
  description?: string;

  /**
   * Body param: The id of the article's parent collection or section. An article
   * without this field stands alone.
   */
  parent_id?: number;

  /**
   * Body param: The type of parent, which can either be a `collection` or `section`.
   */
  parent_type?: string;

  /**
   * Body param: Whether the article will be `published` or will be a `draft`.
   * Defaults to draft. For multilingual articles, this will be the state of the
   * default language's content.
   */
  state?: 'published' | 'draft';

  /**
   * Body param: The Translated Content of an Article. The keys are the locale codes
   * and the values are the translated content of the article.
   */
  translated_content?: ArticleCreateParams.TranslatedContent | null;

  /**
   * Header param: Intercom API version.</br>By default, it's equal to the version
   * set in the app package.
   */
  'Intercom-Version'?:
    | '1.0'
    | '1.1'
    | '1.2'
    | '1.3'
    | '1.4'
    | '2.0'
    | '2.1'
    | '2.2'
    | '2.3'
    | '2.4'
    | '2.5'
    | '2.6'
    | '2.7'
    | '2.8'
    | '2.9'
    | '2.10'
    | 'Unstable';
}

export namespace ArticleCreateParams {
  /**
   * The Translated Content of an Article. The keys are the locale codes and the
   * values are the translated content of the article.
   */
  export interface TranslatedContent {
    /**
     * The content of the article in Indonesian
     */
    id?: TranslatedContent.ID | null;

    /**
     * The content of the article in Arabic
     */
    ar?: TranslatedContent.Ar | null;

    /**
     * The content of the article in Bulgarian
     */
    bg?: TranslatedContent.Bg | null;

    /**
     * The content of the article in Bosnian
     */
    bs?: TranslatedContent.Bs | null;

    /**
     * The content of the article in Catalan
     */
    ca?: TranslatedContent.Ca | null;

    /**
     * The content of the article in Czech
     */
    cs?: TranslatedContent.Cs | null;

    /**
     * The content of the article in Danish
     */
    da?: TranslatedContent.Da | null;

    /**
     * The content of the article in German
     */
    de?: TranslatedContent.De | null;

    /**
     * The content of the article in Greek
     */
    el?: TranslatedContent.El | null;

    /**
     * The content of the article in English
     */
    en?: TranslatedContent.En | null;

    /**
     * The content of the article in Spanish
     */
    es?: TranslatedContent.Es | null;

    /**
     * The content of the article in Estonian
     */
    et?: TranslatedContent.Et | null;

    /**
     * The content of the article in Finnish
     */
    fi?: TranslatedContent.Fi | null;

    /**
     * The content of the article in French
     */
    fr?: TranslatedContent.Fr | null;

    /**
     * The content of the article in Hebrew
     */
    he?: TranslatedContent.He | null;

    /**
     * The content of the article in Croatian
     */
    hr?: TranslatedContent.Hr | null;

    /**
     * The content of the article in Hungarian
     */
    hu?: TranslatedContent.Hu | null;

    /**
     * The content of the article in Italian
     */
    it?: TranslatedContent.It | null;

    /**
     * The content of the article in Japanese
     */
    ja?: TranslatedContent.Ja | null;

    /**
     * The content of the article in Korean
     */
    ko?: TranslatedContent.Ko | null;

    /**
     * The content of the article in Lithuanian
     */
    lt?: TranslatedContent.Lt | null;

    /**
     * The content of the article in Latvian
     */
    lv?: TranslatedContent.Lv | null;

    /**
     * The content of the article in Mongolian
     */
    mn?: TranslatedContent.Mn | null;

    /**
     * The content of the article in Norwegian
     */
    nb?: TranslatedContent.Nb | null;

    /**
     * The content of the article in Dutch
     */
    nl?: TranslatedContent.Nl | null;

    /**
     * The content of the article in Polish
     */
    pl?: TranslatedContent.Pl | null;

    /**
     * The content of the article in Portuguese (Portugal)
     */
    pt?: TranslatedContent.Pt | null;

    /**
     * The content of the article in Portuguese (Brazil)
     */
    'pt-BR'?: TranslatedContent.PtBr | null;

    /**
     * The content of the article in Romanian
     */
    ro?: TranslatedContent.Ro | null;

    /**
     * The content of the article in Russian
     */
    ru?: TranslatedContent.Ru | null;

    /**
     * The content of the article in Slovenian
     */
    sl?: TranslatedContent.Sl | null;

    /**
     * The content of the article in Serbian
     */
    sr?: TranslatedContent.Sr | null;

    /**
     * The content of the article in Swedish
     */
    sv?: TranslatedContent.Sv | null;

    /**
     * The content of the article in Turkish
     */
    tr?: TranslatedContent.Tr | null;

    /**
     * The type of object - article_translated_content.
     */
    type?: 'article_translated_content' | null;

    /**
     * The content of the article in Vietnamese
     */
    vi?: TranslatedContent.Vi | null;

    /**
     * The content of the article in Chinese (China)
     */
    'zh-CN'?: TranslatedContent.ZhCn | null;

    /**
     * The content of the article in Chinese (Taiwan)
     */
    'zh-TW'?: TranslatedContent.ZhTw | null;
  }

  export namespace TranslatedContent {
    /**
     * The content of the article in Indonesian
     */
    export interface ID {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Arabic
     */
    export interface Ar {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Bulgarian
     */
    export interface Bg {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Bosnian
     */
    export interface Bs {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Catalan
     */
    export interface Ca {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Czech
     */
    export interface Cs {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Danish
     */
    export interface Da {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in German
     */
    export interface De {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Greek
     */
    export interface El {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in English
     */
    export interface En {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Spanish
     */
    export interface Es {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Estonian
     */
    export interface Et {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Finnish
     */
    export interface Fi {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in French
     */
    export interface Fr {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Hebrew
     */
    export interface He {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Croatian
     */
    export interface Hr {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Hungarian
     */
    export interface Hu {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Italian
     */
    export interface It {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Japanese
     */
    export interface Ja {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Korean
     */
    export interface Ko {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Lithuanian
     */
    export interface Lt {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Latvian
     */
    export interface Lv {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Mongolian
     */
    export interface Mn {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Norwegian
     */
    export interface Nb {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Dutch
     */
    export interface Nl {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Polish
     */
    export interface Pl {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Portuguese (Portugal)
     */
    export interface Pt {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Portuguese (Brazil)
     */
    export interface PtBr {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Romanian
     */
    export interface Ro {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Russian
     */
    export interface Ru {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Slovenian
     */
    export interface Sl {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Serbian
     */
    export interface Sr {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Swedish
     */
    export interface Sv {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Turkish
     */
    export interface Tr {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Vietnamese
     */
    export interface Vi {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Chinese (China)
     */
    export interface ZhCn {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Chinese (Taiwan)
     */
    export interface ZhTw {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }
  }
}

export interface ArticleRetrieveParams {
  /**
   * Intercom API version.</br>By default, it's equal to the version set in the app
   * package.
   */
  'Intercom-Version'?:
    | '1.0'
    | '1.1'
    | '1.2'
    | '1.3'
    | '1.4'
    | '2.0'
    | '2.1'
    | '2.2'
    | '2.3'
    | '2.4'
    | '2.5'
    | '2.6'
    | '2.7'
    | '2.8'
    | '2.9'
    | '2.10'
    | 'Unstable';
}

export interface ArticleUpdateParams {
  /**
   * Body param: The id of the author of the article. For multilingual articles, this
   * will be the id of the author of the default language's content. Must be a
   * teammate on the help center's workspace.
   */
  author_id?: number;

  /**
   * Body param: The content of the article. For multilingual articles, this will be
   * the body of the default language's content.
   */
  body?: string;

  /**
   * Body param: The description of the article. For multilingual articles, this will
   * be the description of the default language's content.
   */
  description?: string;

  /**
   * Body param: The id of the article's parent collection or section. An article
   * without this field stands alone.
   */
  parent_id?: string;

  /**
   * Body param: The type of parent, which can either be a `collection` or `section`.
   */
  parent_type?: string;

  /**
   * Body param: Whether the article will be `published` or will be a `draft`.
   * Defaults to draft. For multilingual articles, this will be the state of the
   * default language's content.
   */
  state?: 'published' | 'draft';

  /**
   * Body param: The title of the article.For multilingual articles, this will be the
   * title of the default language's content.
   */
  title?: string;

  /**
   * Body param: The Translated Content of an Article. The keys are the locale codes
   * and the values are the translated content of the article.
   */
  translated_content?: ArticleUpdateParams.TranslatedContent | null;

  /**
   * Header param: Intercom API version.</br>By default, it's equal to the version
   * set in the app package.
   */
  'Intercom-Version'?:
    | '1.0'
    | '1.1'
    | '1.2'
    | '1.3'
    | '1.4'
    | '2.0'
    | '2.1'
    | '2.2'
    | '2.3'
    | '2.4'
    | '2.5'
    | '2.6'
    | '2.7'
    | '2.8'
    | '2.9'
    | '2.10'
    | 'Unstable';
}

export namespace ArticleUpdateParams {
  /**
   * The Translated Content of an Article. The keys are the locale codes and the
   * values are the translated content of the article.
   */
  export interface TranslatedContent {
    /**
     * The content of the article in Indonesian
     */
    id?: TranslatedContent.ID | null;

    /**
     * The content of the article in Arabic
     */
    ar?: TranslatedContent.Ar | null;

    /**
     * The content of the article in Bulgarian
     */
    bg?: TranslatedContent.Bg | null;

    /**
     * The content of the article in Bosnian
     */
    bs?: TranslatedContent.Bs | null;

    /**
     * The content of the article in Catalan
     */
    ca?: TranslatedContent.Ca | null;

    /**
     * The content of the article in Czech
     */
    cs?: TranslatedContent.Cs | null;

    /**
     * The content of the article in Danish
     */
    da?: TranslatedContent.Da | null;

    /**
     * The content of the article in German
     */
    de?: TranslatedContent.De | null;

    /**
     * The content of the article in Greek
     */
    el?: TranslatedContent.El | null;

    /**
     * The content of the article in English
     */
    en?: TranslatedContent.En | null;

    /**
     * The content of the article in Spanish
     */
    es?: TranslatedContent.Es | null;

    /**
     * The content of the article in Estonian
     */
    et?: TranslatedContent.Et | null;

    /**
     * The content of the article in Finnish
     */
    fi?: TranslatedContent.Fi | null;

    /**
     * The content of the article in French
     */
    fr?: TranslatedContent.Fr | null;

    /**
     * The content of the article in Hebrew
     */
    he?: TranslatedContent.He | null;

    /**
     * The content of the article in Croatian
     */
    hr?: TranslatedContent.Hr | null;

    /**
     * The content of the article in Hungarian
     */
    hu?: TranslatedContent.Hu | null;

    /**
     * The content of the article in Italian
     */
    it?: TranslatedContent.It | null;

    /**
     * The content of the article in Japanese
     */
    ja?: TranslatedContent.Ja | null;

    /**
     * The content of the article in Korean
     */
    ko?: TranslatedContent.Ko | null;

    /**
     * The content of the article in Lithuanian
     */
    lt?: TranslatedContent.Lt | null;

    /**
     * The content of the article in Latvian
     */
    lv?: TranslatedContent.Lv | null;

    /**
     * The content of the article in Mongolian
     */
    mn?: TranslatedContent.Mn | null;

    /**
     * The content of the article in Norwegian
     */
    nb?: TranslatedContent.Nb | null;

    /**
     * The content of the article in Dutch
     */
    nl?: TranslatedContent.Nl | null;

    /**
     * The content of the article in Polish
     */
    pl?: TranslatedContent.Pl | null;

    /**
     * The content of the article in Portuguese (Portugal)
     */
    pt?: TranslatedContent.Pt | null;

    /**
     * The content of the article in Portuguese (Brazil)
     */
    'pt-BR'?: TranslatedContent.PtBr | null;

    /**
     * The content of the article in Romanian
     */
    ro?: TranslatedContent.Ro | null;

    /**
     * The content of the article in Russian
     */
    ru?: TranslatedContent.Ru | null;

    /**
     * The content of the article in Slovenian
     */
    sl?: TranslatedContent.Sl | null;

    /**
     * The content of the article in Serbian
     */
    sr?: TranslatedContent.Sr | null;

    /**
     * The content of the article in Swedish
     */
    sv?: TranslatedContent.Sv | null;

    /**
     * The content of the article in Turkish
     */
    tr?: TranslatedContent.Tr | null;

    /**
     * The type of object - article_translated_content.
     */
    type?: 'article_translated_content' | null;

    /**
     * The content of the article in Vietnamese
     */
    vi?: TranslatedContent.Vi | null;

    /**
     * The content of the article in Chinese (China)
     */
    'zh-CN'?: TranslatedContent.ZhCn | null;

    /**
     * The content of the article in Chinese (Taiwan)
     */
    'zh-TW'?: TranslatedContent.ZhTw | null;
  }

  export namespace TranslatedContent {
    /**
     * The content of the article in Indonesian
     */
    export interface ID {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Arabic
     */
    export interface Ar {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Bulgarian
     */
    export interface Bg {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Bosnian
     */
    export interface Bs {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Catalan
     */
    export interface Ca {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Czech
     */
    export interface Cs {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Danish
     */
    export interface Da {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in German
     */
    export interface De {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Greek
     */
    export interface El {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in English
     */
    export interface En {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Spanish
     */
    export interface Es {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Estonian
     */
    export interface Et {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Finnish
     */
    export interface Fi {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in French
     */
    export interface Fr {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Hebrew
     */
    export interface He {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Croatian
     */
    export interface Hr {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Hungarian
     */
    export interface Hu {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Italian
     */
    export interface It {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Japanese
     */
    export interface Ja {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Korean
     */
    export interface Ko {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Lithuanian
     */
    export interface Lt {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Latvian
     */
    export interface Lv {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Mongolian
     */
    export interface Mn {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Norwegian
     */
    export interface Nb {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Dutch
     */
    export interface Nl {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Polish
     */
    export interface Pl {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Portuguese (Portugal)
     */
    export interface Pt {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Portuguese (Brazil)
     */
    export interface PtBr {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Romanian
     */
    export interface Ro {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Russian
     */
    export interface Ru {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Slovenian
     */
    export interface Sl {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Serbian
     */
    export interface Sr {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Swedish
     */
    export interface Sv {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Turkish
     */
    export interface Tr {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Vietnamese
     */
    export interface Vi {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Chinese (China)
     */
    export interface ZhCn {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }

    /**
     * The content of the article in Chinese (Taiwan)
     */
    export interface ZhTw {
      /**
       * The ID of the author of the article.
       */
      author_id?: number;

      /**
       * The body of the article.
       */
      body?: string;

      /**
       * The time when the article was created.
       */
      created_at?: number;

      /**
       * The description of the article.
       */
      description?: string;

      /**
       * Whether the article is `published` or is a `draft` .
       */
      state?: 'published' | 'draft';

      /**
       * The title of the article.
       */
      title?: string;

      /**
       * The type of object - `article_content` .
       */
      type?: 'article_content' | null;

      /**
       * The time when the article was last updated.
       */
      updated_at?: number;

      /**
       * The URL of the article.
       */
      url?: string;
    }
  }
}

export interface ArticleListParams {
  /**
   * Intercom API version.</br>By default, it's equal to the version set in the app
   * package.
   */
  'Intercom-Version'?:
    | '1.0'
    | '1.1'
    | '1.2'
    | '1.3'
    | '1.4'
    | '2.0'
    | '2.1'
    | '2.2'
    | '2.3'
    | '2.4'
    | '2.5'
    | '2.6'
    | '2.7'
    | '2.8'
    | '2.9'
    | '2.10'
    | 'Unstable';
}

export interface ArticleRemoveParams {
  /**
   * Intercom API version.</br>By default, it's equal to the version set in the app
   * package.
   */
  'Intercom-Version'?:
    | '1.0'
    | '1.1'
    | '1.2'
    | '1.3'
    | '1.4'
    | '2.0'
    | '2.1'
    | '2.2'
    | '2.3'
    | '2.4'
    | '2.5'
    | '2.6'
    | '2.7'
    | '2.8'
    | '2.9'
    | '2.10'
    | 'Unstable';
}

export interface ArticleSearchParams {
  /**
   * Query param: The ID of the Help Center to search in.
   */
  help_center_id?: number;

  /**
   * Query param: Return a highlighted version of the matching content within your
   * articles. Refer to the response schema for more details.
   */
  highlight?: boolean;

  /**
   * Query param: The phrase within your articles to search for.
   */
  phrase?: string;

  /**
   * Query param: The state of the Articles returned. One of `published`, `draft` or
   * `all`.
   */
  state?: string;

  /**
   * Header param: Intercom API version.</br>By default, it's equal to the version
   * set in the app package.
   */
  'Intercom-Version'?:
    | '1.0'
    | '1.1'
    | '1.2'
    | '1.3'
    | '1.4'
    | '2.0'
    | '2.1'
    | '2.2'
    | '2.3'
    | '2.4'
    | '2.5'
    | '2.6'
    | '2.7'
    | '2.8'
    | '2.9'
    | '2.10'
    | 'Unstable';
}

export namespace Articles {
  export import Article = ArticlesAPI.Article;
  export import ArticleList = ArticlesAPI.ArticleList;
  export import ArticleSearchResponse = ArticlesAPI.ArticleSearchResponse;
  export import DeletedArticleObject = ArticlesAPI.DeletedArticleObject;
  export import ArticleCreateParams = ArticlesAPI.ArticleCreateParams;
  export import ArticleRetrieveParams = ArticlesAPI.ArticleRetrieveParams;
  export import ArticleUpdateParams = ArticlesAPI.ArticleUpdateParams;
  export import ArticleListParams = ArticlesAPI.ArticleListParams;
  export import ArticleRemoveParams = ArticlesAPI.ArticleRemoveParams;
  export import ArticleSearchParams = ArticlesAPI.ArticleSearchParams;
}
