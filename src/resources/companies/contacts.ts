// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
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
  pages?: CompanyAttachedContacts.Pages | null;

  /**
   * The total number of contacts
   */
  total_count?: number;

  /**
   * The type of object - `list`
   */
  type?: 'list';
}

export namespace CompanyAttachedContacts {
  /**
   * Cursor-based pagination is a technique used in the Intercom API to navigate
   * through large amounts of data. A "cursor" or pointer is used to keep track of
   * the current position in the result set, allowing the API to return the data in
   * small chunks or "pages" as needed.
   */
  export interface Pages {
    next?: Pages.Next | null;

    /**
     * The current page
     */
    page?: number;

    /**
     * Number of results per page
     */
    per_page?: number;

    /**
     * Total number of pages
     */
    total_pages?: number;

    /**
     * the type of object `pages`.
     */
    type?: 'pages';
  }

  export namespace Pages {
    export interface Next {
      /**
       * The number of results to fetch per page.
       */
      per_page?: number;

      /**
       * The cursor to use in the next request to get the next page of results.
       */
      starting_after?: string | null;
    }
  }
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
