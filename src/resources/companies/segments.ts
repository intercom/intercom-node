// File generated from our OpenAPI spec by Stainless.

import * as Core from 'intercom/core';
import { APIResource } from 'intercom/resource';
import { isRequestOptions } from 'intercom/core';
import * as CompaniesSegmentsAPI from 'intercom/resources/companies/segments';
import * as SegmentsAPI from 'intercom/resources/segments';

export class Segments extends APIResource {
  /**
   * You can fetch a list of all segments that belong to a company.
   */
  list(
    id: string,
    params?: SegmentListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CompanyAttachedSegments>;
  list(id: string, options?: Core.RequestOptions): Core.APIPromise<CompanyAttachedSegments>;
  list(
    id: string,
    params: SegmentListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CompanyAttachedSegments> {
    if (isRequestOptions(params)) {
      return this.list(id, {}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.get(`/companies/${id}/segments`, {
      ...options,
      headers: { 'Intercom-Version': intercomVersion?.toString() || '', ...options?.headers },
    });
  }
}

/**
 * A list of Segment Objects
 */
export interface CompanyAttachedSegments {
  /**
   * An array containing Segment Objects
   */
  data?: Array<SegmentsAPI.Segment>;

  /**
   * The type of object - `list`
   */
  type?: 'list';
}

export interface SegmentListParams {
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

export namespace Segments {
  export import CompanyAttachedSegments = CompaniesSegmentsAPI.CompanyAttachedSegments;
  export import SegmentListParams = CompaniesSegmentsAPI.SegmentListParams;
}
