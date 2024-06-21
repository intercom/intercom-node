// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as CollectionsAPI from './collections';
import * as Shared from '../shared';

export class Collections extends APIResource {
  /**
   * You can create a new collection by making a POST request to
   * `https://api.intercom.io/help_center/collections.`
   */
  create(params: CollectionCreateParams, options?: Core.RequestOptions): Core.APIPromise<Collection> {
    const { 'Intercom-Version': intercomVersion, ...body } = params;
    return this._client.post('/help_center/collections', {
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
   * You can fetch the details of a single collection by making a GET request to
   * `https://api.intercom.io/help_center/collections/<id>`.
   */
  retrieve(
    id: number,
    params?: CollectionRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Collection>;
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<Collection>;
  retrieve(
    id: number,
    params: CollectionRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Collection> {
    if (isRequestOptions(params)) {
      return this.retrieve(id, {}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.get(`/help_center/collections/${id}`, {
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
   * You can update the details of a single collection by making a PUT request to
   * `https://api.intercom.io/collections/<id>`.
   */
  update(
    id: number,
    params?: CollectionUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Collection>;
  update(id: number, options?: Core.RequestOptions): Core.APIPromise<Collection>;
  update(
    id: number,
    params: CollectionUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Collection> {
    if (isRequestOptions(params)) {
      return this.update(id, {}, params);
    }
    const { 'Intercom-Version': intercomVersion, ...body } = params;
    return this._client.put(`/help_center/collections/${id}`, {
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
   * You can fetch a list of all collections by making a GET request to
   * `https://api.intercom.io/help_center/collections`.
   *
   * Collections will be returned in descending order on the `updated_at` attribute.
   * This means if you need to iterate through results then we'll show the most
   * recently updated collections first.
   */
  list(params?: CollectionListParams, options?: Core.RequestOptions): Core.APIPromise<CollectionList>;
  list(options?: Core.RequestOptions): Core.APIPromise<CollectionList>;
  list(
    params: CollectionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CollectionList> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.get('/help_center/collections', {
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
   * You can delete a single collection by making a DELETE request to
   * `https://api.intercom.io/collections/<id>`.
   */
  delete(
    id: number,
    params?: CollectionDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeletedCollection>;
  delete(id: number, options?: Core.RequestOptions): Core.APIPromise<DeletedCollection>;
  delete(
    id: number,
    params: CollectionDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeletedCollection> {
    if (isRequestOptions(params)) {
      return this.delete(id, {}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.delete(`/help_center/collections/${id}`, {
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
 * Collections are top level containers for Articles within the Help Center.
 */
export interface Collection {
  /**
   * The unique identifier for the collection which is given by Intercom.
   */
  id?: string;

  /**
   * The time when the article was created (seconds). For multilingual articles, this
   * will be the timestamp of creation of the default language's content.
   */
  created_at?: number;

  /**
   * The default locale of the help center. This field is only returned for
   * multilingual help centers.
   */
  default_locale?: string;

  /**
   * The description of the collection. For multilingual help centers, this will be
   * the description of the collection for the default language.
   */
  description?: string | null;

  /**
   * The id of the help center the collection is in.
   */
  help_center_id?: number | null;

  /**
   * The icon of the collection.
   */
  icon?: string | null;

  /**
   * The name of the collection. For multilingual collections, this will be the name
   * of the default language's content.
   */
  name?: string;

  /**
   * The order of the section in relation to others sections within a collection.
   * Values go from `0` upwards. `0` is the default if there's no order.
   */
  order?: number;

  /**
   * The id of the parent collection. If `null` then it is the first level
   * collection.
   */
  parent_id?: string | null;

  /**
   * The Translated Content of an Group. The keys are the locale codes and the values
   * are the translated content of the Group.
   */
  translated_content?: Shared.GroupTranslatedContent | null;

  /**
   * The time when the article was last updated (seconds). For multilingual articles,
   * this will be the timestamp of last update of the default language's content.
   */
  updated_at?: number;

  /**
   * The URL of the collection. For multilingual help centers, this will be the URL
   * of the collection for the default language.
   */
  url?: string | null;

  /**
   * The id of the workspace which the collection belongs to.
   */
  workspace_id?: string;
}

/**
 * This will return a list of Collections for the App.
 */
export interface CollectionList {
  /**
   * An array of collection objects
   */
  data?: Array<Collection>;

  /**
   * Cursor-based pagination is a technique used in the Intercom API to navigate
   * through large amounts of data. A "cursor" or pointer is used to keep track of
   * the current position in the result set, allowing the API to return the data in
   * small chunks or "pages" as needed.
   */
  pages?: Shared.CursorPages | null;

  /**
   * A count of the total number of collections.
   */
  total_count?: number;

  /**
   * The type of the object - `list`.
   */
  type?: 'list';
}

/**
 * Response returned when an object is deleted
 */
export interface DeletedCollection {
  /**
   * The unique identifier for the collection which you provided in the URL.
   */
  id?: string;

  /**
   * Whether the collection was deleted successfully or not.
   */
  deleted?: boolean;

  /**
   * The type of object which was deleted. - `collection`
   */
  object?: 'collection';
}

export interface CollectionCreateParams {
  /**
   * Body param: The name of the collection. For multilingual collections, this will
   * be the name of the default language's content.
   */
  name: string;

  /**
   * Body param: The description of the collection. For multilingual collections,
   * this will be the description of the default language's content.
   */
  description?: string;

  /**
   * Body param: The id of the help center where the collection will be created. If
   * `null` then it will be created in the default help center.
   */
  help_center_id?: number | null;

  /**
   * Body param: The id of the parent collection. If `null` then it will be created
   * as the first level collection.
   */
  parent_id?: string | null;

  /**
   * Body param: The Translated Content of an Group. The keys are the locale codes
   * and the values are the translated content of the Group.
   */
  translated_content?: Shared.GroupTranslatedContent | null;

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

export interface CollectionRetrieveParams {
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

export interface CollectionUpdateParams {
  /**
   * Body param: The description of the collection. For multilingual collections,
   * this will be the description of the default language's content.
   */
  description?: string;

  /**
   * Body param: The name of the collection. For multilingual collections, this will
   * be the name of the default language's content.
   */
  name?: string;

  /**
   * Body param: The id of the parent collection. If `null` then it will be updated
   * as the first level collection.
   */
  parent_id?: string | null;

  /**
   * Body param: The Translated Content of an Group. The keys are the locale codes
   * and the values are the translated content of the Group.
   */
  translated_content?: Shared.GroupTranslatedContent | null;

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

export interface CollectionListParams {
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

export interface CollectionDeleteParams {
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

export namespace Collections {
  export import Collection = CollectionsAPI.Collection;
  export import CollectionList = CollectionsAPI.CollectionList;
  export import DeletedCollection = CollectionsAPI.DeletedCollection;
  export import CollectionCreateParams = CollectionsAPI.CollectionCreateParams;
  export import CollectionRetrieveParams = CollectionsAPI.CollectionRetrieveParams;
  export import CollectionUpdateParams = CollectionsAPI.CollectionUpdateParams;
  export import CollectionListParams = CollectionsAPI.CollectionListParams;
  export import CollectionDeleteParams = CollectionsAPI.CollectionDeleteParams;
}
