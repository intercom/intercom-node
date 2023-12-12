// File generated from our OpenAPI spec by Stainless.

import * as Core from 'intercom/core';
import { APIResource } from 'intercom/resource';
import { isRequestOptions } from 'intercom/core';
import * as AdminsAPI from 'intercom/resources/admins/admins';
import * as Shared from 'intercom/resources/shared';
import * as ActivityLogsAPI from 'intercom/resources/admins/activity-logs';
import * as AwayAPI from 'intercom/resources/admins/away';

export class Admins extends APIResource {
  activityLogs: ActivityLogsAPI.ActivityLogs = new ActivityLogsAPI.ActivityLogs(this._client);
  away: AwayAPI.Away = new AwayAPI.Away(this._client);

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
      headers: { 'Intercom-Version': intercomVersion?.toString() || '', ...options?.headers },
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
      headers: { 'Intercom-Version': intercomVersion?.toString() || '', ...options?.headers },
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

export interface AdminListParams {
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

export namespace Admins {
  export import AdminList = AdminsAPI.AdminList;
  export import AdminRetrieveParams = AdminsAPI.AdminRetrieveParams;
  export import AdminListParams = AdminsAPI.AdminListParams;
  export import ActivityLogs = ActivityLogsAPI.ActivityLogs;
  export import ActivityLogList = ActivityLogsAPI.ActivityLogList;
  export import ActivityLogListParams = ActivityLogsAPI.ActivityLogListParams;
  export import Away = AwayAPI.Away;
}
