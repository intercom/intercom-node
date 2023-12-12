// File generated from our OpenAPI spec by Stainless.

import * as Core from 'intercom/core';
import { APIResource } from 'intercom/resource';
import { isRequestOptions } from 'intercom/core';
import * as ItemsAPI from 'intercom/resources/news/newsfeeds/items';
import * as Shared from 'intercom/resources/shared';

export class Items extends APIResource {
  /**
   * You can fetch a list of all news items that are live on a given newsfeed
   */
  list(
    id: string,
    params?: ItemListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.PaginatedResponse>;
  list(id: string, options?: Core.RequestOptions): Core.APIPromise<Shared.PaginatedResponse>;
  list(
    id: string,
    params: ItemListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.PaginatedResponse> {
    if (isRequestOptions(params)) {
      return this.list(id, {}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.get(`/news/newsfeeds/${id}/items`, {
      ...options,
      headers: { 'Intercom-Version': intercomVersion?.toString() || '', ...options?.headers },
    });
  }
}

export interface ItemListParams {
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

export namespace Items {
  export import ItemListParams = ItemsAPI.ItemListParams;
}
