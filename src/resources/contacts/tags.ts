// File generated from our OpenAPI spec by Stainless.

import * as Core from 'intercom/core';
import { APIResource } from 'intercom/resource';
import { isRequestOptions } from 'intercom/core';
import * as TagsAPI from 'intercom/resources/contacts/tags';
import * as Shared from 'intercom/resources/shared';

export class Tags extends APIResource {
  /**
   * You can tag a specific contact. This will return a tag object for the tag that
   * was added to the contact.
   */
  create(
    contactId: string,
    params: TagCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Tag> {
    const { 'Intercom-Version': intercomVersion, ...body } = params;
    return this._client.post(`/contacts/${contactId}/tags`, {
      body,
      ...options,
      headers: { 'Intercom-Version': intercomVersion?.toString() || '', ...options?.headers },
    });
  }

  /**
   * You can fetch a list of all tags that are attached to a specific contact.
   */
  list(
    contactId: string,
    params?: TagListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.TagList>;
  list(contactId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.TagList>;
  list(
    contactId: string,
    params: TagListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.TagList> {
    if (isRequestOptions(params)) {
      return this.list(contactId, {}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.get(`/contacts/${contactId}/tags`, {
      ...options,
      headers: { 'Intercom-Version': intercomVersion?.toString() || '', ...options?.headers },
    });
  }
}

export interface TagCreateParams {
  /**
   * Body param: The unique identifier for the tag which is given by Intercom
   */
  id: string;

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

export interface TagListParams {
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

export namespace Tags {
  export import TagCreateParams = TagsAPI.TagCreateParams;
  export import TagListParams = TagsAPI.TagListParams;
}
