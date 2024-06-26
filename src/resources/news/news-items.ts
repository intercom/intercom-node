// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as NewsItemsAPI from './news-items';
import * as Shared from '../shared';

export class NewsItems extends APIResource {
  /**
   * You can create a news item
   */
  create(params: NewsItemCreateParams, options?: Core.RequestOptions): Core.APIPromise<NewsItem> {
    const { 'Intercom-Version': intercomVersion, ...body } = params;
    return this._client.post('/news/news_items', {
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
   * You can fetch the details of a single news item.
   */
  retrieve(
    id: number,
    params?: NewsItemRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NewsItem>;
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<NewsItem>;
  retrieve(
    id: number,
    params: NewsItemRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<NewsItem> {
    if (isRequestOptions(params)) {
      return this.retrieve(id, {}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.get(`/news/news_items/${id}`, {
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
   * Update a news item
   */
  update(id: number, params: NewsItemUpdateParams, options?: Core.RequestOptions): Core.APIPromise<NewsItem> {
    const { 'Intercom-Version': intercomVersion, ...body } = params;
    return this._client.put(`/news/news_items/${id}`, {
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
   * You can fetch a list of all news items
   */
  list(params?: NewsItemListParams, options?: Core.RequestOptions): Core.APIPromise<Shared.PaginatedResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<Shared.PaginatedResponse>;
  list(
    params: NewsItemListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.PaginatedResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.get('/news/news_items', {
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
   * You can delete a single news item.
   */
  delete(
    id: number,
    params?: NewsItemDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NewsItemDeleteResponse>;
  delete(id: number, options?: Core.RequestOptions): Core.APIPromise<NewsItemDeleteResponse>;
  delete(
    id: number,
    params: NewsItemDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<NewsItemDeleteResponse> {
    if (isRequestOptions(params)) {
      return this.delete(id, {}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.delete(`/news/news_items/${id}`, {
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
 * A News Item is a content type in Intercom enabling you to announce product
 * updates, company news, promotions, events and more with your customers.
 */
export interface NewsItem {
  /**
   * The unique identifier for the news item which is given by Intercom.
   */
  id?: string;

  /**
   * The news item body, which may contain HTML.
   */
  body?: string;

  /**
   * URL of the image used as cover. Must have .jpg or .png extension.
   */
  cover_image_url?: string | null;

  /**
   * Timestamp for when the news item was created.
   */
  created_at?: number;

  /**
   * When set to true, the news item will appear in the messenger newsfeed without
   * showing a notification badge.
   */
  deliver_silently?: boolean;

  /**
   * Label names displayed to users to categorize the news item.
   */
  labels?: Array<string | null>;

  /**
   * A list of newsfeed_assignments to assign to the specified newsfeed.
   */
  newsfeed_assignments?: Array<NewsItem.NewsfeedAssignment>;

  /**
   * Ordered list of emoji reactions to the news item. When empty, reactions are
   * disabled.
   */
  reactions?: Array<string | null>;

  /**
   * The id of the sender of the news item. Must be a teammate on the workspace.
   */
  sender_id?: number;

  /**
   * News items will not be visible to your users in the assigned newsfeeds until
   * they are set live.
   */
  state?: 'draft' | 'live';

  /**
   * The title of the news item.
   */
  title?: string;

  /**
   * The type of object.
   */
  type?: 'news-item';

  /**
   * Timestamp for when the news item was last updated.
   */
  updated_at?: number;

  /**
   * The id of the workspace which the news item belongs to.
   */
  workspace_id?: string;
}

export namespace NewsItem {
  /**
   * Assigns a news item to a newsfeed.
   */
  export interface NewsfeedAssignment {
    /**
     * The unique identifier for the newsfeed which is given by Intercom. Publish dates
     * cannot be in the future, to schedule news items use the dedicated feature in app
     * (see this article).
     */
    newsfeed_id?: number;

    /**
     * Publish date of the news item on the newsfeed, use this field if you want to set
     * a publish date in the past (e.g. when importing existing news items). On write,
     * this field will be ignored if the news item state is "draft".
     */
    published_at?: number;
  }
}

/**
 * Response returned when an object is deleted
 */
export interface NewsItemDeleteResponse {
  /**
   * The unique identifier for the news item which you provided in the URL.
   */
  id?: string;

  /**
   * Whether the news item was deleted successfully or not.
   */
  deleted?: boolean;

  /**
   * The type of object which was deleted - news-item.
   */
  object?: 'news-item';
}

export interface NewsItemCreateParams {
  /**
   * Body param: The id of the sender of the news item. Must be a teammate on the
   * workspace.
   */
  sender_id: number;

  /**
   * Body param: The title of the news item.
   */
  title: string;

  /**
   * Body param: The news item body, which may contain HTML.
   */
  body?: string;

  /**
   * Body param: When set to `true`, the news item will appear in the messenger
   * newsfeed without showing a notification badge.
   */
  deliver_silently?: boolean;

  /**
   * Body param: Label names displayed to users to categorize the news item.
   */
  labels?: Array<string>;

  /**
   * Body param: A list of newsfeed_assignments to assign to the specified newsfeed.
   */
  newsfeed_assignments?: Array<NewsItemCreateParams.NewsfeedAssignment>;

  /**
   * Body param: Ordered list of emoji reactions to the news item. When empty,
   * reactions are disabled.
   */
  reactions?: Array<string | null>;

  /**
   * Body param: News items will not be visible to your users in the assigned
   * newsfeeds until they are set live.
   */
  state?: 'draft' | 'live';

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

export namespace NewsItemCreateParams {
  /**
   * Assigns a news item to a newsfeed.
   */
  export interface NewsfeedAssignment {
    /**
     * The unique identifier for the newsfeed which is given by Intercom. Publish dates
     * cannot be in the future, to schedule news items use the dedicated feature in app
     * (see this article).
     */
    newsfeed_id?: number;

    /**
     * Publish date of the news item on the newsfeed, use this field if you want to set
     * a publish date in the past (e.g. when importing existing news items). On write,
     * this field will be ignored if the news item state is "draft".
     */
    published_at?: number;
  }
}

export interface NewsItemRetrieveParams {
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

export interface NewsItemUpdateParams {
  /**
   * Body param: The id of the sender of the news item. Must be a teammate on the
   * workspace.
   */
  sender_id: number;

  /**
   * Body param: The title of the news item.
   */
  title: string;

  /**
   * Body param: The news item body, which may contain HTML.
   */
  body?: string;

  /**
   * Body param: When set to `true`, the news item will appear in the messenger
   * newsfeed without showing a notification badge.
   */
  deliver_silently?: boolean;

  /**
   * Body param: Label names displayed to users to categorize the news item.
   */
  labels?: Array<string>;

  /**
   * Body param: A list of newsfeed_assignments to assign to the specified newsfeed.
   */
  newsfeed_assignments?: Array<NewsItemUpdateParams.NewsfeedAssignment>;

  /**
   * Body param: Ordered list of emoji reactions to the news item. When empty,
   * reactions are disabled.
   */
  reactions?: Array<string | null>;

  /**
   * Body param: News items will not be visible to your users in the assigned
   * newsfeeds until they are set live.
   */
  state?: 'draft' | 'live';

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

export namespace NewsItemUpdateParams {
  /**
   * Assigns a news item to a newsfeed.
   */
  export interface NewsfeedAssignment {
    /**
     * The unique identifier for the newsfeed which is given by Intercom. Publish dates
     * cannot be in the future, to schedule news items use the dedicated feature in app
     * (see this article).
     */
    newsfeed_id?: number;

    /**
     * Publish date of the news item on the newsfeed, use this field if you want to set
     * a publish date in the past (e.g. when importing existing news items). On write,
     * this field will be ignored if the news item state is "draft".
     */
    published_at?: number;
  }
}

export interface NewsItemListParams {
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

export interface NewsItemDeleteParams {
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

export namespace NewsItems {
  export import NewsItem = NewsItemsAPI.NewsItem;
  export import NewsItemDeleteResponse = NewsItemsAPI.NewsItemDeleteResponse;
  export import NewsItemCreateParams = NewsItemsAPI.NewsItemCreateParams;
  export import NewsItemRetrieveParams = NewsItemsAPI.NewsItemRetrieveParams;
  export import NewsItemUpdateParams = NewsItemsAPI.NewsItemUpdateParams;
  export import NewsItemListParams = NewsItemsAPI.NewsItemListParams;
  export import NewsItemDeleteParams = NewsItemsAPI.NewsItemDeleteParams;
}
