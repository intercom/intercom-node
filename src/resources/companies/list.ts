// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'intercom/resource';
import * as ListAPI from 'intercom/resources/companies/list';
import * as Shared from 'intercom/resources/shared';

export class List extends APIResource {}

/**
 * This will return a list of company for the App.
 */
export interface CompanyList {
  /**
   * An array containing Company Objects.
   */
  data?: Array<Shared.Company>;

  /**
   * Cursor-based pagination is a technique used in the Intercom API to navigate
   * through large amounts of data. A "cursor" or pointer is used to keep track of
   * the current position in the result set, allowing the API to return the data in
   * small chunks or "pages" as needed.
   */
  pages?: CompanyList.Pages | null;

  /**
   * The total number of companies.
   */
  total_count?: number;

  /**
   * The type of object - `list`.
   */
  type?: 'list';
}

export namespace CompanyList {
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
      page?: number;

      starting_after?: string;
    }
  }
}

export namespace List {
  export import CompanyList = ListAPI.CompanyList;
}
