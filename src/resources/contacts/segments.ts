// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as ContactsSegmentsAPI from './segments';
import * as SegmentsAPI from '../segments';

export class Segments extends APIResource {
  /**
   * You can fetch a list of segments that are associated to a contact.
   */
  list(
    contactId: string,
    params?: SegmentListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContactSegments>;
  list(contactId: string, options?: Core.RequestOptions): Core.APIPromise<ContactSegments>;
  list(
    contactId: string,
    params: SegmentListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContactSegments> {
    if (isRequestOptions(params)) {
      return this.list(contactId, {}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.get(`/contacts/${contactId}/segments`, {
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
 * A list of segments objects attached to a specific contact.
 */
export interface ContactSegments {
  /**
   * Segment objects associated with the contact.
   */
  data?: Array<SegmentsAPI.Segment>;

  /**
   * The type of the object
   */
  type?: 'list';
}

export interface SegmentListParams {
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

export namespace Segments {
  export import ContactSegments = ContactsSegmentsAPI.ContactSegments;
  export import SegmentListParams = ContactsSegmentsAPI.SegmentListParams;
}
