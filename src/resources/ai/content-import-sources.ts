// File generated from our OpenAPI spec by Stainless.

import * as Core from 'intercom/core';
import { APIResource } from 'intercom/resource';
import { isRequestOptions } from 'intercom/core';
import * as ContentImportSourcesAPI from 'intercom/resources/ai/content-import-sources';

export class ContentImportSources extends APIResource {
  /**
   * You can create a new content import source by sending a POST request to this
   * endpoint.
   */
  create(
    params: ContentImportSourceCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContentImportSource> {
    const { 'Intercom-Version': intercomVersion, ...body } = params;
    return this._client.post('/ai/content_import_sources', {
      body,
      ...options,
      headers: { 'Intercom-Version': intercomVersion?.toString() || '', ...options?.headers },
    });
  }

  /**
   * Retrieve a content import source
   */
  retrieve(
    id: string,
    params?: ContentImportSourceRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContentImportSource>;
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<ContentImportSource>;
  retrieve(
    id: string,
    params: ContentImportSourceRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContentImportSource> {
    if (isRequestOptions(params)) {
      return this.retrieve(id, {}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.get(`/ai/content_import_sources/${id}`, {
      ...options,
      headers: { 'Intercom-Version': intercomVersion?.toString() || '', ...options?.headers },
    });
  }

  /**
   * You can update an existing content import source.
   */
  update(
    id: string,
    params: ContentImportSourceUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContentImportSource> {
    const { 'Intercom-Version': intercomVersion, ...body } = params;
    return this._client.put(`/ai/content_import_sources/${id}`, {
      body,
      ...options,
      headers: { 'Intercom-Version': intercomVersion?.toString() || '', ...options?.headers },
    });
  }

  /**
   * You can retrieve a list of all content import sources for a workspace.
   */
  list(
    params?: ContentImportSourceListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContentImportSourcesList>;
  list(options?: Core.RequestOptions): Core.APIPromise<ContentImportSourcesList>;
  list(
    params: ContentImportSourceListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContentImportSourcesList> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.get('/ai/content_import_sources', {
      ...options,
      headers: { 'Intercom-Version': intercomVersion?.toString() || '', ...options?.headers },
    });
  }

  /**
   * You can delete a content import source by making a DELETE request this endpoint.
   * This will also delete all external pages that were imported from this source.
   */
  delete(
    id: string,
    params?: ContentImportSourceDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void>;
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  delete(
    id: string,
    params: ContentImportSourceDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(params)) {
      return this.delete(id, {}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.delete(`/ai/content_import_sources/${id}`, {
      ...options,
      headers: { Accept: '', 'Intercom-Version': intercomVersion?.toString() || '', ...options?.headers },
    });
  }
}

/**
 * An external source for External Pages that you add to your Fin Content Library.
 */
export interface ContentImportSource {
  /**
   * The unique identifier for the content import source which is given by Intercom.
   */
  id: number;

  /**
   * The time when the content import source was created.
   */
  created_at: number;

  /**
   * The time when the content import source was last synced.
   */
  last_synced_at: number;

  /**
   * The status of the content import source.
   */
  status: 'active' | 'deactivated';

  /**
   * If you intend to create or update External Pages via the API, this should be set
   * to `api`.
   */
  sync_behavior: 'api' | 'automatic' | 'manual';

  /**
   * Always external_page
   */
  type: 'content_import_source';

  /**
   * The time when the content import source was last updated.
   */
  updated_at: number;

  /**
   * The URL of the root of the external source.
   */
  url: string;
}

/**
 * This will return a list of the content import sources for the App.
 */
export interface ContentImportSourcesList {
  /**
   * An array of Content Import Source objects
   */
  data?: Array<ContentImportSource>;

  /**
   * The majority of list resources in the API are paginated to allow clients to
   * traverse data over multiple requests.
   *
   * Their responses are likely to contain a pages object that hosts pagination links
   * which a client can use to paginate through the data without having to construct
   * a query. The link relations for the pages field are as follows.
   */
  pages?: ContentImportSourcesList.Pages;

  /**
   * A count of the total number of content import sources.
   */
  total_count?: number;

  /**
   * The type of the object - `list`.
   */
  type?: 'list';
}

export namespace ContentImportSourcesList {
  /**
   * The majority of list resources in the API are paginated to allow clients to
   * traverse data over multiple requests.
   *
   * Their responses are likely to contain a pages object that hosts pagination links
   * which a client can use to paginate through the data without having to construct
   * a query. The link relations for the pages field are as follows.
   */
  export interface Pages {
    /**
     * A link to the next page of results. A response that does not contain a next link
     * does not have further data to fetch.
     */
    next?: string | null;

    page?: number;

    per_page?: number;

    total_pages?: number;

    type?: 'pages';
  }
}

export interface ContentImportSourceCreateParams {
  /**
   * Body param: If you intend to create or update External Pages via the API, this
   * should be set to `api`.
   */
  sync_behavior: 'api';

  /**
   * Body param: The URL of the content import source.
   */
  url: string;

  /**
   * Body param: The status of the content import source.
   */
  status?: 'active' | 'deactivated';

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

export interface ContentImportSourceRetrieveParams {
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

export interface ContentImportSourceUpdateParams {
  /**
   * Body param: If you intend to create or update External Pages via the API, this
   * should be set to `api`. You can not change the value to or from api.
   */
  sync_behavior: 'api' | 'automated' | 'manual';

  /**
   * Body param: The URL of the content import source. This may only be different
   * from the existing value if the sync behavior is API.
   */
  url: string;

  /**
   * Body param: The status of the content import source.
   */
  status?: 'active' | 'deactivated';

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

export interface ContentImportSourceListParams {
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

export interface ContentImportSourceDeleteParams {
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

export namespace ContentImportSources {
  export import ContentImportSource = ContentImportSourcesAPI.ContentImportSource;
  export import ContentImportSourcesList = ContentImportSourcesAPI.ContentImportSourcesList;
  export import ContentImportSourceCreateParams = ContentImportSourcesAPI.ContentImportSourceCreateParams;
  export import ContentImportSourceRetrieveParams = ContentImportSourcesAPI.ContentImportSourceRetrieveParams;
  export import ContentImportSourceUpdateParams = ContentImportSourcesAPI.ContentImportSourceUpdateParams;
  export import ContentImportSourceListParams = ContentImportSourcesAPI.ContentImportSourceListParams;
  export import ContentImportSourceDeleteParams = ContentImportSourcesAPI.ContentImportSourceDeleteParams;
}
