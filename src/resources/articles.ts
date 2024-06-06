// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as ArticlesAPI from './articles';
import * as Shared from './shared';

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
      headers: {
        ...(intercomVersion?.toString() != null ?
          { 'Intercom-Version': intercomVersion?.toString() }
        : undefined),
        ...options?.headers,
      },
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
      headers: {
        ...(intercomVersion?.toString() != null ?
          { 'Intercom-Version': intercomVersion?.toString() }
        : undefined),
        ...options?.headers,
      },
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
      headers: {
        ...(intercomVersion?.toString() != null ?
          { 'Intercom-Version': intercomVersion?.toString() }
        : undefined),
        ...options?.headers,
      },
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
      headers: {
        ...(intercomVersion?.toString() != null ?
          { 'Intercom-Version': intercomVersion?.toString() }
        : undefined),
        ...options?.headers,
      },
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
      headers: {
        ...(intercomVersion?.toString() != null ?
          { 'Intercom-Version': intercomVersion?.toString() }
        : undefined),
        ...options?.headers,
      },
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
      headers: {
        ...(intercomVersion?.toString() != null ?
          { 'Intercom-Version': intercomVersion?.toString() }
        : undefined),
        ...options?.headers,
      },
    });
  }
}

/**
 * The data returned about your articles when you list them.
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
   * the timestamp of creation of the default language's content in seconds.
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
   * The title of the article. For multilingual articles, this will be the title of
   * the default language's content.
   */
  title?: string;

  /**
   * The Translated Content of an Article. The keys are the locale codes and the
   * values are the translated content of the article.
   */
  translated_content?: Shared.ArticleTranslatedContent | null;

  /**
   * The type of object - `article`.
   */
  type?: 'article';

  /**
   * The time when the article was last updated. For multilingual articles, this will
   * be the timestamp of last update of the default language's content in seconds.
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

/**
 * This will return a list of articles for the App.
 */
export interface ArticleList {
  /**
   * An array of Article objects
   */
  data?: Array<ArticleList.Data>;

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
   * The data returned about your articles when you list them.
   */
  export interface Data {
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
     * the timestamp of creation of the default language's content in seconds.
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
     * The title of the article. For multilingual articles, this will be the title of
     * the default language's content.
     */
    title?: string;

    /**
     * The Translated Content of an Article. The keys are the locale codes and the
     * values are the translated content of the article.
     */
    translated_content?: Shared.ArticleTranslatedContent | null;

    /**
     * The type of object - `article`.
     */
    type?: 'article';

    /**
     * The time when the article was last updated. For multilingual articles, this will
     * be the timestamp of last update of the default language's content in seconds.
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
      /**
       * The number of results to fetch per page.
       */
      per_page?: number;

      /**
       * The cursor to use in the next request to get the next page of results.
       */
      starting_after?: string | null;
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
      /**
       * The number of results to fetch per page.
       */
      per_page?: number;

      /**
       * The cursor to use in the next request to get the next page of results.
       */
      starting_after?: string | null;
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
  translated_content?: Shared.ArticleTranslatedContent | null;

  /**
   * Header param: Intercom API version.By default, it's equal to the version set in
   * the app package.
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
    | '2.11'
    | 'Unstable';
}

export interface ArticleRetrieveParams {
  /**
   * Intercom API version.By default, it's equal to the version set in the app
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
    | '2.11'
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
  translated_content?: Shared.ArticleTranslatedContent | null;

  /**
   * Header param: Intercom API version.By default, it's equal to the version set in
   * the app package.
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
    | '2.11'
    | 'Unstable';
}

export interface ArticleListParams {
  /**
   * Intercom API version.By default, it's equal to the version set in the app
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
    | '2.11'
    | 'Unstable';
}

export interface ArticleRemoveParams {
  /**
   * Intercom API version.By default, it's equal to the version set in the app
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
    | '2.11'
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
   * Header param: Intercom API version.By default, it's equal to the version set in
   * the app package.
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
    | '2.11'
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
