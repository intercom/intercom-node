// File generated from our OpenAPI spec by Stainless.

import * as Shared from 'intercom/resources/shared';
import * as SegmentsAPI from 'intercom/resources/segments';
import * as SubscriptionsAPI from 'intercom/resources/contacts/subscriptions';
import * as NewsItemsAPI from 'intercom/resources/news/news-items';
import * as TicketTypesAPI from 'intercom/resources/ticket-types/ticket-types';
import * as NewsfeedsAPI from 'intercom/resources/news/newsfeeds/newsfeeds';

/**
 * Admins are teammate accounts that have access to a workspace.
 */
export interface Admin {
  /**
   * The id representing the admin.
   */
  id?: string;

  /**
   * Image for the associated team or teammate
   */
  avatar?: string | null;

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
   * This object represents the avatar associated with the admin.
   */
  team_ids?: Array<number>;

  /**
   * Admin priority levels for teams
   */
  team_priority_level?: Admin.TeamPriorityLevel | null;

  /**
   * String representing the object's type. Always has the value `admin`.
   */
  type?: string;
}

export namespace Admin {
  /**
   * Admin priority levels for teams
   */
  export interface TeamPriorityLevel {
    /**
     * The primary team ids for the team
     */
    primary_team_ids?: Array<number> | null;

    /**
     * The secondary team ids for the team
     */
    secondary_team_ids?: Array<number> | null;
  }
}

/**
 * Companies allow you to represent organizations using your product. Each company
 * will have its own description and be associated with contacts. You can fetch,
 * create, update and list companies.
 */
export interface Company {
  /**
   * The Intercom defined id representing the company.
   */
  id?: string;

  /**
   * The Intercom defined code of the workspace the company is associated to.
   */
  app_id?: string;

  /**
   * The company id you have defined for the company.
   */
  company_id?: string;

  /**
   * The time the company was added in Intercom.
   */
  created_at?: number;

  /**
   * The custom attributes you have set on the company.
   */
  custom_attributes?: Record<string, string>;

  /**
   * The industry that the company operates in.
   */
  industry?: string;

  /**
   * The time the company last recorded making a request.
   */
  last_request_at?: number;

  /**
   * How much revenue the company generates for your business.
   */
  monthly_spend?: number;

  /**
   * The name of the company.
   */
  name?: string;

  plan?: Company.Plan;

  /**
   * The time the company was created by you.
   */
  remote_created_at?: number;

  /**
   * The list of segments associated with the company
   */
  segments?: Company.Segments;

  /**
   * How many sessions the company has recorded.
   */
  session_count?: number;

  /**
   * The number of employees in the company.
   */
  size?: number;

  /**
   * The list of tags associated with the company
   */
  tags?: Company.Tags;

  /**
   * Value is `company`
   */
  type?: 'company';

  /**
   * The last time the company was updated.
   */
  updated_at?: number;

  /**
   * The number of users in the company.
   */
  user_count?: number;

  /**
   * The URL for the company website.
   */
  website?: string;
}

export namespace Company {
  export interface Plan {
    /**
     * The id of the plan
     */
    id?: string;

    /**
     * The name of the plan
     */
    name?: string;

    /**
     * Value is always "plan"
     */
    type?: string;
  }

  /**
   * The list of segments associated with the company
   */
  export interface Segments {
    segments?: Array<SegmentsAPI.Segment>;

    /**
     * The type of the object
     */
    type?: 'segment.list';
  }

  /**
   * The list of tags associated with the company
   */
  export interface Tags {
    tags?: Array<unknown>;

    /**
     * The type of the object
     */
    type?: 'tag.list';
  }
}

/**
 * Contact are the objects that represent your leads and users in Intercom.
 */
export interface Contact {
  /**
   * The unique identifier for the contact which is given by Intercom.
   */
  id?: string;

  /**
   * The name of the Android app which the contact is using.
   */
  android_app_name?: string | null;

  /**
   * The version of the Android app which the contact is using.
   */
  android_app_version?: string | null;

  /**
   * The Android device which the contact is using.
   */
  android_device?: string | null;

  /**
   * (UNIX timestamp) The time when the contact was last seen on an Android device.
   */
  android_last_seen_at?: number | null;

  /**
   * The version of the Android OS which the contact is using.
   */
  android_os_version?: string | null;

  /**
   * The version of the Android SDK which the contact is using.
   */
  android_sdk_version?: string | null;

  avatar?: Contact.Avatar | null;

  /**
   * The name of the browser which the contact is using.
   */
  browser?: string | null;

  /**
   * The language set by the browser which the contact is using.
   */
  browser_language?: string | null;

  /**
   * The version of the browser which the contact is using.
   */
  browser_version?: string | null;

  /**
   * An object containing companies meta data about the companies that a contact has.
   */
  companies?: Contact.Companies;

  /**
   * (UNIX timestamp) The time when the contact was created.
   */
  created_at?: number;

  /**
   * The custom attributes which are set for the contact.
   */
  custom_attributes?: unknown;

  /**
   * The contacts email.
   */
  email?: string;

  /**
   * The unique identifier for the contact which is provided by the Client.
   */
  external_id?: string | null;

  /**
   * The contacts phone number normalized to the E164 format
   */
  formatted_phone?: string | null;

  /**
   * Whether the contact has had an email sent to them hard bounce.
   */
  has_hard_bounced?: boolean;

  /**
   * The name of the iOS app which the contact is using.
   */
  ios_app_name?: string | null;

  /**
   * The version of the iOS app which the contact is using.
   */
  ios_app_version?: string | null;

  /**
   * The iOS device which the contact is using.
   */
  ios_device?: string | null;

  /**
   * (UNIX timestamp) The last time the contact used the iOS app.
   */
  ios_last_seen_at?: number | null;

  /**
   * The version of iOS which the contact is using.
   */
  ios_os_version?: string | null;

  /**
   * The version of the iOS SDK which the contact is using.
   */
  ios_sdk_version?: string | null;

  /**
   * A preferred language setting for the contact, used by the Intercom Messenger
   * even if their browser settings change.
   */
  language_override?: string | null;

  /**
   * (UNIX timestamp) The time when the contact was last messaged.
   */
  last_contacted_at?: number | null;

  /**
   * (UNIX timestamp) The time when the contact last clicked a link in an email.
   */
  last_email_clicked_at?: number | null;

  /**
   * (UNIX timestamp) The time when the contact last opened an email.
   */
  last_email_opened_at?: number | null;

  /**
   * (UNIX timestamp) The time when the contact last messaged in.
   */
  last_replied_at?: number | null;

  /**
   * (UNIX timestamp) The time when the contact was last seen (either where the
   * Intercom Messenger was installed or when specified manually).
   */
  last_seen_at?: number | null;

  /**
   * An object containing location meta data about a Intercom contact.
   */
  location?: Contact.Location;

  /**
   * Whether the contact has marked an email sent to them as spam.
   */
  marked_email_as_spam?: boolean;

  /**
   * The contacts name.
   */
  name?: string | null;

  /**
   * An object containing notes meta data about the notes that a contact has.
   */
  notes?: Contact.Notes;

  /**
   * The operating system which the contact is using.
   */
  os?: string | null;

  /**
   * The id of an admin that has been assigned account ownership of the contact.
   */
  owner_id?: number | null;

  /**
   * The contacts phone.
   */
  phone?: string | null;

  /**
   * The role of the contact.
   */
  role?: string;

  /**
   * (UNIX timestamp) The time specified for when a contact signed up.
   */
  signed_up_at?: number | null;

  /**
   * An object containing social profiles that a contact has.
   */
  social_profiles?: Contact.SocialProfiles;

  /**
   * An object containing tags meta data about the tags that a contact has.
   */
  tags?: Contact.Tags | null;

  /**
   * The type of object.
   */
  type?: string;

  /**
   * Whether the contact is unsubscribed from emails.
   */
  unsubscribed_from_emails?: boolean;

  /**
   * (UNIX timestamp) The time when the contact was last updated.
   */
  updated_at?: number;

  /**
   * The id of the workspace which the contact belongs to.
   */
  workspace_id?: string;
}

export namespace Contact {
  export interface Avatar {
    /**
     * An image URL containing the avatar of a contact.
     */
    image_url?: string | null;

    /**
     * The type of object
     */
    type?: string;
  }

  /**
   * An object containing companies meta data about the companies that a contact has.
   */
  export interface Companies {
    /**
     * Whether there's more Addressable Objects to be viewed. If true, use the url to
     * view all
     */
    has_more?: boolean;

    /**
     * Int representing the total number of companyies attached to this contact
     */
    total_count?: number;

    /**
     * Url to get more company resources for this contact
     */
    url?: string;
  }

  /**
   * An object containing location meta data about a Intercom contact.
   */
  export interface Location {
    /**
     * The city that the contact is located in
     */
    city?: string | null;

    /**
     * The country that the contact is located in
     */
    country?: string | null;

    /**
     * The overal region that the contact is located in
     */
    region?: string | null;

    /**
     * Always location
     */
    type?: string | null;
  }

  /**
   * An object containing notes meta data about the notes that a contact has.
   */
  export interface Notes {
    /**
     * This object represents the notes attached to a contact.
     */
    data?: Array<Notes.Data>;

    /**
     * Whether there's more Addressable Objects to be viewed. If true, use the url to
     * view all
     */
    has_more?: boolean;

    /**
     * Int representing the total number of companyies attached to this contact
     */
    total_count?: number;

    /**
     * Url to get more company resources for this contact
     */
    url?: string;
  }

  export namespace Notes {
    /**
     * A list used to access other resources from a parent model.
     */
    export interface Data {
      /**
       * The id of the addressable object
       */
      id?: string;

      /**
       * The addressable object type
       */
      type?: string;

      /**
       * Url to get more company resources for this contact
       */
      url?: string;
    }
  }

  /**
   * An object containing social profiles that a contact has.
   */
  export interface SocialProfiles {
    /**
     * A list of social profiles objects associated with the contact.
     */
    data?: Array<SocialProfiles.Data>;
  }

  export namespace SocialProfiles {
    /**
     * A Social Profile allows you to label your contacts, companies, and conversations
     * and list them using that Social Profile.
     */
    export interface Data {
      /**
       * The name of the Social media profile
       */
      name?: string;

      /**
       * value is "social_profile"
       */
      type?: string;

      /**
       * The name of the Social media profile
       */
      url?: string;
    }
  }

  /**
   * An object containing tags meta data about the tags that a contact has.
   */
  export interface Tags {
    /**
     * This object represents the tags attached to a contact.
     */
    data?: Array<Tags.Data>;

    /**
     * Whether there's more Addressable Objects to be viewed. If true, use the url to
     * view all
     */
    has_more?: boolean;

    /**
     * Int representing the total number of tags attached to this contact
     */
    total_count?: number;

    /**
     * url to get more tag resources for this contact
     */
    url?: string;
  }

  export namespace Tags {
    /**
     * A list used to access other resources from a parent model.
     */
    export interface Data {
      /**
       * The id of the addressable object
       */
      id?: string;

      /**
       * The addressable object type
       */
      type?: string;

      /**
       * Url to get more company resources for this contact
       */
      url?: string;
    }
  }
}

/**
 * Conversations are how you can communicate with users in Intercom. They are
 * created when a contact replies to an outbound message, or when one admin
 * directly sends a message to a single contact.
 */
export interface Conversation {
  /**
   * The id representing the conversation.
   */
  id?: string;

  /**
   * The id of the admin assigned to the conversation. If it's not assigned to an
   * admin it will return null.
   */
  admin_assignee_id?: number | null;

  /**
   * The list of contacts (users or leads) involved in this conversation. This will
   * only contain one customer unless more were added via the group conversation
   * feature.
   */
  contacts?: Conversation.Contacts;

  /**
   * A list of Conversation Part objects for each part message in the conversation.
   * This is only returned when Retrieving a Conversation, and ignored when Listing
   * all Conversations. There is a limit of 500 parts.
   */
  conversation_parts?: Conversation.ConversationParts;

  /**
   * The Conversation Rating object which contains information on the rating and/or
   * remark added by a Contact and the Admin assigned to the conversation.
   */
  conversation_rating?: Conversation.ConversationRating | null;

  /**
   * The time the conversation was created.
   */
  created_at?: number;

  /**
   * An object containing the different custom attributes associated to the
   * conversation as key-value pairs. For relationship attributes the value will be a
   * list of custom object instance models.
   */
  custom_attributes?: Record<string, string | Conversation.CustomObjectInstance | null>;

  /**
   * An object containing information on the first users message. For a contact
   * initiated message this will represent the users original message.
   */
  first_contact_reply?: Conversation.FirstContactReply | null;

  /**
   * An object containing metadata about linked conversations and linked tickets. Up
   * to 1000 can be returned.
   */
  linked_objects?: Conversation.LinkedObjects;

  /**
   * Indicates whether a conversation is open (true) or closed (false).
   */
  open?: boolean;

  /**
   * If marked as priority, it will return priority or else not_priority.
   */
  priority?: 'priority' | 'not_priority';

  /**
   * Indicates whether a conversation has been read.
   */
  read?: boolean;

  /**
   * The SLA Applied object contains the details for which SLA has been applied to
   * this conversation. Important: if there are any canceled sla_events for the
   * conversation - meaning an SLA has been manually removed from a conversation, the
   * sla_status will always be returned as null.
   */
  sla_applied?: Conversation.SlaApplied | null;

  /**
   * If set this is the time in the future when this conversation will be marked as
   * open. i.e. it will be in a snoozed state until this time. i.e. it will be in a
   * snoozed state until this time.
   */
  snoozed_until?: number | null;

  /**
   * The Conversation Part that originated this conversation, which can be Contact,
   * Admin, Campaign, Automated or Operator initiated.
   */
  source?: Conversation.Source;

  /**
   * Can be set to "open", "closed" or "snoozed".
   */
  state?: 'open' | 'closed' | 'snoozed';

  /**
   * A Statistics object containing all information required for reporting, with
   * timestamps and calculated metrics.
   */
  statistics?: Conversation.Statistics | null;

  /**
   * A list of tags objects associated with a conversation
   */
  tags?: Conversation.Tags;

  /**
   * The id of the team assigned to the conversation. If it's not assigned to a team
   * it will return null.
   */
  team_assignee_id?: string | null;

  /**
   * The list of teammates who participated in the conversation (wrote at least one
   * conversation part).
   */
  teammates?: Conversation.Teammates | null;

  /**
   * The title given to the conversation.
   */
  title?: string | null;

  /**
   * Always conversation.
   */
  type?: string;

  /**
   * The last time the conversation was updated.
   */
  updated_at?: number;

  /**
   * The last time a Contact responded to an Admin. In other words, the time a
   * customer started waiting for a response. Set to null if last reply is from an
   * Admin.
   */
  waiting_since?: number | null;
}

export namespace Conversation {
  /**
   * The list of contacts (users or leads) involved in this conversation. This will
   * only contain one customer unless more were added via the group conversation
   * feature.
   */
  export interface Contacts {
    /**
     * The list of contacts (users or leads) involved in this conversation. This will
     * only contain one customer unless more were added via the group conversation
     * feature.
     */
    contacts?: Array<Contacts.Contact>;

    type?: 'contact.list';
  }

  export namespace Contacts {
    /**
     * reference to contact object
     */
    export interface Contact {
      /**
       * The unique identifier for the contact which is given by Intercom.
       */
      id?: string;

      /**
       * The unique identifier for the contact which is provided by the Client.
       */
      external_id?: string | null;

      /**
       * always contact
       */
      type?: 'contact';
    }
  }

  /**
   * A list of Conversation Part objects for each part message in the conversation.
   * This is only returned when Retrieving a Conversation, and ignored when Listing
   * all Conversations. There is a limit of 500 parts.
   */
  export interface ConversationParts {
    /**
     * A list of Conversation Part objects for each part message in the conversation.
     * This is only returned when Retrieving a Conversation, and ignored when Listing
     * all Conversations. There is a limit of 500 parts.
     */
    conversation_parts?: Array<ConversationParts.ConversationPart>;

    total_count?: number;

    type?: 'conversation_part.list';
  }

  export namespace ConversationParts {
    /**
     * A Conversation Part represents a message in the conversation.
     */
    export interface ConversationPart {
      /**
       * The id representing the conversation part.
       */
      id?: string;

      /**
       * The id of the admin that was assigned the conversation by this conversation_part
       * (null if there has been no change in assignment.)
       */
      assigned_to?: ConversationPart.AssignedTo | null;

      /**
       * A list of attachments for the part.
       */
      attachments?: Array<ConversationPart.Attachment>;

      /**
       * The object who initiated the conversation, which can be a Contact, Admin or
       * Team. Bots and campaigns send messages on behalf of Admins or Teams. For
       * Twitter, this will be blank.
       */
      author?: ConversationPart.Author;

      /**
       * The message body, which may contain HTML. For Twitter, this will show a generic
       * message regarding why the body is obscured.
       */
      body?: string | null;

      /**
       * The time the conversation part was created.
       */
      created_at?: number;

      /**
       * The external id of the conversation part
       */
      external_id?: string | null;

      /**
       * The time the user was notified with the conversation part.
       */
      notified_at?: number;

      /**
       * The type of conversation part.
       */
      part_type?: string;

      /**
       * Whether or not the conversation part has been redacted.
       */
      redacted?: boolean;

      /**
       * Always conversation_part
       */
      type?: string;

      /**
       * The last time the conversation part was updated.
       */
      updated_at?: number;
    }

    export namespace ConversationPart {
      /**
       * The id of the admin that was assigned the conversation by this conversation_part
       * (null if there has been no change in assignment.)
       */
      export interface AssignedTo {
        id?: string | null;

        type?: string;
      }

      /**
       * The file attached to a part
       */
      export interface Attachment {
        /**
         * The content type of the attachment
         */
        content_type?: string;

        /**
         * The size of the attachment
         */
        filesize?: number;

        /**
         * The height of the attachment
         */
        height?: number;

        /**
         * The name of the attachment
         */
        name?: string;

        /**
         * The type of attachment
         */
        type?: string;

        /**
         * The URL of the attachment
         */
        url?: string;

        /**
         * The width of the attachment
         */
        width?: number;
      }

      /**
       * The object who initiated the conversation, which can be a Contact, Admin or
       * Team. Bots and campaigns send messages on behalf of Admins or Teams. For
       * Twitter, this will be blank.
       */
      export interface Author {
        /**
         * The id of the author
         */
        id?: string;

        /**
         * The email of the author
         */
        email?: string;

        /**
         * The name of the author
         */
        name?: string;

        /**
         * The type of the author
         */
        type?: string;
      }
    }
  }

  /**
   * The Conversation Rating object which contains information on the rating and/or
   * remark added by a Contact and the Admin assigned to the conversation.
   */
  export interface ConversationRating {
    /**
     * reference to contact object
     */
    contact?: ConversationRating.Contact;

    /**
     * The time the rating was requested in the conversation being rated.
     */
    created_at?: number;

    /**
     * The rating, between 1 and 5, for the conversation.
     */
    rating?: number;

    /**
     * An optional field to add a remark to correspond to the number rating
     */
    remark?: string;

    /**
     * reference to another object
     */
    teammate?: ConversationRating.Teammate;
  }

  export namespace ConversationRating {
    /**
     * reference to contact object
     */
    export interface Contact {
      /**
       * The unique identifier for the contact which is given by Intercom.
       */
      id?: string;

      /**
       * The unique identifier for the contact which is provided by the Client.
       */
      external_id?: string | null;

      /**
       * always contact
       */
      type?: 'contact';
    }

    /**
     * reference to another object
     */
    export interface Teammate {
      id?: string | null;

      type?: string;
    }
  }

  /**
   * An instance of a Custom Object Type.
   */
  export interface CustomObjectInstance {
    /**
     * The Intercom defined id representing the custom object instance.
     */
    id?: string;

    /**
     * The custom attributes you have set on the custom object instance.
     */
    custom_attributes?: Record<string, string>;

    /**
     * The id you have defined for the custom object instance.
     */
    external_id?: string;

    /**
     * The identifier of the custom object type that defines the structure of the
     * custom object instance.
     */
    type?: string;
  }

  /**
   * An object containing information on the first users message. For a contact
   * initiated message this will represent the users original message.
   */
  export interface FirstContactReply {
    created_at?: number;

    type?: string;

    url?: string | null;
  }

  /**
   * An object containing metadata about linked conversations and linked tickets. Up
   * to 1000 can be returned.
   */
  export interface LinkedObjects {
    /**
     * An array containing the linked conversations and linked tickets.
     */
    data?: Array<LinkedObjects.Data>;

    /**
     * Whether or not there are more linked objects than returned.
     */
    has_more?: boolean;

    /**
     * The total number of linked objects.
     */
    total_count?: number;

    /**
     * Always list.
     */
    type?: 'list';
  }

  export namespace LinkedObjects {
    /**
     * A linked conversation or ticket.
     */
    export interface Data {
      /**
       * The ID of the linked object
       */
      id?: string;

      /**
       * Category of the Linked Ticket Object.
       */
      category?: 'Customer' | 'Back-office' | 'Tracker' | null;

      /**
       * ticket or conversation
       */
      type?: 'ticket' | 'conversation';
    }
  }

  /**
   * The SLA Applied object contains the details for which SLA has been applied to
   * this conversation. Important: if there are any canceled sla_events for the
   * conversation - meaning an SLA has been manually removed from a conversation, the
   * sla_status will always be returned as null.
   */
  export interface SlaApplied {
    /**
     * The name of the SLA as given by the teammate when it was created.
     */
    sla_name?: string;

    /**
     * SLA statuses: - `hit`: If there’s at least one hit event in the underlying
     * sla_events table, and no “missed” or “canceled” events for the conversation. -
     * `missed`: If there are any missed sla_events for the conversation and no
     * canceled events. If there’s even a single missed sla event, the status will
     * always be missed. A missed status is not applied when the SLA expires, only the
     * next time a teammate replies. - `active`: An SLA has been applied to a
     * conversation, but has not yet been fulfilled. SLA status is active only if there
     * are no “hit, “missed”, or “canceled” events.
     */
    sla_status?: 'hit' | 'missed' | 'cancelled' | 'active';

    /**
     * object type
     */
    type?: string;
  }

  /**
   * The Conversation Part that originated this conversation, which can be Contact,
   * Admin, Campaign, Automated or Operator initiated.
   */
  export interface Source {
    /**
     * The id representing the message.
     */
    id?: string;

    /**
     * A list of attachments for the part.
     */
    attachments?: Array<Source.Attachment>;

    /**
     * The object who initiated the conversation, which can be a Contact, Admin or
     * Team. Bots and campaigns send messages on behalf of Admins or Teams. For
     * Twitter, this will be blank.
     */
    author?: Source.Author;

    /**
     * The message body, which may contain HTML. For Twitter, this will show a generic
     * message regarding why the body is obscured.
     */
    body?: string;

    /**
     * The conversation's initiation type. Possible values are customer_initiated,
     * campaigns_initiated (legacy campaigns), operator_initiated (Custom bot),
     * automated (Series and other outbounds with dynamic audience message) and
     * admin_initiated (fixed audience message, ticket initiated by an admin, group
     * email).
     */
    delivered_as?: string;

    /**
     * Whether or not the source message has been redacted. Only applicable for contact
     * initiated messages.
     */
    redacted?: boolean;

    /**
     * Optional. The message subject. For Twitter, this will show a generic message
     * regarding why the subject is obscured.
     */
    subject?: string;

    /**
     * This includes conversation, push, facebook, twitter and email.
     */
    type?: string;

    /**
     * The URL where the conversation was started. For Twitter, Email, and Bots, this
     * will be blank.
     */
    url?: string | null;
  }

  export namespace Source {
    /**
     * The file attached to a part
     */
    export interface Attachment {
      /**
       * The content type of the attachment
       */
      content_type?: string;

      /**
       * The size of the attachment
       */
      filesize?: number;

      /**
       * The height of the attachment
       */
      height?: number;

      /**
       * The name of the attachment
       */
      name?: string;

      /**
       * The type of attachment
       */
      type?: string;

      /**
       * The URL of the attachment
       */
      url?: string;

      /**
       * The width of the attachment
       */
      width?: number;
    }

    /**
     * The object who initiated the conversation, which can be a Contact, Admin or
     * Team. Bots and campaigns send messages on behalf of Admins or Teams. For
     * Twitter, this will be blank.
     */
    export interface Author {
      /**
       * The id of the author
       */
      id?: string;

      /**
       * The email of the author
       */
      email?: string;

      /**
       * The name of the author
       */
      name?: string;

      /**
       * The type of the author
       */
      type?: string;
    }
  }

  /**
   * A Statistics object containing all information required for reporting, with
   * timestamps and calculated metrics.
   */
  export interface Statistics {
    /**
     * Number of assignments after first_contact_reply_at.
     */
    count_assignments?: number;

    /**
     * Total number of conversation parts.
     */
    count_conversation_parts?: number;

    /**
     * Number of reopens after first_contact_reply_at.
     */
    count_reopens?: number;

    /**
     * Time of first admin reply after first_contact_reply_at.
     */
    first_admin_reply_at?: number;

    /**
     * Time of first assignment after first_contact_reply_at.
     */
    first_assignment_at?: number;

    /**
     * Time of first close after first_contact_reply_at.
     */
    first_close_at?: number;

    /**
     * Time of first text conversation part from a contact.
     */
    first_contact_reply_at?: number;

    /**
     * Time of the last conversation part from an admin.
     */
    last_admin_reply_at?: number;

    /**
     * Time of first admin reply since most recent assignment.
     */
    last_assignment_admin_reply_at?: number;

    /**
     * Time of last assignment after first_contact_reply_at.
     */
    last_assignment_at?: number;

    /**
     * Time of the last conversation close.
     */
    last_close_at?: number;

    /**
     * The last admin who closed the conversation. Returns a reference to an Admin
     * object.
     */
    last_closed_by_id?: string;

    /**
     * Time of the last conversation part from a contact.
     */
    last_contact_reply_at?: number;

    /**
     * Median based on all admin replies after a contact reply. Subtracts out of
     * business hours. In seconds.
     */
    median_time_to_reply?: number;

    /**
     * Duration until first admin reply. Subtracts out of business hours. In seconds.
     */
    time_to_admin_reply?: number;

    /**
     * Duration until last assignment before first admin reply. In seconds.
     */
    time_to_assignment?: number;

    /**
     * Duration until conversation was closed first time. Subtracts out of business
     * hours. In seconds.
     */
    time_to_first_close?: number;

    /**
     * Duration until conversation was closed last time. Subtracts out of business
     * hours. In seconds.
     */
    time_to_last_close?: number;

    type?: string;
  }

  /**
   * A list of tags objects associated with a conversation
   */
  export interface Tags {
    /**
     * A list of tags objects associated with the conversation.
     */
    tags?: Array<Shared.Tag>;

    /**
     * The type of the object
     */
    type?: 'tag.list';
  }

  /**
   * The list of teammates who participated in the conversation (wrote at least one
   * conversation part).
   */
  export interface Teammates {
    /**
     * The list of teammates who participated in the conversation (wrote at least one
     * conversation part).
     */
    teammates?: Array<Teammates.Teammate>;

    /**
     * The type of the object - `admin.list`.
     */
    type?: string;
  }

  export namespace Teammates {
    /**
     * reference to another object
     */
    export interface Teammate {
      id?: string | null;

      type?: string;
    }
  }
}

/**
 * Message are how you reach out to contacts in Intercom. They are created when an
 * admin sends an outbound message to a contact.
 */
export interface Message {
  /**
   * The id representing the message.
   */
  id: string;

  /**
   * The message body, which may contain HTML.
   */
  body: string;

  /**
   * The time the conversation was created.
   */
  created_at: number;

  /**
   * The type of message that was sent. Can be email, inapp, facebook or twitter.
   */
  message_type: 'email' | 'inapp' | 'facebook' | 'twitter';

  /**
   * The type of the message
   */
  type: string;

  /**
   * The associated conversation_id
   */
  conversation_id?: string;

  /**
   * The subject of the message. Only present if message_type: email.
   */
  subject?: string;
}

/**
 * Notes allow you to annotate and comment on your contacts.
 */
export interface Note {
  /**
   * The id of the note.
   */
  id?: string;

  /**
   * Optional. Represents the Admin that created the note.
   */
  author?: Admin | null;

  /**
   * The body text of the note.
   */
  body?: string;

  /**
   * Represents the contact that the note was created about.
   */
  contact?: Note.Contact | null;

  /**
   * The time the note was created.
   */
  created_at?: number;

  /**
   * String representing the object's type. Always has the value `note`.
   */
  type?: string;
}

export namespace Note {
  /**
   * Represents the contact that the note was created about.
   */
  export interface Contact {
    /**
     * The id of the contact.
     */
    id?: string;

    /**
     * String representing the object's type. Always has the value `contact`.
     */
    type?: string;
  }
}

/**
 * Paginated Response
 */
export interface PaginatedResponse {
  /**
   * An array of Objects
   */
  data?: Array<NewsItemsAPI.NewsItem | NewsfeedsAPI.Newsfeed>;

  /**
   * Cursor-based pagination is a technique used in the Intercom API to navigate
   * through large amounts of data. A "cursor" or pointer is used to keep track of
   * the current position in the result set, allowing the API to return the data in
   * small chunks or "pages" as needed.
   */
  pages?: PaginatedResponse.Pages | null;

  /**
   * A count of the total number of objects.
   */
  total_count?: number;

  /**
   * The type of object
   */
  type?: 'list' | 'conversation.list';
}

export namespace PaginatedResponse {
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

/**
 * A list of subscription type objects.
 */
export interface SubscriptionTypeList {
  /**
   * A list of subscription type objects associated with the workspace .
   */
  data?: Array<SubscriptionsAPI.SubscriptionType>;

  /**
   * The type of the object
   */
  type?: 'list';
}

/**
 * A tag allows you to label your contacts, companies, and conversations and list
 * them using that tag.
 */
export interface Tag {
  /**
   * The id of the tag
   */
  id?: string;

  /**
   * The time when the tag was applied to the object
   */
  applied_at?: number;

  /**
   * reference to another object
   */
  applied_by?: Tag.AppliedBy;

  /**
   * The name of the tag
   */
  name?: string;

  /**
   * value is "tag"
   */
  type?: string;
}

export namespace Tag {
  /**
   * reference to another object
   */
  export interface AppliedBy {
    id?: string | null;

    type?: string;
  }
}

/**
 * A list of tags objects in the workspace.
 */
export interface TagList {
  /**
   * A list of tags objects associated with the workspace .
   */
  data?: Array<Tag>;

  /**
   * The type of the object
   */
  type?: 'list';
}

/**
 * Tickets are how you track requests from your users.
 */
export interface Ticket {
  /**
   * The unique identifier for the ticket which is given by Intercom.
   */
  id?: string;

  /**
   * The id representing the admin assigned to the ticket.
   */
  admin_assignee_id?: string;

  /**
   * Category of the Ticket.
   */
  category?: 'Customer' | 'Back-office' | 'Tracker';

  /**
   * The list of contacts affected by a ticket.
   */
  contacts?: Ticket.Contacts;

  /**
   * The time the ticket was created as a UTC Unix timestamp.
   */
  created_at?: number;

  /**
   * Whether or not the ticket is shared with the customer.
   */
  is_shared?: boolean;

  /**
   * An object containing metadata about linked conversations and linked tickets. Up
   * to 1000 can be returned.
   */
  linked_objects?: Ticket.LinkedObjects;

  /**
   * Whether or not the ticket is open. If false, the ticket is closed.
   */
  open?: boolean;

  /**
   * The time the ticket will be snoozed until as a UTC Unix timestamp. If null, the
   * ticket is not currently snoozed.
   */
  snoozed_until?: number;

  /**
   * The id representing the team assigned to the ticket.
   */
  team_assignee_id?: string;

  /**
   * An object containing the different attributes associated to the ticket as
   * key-value pairs. For the default title and description attributes, the keys are
   * `_default_title_` and `_default_description_`.
   */
  ticket_attributes?: Record<
    string,
    string | null | number | boolean | Array<unknown> | Ticket.FileAttribute
  >;

  /**
   * The ID of the Ticket used in the Intercom Inbox and Messenger. Do not use
   * ticket_id for API queries.
   */
  ticket_id?: string;

  /**
   * A list of Ticket Part objects for each note and event in the ticket. There is a
   * limit of 500 parts.
   */
  ticket_parts?: Ticket.TicketParts;

  /**
   * The state the ticket is currenly in
   */
  ticket_state?: 'submitted' | 'in_progress' | 'waiting_on_customer' | 'on_hold' | 'resolved';

  /**
   * A ticket type, used to define the data fields to be captured in a ticket.
   */
  ticket_type?: TicketTypesAPI.TicketType | null;

  /**
   * Always ticket
   */
  type?: 'ticket';

  /**
   * The last time the ticket was updated as a UTC Unix timestamp.
   */
  updated_at?: number;
}

export namespace Ticket {
  /**
   * The list of contacts affected by a ticket.
   */
  export interface Contacts {
    /**
     * The list of contacts affected by this ticket.
     */
    contacts?: Array<Contacts.Contact>;

    /**
     * always contact.list
     */
    type?: 'contact.list';
  }

  export namespace Contacts {
    /**
     * reference to contact object
     */
    export interface Contact {
      /**
       * The unique identifier for the contact which is given by Intercom.
       */
      id?: string;

      /**
       * The unique identifier for the contact which is provided by the Client.
       */
      external_id?: string | null;

      /**
       * always contact
       */
      type?: 'contact';
    }
  }

  /**
   * An object containing metadata about linked conversations and linked tickets. Up
   * to 1000 can be returned.
   */
  export interface LinkedObjects {
    /**
     * An array containing the linked conversations and linked tickets.
     */
    data?: Array<LinkedObjects.Data>;

    /**
     * Whether or not there are more linked objects than returned.
     */
    has_more?: boolean;

    /**
     * The total number of linked objects.
     */
    total_count?: number;

    /**
     * Always list.
     */
    type?: 'list';
  }

  export namespace LinkedObjects {
    /**
     * A linked conversation or ticket.
     */
    export interface Data {
      /**
       * The ID of the linked object
       */
      id?: string;

      /**
       * Category of the Linked Ticket Object.
       */
      category?: 'Customer' | 'Back-office' | 'Tracker' | null;

      /**
       * ticket or conversation
       */
      type?: 'ticket' | 'conversation';
    }
  }

  /**
   * The value describing a file upload set for a custom attribute
   */
  export interface FileAttribute {
    /**
     * The type of file
     */
    content_type?: string;

    /**
     * The size of the file in bytes
     */
    filesize?: number;

    /**
     * The height of the file in pixels, if applicable
     */
    height?: number;

    /**
     * The name of the file
     */
    name?: string;

    type?: string;

    /**
     * The url of the file. This is a temporary URL and will expire after 30 minutes.
     */
    url?: string;

    /**
     * The width of the file in pixels, if applicable
     */
    width?: number;
  }

  /**
   * A list of Ticket Part objects for each note and event in the ticket. There is a
   * limit of 500 parts.
   */
  export interface TicketParts {
    /**
     * A list of Ticket Part objects for each ticket. There is a limit of 500 parts.
     */
    ticket_parts?: Array<TicketParts.TicketPart>;

    total_count?: number;

    type?: 'ticket_part.list';
  }

  export namespace TicketParts {
    /**
     * A Ticket Part represents a message in the ticket.
     */
    export interface TicketPart {
      /**
       * The id representing the ticket part.
       */
      id?: string;

      /**
       * The id of the admin that was assigned the ticket by this ticket_part (null if
       * there has been no change in assignment.)
       */
      assigned_to?: TicketPart.AssignedTo | null;

      /**
       * A list of attachments for the part.
       */
      attachments?: Array<TicketPart.Attachment>;

      /**
       * The author that wrote or triggered the part. Can be a bot, admin, team or user.
       */
      author?: TicketPart.Author;

      /**
       * The message body, which may contain HTML.
       */
      body?: string | null;

      /**
       * The time the ticket part was created.
       */
      created_at?: number;

      /**
       * The external id of the ticket part
       */
      external_id?: string | null;

      /**
       * The type of ticket part.
       */
      part_type?: string;

      /**
       * The previous state of the ticket.
       */
      previous_ticket_state?: 'submitted' | 'in_progress' | 'waiting_on_customer' | 'resolved';

      /**
       * Whether or not the ticket part has been redacted.
       */
      redacted?: boolean;

      /**
       * The state of the ticket.
       */
      ticket_state?: 'submitted' | 'in_progress' | 'waiting_on_customer' | 'resolved';

      /**
       * Always ticket_part
       */
      type?: string;

      /**
       * The last time the ticket part was updated.
       */
      updated_at?: number;
    }

    export namespace TicketPart {
      /**
       * The id of the admin that was assigned the ticket by this ticket_part (null if
       * there has been no change in assignment.)
       */
      export interface AssignedTo {
        id?: string | null;

        type?: string;
      }

      /**
       * The file attached to a part
       */
      export interface Attachment {
        /**
         * The content type of the attachment
         */
        content_type?: string;

        /**
         * The size of the attachment
         */
        filesize?: number;

        /**
         * The height of the attachment
         */
        height?: number;

        /**
         * The name of the attachment
         */
        name?: string;

        /**
         * The type of attachment
         */
        type?: string;

        /**
         * The URL of the attachment
         */
        url?: string;

        /**
         * The width of the attachment
         */
        width?: number;
      }

      /**
       * The author that wrote or triggered the part. Can be a bot, admin, team or user.
       */
      export interface Author {
        /**
         * The id of the author
         */
        id?: string;

        /**
         * The email of the author
         */
        email?: string;

        /**
         * The name of the author
         */
        name?: string | null;

        /**
         * The type of the author
         */
        type?: 'admin' | 'bot' | 'team' | 'user';
      }
    }
  }
}

/**
 * Ticket type attribute, used to define each data field to be captured in a
 * ticket.
 */
export interface TicketTypeAttribute {
  /**
   * The id representing the ticket type attribute.
   */
  id?: string;

  /**
   * Whether the ticket type attribute is archived or not.
   */
  archived?: boolean;

  /**
   * The date and time the ticket type attribute was created.
   */
  created_at?: number;

  /**
   * The type of the data attribute (allowed values: "string list integer decimal
   * boolean datetime files")
   */
  data_type?: string;

  /**
   * Whether the attribute is built in or not.
   */
  default?: boolean;

  /**
   * The description of the ticket type attribute
   */
  description?: string;

  /**
   * Input options for the attribute
   */
  input_options?: unknown;

  /**
   * The name of the ticket type attribute
   */
  name?: string;

  /**
   * The order of the attribute against other attributes
   */
  order?: number;

  /**
   * Whether the attribute is required or not for teammates.
   */
  required_to_create?: boolean;

  /**
   * Whether the attribute is required or not for contacts.
   */
  required_to_create_for_contacts?: boolean;

  /**
   * The id of the ticket type that the attribute belongs to.
   */
  ticket_type_id?: number;

  /**
   * String representing the object's type. Always has the value
   * `ticket_type_attribute`.
   */
  type?: string;

  /**
   * The date and time the ticket type attribute was last updated.
   */
  updated_at?: number;

  /**
   * Whether the attribute is visible or not to teammates.
   */
  visible_on_create?: boolean;

  /**
   * Whether the attribute is visible or not to contacts.
   */
  visible_to_contacts?: boolean;

  /**
   * The id of the workspace that the ticket type attribute belongs to.
   */
  workspace_id?: string;
}
