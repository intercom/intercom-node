// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as DataAttributesAPI from './data-attributes';

export class DataAttributes extends APIResource {
  /**
   * You can create a data attributes for a `contact` or a `company`.
   */
  create(params: DataAttributeCreateParams, options?: Core.RequestOptions): Core.APIPromise<DataAttribute> {
    const { 'Intercom-Version': intercomVersion, ...body } = params;
    return this._client.post('/data_attributes', {
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
   * You can update a data attribute.
   *
   * > 🚧 Updating the data type is not possible
   * >
   * > It is currently a dangerous action to execute changing a data attribute's type
   * > via the API. You will need to update the type via the UI instead.
   */
  update(
    id: number,
    params?: DataAttributeUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DataAttribute>;
  update(id: number, options?: Core.RequestOptions): Core.APIPromise<DataAttribute>;
  update(
    id: number,
    params: DataAttributeUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DataAttribute> {
    if (isRequestOptions(params)) {
      return this.update(id, {}, params);
    }
    const { 'Intercom-Version': intercomVersion, ...body } = params;
    return this._client.put(`/data_attributes/${id}`, {
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
   * You can fetch a list of all data attributes belonging to a workspace for
   * contacts, companies or conversations.
   */
  list(params?: DataAttributeListParams, options?: Core.RequestOptions): Core.APIPromise<DataAttributeList>;
  list(options?: Core.RequestOptions): Core.APIPromise<DataAttributeList>;
  list(
    params: DataAttributeListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DataAttributeList> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { 'Intercom-Version': intercomVersion, ...query } = params;
    return this._client.get('/data_attributes', {
      query,
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
 * Data Attributes are metadata used to describe your contact, company and
 * conversation models. These include standard and custom attributes. By using the
 * data attributes endpoint, you can get the global list of attributes for your
 * workspace, as well as create and archive custom attributes.
 */
export interface DataAttribute {
  /**
   * The unique identifier for the data attribute which is given by Intercom. Only
   * available for custom attributes.
   */
  id?: number;

  /**
   * Teammate who created the attribute. Only applicable to CDAs
   */
  admin_id?: string;

  /**
   * Can this attribute be updated through API
   */
  api_writable?: boolean;

  /**
   * Is this attribute archived. (Only applicable to CDAs)
   */
  archived?: boolean;

  /**
   * The time the attribute was created as a UTC Unix timestamp
   */
  created_at?: number;

  /**
   * Set to true if this is a CDA
   */
  custom?: boolean;

  /**
   * The data type of the attribute.
   */
  data_type?: 'string' | 'integer' | 'float' | 'boolean' | 'date';

  /**
   * Readable description of the attribute.
   */
  description?: string;

  /**
   * Full name of the attribute. Should match the name unless it's a nested
   * attribute. We can split full_name on `.` to access nested user object values.
   */
  full_name?: string;

  /**
   * Readable name of the attribute (i.e. name you see in the UI)
   */
  label?: string;

  /**
   * Can this attribute be updated by the Messenger
   */
  messenger_writable?: boolean;

  /**
   * Value is `contact` for user/lead attributes and `company` for company
   * attributes.
   */
  model?: 'contact' | 'company';

  /**
   * Name of the attribute.
   */
  name?: string;

  /**
   * List of predefined options for attribute value.
   */
  options?: Array<string>;

  /**
   * Value is `data_attribute`.
   */
  type?: 'data_attribute';

  /**
   * Can this attribute be updated in the UI
   */
  ui_writable?: boolean;

  /**
   * The time the attribute was last updated as a UTC Unix timestamp
   */
  updated_at?: number;
}

/**
 * A list of all data attributes belonging to a workspace for contacts, companies
 * or conversations.
 */
export interface DataAttributeList {
  /**
   * A list of data attributes
   */
  data?: Array<DataAttribute>;

  /**
   * The type of the object
   */
  type?: 'list';
}

export interface DataAttributeCreateParams {
  /**
   * Body param: The type of data stored for this attribute.
   */
  data_type: 'string' | 'integer' | 'float' | 'boolean' | 'datetime' | 'date';

  /**
   * Body param: The model that the data attribute belongs to.
   */
  model: 'contact' | 'company';

  /**
   * Body param: The name of the data attribute.
   */
  name: string;

  /**
   * Body param: The readable description you see in the UI for the attribute.
   */
  description?: string;

  /**
   * Body param: Can this attribute be updated by the Messenger
   */
  messenger_writable?: boolean;

  /**
   * Body param: To create list attributes. Provide a set of hashes with `value` as
   * the key of the options you want to make. `data_type` must be `string`.
   */
  options?: Array<string>;

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

export interface DataAttributeUpdateParams {
  /**
   * Body param: Whether the attribute is to be archived or not.
   */
  archived?: boolean;

  /**
   * Body param: The readable description you see in the UI for the attribute.
   */
  description?: string;

  /**
   * Body param: Can this attribute be updated by the Messenger
   */
  messenger_writable?: boolean;

  /**
   * Body param: To create list attributes. Provide a set of hashes with `value` as
   * the key of the options you want to make. `data_type` must be `string`.
   */
  options?: Array<string>;

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

export interface DataAttributeListParams {
  /**
   * Query param: Include archived attributes in the list. By default we return only
   * non archived data attributes.
   */
  include_archived?: boolean;

  /**
   * Query param: Specify the data attribute model to return.
   */
  model?: 'contact' | 'company' | 'conversation';

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

export namespace DataAttributes {
  export import DataAttribute = DataAttributesAPI.DataAttribute;
  export import DataAttributeList = DataAttributesAPI.DataAttributeList;
  export import DataAttributeCreateParams = DataAttributesAPI.DataAttributeCreateParams;
  export import DataAttributeUpdateParams = DataAttributesAPI.DataAttributeUpdateParams;
  export import DataAttributeListParams = DataAttributesAPI.DataAttributeListParams;
}
