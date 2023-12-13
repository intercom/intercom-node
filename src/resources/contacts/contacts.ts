// File generated from our OpenAPI spec by Stainless.

import * as Core from 'intercom/core';
import { APIResource } from 'intercom/resource';
import { isRequestOptions } from 'intercom/core';
import * as ContactsAPI from 'intercom/resources/contacts/contacts';
import * as Shared from 'intercom/resources/shared';
import * as CompaniesAPI from 'intercom/resources/contacts/companies';
import * as NotesAPI from 'intercom/resources/contacts/notes';
import * as SegmentsAPI from 'intercom/resources/contacts/segments';
import * as SubscriptionsAPI from 'intercom/resources/contacts/subscriptions';
import * as TagsAPI from 'intercom/resources/contacts/tags';

export class Contacts extends APIResource {
  companies: CompaniesAPI.Companies = new CompaniesAPI.Companies(this._client);
  notes: NotesAPI.Notes = new NotesAPI.Notes(this._client);
  segments: SegmentsAPI.Segments = new SegmentsAPI.Segments(this._client);
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);
  tags: TagsAPI.Tags = new TagsAPI.Tags(this._client);

  /**
   * You can create a new contact (ie. user or lead).
   */
  create(params?: ContactCreateParams, options?: Core.RequestOptions): Core.APIPromise<Shared.Contact>;
  create(options?: Core.RequestOptions): Core.APIPromise<Shared.Contact>;
  create(
    params: ContactCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Contact> {
    if (isRequestOptions(params)) {
      return this.create({}, params);
    }
    const { 'Intercom-Version': intercomVersion, ...body } = params;
    return this._client.post('/contacts', {
      body,
      ...options,
      headers: { 'Intercom-Version': intercomVersion?.toString() || '', ...options?.headers },
    });
  }

  /**
   * You can fetch the details of a single contact.
   */
  retrieve(
    id: string,
    params?: ContactRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Contact>;
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<Shared.Contact>;
  retrieve(
    id: string,
    params: ContactRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Contact> {
    if (isRequestOptions(params)) {
      return this.retrieve(id, {}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.get(`/contacts/${id}`, {
      ...options,
      headers: { 'Intercom-Version': intercomVersion?.toString() || '', ...options?.headers },
    });
  }

  /**
   * You can update an existing contact (ie. user or lead).
   */
  update(
    id: string,
    params?: ContactUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Contact>;
  update(id: string, options?: Core.RequestOptions): Core.APIPromise<Shared.Contact>;
  update(
    id: string,
    params: ContactUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Contact> {
    if (isRequestOptions(params)) {
      return this.update(id, {}, params);
    }
    const { 'Intercom-Version': intercomVersion, ...body } = params;
    return this._client.put(`/contacts/${id}`, {
      body,
      ...options,
      headers: { 'Intercom-Version': intercomVersion?.toString() || '', ...options?.headers },
    });
  }

  /**
   * You can fetch a list of all contacts.
   */
  list(params?: ContactListParams, options?: Core.RequestOptions): Core.APIPromise<ContactList>;
  list(options?: Core.RequestOptions): Core.APIPromise<ContactList>;
  list(
    params: ContactListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContactList> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.get('/contacts', {
      ...options,
      headers: { 'Intercom-Version': intercomVersion?.toString() || '', ...options?.headers },
    });
  }

  /**
   * You can delete a single contact.
   */
  delete(
    id: string,
    params?: ContactDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContactDeleted>;
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<ContactDeleted>;
  delete(
    id: string,
    params: ContactDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContactDeleted> {
    if (isRequestOptions(params)) {
      return this.delete(id, {}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.delete(`/contacts/${id}`, {
      ...options,
      headers: { 'Intercom-Version': intercomVersion?.toString() || '', ...options?.headers },
    });
  }

  /**
   * You can archive a single contact.
   */
  archive(
    id: string,
    params?: ContactArchiveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContactArchived>;
  archive(id: string, options?: Core.RequestOptions): Core.APIPromise<ContactArchived>;
  archive(
    id: string,
    params: ContactArchiveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContactArchived> {
    if (isRequestOptions(params)) {
      return this.archive(id, {}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.post(`/contacts/${id}/archive`, {
      ...options,
      headers: { 'Intercom-Version': intercomVersion?.toString() || '', ...options?.headers },
    });
  }

  /**
   * You can merge a contact with a `role` of `lead` into a contact with a `role` of
   * `user`.
   */
  merge(params?: ContactMergeParams, options?: Core.RequestOptions): Core.APIPromise<Shared.Contact>;
  merge(options?: Core.RequestOptions): Core.APIPromise<Shared.Contact>;
  merge(
    params: ContactMergeParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Contact> {
    if (isRequestOptions(params)) {
      return this.merge({}, params);
    }
    const { 'Intercom-Version': intercomVersion, ...body } = params;
    return this._client.post('/contacts/merge', {
      body,
      ...options,
      headers: { 'Intercom-Version': intercomVersion?.toString() || '', ...options?.headers },
    });
  }

  /**
   * You can search for multiple contacts by the value of their attributes in order
   * to fetch exactly who you want.
   *
   * To search for contacts, you need to send a POST request to
   * `https://api.intercom.io/contacts/search`. This will accept a query object in
   * the body which will define your filters in order to search for contacts.
   *
   * > 🚧 Why is there a delay when creating contacts and searching for them?
   * >
   * > If a contact has recently been created, there is a possibility that it will
   * > not yet be available when searching. This means that it may not appear in the
   * > response. This delay can take a few minutes. If you need to be instantly
   * > notified then you could use webhooks instead, which you'd currently have to
   * > iterate on to see if they match your search filters.
   *
   * > 🚧 Nesting & Limitations
   * >
   * > You can nest these filters in order to get even more granular insights that
   * > pinpoint exactly what you need. Example: (1 OR 2) AND (3 OR 4). There are some
   * > limitations to the amount of multiple's there can be:
   * >
   * > - There's a limit of max 2 nested filters
   * > - There's a limit of max 15 filters for each AND or OR group
   *
   * > 🚧 Searching for Timestamp Fields
   *
   * > All timestamp fields (created_at, updated_at etc.) are indexed as Dates for
   * > Contact Search queries; Datetime queries are not currently supported. This
   * > means you can only query for timestamp fields by day - not hour, minute or
   * > second. For example, if you search for all Contacts with a created_at value
   * > greater (>) than 1577869200 (the UNIX timestamp for January 1st, 2020 9:00
   * > AM), that will be interpreted as 1577836800 (January 1st, 2020 12:00 AM). The
   * > search results will then include Contacts created from January 2nd, 2020 12:00
   * > AM onwards. If you'd like to get contacts created on January 1st, 2020 you
   * > should search with a created_at value equal (=) to 1577836800 (January 1st,
   * > 2020 12:00 AM). This behaviour applies only to timestamps used in search
   * > queries. The search results will still contain the full UNIX timestamp and be
   * > sorted accordingly.
   *
   * ### Accepted Fields
   *
   * Most key listed as part of the Contacts Model are searchable, whether writeable
   * or not. The value you search for has to match the accepted type, otherwise the
   * query will fail (ie. as `created_at` accepts a date, the `value` cannot be a
   * string such as `"foorbar"`).
   *
   * | Field                              | Type                           |
   * | ---------------------------------- | ------------------------------ |
   * | id                                 | String                         |
   * | role                               | String<br>Accepts user or lead |
   * | name                               | String                         |
   * | avatar                             | String                         |
   * | owner_id                           | Integer                        |
   * | email                              | String                         |
   * | phone                              | String                         |
   * | formatted_phone                    | String                         |
   * | external_id                        | String                         |
   * | created_at                         | Date (UNIX Timestamp)          |
   * | signed_up_at                       | Date (UNIX Timestamp)          |
   * | updated_at                         | Date (UNIX Timestamp)          |
   * | last_seen_at                       | Date (UNIX Timestamp)          |
   * | last_contacted_at                  | Date (UNIX Timestamp)          |
   * | last_replied_at                    | Date (UNIX Timestamp)          |
   * | last_email_opened_at               | Date (UNIX Timestamp)          |
   * | last_email_clicked_at              | Date (UNIX Timestamp)          |
   * | language_override                  | String                         |
   * | browser                            | String                         |
   * | browser_language                   | String                         |
   * | os                                 | String                         |
   * | location.country                   | String                         |
   * | location.region                    | String                         |
   * | location.city                      | String                         |
   * | unsubscribed_from_emails           | Boolean                        |
   * | marked_email_as_spam               | Boolean                        |
   * | has_hard_bounced                   | Boolean                        |
   * | ios_last_seen_at                   | Date (UNIX Timestamp)          |
   * | ios_app_version                    | String                         |
   * | ios_device                         | String                         |
   * | ios_app_device                     | String                         |
   * | ios_os_version                     | String                         |
   * | ios_app_name                       | String                         |
   * | ios_sdk_version                    | String                         |
   * | android_last_seen_at               | Date (UNIX Timestamp)          |
   * | android_app_version                | String                         |
   * | android_device                     | String                         |
   * | android_app_name                   | String                         |
   * | andoid_sdk_version                 | String                         |
   * | segment_id                         | String                         |
   * | tag_id                             | String                         |
   * | custom_attributes.{attribute_name} | String                         |
   */
  search(params: ContactSearchParams, options?: Core.RequestOptions): Core.APIPromise<ContactList> {
    const { 'Intercom-Version': intercomVersion, ...body } = params;
    return this._client.post('/contacts/search', {
      body,
      ...options,
      headers: { 'Intercom-Version': intercomVersion?.toString() || '', ...options?.headers },
    });
  }

  /**
   * You can unarchive a single contact.
   */
  unarchive(
    id: string,
    params?: ContactUnarchiveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContactUnarchived>;
  unarchive(id: string, options?: Core.RequestOptions): Core.APIPromise<ContactUnarchived>;
  unarchive(
    id: string,
    params: ContactUnarchiveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContactUnarchived> {
    if (isRequestOptions(params)) {
      return this.unarchive(id, {}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.post(`/contacts/${id}/unarchive`, {
      ...options,
      headers: { 'Intercom-Version': intercomVersion?.toString() || '', ...options?.headers },
    });
  }
}

/**
 * archived contact object
 */
export interface ContactArchived {
  /**
   * The unique identifier for the contact which is given by Intercom.
   */
  id?: string;

  /**
   * Whether the contact is archived or not.
   */
  archived?: boolean;

  /**
   * The unique identifier for the contact which is provided by the Client.
   */
  external_id?: string | null;

  /**
   * always contact
   */
  type?: 'contact';
}

/**
 * deleted contact object
 */
export interface ContactDeleted {
  /**
   * The unique identifier for the contact which is given by Intercom.
   */
  id?: string;

  /**
   * Whether the contact is deleted or not.
   */
  deleted?: boolean;

  /**
   * The unique identifier for the contact which is provided by the Client.
   */
  external_id?: string | null;

  /**
   * always contact
   */
  type?: 'contact';
}

/**
 * Contacts are your users in Intercom.
 */
export interface ContactList {
  /**
   * The list of contact objects
   */
  data?: Array<Shared.Contact>;

  /**
   * Cursor-based pagination is a technique used in the Intercom API to navigate
   * through large amounts of data. A "cursor" or pointer is used to keep track of
   * the current position in the result set, allowing the API to return the data in
   * small chunks or "pages" as needed.
   */
  pages?: ContactList.Pages | null;

  /**
   * A count of the total number of objects.
   */
  total_count?: number;

  /**
   * Always list
   */
  type?: 'list';
}

export namespace ContactList {
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
 * unarchived contact object
 */
export interface ContactUnarchived {
  /**
   * The unique identifier for the contact which is given by Intercom.
   */
  id?: string;

  /**
   * Whether the contact is archived or not.
   */
  archived?: boolean;

  /**
   * The unique identifier for the contact which is provided by the Client.
   */
  external_id?: string | null;

  /**
   * always contact
   */
  type?: 'contact';
}

export interface ContactCreateParams {
  /**
   * Body param: An image URL containing the avatar of a contact
   */
  avatar?: string | null;

  /**
   * Body param: The custom attributes which are set for the contact
   */
  custom_attributes?: unknown | null;

  /**
   * Body param: The contacts email
   */
  email?: string;

  /**
   * Body param: A unique identifier for the contact which is given to Intercom
   */
  external_id?: string;

  /**
   * Body param: The time when the contact was last seen (either where the Intercom
   * Messenger was installed or when specified manually)
   */
  last_seen_at?: number | null;

  /**
   * Body param: The contacts name
   */
  name?: string | null;

  /**
   * Body param: The id of an admin that has been assigned account ownership of the
   * contact
   */
  owner_id?: number | null;

  /**
   * Body param: The contacts phone
   */
  phone?: string | null;

  /**
   * Body param: The role of the contact.
   */
  role?: string;

  /**
   * Body param: The time specified for when a contact signed up
   */
  signed_up_at?: number | null;

  /**
   * Body param: Whether the contact is unsubscribed from emails
   */
  unsubscribed_from_emails?: boolean | null;

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

export interface ContactRetrieveParams {
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

export interface ContactUpdateParams {
  /**
   * Body param: An image URL containing the avatar of a contact
   */
  avatar?: string | null;

  /**
   * Body param: The custom attributes which are set for the contact
   */
  custom_attributes?: unknown | null;

  /**
   * Body param: The contacts email
   */
  email?: string;

  /**
   * Body param: A unique identifier for the contact which is given to Intercom
   */
  external_id?: string;

  /**
   * Body param: The time when the contact was last seen (either where the Intercom
   * Messenger was installed or when specified manually)
   */
  last_seen_at?: number | null;

  /**
   * Body param: The contacts name
   */
  name?: string | null;

  /**
   * Body param: The id of an admin that has been assigned account ownership of the
   * contact
   */
  owner_id?: number | null;

  /**
   * Body param: The contacts phone
   */
  phone?: string | null;

  /**
   * Body param: The role of the contact.
   */
  role?: string;

  /**
   * Body param: The time specified for when a contact signed up
   */
  signed_up_at?: number | null;

  /**
   * Body param: Whether the contact is unsubscribed from emails
   */
  unsubscribed_from_emails?: boolean | null;

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

export interface ContactListParams {
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

export interface ContactDeleteParams {
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

export interface ContactArchiveParams {
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

export interface ContactMergeParams {
  /**
   * Body param: The unique identifier for the contact to merge away from. Must be a
   * lead.
   */
  from?: string;

  /**
   * Body param: The unique identifier for the contact to merge into. Must be a user.
   */
  into?: string;

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

export interface ContactSearchParams {
  /**
   * Body param:
   */
  query: ContactSearchParams.SingleFilterSearchRequest | ContactSearchParams.MultipleFilterSearchRequest;

  /**
   * Body param:
   */
  pagination?: ContactSearchParams.Pagination | null;

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

export namespace ContactSearchParams {
  export interface SingleFilterSearchRequest {
    /**
     * The Intercom defined id representing the company.
     */
    field?: string;

    /**
     * The Intercom defined id representing the company.
     */
    operator?: '=' | '!=' | 'IN' | 'NIN' | '<' | '>' | '~' | '!~' | '^' | '$';

    /**
     * The Intercom defined id representing the company.
     */
    value?: string;
  }

  export interface MultipleFilterSearchRequest {
    /**
     * An operator to allow boolean inspection between multiple fields.
     */
    operator?: 'AND' | 'OR';

    /**
     * Add mutiple filters.
     */
    value?: Array<MultipleFilterSearchRequest.UnionMember0> | Array<MultipleFilterSearchRequest.UnionMember1>;
  }

  export namespace MultipleFilterSearchRequest {
    export interface UnionMember0 {
      /**
       * An operator to allow boolean inspection between multiple fields.
       */
      operator?: 'AND' | 'OR';

      /**
       * Add mutiple filters.
       */
      value?: Array<unknown> | Array<UnionMember0.UnionMember1>;
    }

    export namespace UnionMember0 {
      export interface UnionMember1 {
        /**
         * The Intercom defined id representing the company.
         */
        field?: string;

        /**
         * The Intercom defined id representing the company.
         */
        operator?: '=' | '!=' | 'IN' | 'NIN' | '<' | '>' | '~' | '!~' | '^' | '$';

        /**
         * The Intercom defined id representing the company.
         */
        value?: string;
      }
    }

    export interface UnionMember1 {
      /**
       * The Intercom defined id representing the company.
       */
      field?: string;

      /**
       * The Intercom defined id representing the company.
       */
      operator?: '=' | '!=' | 'IN' | 'NIN' | '<' | '>' | '~' | '!~' | '^' | '$';

      /**
       * The Intercom defined id representing the company.
       */
      value?: string;
    }
  }

  export interface Pagination {
    page?: number;

    starting_after?: string;
  }
}

export interface ContactUnarchiveParams {
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

export namespace Contacts {
  export import ContactArchived = ContactsAPI.ContactArchived;
  export import ContactDeleted = ContactsAPI.ContactDeleted;
  export import ContactList = ContactsAPI.ContactList;
  export import ContactUnarchived = ContactsAPI.ContactUnarchived;
  export import ContactCreateParams = ContactsAPI.ContactCreateParams;
  export import ContactRetrieveParams = ContactsAPI.ContactRetrieveParams;
  export import ContactUpdateParams = ContactsAPI.ContactUpdateParams;
  export import ContactListParams = ContactsAPI.ContactListParams;
  export import ContactDeleteParams = ContactsAPI.ContactDeleteParams;
  export import ContactArchiveParams = ContactsAPI.ContactArchiveParams;
  export import ContactMergeParams = ContactsAPI.ContactMergeParams;
  export import ContactSearchParams = ContactsAPI.ContactSearchParams;
  export import ContactUnarchiveParams = ContactsAPI.ContactUnarchiveParams;
  export import Companies = CompaniesAPI.Companies;
  export import ContactAttachedCompanies = CompaniesAPI.ContactAttachedCompanies;
  export import CompanyCreateParams = CompaniesAPI.CompanyCreateParams;
  export import CompanyListParams = CompaniesAPI.CompanyListParams;
  export import CompanyDeleteParams = CompaniesAPI.CompanyDeleteParams;
  export import Notes = NotesAPI.Notes;
  export import NoteList = NotesAPI.NoteList;
  export import NoteCreateParams = NotesAPI.NoteCreateParams;
  export import NoteListParams = NotesAPI.NoteListParams;
  export import Segments = SegmentsAPI.Segments;
  export import ContactSegments = SegmentsAPI.ContactSegments;
  export import SegmentListParams = SegmentsAPI.SegmentListParams;
  export import Subscriptions = SubscriptionsAPI.Subscriptions;
  export import SubscriptionType = SubscriptionsAPI.SubscriptionType;
  export import SubscriptionCreateParams = SubscriptionsAPI.SubscriptionCreateParams;
  export import SubscriptionListParams = SubscriptionsAPI.SubscriptionListParams;
  export import Tags = TagsAPI.Tags;
  export import TagCreateParams = TagsAPI.TagCreateParams;
  export import TagListParams = TagsAPI.TagListParams;
}
