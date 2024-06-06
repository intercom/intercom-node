// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as CompaniesAPI from './companies';
import * as Shared from '../shared';
import * as ContactsAPI from './contacts';
import * as SegmentsAPI from './segments';

export class Companies extends APIResource {
  contacts: ContactsAPI.Contacts = new ContactsAPI.Contacts(this._client);
  segments: SegmentsAPI.Segments = new SegmentsAPI.Segments(this._client);

  /**
   * You can create or update a company.
   *
   * > 📘 Companies with no users
   * >
   * > Companies will be only visible in Intercom when there is at least one
   * > associated user.
   *
   * Companies are looked up via `company_id` in a `POST` request, if not found via
   * `company_id`, the new company will be created, if found, that company will be
   * updated.
   */
  create(params?: CompanyCreateParams, options?: Core.RequestOptions): Core.APIPromise<Shared.Company>;
  create(options?: Core.RequestOptions): Core.APIPromise<Shared.Company>;
  create(
    params: CompanyCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Company> {
    if (isRequestOptions(params)) {
      return this.create({}, params);
    }
    const { 'Intercom-Version': intercomVersion, ...body } = params;
    return this._client.post('/companies', {
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
   * You can fetch a single company.
   */
  retrieve(
    id: string,
    params?: CompanyRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Company>;
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<Shared.Company>;
  retrieve(
    id: string,
    params: CompanyRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Company> {
    if (isRequestOptions(params)) {
      return this.retrieve(id, {}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.get(`/companies/${id}`, {
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
   * You can update a single company
   */
  update(
    id: string,
    params?: CompanyUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Company>;
  update(id: string, options?: Core.RequestOptions): Core.APIPromise<Shared.Company>;
  update(
    id: string,
    params: CompanyUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Company> {
    if (isRequestOptions(params)) {
      return this.update(id, {}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.put(`/companies/${id}`, {
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
   * You can list companies. The company list is sorted by the `last_request_at`
   * field and by default is ordered descending, most recently requested first.
   *
   * Note that the API does not include companies who have no associated users in
   * list responses.
   *
   * > 📘
   * >
   * > When using the Companies endpoint and the pages object to iterate through the
   * > returned companies, there is a limit of 10,000 Companies that can be returned.
   * > If you need to list or iterate on more than 10,000 Companies, please use the
   * > [Scroll API](https://developers.intercom.com/reference#iterating-over-all-companies).
   */
  list(params: CompanyListParams, options?: Core.RequestOptions): Core.APIPromise<CompanyList> {
    const { filter, order, page, per_page, 'Intercom-Version': intercomVersion } = params;
    return this._client.post('/companies/list', {
      query: { filter, order, page, per_page },
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
   * You can delete a single company.
   */
  delete(
    id: string,
    params?: CompanyDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeletedCompanyObject>;
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<DeletedCompanyObject>;
  delete(
    id: string,
    params: CompanyDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeletedCompanyObject> {
    if (isRequestOptions(params)) {
      return this.delete(id, {}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.delete(`/companies/${id}`, {
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
   * The `list all companies` functionality does not work well for huge datasets, and can result in errors and performance problems when paging deeply. The Scroll API provides an efficient mechanism for iterating over all companies in a dataset.
   *
   * - Each app can only have 1 scroll open at a time. You'll get an error message if
   *   you try to have more than one open per app.
   * - If the scroll isn't used for 1 minute, it expires and calls with that scroll
   *   param will fail
   * - If the end of the scroll is reached, "companies" will be empty and the scroll
   *   parameter will expire
   *
   * > 📘 Scroll Parameter
   * >
   * > You can get the first page of companies by simply sending a GET request to the
   * > scroll endpoint. For subsequent requests you will need to use the scroll
   * > parameter from the response.
   *
   * > ❗️ Scroll network timeouts
   * >
   * > Since scroll is often used on large datasets network errors such as timeouts
   * > can be encountered. When this occurs you will need to restart your scroll
   * > query as it is not possible to continue from a specific point when using
   * > scroll.
   * >
   * > When this occurs you will see a HTTP 500 error with the following message:
   * > "Request failed due to an internal network error. Please restart the scroll
   * > operation."
   */
  scroll(params?: CompanyScrollParams, options?: Core.RequestOptions): Core.APIPromise<CompanyScroll | null>;
  scroll(options?: Core.RequestOptions): Core.APIPromise<CompanyScroll | null>;
  scroll(
    params: CompanyScrollParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CompanyScroll | null> {
    if (isRequestOptions(params)) {
      return this.scroll({}, params);
    }
    const { 'Intercom-Version': intercomVersion, ...query } = params;
    return this._client.get('/companies/scroll', {
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

/**
 * Response returned when an object is deleted
 */
export interface DeletedCompanyObject {
  /**
   * The unique identifier for the company which is given by Intercom.
   */
  id?: string;

  /**
   * Whether the company was deleted successfully or not.
   */
  deleted?: boolean;

  /**
   * The type of object which was deleted. - `company`
   */
  object?: 'company';
}

export interface CompanyCreateParams {
  /**
   * Body param: The company id you have defined for the company. Can't be updated
   */
  company_id?: string;

  /**
   * Body param: A hash of key/value pairs containing any other data about the
   * company you want Intercom to store.
   */
  custom_attributes?: Record<string, string>;

  /**
   * Body param: The industry that this company operates in.
   */
  industry?: string;

  /**
   * Body param: How much revenue the company generates for your business. Note that
   * this will truncate floats. i.e. it only allow for whole integers, 155.98 will be
   * truncated to 155. Note that this has an upper limit of 2\*\*31-1 or 2147483647..
   */
  monthly_spend?: number;

  /**
   * Body param: The name of the Company
   */
  name?: string;

  /**
   * Body param: The name of the plan you have associated with the company.
   */
  plan?: string;

  /**
   * Body param: The time the company was created by you.
   */
  remote_created_at?: number;

  /**
   * Body param: The number of employees in this company.
   */
  size?: number;

  /**
   * Body param: The URL for this company's website. Please note that the value
   * specified here is not validated. Accepts any string.
   */
  website?: string;

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
    | 'Unstable';
}

export interface CompanyRetrieveParams {
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
    | 'Unstable';
}

export interface CompanyUpdateParams {
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
    | 'Unstable';
}

export interface CompanyListParams {
  /**
   * Query param: The `id` of the tag to filter by.
   */
  filter: CompanyListParams.FilterByTag | CompanyListParams.FilterBySegment;

  /**
   * Query param: `asc` or `desc`. Return the companies in ascending or descending
   * order. Defaults to desc
   */
  order?: string;

  /**
   * Query param: what page of results to fetch. Defaults to first page
   */
  page?: string;

  /**
   * Query param: how many results per page. Defaults to 15
   */
  per_page?: string;

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
    | 'Unstable';
}

export namespace CompanyListParams {
  /**
   * The `id` of the tag to filter by.
   */
  export interface FilterByTag {
    tag_id: string;
  }

  /**
   * The `id` of the segment to filter by.
   */
  export interface FilterBySegment {
    segment_id: string;
  }
}

export interface CompanyDeleteParams {
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
    | 'Unstable';
}

export interface CompanyScrollParams {
  /**
   * Query param:
   */
  scroll_param?: string;

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
    | 'Unstable';
}

export namespace Companies {
  export import CompanyList = CompaniesAPI.CompanyList;
  export import CompanyScroll = CompaniesAPI.CompanyScroll;
  export import DeletedCompanyObject = CompaniesAPI.DeletedCompanyObject;
  export import CompanyCreateParams = CompaniesAPI.CompanyCreateParams;
  export import CompanyRetrieveParams = CompaniesAPI.CompanyRetrieveParams;
  export import CompanyUpdateParams = CompaniesAPI.CompanyUpdateParams;
  export import CompanyListParams = CompaniesAPI.CompanyListParams;
  export import CompanyDeleteParams = CompaniesAPI.CompanyDeleteParams;
  export import CompanyScrollParams = CompaniesAPI.CompanyScrollParams;
  export import Contacts = ContactsAPI.Contacts;
  export import CompanyAttachedContacts = ContactsAPI.CompanyAttachedContacts;
  export import ContactListParams = ContactsAPI.ContactListParams;
  export import Segments = SegmentsAPI.Segments;
  export import CompanyAttachedSegments = SegmentsAPI.CompanyAttachedSegments;
  export import SegmentListParams = SegmentsAPI.SegmentListParams;
}
