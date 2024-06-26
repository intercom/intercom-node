// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as MessagesAPI from './messages';
import * as Shared from './shared';

export class Messages extends APIResource {
  /**
   * You can create a message that has been initiated by an admin. The conversation
   * can be either an in-app message or an email.
   *
   * > 🚧 Sending for visitors
   * >
   * > There can be a short delay between when a contact is created and when a
   * > contact becomes available to be messaged through the API. A 404 Not Found
   * > error will be returned in this case.
   *
   * This will return the Message model that has been created.
   *
   * > 🚧 Retrieving Associated Conversations
   * >
   * > As this is a message, there will be no conversation present until the contact
   * > responds. Once they do, you will have to search for a contact's conversations
   * > with the id of the message.
   */
  create(params: MessageCreateParams, options?: Core.RequestOptions): Core.APIPromise<Shared.Message> {
    const { body, 'Intercom-Version': intercomVersion } = params;
    return this._client.post('/messages', {
      body: body,
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

export type MessageCreateParams = MessageCreateParams.MessageTypeEmail | MessageCreateParams.MessageTypeInapp;

export namespace MessageCreateParams {
  export interface MessageTypeEmail {
    /**
     * Body param:
     */
    body: unknown;

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

  export interface MessageTypeInapp {
    /**
     * Body param:
     */
    body: unknown;

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
}

export namespace Messages {
  export import MessageCreateParams = MessagesAPI.MessageCreateParams;
}
