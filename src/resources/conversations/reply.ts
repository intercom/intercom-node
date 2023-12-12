// File generated from our OpenAPI spec by Stainless.

import * as Core from 'intercom/core';
import { APIResource } from 'intercom/resource';
import * as ReplyAPI from 'intercom/resources/conversations/reply';
import * as Shared from 'intercom/resources/shared';

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
      headers: { 'Intercom-Version': intercomVersion?.toString() || '', ...options?.headers },
    });
  }
}

export type ReplyCreateParams =
  | ReplyCreateParams.ContactReplyConversationRequest
  | ReplyCreateParams.AdminReplyConversationRequest;

export namespace ReplyCreateParams {
  export interface ContactReplyConversationRequest {
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
     * Body param: A list of image URLs that will be added as attachments. You can
     * include up to 5 URLs.
     */
    attachment_urls?: Array<string>;

    /**
     * Body param: The time the reply was created. If not provided, the current time
     * will be used.
     */
    created_at?: number;

    /**
     * Body param: The email you have defined for the user.
     */
    email?: string;

    /**
     * Body param: The identifier for the contact as given by Intercom.
     */
    intercom_user_id?: string;

    /**
     * Body param: The external_id you have defined for the contact.
     */
    user_id?: string;

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

  export interface AdminReplyConversationRequest {
    /**
     * Body param: The id of the admin who is authoring the comment.
     */
    admin_id: string;

    /**
     * Body param:
     */
    message_type: 'comment' | 'note' | 'quick_reply';

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
     * Body param: The time the reply was created. If not provided, the current time
     * will be used.
     */
    created_at?: number;

    /**
     * Body param: The quick reply options to display.\nMust be present for quick_reply
     * message types.
     */
    reply_options?: Array<ReplyCreateParams.AdminReplyConversationRequest.ReplyOption>;

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

  export namespace AdminReplyConversationRequest {
    export interface ReplyOption {
      /**
       * The text to display in this quick reply option.
       */
      text: string;

      /**
       * A unique identifier for this quick reply option. This value will be available
       * within the metadata of the comment conversation part that is created when a user
       * clicks on this reply option.
       */
      uuid: string;
    }
  }
}

export namespace Reply {
  export import ReplyCreateParams = ReplyAPI.ReplyCreateParams;
}
