// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as HelpCentersAPI from './help-centers';

export class HelpCenters extends APIResource {
  /**
   * You can fetch the details of a single Help Center by making a GET request to
   * `https://api.intercom.io/help_center/help_center/<id>`.
   */
  retrieve(
    id: number,
    params?: HelpCenterRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HelpCenter>;
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<HelpCenter>;
  retrieve(
    id: number,
    params: HelpCenterRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<HelpCenter> {
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
  list(params?: HelpCenterListParams, options?: Core.RequestOptions): Core.APIPromise<HelpCenterList>;
  list(options?: Core.RequestOptions): Core.APIPromise<HelpCenterList>;
  list(
    params: HelpCenterListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<HelpCenterList> {
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

/**
 * Help Centers contain collections
 */
export interface HelpCenter {
  /**
   * The unique identifier for the Help Center which is given by Intercom.
   */
  id?: string;

  /**
   * The time when the Help Center was created.
   */
  created_at?: number;

  /**
   * The display name of the Help Center only seen by teammates.
   */
  display_name?: string;

  /**
   * The identifier of the Help Center. This is used in the URL of the Help Center.
   */
  identifier?: string;

  /**
   * The time when the Help Center was last updated.
   */
  updated_at?: number;

  /**
   * Whether the Help Center is turned on or not. This is controlled in your Help
   * Center settings.
   */
  website_turned_on?: boolean;

  /**
   * The id of the workspace which the Help Center belongs to.
   */
  workspace_id?: string;
}

/**
 * A list of Help Centers belonging to the App
 */
export interface HelpCenterList {
  /**
   * An array of Help Center objects
   */
  data?: Array<HelpCenter>;

  /**
   * The type of the object - `list`.
   */
  type?: 'list';
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
  export import HelpCenter = HelpCentersAPI.HelpCenter;
  export import HelpCenterList = HelpCentersAPI.HelpCenterList;
  export import HelpCenterRetrieveParams = HelpCentersAPI.HelpCenterRetrieveParams;
  export import HelpCenterListParams = HelpCentersAPI.HelpCenterListParams;
}
