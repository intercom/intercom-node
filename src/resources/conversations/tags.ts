// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as TagsAPI from './tags';
import * as Shared from '../shared';

export class Tags extends APIResource {
  /**
   * You can tag a specific conversation. This will return a tag object for the tag
   * that was added to the conversation.
   */
  create(
    conversationId: string,
    params: TagCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Tag> {
    const { 'Intercom-Version': intercomVersion, ...body } = params;
    return this._client.post(`/conversations/${conversationId}/tags`, {
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
   * You can remove tag from a specific conversation. This will return a tag object
   * for the tag that was removed from the conversation.
   */
  delete(
    conversationId: string,
    id: string,
    params: TagDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Tag> {
    const { 'Intercom-Version': intercomVersion, ...body } = params;
    return this._client.delete(`/conversations/${conversationId}/tags/${id}`, {
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

export interface TagCreateParams {
  /**
   * Body param: The unique identifier for the tag which is given by Intercom
   */
  id: string;

  /**
   * Body param: The unique identifier for the admin which is given by Intercom.
   */
  admin_id: string;

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

export interface TagDeleteParams {
  /**
   * Body param: The unique identifier for the admin which is given by Intercom.
   */
  admin_id: string;

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

export namespace Tags {
  export import TagCreateParams = TagsAPI.TagCreateParams;
  export import TagDeleteParams = TagsAPI.TagDeleteParams;
}
