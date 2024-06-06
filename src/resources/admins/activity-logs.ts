// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as ActivityLogsAPI from './activity-logs';

export class ActivityLogs extends APIResource {
  /**
   * You can get a log of activities by all admins in an app.
   */
  list(params: ActivityLogListParams, options?: Core.RequestOptions): Core.APIPromise<ActivityLogList> {
    const { 'Intercom-Version': intercomVersion, ...query } = params;
    return this._client.get('/admins/activity_logs', {
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
 * A paginated list of activity logs.
 */
export interface ActivityLogList {
  /**
   * An array of activity logs
   */
  activity_logs?: Array<ActivityLogList.ActivityLog | null>;

  /**
   * Cursor-based pagination is a technique used in the Intercom API to navigate
   * through large amounts of data. A "cursor" or pointer is used to keep track of
   * the current position in the result set, allowing the API to return the data in
   * small chunks or "pages" as needed.
   */
  pages?: ActivityLogList.Pages | null;

  /**
   * String representing the object's type. Always has the value `activity_log.list`.
   */
  type?: string;
}

export namespace ActivityLogList {
  /**
   * Activities performed by admins.
   */
  export interface ActivityLog {
    /**
     * The id representing the activity.
     */
    id?: string;

    /**
     * A sentence or two describing the activity.
     */
    activity_description?: string;

    activity_type?:
      | 'admin_assignment_limit_change'
      | 'admin_away_mode_change'
      | 'admin_deletion'
      | 'admin_deprovisioned'
      | 'admin_impersonation_end'
      | 'admin_impersonation_start'
      | 'admin_invite_change'
      | 'admin_invite_creation'
      | 'admin_invite_deletion'
      | 'admin_login_failure'
      | 'admin_login_success'
      | 'admin_logout'
      | 'admin_password_reset_request'
      | 'admin_password_reset_success'
      | 'admin_permission_change'
      | 'admin_provisioned'
      | 'admin_two_factor_auth_change'
      | 'admin_unauthorized_sign_in_method'
      | 'app_admin_join'
      | 'app_authentication_method_change'
      | 'app_data_deletion'
      | 'app_data_export'
      | 'app_google_sso_domain_change'
      | 'app_identity_verification_change'
      | 'app_name_change'
      | 'app_outbound_address_change'
      | 'app_package_installation'
      | 'app_package_token_regeneration'
      | 'app_package_uninstallation'
      | 'app_team_creation'
      | 'app_team_deletion'
      | 'app_team_membership_modification'
      | 'app_timezone_change'
      | 'app_webhook_creation'
      | 'app_webhook_deletion'
      | 'articles_in_messenger_enabled_change'
      | 'bulk_delete'
      | 'bulk_export'
      | 'campaign_deletion'
      | 'campaign_state_change'
      | 'conversation_part_deletion'
      | 'conversation_topic_change'
      | 'conversation_topic_creation'
      | 'conversation_topic_deletion'
      | 'help_center_settings_change'
      | 'inbound_conversations_change'
      | 'inbox_access_change'
      | 'message_deletion'
      | 'message_state_change'
      | 'messenger_look_and_feel_change'
      | 'messenger_search_required_change'
      | 'messenger_spaces_change'
      | 'office_hours_change'
      | 'role_change'
      | 'role_creation'
      | 'role_deletion'
      | 'ruleset_activation_title_preview'
      | 'ruleset_creation'
      | 'ruleset_deletion'
      | 'search_browse_enabled_change'
      | 'search_browse_required_change'
      | 'seat_change'
      | 'seat_revoke'
      | 'security_settings_change'
      | 'temporary_expectation_change'
      | 'upfront_email_collection_change'
      | 'welcome_message_change';

    /**
     * The time the activity was created.
     */
    created_at?: number;

    metadata?: Record<string, unknown>;

    /**
     * An object representing the admin who performed the activity.
     */
    performed_by?: ActivityLog.PerformedBy;
  }

  export namespace ActivityLog {
    /**
     * An object representing the admin who performed the activity.
     */
    export interface PerformedBy {
      /**
       * The id representing the admin.
       */
      id?: string;

      /**
       * The email of the admin.
       */
      email?: string;

      /**
       * The IP address of the admin.
       */
      ip?: string;

      /**
       * String representing the object's type. Always has the value `admin`.
       */
      type?: string;
    }
  }

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

export interface ActivityLogListParams {
  /**
   * Query param: The start date that you request data for. It must be formatted as a
   * UNIX timestamp.
   */
  created_at_after: string;

  /**
   * Query param: The end date that you request data for. It must be formatted as a
   * UNIX timestamp.
   */
  created_at_before?: string;

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
    | 'Unstable';
}

export namespace ActivityLogs {
  export import ActivityLogList = ActivityLogsAPI.ActivityLogList;
  export import ActivityLogListParams = ActivityLogsAPI.ActivityLogListParams;
}
