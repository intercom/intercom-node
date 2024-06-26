// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as AttributesAPI from './attributes';
import * as Shared from '../shared';

export class Attributes extends APIResource {
  /**
   * You can create a new attribute for a ticket type.
   */
  create(
    ticketTypeId: string,
    params: AttributeCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.TicketTypeAttribute | null> {
    const { 'Intercom-Version': intercomVersion, ...body } = params;
    return this._client.post(`/ticket_types/${ticketTypeId}/attributes`, {
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
   * You can update an existing attribute for a ticket type.
   */
  update(
    ticketTypeId: string,
    id: string,
    params?: AttributeUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.TicketTypeAttribute | null>;
  update(
    ticketTypeId: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.TicketTypeAttribute | null>;
  update(
    ticketTypeId: string,
    id: string,
    params: AttributeUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.TicketTypeAttribute | null> {
    if (isRequestOptions(params)) {
      return this.update(ticketTypeId, id, {}, params);
    }
    const { 'Intercom-Version': intercomVersion, ...body } = params;
    return this._client.put(`/ticket_types/${ticketTypeId}/attributes/${id}`, {
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

export interface AttributeCreateParams {
  /**
   * Body param: The data type of the attribute
   */
  data_type: 'string' | 'list' | 'integer' | 'decimal' | 'boolean' | 'datetime' | 'files';

  /**
   * Body param: The description of the attribute presented to the teammate or
   * contact
   */
  description: string;

  /**
   * Body param: The name of the ticket type attribute
   */
  name: string;

  /**
   * Body param: Whether the attribute allows multiple files to be attached to it
   * (only applicable to file attributes)
   */
  allow_multiple_values?: boolean;

  /**
   * Body param: A comma delimited list of items for the attribute value (only
   * applicable to list attributes)
   */
  list_items?: string;

  /**
   * Body param: Whether the attribute allows multiple lines of text (only applicable
   * to string attributes)
   */
  multiline?: boolean;

  /**
   * Body param: Whether the attribute is required to be filled in when teammates are
   * creating the ticket in Inbox.
   */
  required_to_create?: boolean;

  /**
   * Body param: Whether the attribute is required to be filled in when contacts are
   * creating the ticket in Messenger.
   */
  required_to_create_for_contacts?: boolean;

  /**
   * Body param: Whether the attribute is visible to teammates when creating a ticket
   * in Inbox.
   */
  visible_on_create?: boolean;

  /**
   * Body param: Whether the attribute is visible to contacts when creating a ticket
   * in Messenger.
   */
  visible_to_contacts?: boolean;

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

export interface AttributeUpdateParams {
  /**
   * Body param: Whether the attribute allows multiple files to be attached to it
   * (only applicable to file attributes)
   */
  allow_multiple_values?: boolean;

  /**
   * Body param: Whether the attribute should be archived and not shown during
   * creation of the ticket (it will still be present on previously created tickets)
   */
  archived?: boolean;

  /**
   * Body param: The description of the attribute presented to the teammate or
   * contact
   */
  description?: string;

  /**
   * Body param: A comma delimited list of items for the attribute value (only
   * applicable to list attributes)
   */
  list_items?: string;

  /**
   * Body param: Whether the attribute allows multiple lines of text (only applicable
   * to string attributes)
   */
  multiline?: boolean;

  /**
   * Body param: The name of the ticket type attribute
   */
  name?: string;

  /**
   * Body param: Whether the attribute is required to be filled in when teammates are
   * creating the ticket in Inbox.
   */
  required_to_create?: boolean;

  /**
   * Body param: Whether the attribute is required to be filled in when contacts are
   * creating the ticket in Messenger.
   */
  required_to_create_for_contacts?: boolean;

  /**
   * Body param: Whether the attribute is visible to teammates when creating a ticket
   * in Inbox.
   */
  visible_on_create?: boolean;

  /**
   * Body param: Whether the attribute is visible to contacts when creating a ticket
   * in Messenger.
   */
  visible_to_contacts?: boolean;

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

export namespace Attributes {
  export import AttributeCreateParams = AttributesAPI.AttributeCreateParams;
  export import AttributeUpdateParams = AttributesAPI.AttributeUpdateParams;
}
