// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as ReplyAPI from './reply';
import * as Shared from '../shared';

export class Reply extends APIResource {
  /**
   * You can reply to a conversation with a message from an admin or on behalf of a
   * contact, or with a note for admins.
   */
  create(
    id: (string & {}) | 'last',
    params: ReplyCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Conversation> {
    const { 'Intercom-Version': intercomVersion, ...body } = params;
    return this._client.post(`/conversations/${id}/reply`, {
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

export type ReplyCreateParams =
  | ReplyCreateParams.ContactReplyIntercomUserIDRequest
  | ReplyCreateParams.ContactReplyEmailRequest
  | ReplyCreateParams.ContactReplyUserIDRequest
  | ReplyCreateParams.AdminReplyConversationRequest;

export namespace ReplyCreateParams {
  export interface ContactReplyIntercomUserIDRequest {
    /**
     * Body param: The text body of the comment.
     */
    body: string;

    /**
     * Body param: The identifier for the contact as given by Intercom.
     */
    intercom_user_id: string;

    /**
     * Body param:
     */
    message_type: 'comment';

    /**
     * Body param:
     */
    type: 'user';

    /**
     * Body param: A list of image URLs that will be added as attachments. You can
     * include up to 5 URLs.
     */
    attachment_urls?: Array<string>;

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
      | 'Unstable';
  }

  export interface ContactReplyEmailRequest {
    /**
     * Body param: The text body of the comment.
     */
    body: string;

    /**
     * Body param: The email you have defined for the user.
     */
    email: string;

    /**
     * Body param:
     */
    message_type: 'comment';

    /**
     * Body param:
     */
    type: 'user';

    /**
     * Body param: A list of image URLs that will be added as attachments. You can
     * include up to 5 URLs.
     */
    attachment_urls?: Array<string>;

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
      | 'Unstable';
  }

  export interface ContactReplyUserIDRequest {
    /**
     * Body param: The text body of the comment.
     */
    body: string;

    /**
     * Body param:
     */
    message_type: 'comment';

    /**
     * Body param:
     */
    type: 'user';

    /**
     * Body param: The external_id you have defined for the contact.
     */
    user_id: string;

    /**
     * Body param: A list of image URLs that will be added as attachments. You can
     * include up to 5 URLs.
     */
    attachment_urls?: Array<string>;

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
      | 'Unstable';
  }

  export interface AdminReplyConversationRequest {
    /**
     * Body param: The id of the admin who is authoring the comment.
     */
    admin_id: string;

    /**
     * Body param:
     */
    message_type: 'comment' | 'note';

    /**
     * Body param:
     */
    type: 'admin';

    /**
     * Body param: A list of image URLs that will be added as attachments. You can
     * include up to 5 URLs.
     */
    attachment_urls?: Array<string>;

    /**
     * Body param: The text body of the reply.\nNotes accept some HTML
     * formatting.\nMust be present for comment and note message types.
     */
    body?: string;

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
      | 'Unstable';
  }
}

export namespace Reply {
  export import ReplyCreateParams = ReplyAPI.ReplyCreateParams;
}
