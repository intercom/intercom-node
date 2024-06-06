// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as AdminsAPI from './admins';
import * as Shared from '../shared';
import * as ActivityLogsAPI from './activity-logs';

export class Admins extends APIResource {
  activityLogs: ActivityLogsAPI.ActivityLogs = new ActivityLogsAPI.ActivityLogs(this._client);

  /**
   * You can retrieve the details of a single admin.
   */
  retrieve(
    id: number,
    params?: AdminRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Admin | null>;
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<Shared.Admin | null>;
  retrieve(
    id: number,
    params: AdminRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Admin | null> {
    if (isRequestOptions(params)) {
      return this.retrieve(id, {}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.get(`/admins/${id}`, {
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
   * You can fetch a list of admins for a given workspace.
   */
  list(params?: AdminListParams, options?: Core.RequestOptions): Core.APIPromise<AdminList>;
  list(options?: Core.RequestOptions): Core.APIPromise<AdminList>;
  list(
    params: AdminListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AdminList> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.get('/admins', {
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
   * You can set an Admin as away for the Inbox.
   */
  away(
    id: number,
    params: AdminAwayParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Admin | null> {
    const { 'Intercom-Version': intercomVersion, ...body } = params;
    return this._client.put(`/admins/${id}/away`, {
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
}

/**
 * A list of admins associated with a given workspace.
 */
export interface AdminList {
  /**
   * A list of admins associated with a given workspace.
   */
  admins?: Array<Shared.Admin | null>;

  /**
   * String representing the object's type. Always has the value `admin.list`.
   */
  type?: string;
}

export interface AdminRetrieveParams {
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

export interface AdminListParams {
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

export interface AdminAwayParams {
  /**
   * Body param: Set to "true" to change the status of the admin to away.
   */
  away_mode_enabled: boolean;

  /**
   * Body param: Set to "true" to assign any new conversation replies to your default
   * inbox.
   */
  away_mode_reassign: boolean;

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

export namespace Admins {
  export import AdminList = AdminsAPI.AdminList;
  export import AdminRetrieveParams = AdminsAPI.AdminRetrieveParams;
  export import AdminListParams = AdminsAPI.AdminListParams;
  export import AdminAwayParams = AdminsAPI.AdminAwayParams;
  export import ActivityLogs = ActivityLogsAPI.ActivityLogs;
  export import ActivityLogList = ActivityLogsAPI.ActivityLogList;
  export import ActivityLogListParams = ActivityLogsAPI.ActivityLogListParams;
}
