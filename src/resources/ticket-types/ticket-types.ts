// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as TicketTypesAPI from './ticket-types';
import * as Shared from '../shared';
import * as AttributesAPI from './attributes';

export class TicketTypes extends APIResource {
  attributes: AttributesAPI.Attributes = new AttributesAPI.Attributes(this._client);

  /**
   * You can create a new ticket type.
   *
   * > 📘 Creating ticket types.
   * >
   * > Every ticket type will be created with two default attributes: _default_title_
   * > and _default_description_. For the `icon` propery, use an emoji from
   * > [Twemoji Cheatsheet](https://twemoji-cheatsheet.vercel.app/)
   */
  create(params: TicketTypeCreateParams, options?: Core.RequestOptions): Core.APIPromise<TicketType | null> {
    const { 'Intercom-Version': intercomVersion, ...body } = params;
    return this._client.post('/ticket_types', {
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
   * You can fetch the details of a single ticket type.
   */
  retrieve(
    id: string,
    params?: TicketTypeRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TicketType | null>;
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<TicketType | null>;
  retrieve(
    id: string,
    params: TicketTypeRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TicketType | null> {
    if (isRequestOptions(params)) {
      return this.retrieve(id, {}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.get(`/ticket_types/${id}`, {
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
   * You can update a ticket type.
   *
   * > 📘 Updating a ticket type.
   * >
   * > For the `icon` propery, use an emoji from
   * > [Twemoji Cheatsheet](https://twemoji-cheatsheet.vercel.app/)
   */
  update(
    id: string,
    params?: TicketTypeUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TicketType | null>;
  update(id: string, options?: Core.RequestOptions): Core.APIPromise<TicketType | null>;
  update(
    id: string,
    params: TicketTypeUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TicketType | null> {
    if (isRequestOptions(params)) {
      return this.update(id, {}, params);
    }
    const { 'Intercom-Version': intercomVersion, ...body } = params;
    return this._client.put(`/ticket_types/${id}`, {
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
   * You can get a list of all ticket types for a workspace.
   */
  list(params?: TicketTypeListParams, options?: Core.RequestOptions): Core.APIPromise<TicketTypeList>;
  list(options?: Core.RequestOptions): Core.APIPromise<TicketTypeList>;
  list(
    params: TicketTypeListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TicketTypeList> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.get('/ticket_types', {
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
 * A ticket type, used to define the data fields to be captured in a ticket.
 */
export interface TicketType {
  /**
   * The id representing the ticket type.
   */
  id?: string;

  /**
   * Whether the ticket type is archived or not.
   */
  archived?: boolean;

  /**
   * Category of the Ticket Type.
   */
  category?: 'Customer' | 'Back-office' | 'Tracker';

  /**
   * The date and time the ticket type was created.
   */
  created_at?: number;

  /**
   * The description of the ticket type
   */
  description?: string;

  /**
   * The icon of the ticket type
   */
  icon?: string;

  /**
   * The name of the ticket type
   */
  name?: string;

  /**
   * A list of attributes associated with a given ticket type.
   */
  ticket_type_attributes?: TicketType.TicketTypeAttributes;

  /**
   * String representing the object's type. Always has the value `ticket_type`.
   */
  type?: string;

  /**
   * The date and time the ticket type was last updated.
   */
  updated_at?: number;

  /**
   * The id of the workspace that the ticket type belongs to.
   */
  workspace_id?: string;
}

export namespace TicketType {
  /**
   * A list of attributes associated with a given ticket type.
   */
  export interface TicketTypeAttributes {
    /**
     * A list of ticket type attributes associated with a given ticket type.
     */
    ticket_type_attributes?: Array<Shared.TicketTypeAttribute | null>;

    /**
     * String representing the object's type. Always has the value
     * `ticket_type_attributes.list`.
     */
    type?: string;
  }
}

/**
 * A list of ticket types associated with a given workspace.
 */
export interface TicketTypeList {
  /**
   * A list of ticket_types associated with a given workspace.
   */
  ticket_types?: Array<TicketType | null>;

  /**
   * String representing the object's type. Always has the value `ticket_type.list`.
   */
  type?: string;
}

export interface TicketTypeCreateParams {
  /**
   * Body param: The name of the ticket type.
   */
  name: string;

  /**
   * Body param: Category of the Ticket Type.
   */
  category?: 'Customer' | 'Back-office' | 'Tracker';

  /**
   * Body param: The description of the ticket type.
   */
  description?: string;

  /**
   * Body param: The icon of the ticket type.
   */
  icon?: string;

  /**
   * Body param: Whether the tickets associated with this ticket type are intended
   * for internal use only or will be shared with customers. This is currently a
   * limited attribute.
   */
  is_internal?: boolean;

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

export interface TicketTypeRetrieveParams {
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

export interface TicketTypeUpdateParams {
  /**
   * Body param: The archived status of the ticket type.
   */
  archived?: boolean;

  /**
   * Body param: Category of the Ticket Type.
   */
  category?: 'Customer' | 'Back-office' | 'Tracker';

  /**
   * Body param: The description of the ticket type.
   */
  description?: string;

  /**
   * Body param: The icon of the ticket type.
   */
  icon?: string;

  /**
   * Body param: Whether the tickets associated with this ticket type are intended
   * for internal use only or will be shared with customers. This is currently a
   * limited attribute.
   */
  is_internal?: boolean;

  /**
   * Body param: The name of the ticket type.
   */
  name?: string;

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

export interface TicketTypeListParams {
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

export namespace TicketTypes {
  export import TicketType = TicketTypesAPI.TicketType;
  export import TicketTypeList = TicketTypesAPI.TicketTypeList;
  export import TicketTypeCreateParams = TicketTypesAPI.TicketTypeCreateParams;
  export import TicketTypeRetrieveParams = TicketTypesAPI.TicketTypeRetrieveParams;
  export import TicketTypeUpdateParams = TicketTypesAPI.TicketTypeUpdateParams;
  export import TicketTypeListParams = TicketTypesAPI.TicketTypeListParams;
  export import Attributes = AttributesAPI.Attributes;
  export import AttributeCreateParams = AttributesAPI.AttributeCreateParams;
  export import AttributeUpdateParams = AttributesAPI.AttributeUpdateParams;
}
