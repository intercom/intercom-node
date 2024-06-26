// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as NewsfeedsAPI from './newsfeeds';
import * as Shared from '../../shared';
import * as ItemsAPI from './items';

export class Newsfeeds extends APIResource {
  items: ItemsAPI.Items = new ItemsAPI.Items(this._client);

  /**
   * You can fetch the details of a single newsfeed
   */
  retrieve(
    id: string,
    params?: NewsfeedRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Newsfeed>;
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<Newsfeed>;
  retrieve(
    id: string,
    params: NewsfeedRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Newsfeed> {
    if (isRequestOptions(params)) {
      return this.retrieve(id, {}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.get(`/news/newsfeeds/${id}`, {
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
   * You can fetch a list of all newsfeeds
   */
  list(params?: NewsfeedListParams, options?: Core.RequestOptions): Core.APIPromise<Shared.PaginatedResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<Shared.PaginatedResponse>;
  list(
    params: NewsfeedListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.PaginatedResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.get('/news/newsfeeds', {
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
 * A newsfeed is a collection of news items, targeted to a specific audience.
 *
 * Newsfeeds currently cannot be edited through the API, please refer to
 * [this article](https://www.intercom.com/help/en/articles/6362267-getting-started-with-news)
 * to set up your newsfeeds in Intercom.
 */
export interface Newsfeed {
  /**
   * The unique identifier for the newsfeed which is given by Intercom.
   */
  id?: string;

  /**
   * Timestamp for when the newsfeed was created.
   */
  created_at?: number;

  /**
   * The name of the newsfeed. This name will never be visible to your users.
   */
  name?: string;

  /**
   * The type of object.
   */
  type?: 'newsfeed';

  /**
   * Timestamp for when the newsfeed was last updated.
   */
  updated_at?: number;
}

export interface NewsfeedRetrieveParams {
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

export interface NewsfeedListParams {
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

export namespace Newsfeeds {
  export import Newsfeed = NewsfeedsAPI.Newsfeed;
  export import NewsfeedRetrieveParams = NewsfeedsAPI.NewsfeedRetrieveParams;
  export import NewsfeedListParams = NewsfeedsAPI.NewsfeedListParams;
  export import Items = ItemsAPI.Items;
  export import ItemListParams = ItemsAPI.ItemListParams;
}
