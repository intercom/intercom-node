// File generated from our OpenAPI spec by Stainless.

import * as Core from 'intercom/core';
import { APIResource } from 'intercom/resource';
import { isRequestOptions } from 'intercom/core';
import * as CompaniesAPI from 'intercom/resources/companies/companies';
import * as Shared from 'intercom/resources/shared';
import * as ContactsAPI from 'intercom/resources/companies/contacts';
import * as ListAPI from 'intercom/resources/companies/list';
import * as ScrollAPI from 'intercom/resources/companies/scroll';
import * as SegmentsAPI from 'intercom/resources/companies/segments';

export class Companies extends APIResource {
  contacts: ContactsAPI.Contacts = new ContactsAPI.Contacts(this._client);
  segments: SegmentsAPI.Segments = new SegmentsAPI.Segments(this._client);
  list: ListAPI.List = new ListAPI.List(this._client);
  scroll: ScrollAPI.Scroll = new ScrollAPI.Scroll(this._client);

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
      headers: { 'Intercom-Version': intercomVersion?.toString() || '', ...options?.headers },
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
      headers: { 'Intercom-Version': intercomVersion?.toString() || '', ...options?.headers },
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
      headers: { 'Intercom-Version': intercomVersion?.toString() || '', ...options?.headers },
    });
  }

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
  createUpdate(
    params?: CompanyCreateUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Company>;
  createUpdate(options?: Core.RequestOptions): Core.APIPromise<Shared.Company>;
  createUpdate(
    params: CompanyCreateUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Company> {
    if (isRequestOptions(params)) {
      return this.createUpdate({}, params);
    }
    const { 'Intercom-Version': intercomVersion, ...body } = params;
    return this._client.post('/companies', {
      body,
      ...options,
      headers: { 'Intercom-Version': intercomVersion?.toString() || '', ...options?.headers },
    });
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

export interface CompanyRetrieveParams {
  /**
   * Intercom API version.</br>By default, it's equal to the version set in the app
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
   * Intercom API version.</br>By default, it's equal to the version set in the app
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

export interface CompanyDeleteParams {
  /**
   * Intercom API version.</br>By default, it's equal to the version set in the app
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

export interface CompanyCreateUpdateParams {
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
   * Header param: Intercom API version.</br>By default, it's equal to the version
   * set in the app package.
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
  export import DeletedCompanyObject = CompaniesAPI.DeletedCompanyObject;
  export import CompanyRetrieveParams = CompaniesAPI.CompanyRetrieveParams;
  export import CompanyUpdateParams = CompaniesAPI.CompanyUpdateParams;
  export import CompanyDeleteParams = CompaniesAPI.CompanyDeleteParams;
  export import CompanyCreateUpdateParams = CompaniesAPI.CompanyCreateUpdateParams;
  export import Contacts = ContactsAPI.Contacts;
  export import CompanyAttachedContacts = ContactsAPI.CompanyAttachedContacts;
  export import ContactListParams = ContactsAPI.ContactListParams;
  export import Segments = SegmentsAPI.Segments;
  export import CompanyAttachedSegments = SegmentsAPI.CompanyAttachedSegments;
  export import SegmentListParams = SegmentsAPI.SegmentListParams;
  export import List = ListAPI.List;
  export import CompanyList = ListAPI.CompanyList;
  export import Scroll = ScrollAPI.Scroll;
  export import CompanyScroll = ScrollAPI.CompanyScroll;
}
