// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as HelpCentersAPI from './help-centers';
import * as HelpCenterAPI from './help-center';

export class HelpCenters extends APIResource {
  /**
   * You can fetch the details of a single Help Center by making a GET request to
   * `https://api.intercom.io/help_center/help_center/<id>`.
   */
  retrieve(
    id: number,
    params?: HelpCenterRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HelpCenterAPI.HelpCenter>;
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<HelpCenterAPI.HelpCenter>;
  retrieve(
    id: number,
    params: HelpCenterRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<HelpCenterAPI.HelpCenter> {
    if (isRequestOptions(params)) {
      return this.retrieve(id, {}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.get(`/help_center/help_centers/${id}`, {
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
   * You can list all Help Centers by making a GET request to
   * `https://api.intercom.io/help_center/help_centers`.
   */
  list(
    params?: HelpCenterListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HelpCenterAPI.HelpCenterList>;
  list(options?: Core.RequestOptions): Core.APIPromise<HelpCenterAPI.HelpCenterList>;
  list(
    params: HelpCenterListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<HelpCenterAPI.HelpCenterList> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.get('/help_center/help_centers', {
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

export interface HelpCenterRetrieveParams {
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

export interface HelpCenterListParams {
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

export namespace HelpCenters {
  export import HelpCenterRetrieveParams = HelpCentersAPI.HelpCenterRetrieveParams;
  export import HelpCenterListParams = HelpCentersAPI.HelpCenterListParams;
}
