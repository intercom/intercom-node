// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as SegmentsAPI from './segments';

export class Segments extends APIResource {
  /**
   * You can fetch the details of a single segment.
   */
  retrieve(
    id: string,
    params?: SegmentRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Segment>;
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<Segment>;
  retrieve(
    id: string,
    params: SegmentRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Segment> {
    if (isRequestOptions(params)) {
      return this.retrieve(id, {}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.get(`/segments/${id}`, {
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
   * You can fetch a list of all segments.
   */
  list(params?: SegmentListParams, options?: Core.RequestOptions): Core.APIPromise<SegmentList>;
  list(options?: Core.RequestOptions): Core.APIPromise<SegmentList>;
  list(
    params: SegmentListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SegmentList> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { 'Intercom-Version': intercomVersion, ...query } = params;
    return this._client.get('/segments', {
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
 * A segment is a group of your contacts defined by the rules that you set.
 */
export interface Segment {
  /**
   * The unique identifier representing the segment.
   */
  id?: string;

  /**
   * The number of items in the user segment. It's returned when `include_count=true`
   * is included in the request.
   */
  count?: number | null;

  /**
   * The time the segment was created.
   */
  created_at?: number;

  /**
   * The name of the segment.
   */
  name?: string;

  /**
   * Type of the contact: contact (lead) or user.
   */
  person_type?: 'contact' | 'user';

  /**
   * The type of object.
   */
  type?: 'segment';

  /**
   * The time the segment was updated.
   */
  updated_at?: number;
}

/**
 * This will return a list of Segment Objects. The result may also have a pages
 * object if the response is paginated.
 */
export interface SegmentList {
  /**
   * A pagination object, which may be empty, indicating no further pages to fetch.
   */
  pages?: unknown;

  /**
   * A list of Segment objects
   */
  segments?: Array<Segment>;

  /**
   * The type of the object
   */
  type?: 'segment.list';
}

export interface SegmentRetrieveParams {
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

export interface SegmentListParams {
  /**
   * Query param: It includes the count of contacts that belong to each segment.
   */
  include_count?: boolean;

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

export namespace Segments {
  export import Segment = SegmentsAPI.Segment;
  export import SegmentList = SegmentsAPI.SegmentList;
  export import SegmentRetrieveParams = SegmentsAPI.SegmentRetrieveParams;
  export import SegmentListParams = SegmentsAPI.SegmentListParams;
}
