// File generated from our OpenAPI spec by Stainless.

import * as Core from 'intercom/core';
import { APIResource } from 'intercom/resource';
import { isRequestOptions } from 'intercom/core';
import * as ExternalPagesAPI from 'intercom/resources/ai/external-pages';

export class ExternalPages extends APIResource {
  /**
   * You can create a new external page by sending a POST request to this endpoint.
   * If an external page already exists with the specified source_id and external_id,
   * it will be updated instead.
   */
  create(params: ExternalPageCreateParams, options?: Core.RequestOptions): Core.APIPromise<ExternalPage> {
    const { 'Intercom-Version': intercomVersion, ...body } = params;
    return this._client.post('/ai/external_pages', {
      body,
      ...options,
      headers: { 'Intercom-Version': intercomVersion?.toString() || '', ...options?.headers },
    });
  }

  /**
   * You can retrieve an external page.
   */
  retrieve(
    id: string,
    params?: ExternalPageRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExternalPage>;
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<ExternalPage>;
  retrieve(
    id: string,
    params: ExternalPageRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExternalPage> {
    if (isRequestOptions(params)) {
      return this.retrieve(id, {}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.get(`/ai/external_pages/${id}`, {
      ...options,
      headers: { 'Intercom-Version': intercomVersion?.toString() || '', ...options?.headers },
    });
  }

  /**
   * You can update an existing external page (if it was created via the API).
   */
  update(
    id: string,
    params: ExternalPageUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExternalPage> {
    const { 'Intercom-Version': intercomVersion, ...body } = params;
    return this._client.put(`/ai/external_pages/${id}`, {
      body,
      ...options,
      headers: { 'Intercom-Version': intercomVersion?.toString() || '', ...options?.headers },
    });
  }

  /**
   * You can retrieve a list of all external pages for a workspace.
   */
  list(params?: ExternalPageListParams, options?: Core.RequestOptions): Core.APIPromise<ExternalPagesList>;
  list(options?: Core.RequestOptions): Core.APIPromise<ExternalPagesList>;
  list(
    params: ExternalPageListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExternalPagesList> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.get('/ai/external_pages', {
      ...options,
      headers: { 'Intercom-Version': intercomVersion?.toString() || '', ...options?.headers },
    });
  }

  /**
   * Sending a DELETE request for an external page will remove it from the content
   * library UI and from being used for AI answers.
   */
  removeAll(
    id: string,
    params?: ExternalPageRemoveAllParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExternalPage>;
  removeAll(id: string, options?: Core.RequestOptions): Core.APIPromise<ExternalPage>;
  removeAll(
    id: string,
    params: ExternalPageRemoveAllParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExternalPage> {
    if (isRequestOptions(params)) {
      return this.removeAll(id, {}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.delete(`/ai/external_pages/${id}`, {
      ...options,
      headers: { 'Intercom-Version': intercomVersion?.toString() || '', ...options?.headers },
    });
  }
}

/**
 * External pages that you have added to your Fin Content Library.
 */
export interface ExternalPage {
  /**
   * The unique identifier for the external page which is given by Intercom.
   */
  id: string;

  /**
   * The time when the external page was created.
   */
  created_at: number;

  /**
   * Whether the external page should be used to answer questions by Fin.
   */
  fin_availability: boolean;

  /**
   * The body of the external page in HTML.
   */
  html: string;

  /**
   * The time when the external page was last ingested.
   */
  last_ingested_at: number;

  /**
   * Always en
   */
  locale: 'en';

  /**
   * The unique identifier for the source of the external page which was given by
   * Intercom. Every external page must be associated with a Content Import Source
   * which represents the place it comes from and from which it inherits a default
   * audience (configured in the UI). For a new source, make a POST request to the
   * Content Import Source endpoint and an ID for the source will be returned in the
   * response.
   */
  source_id: number;

  /**
   * The title of the external page.
   */
  title: string;

  /**
   * Always external_page
   */
  type: 'external_page';

  /**
   * The time when the external page was last updated.
   */
  updated_at: number;

  /**
   * The URL of the external page. This will be used by Fin to link end users to the
   * page it based its answer on.
   */
  url: string;

  /**
   * The identifier for the external page which was given by the source. Must be
   * unique for the source.
   */
  external_id?: string;
}

/**
 * This will return a list of external pages for the App.
 */
export interface ExternalPagesList {
  /**
   * An array of External Page objects
   */
  data?: Array<ExternalPage>;

  /**
   * The majority of list resources in the API are paginated to allow clients to
   * traverse data over multiple requests.
   *
   * Their responses are likely to contain a pages object that hosts pagination links
   * which a client can use to paginate through the data without having to construct
   * a query. The link relations for the pages field are as follows.
   */
  pages?: ExternalPagesList.Pages;

  /**
   * A count of the total number of external pages.
   */
  total_count?: number;

  /**
   * The type of the object - `list`.
   */
  type?: 'list';
}

export namespace ExternalPagesList {
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

export interface ExternalPageCreateParams {
  /**
   * Body param: The body of the external page in HTML.
   */
  html: string;

  /**
   * Body param: Always en
   */
  locale: 'en';

  /**
   * Body param: The unique identifier for the source of the external page which was
   * given by Intercom. Every external page must be associated with a Content Import
   * Source which represents the place it comes from and from which it inherits a
   * default audience (configured in the UI). For a new source, make a POST request
   * to the Content Import Source endpoint and an ID for the source will be returned
   * in the response.
   */
  source_id: number;

  /**
   * Body param: The title of the external page.
   */
  title: string;

  /**
   * Body param: The URL of the external page. This will be used by Fin to link end
   * users to the page it based its answer on.
   */
  url: string;

  /**
   * Body param: The identifier for the external page which was given by the source.
   * Must be unique for the source.
   */
  external_id?: string;

  /**
   * Body param: Whether the external page should be used to answer questions by Fin.
   */
  fin_availability?: boolean;

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

export interface ExternalPageRetrieveParams {
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

export interface ExternalPageUpdateParams {
  /**
   * Body param: The body of the external page in HTML.
   */
  html: string;

  /**
   * Body param: Always en
   */
  locale: 'en';

  /**
   * Body param: The unique identifier for the source of the external page which was
   * given by Intercom. Every external page must be associated with a Content Import
   * Source which represents the place it comes from and from which it inherits a
   * default audience (configured in the UI). For a new source, make a POST request
   * to the Content Import Source endpoint and an ID for the source will be returned
   * in the response.
   */
  source_id: number;

  /**
   * Body param: The title of the external page.
   */
  title: string;

  /**
   * Body param: The URL of the external page. This will be used by Fin to link end
   * users to the page it based its answer on.
   */
  url: string;

  /**
   * Body param: The identifier for the external page which was given by the source.
   * Must be unique for the source.
   */
  external_id?: string;

  /**
   * Body param: Whether the external page should be used to answer questions by Fin.
   */
  fin_availability?: boolean;

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

export interface ExternalPageListParams {
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

export interface ExternalPageRemoveAllParams {
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

export namespace ExternalPages {
  export import ExternalPage = ExternalPagesAPI.ExternalPage;
  export import ExternalPagesList = ExternalPagesAPI.ExternalPagesList;
  export import ExternalPageCreateParams = ExternalPagesAPI.ExternalPageCreateParams;
  export import ExternalPageRetrieveParams = ExternalPagesAPI.ExternalPageRetrieveParams;
  export import ExternalPageUpdateParams = ExternalPagesAPI.ExternalPageUpdateParams;
  export import ExternalPageListParams = ExternalPagesAPI.ExternalPageListParams;
  export import ExternalPageRemoveAllParams = ExternalPagesAPI.ExternalPageRemoveAllParams;
}
