// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as TagsAPI from './tags';
import * as Shared from './shared';

export class Tags extends APIResource {
  /**
   * You can fetch the details of tags that are on the workspace by their id. This
   * will return a tag object.
   */
  retrieve(
    id: string,
    params?: TagRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Tag>;
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<Shared.Tag>;
  retrieve(
    id: string,
    params: TagRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Tag> {
    if (isRequestOptions(params)) {
      return this.retrieve(id, {}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.get(`/tags/${id}`, {
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
   * You can fetch a list of all tags for a given workspace.
   */
  list(params?: TagListParams, options?: Core.RequestOptions): Core.APIPromise<Shared.TagList>;
  list(options?: Core.RequestOptions): Core.APIPromise<Shared.TagList>;
  list(
    params: TagListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.TagList> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.get('/tags', {
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
   * You can delete the details of tags that are on the workspace by passing in the
   * id.
   */
  delete(id: string, params?: TagDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  delete(
    id: string,
    params: TagDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(params)) {
      return this.delete(id, {}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.delete(`/tags/${id}`, {
      ...options,
      headers: {
        Accept: '*/*',
        ...(intercomVersion?.toString() != null ?
          { 'Intercom-Version': intercomVersion?.toString() }
        : undefined),
        ...options?.headers,
      },
    });
  }

  /**
   * You can use this endpoint to perform the following operations:
   *
   * **1. Create a new tag:** You can create a new tag by passing in the tag name as
   * specified in "Create or Update Tag Request Payload" described below.
   *
   * **2. Update an existing tag:** You can update an existing tag by passing the id
   * of the tag as specified in "Create or Update Tag Request Payload" described
   * below.
   *
   * **3. Tag Companies:** You can tag single company or a list of companies. You can
   * tag a company by passing in the tag name and the company details as specified in
   * "Tag Company Request Payload" described below. Also, if the tag doesn't exist
   * then a new one will be created automatically.
   *
   * **4. Untag Companies:** You can untag a single company or a list of companies.
   * You can untag a company by passing in the tag id and the company details as
   * specified in "Untag Company Request Payload" described below.
   *
   * **5. Tag Multiple Users:** You can tag a list of users. You can tag the users by
   * passing in the tag name and the user details as specified in "Tag Users Request
   * Payload" described below.
   *
   * Each operation will return a tag object.
   */
  createOrUpdate(
    params: TagCreateOrUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Tag> {
    const { 'Intercom-Version': intercomVersion, ...body } = params;
    return this._client.post('/tags', {
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
}

export interface TagRetrieveParams {
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

export interface TagListParams {
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

export interface TagDeleteParams {
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

export type TagCreateOrUpdateParams =
  | TagCreateOrUpdateParams.CreateOrUpdateTagRequest
  | TagCreateOrUpdateParams.TagCompanyRequest
  | TagCreateOrUpdateParams.UntagCompanyRequest
  | TagCreateOrUpdateParams.TagMultipleUsersRequest;

export namespace TagCreateOrUpdateParams {
  export interface CreateOrUpdateTagRequest {
    /**
     * Body param: The name of the tag, which will be created if not found, or the new
     * name for the tag if this is an update request. Names are case insensitive.
     */
    name: string;

    /**
     * Body param: The id of tag to updates.
     */
    id?: string;

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

  export interface TagCompanyRequest {
    /**
     * Body param: The id or company_id of the company can be passed as input
     * parameters.
     */
    companies: Array<TagCreateOrUpdateParams.TagCompanyRequest.Company>;

    /**
     * Body param: The name of the tag, which will be created if not found.
     */
    name: string;

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

  export namespace TagCompanyRequest {
    export interface Company {
      /**
       * The Intercom defined id representing the company.
       */
      id?: string;

      /**
       * The company id you have defined for the company.
       */
      company_id?: string;
    }
  }

  export interface UntagCompanyRequest {
    /**
     * Body param: The id or company_id of the company can be passed as input
     * parameters.
     */
    companies: Array<TagCreateOrUpdateParams.UntagCompanyRequest.Company>;

    /**
     * Body param: The name of the tag which will be untagged from the company
     */
    name: string;

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

  export namespace UntagCompanyRequest {
    export interface Company {
      /**
       * The Intercom defined id representing the company.
       */
      id?: string;

      /**
       * The company id you have defined for the company.
       */
      company_id?: string;

      /**
       * Always set to true
       */
      untag?: boolean;
    }
  }

  export interface TagMultipleUsersRequest {
    /**
     * Body param: The name of the tag, which will be created if not found.
     */
    name: string;

    /**
     * Body param:
     */
    users: Array<TagCreateOrUpdateParams.TagMultipleUsersRequest.User>;

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

  export namespace TagMultipleUsersRequest {
    export interface User {
      /**
       * The Intercom defined id representing the user.
       */
      id?: string;
    }
  }
}

export namespace Tags {
  export import TagRetrieveParams = TagsAPI.TagRetrieveParams;
  export import TagListParams = TagsAPI.TagListParams;
  export import TagDeleteParams = TagsAPI.TagDeleteParams;
  export import TagCreateOrUpdateParams = TagsAPI.TagCreateOrUpdateParams;
}
