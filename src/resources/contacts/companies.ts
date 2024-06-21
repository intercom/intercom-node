// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as CompaniesAPI from './companies';
import * as Shared from '../shared';

export class Companies extends APIResource {
  /**
   * You can attach a company to a single contact.
   */
  create(
    id: string,
    params: CompanyCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Company> {
    const { company_id, 'Intercom-Version': intercomVersion, ...body } = params;
    return this._client.post(`/contacts/${id}/companies`, {
      body: { id: company_id, ...body },
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
   * You can fetch a list of companies that are associated to a contact.
   */
  list(
    id: string,
    params?: CompanyListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContactAttachedCompanies>;
  list(id: string, options?: Core.RequestOptions): Core.APIPromise<ContactAttachedCompanies>;
  list(
    id: string,
    params: CompanyListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContactAttachedCompanies> {
    if (isRequestOptions(params)) {
      return this.list(id, {}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.get(`/contacts/${id}/companies`, {
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
   * You can detach a company from a single contact.
   */
  delete(
    contactId: string,
    id: string,
    params?: CompanyDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Company>;
  delete(contactId: string, id: string, options?: Core.RequestOptions): Core.APIPromise<Shared.Company>;
  delete(
    contactId: string,
    id: string,
    params: CompanyDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Company> {
    if (isRequestOptions(params)) {
      return this.delete(contactId, id, {}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.delete(`/contacts/${contactId}/companies/${id}`, {
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
 * A list of Company Objects
 */
export interface ContactAttachedCompanies {
  /**
   * An array containing Company Objects
   */
  companies?: Array<Shared.Company>;

  /**
   * The majority of list resources in the API are paginated to allow clients to
   * traverse data over multiple requests.
   *
   * Their responses are likely to contain a pages object that hosts pagination links
   * which a client can use to paginate through the data without having to construct
   * a query. The link relations for the pages field are as follows.
   */
  pages?: ContactAttachedCompanies.Pages;

  /**
   * The total number of companies associated to this contact
   */
  total_count?: number;

  /**
   * The type of object
   */
  type?: 'list';
}

export namespace ContactAttachedCompanies {
  /**
   * The majority of list resources in the API are paginated to allow clients to
   * traverse data over multiple requests.
   *
   * Their responses are likely to contain a pages object that hosts pagination links
   * which a client can use to paginate through the data without having to construct
   * a query. The link relations for the pages field are as follows.
   */
  export interface Pages {
    /**
     * A link to the next page of results. A response that does not contain a next link
     * does not have further data to fetch.
     */
    next?: string | null;

    page?: number;

    per_page?: number;

    total_pages?: number;

    type?: 'pages';
  }
}

export interface CompanyCreateParams {
  /**
   * Body param: The unique identifier for the company which is given by Intercom
   */
  company_id: string;

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

export interface CompanyListParams {
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
    | '2.11'
    | 'Unstable';
}

export namespace Companies {
  export import ContactAttachedCompanies = CompaniesAPI.ContactAttachedCompanies;
  export import CompanyCreateParams = CompaniesAPI.CompanyCreateParams;
  export import CompanyListParams = CompaniesAPI.CompanyListParams;
  export import CompanyDeleteParams = CompaniesAPI.CompanyDeleteParams;
}
