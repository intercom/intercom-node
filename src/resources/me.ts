// File generated from our OpenAPI spec by Stainless.

import * as Core from 'intercom/core';
import { APIResource } from 'intercom/resource';
import { isRequestOptions } from 'intercom/core';
import * as MeAPI from 'intercom/resources/me';

export class Me extends APIResource {
  /**
   * You can view the currently authorised admin along with the embedded app object
   * (a "workspace" in legacy terminology).
   *
   * > 🚧 Single Sign On
   * >
   * > If you are building a custom "Log in with Intercom" flow for your site, and
   * > you call the `/me` endpoint to identify the logged-in user, you should not
   * > accept any sign-ins from users with unverified email addresses as it poses a
   * > potential impersonation security risk.
   */
  retrieve(params?: MeRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<AdminWithApp | null>;
  retrieve(options?: Core.RequestOptions): Core.APIPromise<AdminWithApp | null>;
  retrieve(
    params: MeRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AdminWithApp | null> {
    if (isRequestOptions(params)) {
      return this.retrieve({}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.get('/me', {
      ...options,
      headers: { 'Intercom-Version': intercomVersion?.toString() || '', ...options?.headers },
    });
  }
}

/**
 * Admins are the teammate accounts that have access to a workspace
 */
export interface AdminWithApp {
  /**
   * The id representing the admin.
   */
  id?: string;

  /**
   * App that the admin belongs to.
   */
  app?: AdminWithApp.App | null;

  /**
   * This object represents the avatar associated with the admin.
   */
  avatar?: AdminWithApp.Avatar;

  /**
   * Identifies if this admin is currently set in away mode.
   */
  away_mode_enabled?: boolean;

  /**
   * Identifies if this admin is set to automatically reassign new conversations to
   * the apps default inbox.
   */
  away_mode_reassign?: boolean;

  /**
   * The email of the admin.
   */
  email?: string;

  /**
   * Identifies if this admin's email is verified.
   */
  email_verified?: boolean | null;

  /**
   * Identifies if this admin has a paid inbox seat to restrict/allow features that
   * require them.
   */
  has_inbox_seat?: boolean;

  /**
   * The job title of the admin.
   */
  job_title?: string;

  /**
   * The name of the admin.
   */
  name?: string;

  /**
   * This is a list of ids of the teams that this admin is part of.
   */
  team_ids?: Array<number>;

  /**
   * String representing the object's type. Always has the value `admin`.
   */
  type?: string;
}

export namespace AdminWithApp {
  /**
   * App that the admin belongs to.
   */
  export interface App {
    /**
     * When the app was created.
     */
    created_at?: number;

    /**
     * The id of the app.
     */
    id_code?: string;

    /**
     * Whether or not the app uses identity verification.
     */
    identity_verification?: boolean;

    /**
     * The name of the app.
     */
    name?: string;

    /**
     * The Intercom region the app is located in.
     */
    region?: string;

    /**
     * The timezone of the region where the app is located.
     */
    timezone?: string;

    type?: string;
  }

  /**
   * This object represents the avatar associated with the admin.
   */
  export interface Avatar {
    /**
     * This object represents the avatar associated with the admin.
     */
    image_url?: string | null;

    /**
     * This is a string that identifies the type of the object. It will always have the
     * value `avatar`.
     */
    type?: string;
  }
}

export interface MeRetrieveParams {
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

export namespace Me {
  export import AdminWithApp = MeAPI.AdminWithApp;
  export import MeRetrieveParams = MeAPI.MeRetrieveParams;
}
