// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as TeamsAPI from './teams';

export class Teams extends APIResource {
  /**
   * You can fetch the details of a single team, containing an array of admins that
   * belong to this team.
   */
  retrieve(id: string, params?: TeamRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<Team>;
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<Team>;
  retrieve(
    id: string,
    params: TeamRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Team> {
    if (isRequestOptions(params)) {
      return this.retrieve(id, {}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.get(`/teams/${id}`, {
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
   * This will return a list of team objects for the App.
   */
  list(params?: TeamListParams, options?: Core.RequestOptions): Core.APIPromise<TeamList>;
  list(options?: Core.RequestOptions): Core.APIPromise<TeamList>;
  list(
    params: TeamListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TeamList> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.get('/teams', {
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
 * Teams are groups of admins in Intercom.
 */
export interface Team {
  /**
   * The id of the team
   */
  id?: string;

  /**
   * The list of admin IDs that are a part of the team.
   */
  admin_ids?: Array<number>;

  /**
   * Admin priority levels for the team
   */
  admin_priority_level?: Team.AdminPriorityLevel | null;

  /**
   * The name of the team
   */
  name?: string;

  /**
   * Value is always "team"
   */
  type?: string;
}

export namespace Team {
  /**
   * Admin priority levels for the team
   */
  export interface AdminPriorityLevel {
    /**
     * The primary admin ids for the team
     */
    primary_admin_ids?: Array<number> | null;

    /**
     * The secondary admin ids for the team
     */
    secondary_admin_ids?: Array<number> | null;
  }
}

/**
 * This will return a list of team objects for the App.
 */
export interface TeamList {
  /**
   * A list of team objects
   */
  teams?: Array<Team>;

  /**
   * The type of the object
   */
  type?: 'team.list';
}

export interface TeamRetrieveParams {
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

export interface TeamListParams {
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

export namespace Teams {
  export import Team = TeamsAPI.Team;
  export import TeamList = TeamsAPI.TeamList;
  export import TeamRetrieveParams = TeamsAPI.TeamRetrieveParams;
  export import TeamListParams = TeamsAPI.TeamListParams;
}
