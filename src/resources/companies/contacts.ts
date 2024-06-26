// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as ContactsAPI from './contacts';
import * as Shared from '../shared';

export class Contacts extends APIResource {
  /**
   * You can fetch a list of all contacts that belong to a company.
   */
  list(
    id: string,
    params?: ContactListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CompanyAttachedContacts>;
  list(id: string, options?: Core.RequestOptions): Core.APIPromise<CompanyAttachedContacts>;
  list(
    id: string,
    params: ContactListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CompanyAttachedContacts> {
    if (isRequestOptions(params)) {
      return this.list(id, {}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.get(`/companies/${id}/contacts`, {
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
 * A list of Contact Objects
 */
export interface CompanyAttachedContacts {
  /**
   * An array containing Contact Objects
   */
  data?: Array<Shared.Contact>;

  /**
   * Cursor-based pagination is a technique used in the Intercom API to navigate
   * through large amounts of data. A "cursor" or pointer is used to keep track of
   * the current position in the result set, allowing the API to return the data in
   * small chunks or "pages" as needed.
   */
  pages?: Shared.CursorPages | null;

  /**
   * The total number of contacts
   */
  total_count?: number;

  /**
   * The type of object - `list`
   */
  type?: 'list';
}

export interface ContactListParams {
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

export namespace Contacts {
  export import CompanyAttachedContacts = ContactsAPI.CompanyAttachedContacts;
  export import ContactListParams = ContactsAPI.ContactListParams;
}
