// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'intercom/resource';
import * as ScrollAPI from 'intercom/resources/companies/scroll';
import * as Shared from 'intercom/resources/shared';

export class Scroll extends APIResource {}

/**
 * Companies allow you to represent organizations using your product. Each company
 * will have its own description and be associated with contacts. You can fetch,
 * create, update and list companies.
 */
export interface CompanyScroll {
  data?: Array<Shared.Company>;

  /**
   * Cursor-based pagination is a technique used in the Intercom API to navigate
   * through large amounts of data. A "cursor" or pointer is used to keep track of
   * the current position in the result set, allowing the API to return the data in
   * small chunks or "pages" as needed.
   */
  pages?: CompanyScroll.Pages | null;

  /**
   * The scroll parameter to use in the next request to fetch the next page of
   * results.
   */
  scroll_param?: string;

  /**
   * The total number of companies
   */
  total_count?: number | null;

  /**
   * The type of object - `list`
   */
  type?: 'list';
}

export namespace CompanyScroll {
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

export namespace Scroll {
  export import CompanyScroll = ScrollAPI.CompanyScroll;
}
