// File generated from our OpenAPI spec by Stainless.

import * as Core from 'intercom/core';
import { APIResource } from 'intercom/resource';
import * as MessagesAPI from 'intercom/resources/messages';
import * as Shared from 'intercom/resources/shared';

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
    const { 'Intercom-Version': intercomVersion, ...body } = params;
    return this._client.post('/messages', {
      body,
      ...options,
      headers: { 'Intercom-Version': intercomVersion?.toString() || '', ...options?.headers },
    });
  }
}

export type MessageCreateParams = MessageCreateParams.Variant0 | MessageCreateParams.Variant1;

export namespace MessageCreateParams {
  export type Variant0 = unknown;

  export type Variant1 = unknown;
}

export namespace Messages {
  export import MessageCreateParams = MessagesAPI.MessageCreateParams;
}
