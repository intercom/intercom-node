// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as ConversationsAPI from './conversations';
import * as Shared from '../shared';
import { ConversationListResponsesCursorPagination } from '../shared';
import * as CustomersAPI from './customers';
import * as PartsAPI from './parts';
import * as ReplyAPI from './reply';
import * as RunAssignmentRulesAPI from './run-assignment-rules';
import * as TagsAPI from './tags';
import * as NewsItemsAPI from '../news/news-items';
import * as NewsfeedsAPI from '../news/newsfeeds/newsfeeds';
import { type CursorPaginationParams } from '../../pagination';

export class Conversations extends APIResource {
  tags: TagsAPI.Tags = new TagsAPI.Tags(this._client);
  reply: ReplyAPI.Reply = new ReplyAPI.Reply(this._client);
  parts: PartsAPI.Parts = new PartsAPI.Parts(this._client);
  runAssignmentRules: RunAssignmentRulesAPI.RunAssignmentRules = new RunAssignmentRulesAPI.RunAssignmentRules(
    this._client,
  );
  customers: CustomersAPI.Customers = new CustomersAPI.Customers(this._client);

  /**
   * You can create a conversation that has been initiated by a contact (ie. user or
   * lead). The conversation can be an in-app message only.
   *
   * {% admonition type="info" name="Sending for visitors" %} You can also send a
   * message from a visitor by specifying their `user_id` or `id` value in the `from`
   * field, along with a `type` field value of `contact`. This visitor will be
   * automatically converted to a contact with a lead role once the conversation is
   * created. {% /admonition %}
   *
   * This will return the Message model that has been created.
   */
  create(params: ConversationCreateParams, options?: Core.RequestOptions): Core.APIPromise<Shared.Message> {
    const { 'Intercom-Version': intercomVersion, ...body } = params;
    return this._client.post('/conversations', {
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

  /**
   * You can fetch the details of a single conversation.
   *
   * This will return a single Conversation model with all its conversation parts.
   *
   * {% admonition type="warning" name="Hard limit of 500 parts" %} The maximum
   * number of conversation parts that can be returned via the API is 500. If you
   * have more than that we will return the 500 most recent conversation parts.
   * {% /admonition %}
   *
   * For AI agent conversation metadata, please note that you need to have the agent
   * enabled in your workspace, which is a
   * [paid feature](https://www.intercom.com/help/en/articles/8205718-fin-resolutions#h_97f8c2e671).
   */
  retrieve(
    id: number,
    params?: ConversationRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Conversation>;
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<Shared.Conversation>;
  retrieve(
    id: number,
    params: ConversationRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Conversation> {
    if (isRequestOptions(params)) {
      return this.retrieve(id, {}, params);
    }
    const { 'Intercom-Version': intercomVersion, ...query } = params;
    return this._client.get(`/conversations/${id}`, {
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

  /**
   * You can update an existing conversation.
   *
   * {% admonition type="info" name="Replying and other actions" %} If you want to
   * reply to a coveration or take an action such as assign, unassign, open, close or
   * snooze, take a look at the reply and manage endpoints. {% /admonition %}
   */
  update(
    id: number,
    params?: ConversationUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Conversation>;
  update(id: number, options?: Core.RequestOptions): Core.APIPromise<Shared.Conversation>;
  update(
    id: number,
    params: ConversationUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Conversation> {
    if (isRequestOptions(params)) {
      return this.update(id, {}, params);
    }
    const { display_as, 'Intercom-Version': intercomVersion, ...body } = params;
    return this._client.put(`/conversations/${id}`, {
      query: { display_as },
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

  /**
   * You can fetch a list of all conversations.
   *
   * You can optionally request the result page size and the cursor to start after to
   * fetch the result. {% admonition type="warning" name="Pagination" %} You can use
   * pagination to limit the number of results returned. The default is `20` results
   * per page. See the
   * [pagination section](https://developers.intercom.com/docs/build-an-integration/learn-more/rest-apis/pagination/#pagination-for-list-apis)
   * for more details on how to use the `starting_after` param. {% /admonition %}
   */
  list(
    params?: ConversationListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ConversationListResponsesCursorPagination, ConversationListResponse>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<ConversationListResponsesCursorPagination, ConversationListResponse>;
  list(
    params: ConversationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ConversationListResponsesCursorPagination, ConversationListResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { 'Intercom-Version': intercomVersion, ...query } = params;
    return this._client.getAPIList('/conversations', ConversationListResponsesCursorPagination, {
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

  /**
   * You can convert a conversation to a ticket.
   */
  convert(
    id: number,
    params: ConversationConvertParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Ticket | null> {
    const { 'Intercom-Version': intercomVersion, ...body } = params;
    return this._client.post(`/conversations/${id}/convert`, {
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

  /**
   * You can redact a conversation part or the source message of a conversation (as
   * seen in the source object).
   *
   * {% admonition type="info" name="Redacting parts and messages" %} If you are
   * redacting a conversation part, it must have a `body`. If you are redacting a
   * source message, it must have been created by a contact. We will return a
   * `conversation_part_not_redactable` error if these criteria are not met.
   * {% /admonition %}
   */
  redact(
    params: ConversationRedactParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Conversation> {
    const { 'Intercom-Version': intercomVersion, ...body } = params;
    return this._client.post('/conversations/redact', {
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

  /**
   * You can search for multiple conversations by the value of their attributes in
   * order to fetch exactly which ones you want.
   *
   * To search for conversations, you need to send a `POST` request to
   * `https://api.intercom.io/conversations/search`.
   *
   * This will accept a query object in the body which will define your filters in
   * order to search for conversations.
   * {% admonition type="warning" name="Optimizing search queries" %} Search queries
   * can be complex, so optimizing them can help the performance of your search. Use
   * the `AND` and `OR` operators to combine multiple filters to get the exact
   * results you need and utilize pagination to limit the number of results returned.
   * The default is `20` results per page and maximum is `150`. See the
   * [pagination section](https://developers.intercom.com/docs/build-an-integration/learn-more/rest-apis/pagination/#example-search-conversations-request)
   * for more details on how to use the `starting_after` param. {% /admonition %}
   *
   * ### Nesting & Limitations
   *
   * You can nest these filters in order to get even more granular insights that
   * pinpoint exactly what you need. Example: (1 OR 2) AND (3 OR 4). There are some
   * limitations to the amount of multiple's there can be:
   *
   * - There's a limit of max 2 nested filters
   * - There's a limit of max 15 filters for each AND or OR group
   *
   * ### Accepted Fields
   *
   * Most keys listed as part of the The conversation model is searchable, whether
   * writeable or not. The value you search for has to match the accepted type,
   * otherwise the query will fail (ie. as `created_at` accepts a date, the `value`
   * cannot be a string such as `"foorbar"`).
   *
   * | Field                                                                                                                                        | Type                  |
   * | :------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------- |
   * | id                                                                                                                                           | String                |
   * | created_at                                                                                                                                   | Date (UNIX timestamp) |
   * | updated_at                                                                                                                                   | Date (UNIX timestamp) |
   * | source.type                                                                                                                                  | String                |
   * | Accepted fields are `conversation`, `email`, `facebook`, `instagram`, `phone_call`, `phone_switch`, `push`, `sms`, `twitter` and `whatsapp`. |
   * | source.id                                                                                                                                    | String                |
   * | source.delivered_as                                                                                                                          | String                |
   * | source.subject                                                                                                                               | String                |
   * | source.body                                                                                                                                  | String                |
   * | source.author.id                                                                                                                             | String                |
   * | source.author.type                                                                                                                           | String                |
   * | source.author.name                                                                                                                           | String                |
   * | source.author.email                                                                                                                          | String                |
   * | source.url                                                                                                                                   | String                |
   * | contact_ids                                                                                                                                  | String                |
   * | teammate_ids                                                                                                                                 | String                |
   * | admin_assignee_id                                                                                                                            | String                |
   * | team_assignee_id                                                                                                                             | String                |
   * | channel_initiated                                                                                                                            | String                |
   * | open                                                                                                                                         | Boolean               |
   * | read                                                                                                                                         | Boolean               |
   * | state                                                                                                                                        | String                |
   * | waiting_since                                                                                                                                | Date (UNIX timestamp) |
   * | snoozed_until                                                                                                                                | Date (UNIX timestamp) |
   * | tag_ids                                                                                                                                      | String                |
   * | priority                                                                                                                                     | String                |
   * | statistics.time_to_assignment                                                                                                                | Integer               |
   * | statistics.time_to_admin_reply                                                                                                               | Integer               |
   * | statistics.time_to_first_close                                                                                                               | Integer               |
   * | statistics.time_to_last_close                                                                                                                | Integer               |
   * | statistics.median_time_to_reply                                                                                                              | Integer               |
   * | statistics.first_contact_reply_at                                                                                                            | Date (UNIX timestamp) |
   * | statistics.first_assignment_at                                                                                                               | Date (UNIX timestamp) |
   * | statistics.first_admin_reply_at                                                                                                              | Date (UNIX timestamp) |
   * | statistics.first_close_at                                                                                                                    | Date (UNIX timestamp) |
   * | statistics.last_assignment_at                                                                                                                | Date (UNIX timestamp) |
   * | statistics.last_assignment_admin_reply_at                                                                                                    | Date (UNIX timestamp) |
   * | statistics.last_contact_reply_at                                                                                                             | Date (UNIX timestamp) |
   * | statistics.last_admin_reply_at                                                                                                               | Date (UNIX timestamp) |
   * | statistics.last_close_at                                                                                                                     | Date (UNIX timestamp) |
   * | statistics.last_closed_by_id                                                                                                                 | String                |
   * | statistics.count_reopens                                                                                                                     | Integer               |
   * | statistics.count_assignments                                                                                                                 | Integer               |
   * | statistics.count_conversation_parts                                                                                                          | Integer               |
   * | conversation_rating.requested_at                                                                                                             | Date (UNIX timestamp) |
   * | conversation_rating.replied_at                                                                                                               | Date (UNIX timestamp) |
   * | conversation_rating.score                                                                                                                    | Integer               |
   * | conversation_rating.remark                                                                                                                   | String                |
   * | conversation_rating.contact_id                                                                                                               | String                |
   * | conversation_rating.admin_d                                                                                                                  | String                |
   * | ai_agent_participated                                                                                                                        | Boolean               |
   * | ai_agent.resolution_state                                                                                                                    | String                |
   * | ai_agent.last_answer_type                                                                                                                    | String                |
   * | ai_agent.rating                                                                                                                              | Integer               |
   * | ai_agent.rating_remark                                                                                                                       | String                |
   * | ai_agent.source_type                                                                                                                         | String                |
   * | ai_agent.source_title                                                                                                                        | String                |
   *
   * ### Accepted Operators
   *
   * The table below shows the operators you can use to define how you want to search
   * for the value. The operator should be put in as a string (`"="`). The operator
   * has to be compatible with the field's type (eg. you cannot search with `>` for a
   * given string value as it's only compatible for integer's and dates).
   *
   * | Operator | Valid Types                   | Description                                                |
   * | :------- | :---------------------------- | :--------------------------------------------------------- |
   * | =        | All                           | Equals                                                     |
   * | !=       | All                           | Doesn't Equal                                              |
   * | IN       | All                           | In Shortcut for `OR` queries Values most be in Array       |
   * | NIN      | All                           | Not In Shortcut for `OR !` queries Values must be in Array |
   * | >        | Integer Date (UNIX Timestamp) | Greater (or equal) than                                    |
   * | <        | Integer Date (UNIX Timestamp) | Lower (or equal) than                                      |
   * | ~        | String                        | Contains                                                   |
   * | !~       | String                        | Doesn't Contain                                            |
   * | ^        | String                        | Starts With                                                |
   * | $        | String                        | Ends With                                                  |
   */
  search(
    params: ConversationSearchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConversationSearchResponse> {
    const { 'Intercom-Version': intercomVersion, ...body } = params;
    return this._client.post('/conversations/search', {
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
   * Data related to AI Agent involvement in the conversation.
   */
  ai_agent?: Conversation.AIAgent | null;

  /**
   * Indicates whether the AI Agent participated in the conversation.
   */
  ai_agent_participated?: boolean;

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
   * Data related to AI Agent involvement in the conversation.
   */
  export interface AIAgent {
    content_sources?: AIAgent.ContentSources;

    /**
     * The type of the last answer delviered by AI Agent. If no answer was delivered
     * then this will return null
     */
    last_answer_type?: 'ai_answer' | 'custom_answer' | null;

    /**
     * The customer satisfaction rating given to AI Agent, from 1-5.
     */
    rating?: number;

    /**
     * The customer satisfaction rating remark given to AI Agent.
     */
    rating_remark?: string;

    /**
     * The resolution state of AI Agent. If no AI or custom answer has been delivered
     * then this will return `abandoned`.
     */
    resolution_state?: 'assumed_resolution' | 'confirmed_resolution' | 'routed_to_team' | 'abandoned';

    /**
     * The title of the source that triggered AI Agent involvement in the conversation.
     * If this is `essentials_plan_setup` then it will return null.
     */
    source_title?: string | null;

    /**
     * The type of the source that triggered AI Agent involvement in the conversation.
     */
    source_type?: 'essentials_plan_setup' | 'profile' | 'workflow' | 'workflow_preview' | 'fin_preview';
  }

  export namespace AIAgent {
    export interface ContentSources {
      /**
       * The content sources used by AI Agent in the conversation.
       */
      content_sources?: Array<ContentSources.ContentSource>;

      /**
       * The total number of content sources used by AI Agent in the conversation.
       */
      total_count?: number;

      type?: 'content_source.list';
    }

    export namespace ContentSources {
      /**
       * The content source used by AI Agent in the conversation.
       */
      export interface ContentSource {
        /**
         * The type of the content source.
         */
        content_type?:
          | 'file'
          | 'article'
          | 'external_content'
          | 'content_snippet'
          | 'workflow_connector_action';

        /**
         * The ISO 639 language code of the content source.
         */
        locale?: string;

        /**
         * The title of the content source.
         */
        title?: string;

        /**
         * The internal URL linking to the content source for teammates.
         */
        url?: string;
      }
    }
  }

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
    contacts?: Array<Shared.ContactReference>;

    type?: 'contact.list';
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
      assigned_to?: Shared.Reference | null;

      /**
       * A list of attachments for the part.
       */
      attachments?: Array<Shared.PartAttachment>;

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
    contact?: Shared.ContactReference;

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
    teammate?: Shared.Reference;
  }

  /**
   * A Custom Object Instance represents an instance of a custom object type. This
   * allows you to create and set custom attributes to store data about your
   * customers that is not already captured by Intercom. The parent object includes
   * recommended default attributes and you can add your own custom attributes.
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
    attachments?: Array<Shared.PartAttachment>;

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
     * This includes conversation, email, facebook, instagram, phone_call,
     * phone_switch, push, sms, twitter and whatsapp.
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
    teammates?: Array<Shared.Reference>;

    /**
     * The type of the object - `admin.list`.
     */
    type?: string;
  }
}

/**
 * A News Item is a content type in Intercom enabling you to announce product
 * updates, company news, promotions, events and more with your customers.
 */
export type ConversationListResponse = NewsItemsAPI.NewsItem | NewsfeedsAPI.Newsfeed;

/**
 * Conversations are how you can communicate with users in Intercom. They are
 * created when a contact replies to an outbound message, or when one admin
 * directly sends a message to a single contact.
 */
export interface ConversationSearchResponse {
  /**
   * The list of conversation objects
   */
  conversations?: Array<Shared.Conversation>;

  /**
   * Cursor-based pagination is a technique used in the Intercom API to navigate
   * through large amounts of data. A "cursor" or pointer is used to keep track of
   * the current position in the result set, allowing the API to return the data in
   * small chunks or "pages" as needed.
   */
  pages?: Shared.CursorPages | null;

  /**
   * A count of the total number of objects.
   */
  total_count?: number;

  /**
   * Always conversation.list
   */
  type?: 'conversation.list';
}

export interface ConversationCreateParams {
  /**
   * Body param: The content of the message. HTML is not supported.
   */
  body: string;

  /**
   * Body param:
   */
  from: ConversationCreateParams.From;

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

export namespace ConversationCreateParams {
  export interface From {
    /**
     * The identifier for the contact which is given by Intercom.
     */
    id: string;

    /**
     * The role associated to the contact - user or lead.
     */
    type: 'lead' | 'user' | 'contact';
  }
}

export interface ConversationRetrieveParams {
  /**
   * Query param: Set to plaintext to retrieve conversation messages in plain text.
   */
  display_as?: string;

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

export interface ConversationUpdateParams {
  /**
   * Query param: Set to plaintext to retrieve conversation messages in plain text.
   */
  display_as?: string;

  /**
   * Body param: An object containing the different custom attributes associated to
   * the conversation as key-value pairs. For relationship attributes the value will
   * be a list of custom object instance models.
   */
  custom_attributes?: Record<string, string | ConversationUpdateParams.CustomObjectInstance | null>;

  /**
   * Body param: Mark a conversation as read within Intercom.
   */
  read?: boolean;

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

export namespace ConversationUpdateParams {
  /**
   * A Custom Object Instance represents an instance of a custom object type. This
   * allows you to create and set custom attributes to store data about your
   * customers that is not already captured by Intercom. The parent object includes
   * recommended default attributes and you can add your own custom attributes.
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
}

export interface ConversationListParams extends CursorPaginationParams {
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

export interface ConversationConvertParams {
  /**
   * Body param: The ID of the type of ticket you want to convert the conversation to
   */
  ticket_type_id: string;

  /**
   * Body param: The attributes set on the ticket. When setting the default title and
   * description attributes, the attribute keys that should be used are
   * `_default_title_` and `_default_description_`. When setting ticket type
   * attributes of the list attribute type, the key should be the attribute name and
   * the value of the attribute should be the list item id, obtainable by
   * [listing the ticket type](ref:get_ticket-types). For example, if the ticket type
   * has an attribute called `priority` of type `list`, the key should be `priority`
   * and the value of the attribute should be the guid of the list item (e.g.
   * `de1825a0-0164-4070-8ca6-13e22462fa7e`).
   */
  attributes?: Record<string, string | null | number | boolean | Array<unknown>>;

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

export type ConversationRedactParams =
  | ConversationRedactParams.RedactConversationPartRequest
  | ConversationRedactParams.RedactConversationSourceRequest;

export namespace ConversationRedactParams {
  export interface RedactConversationPartRequest {
    /**
     * Body param: The id of the conversation.
     */
    conversation_id: string;

    /**
     * Body param: The id of the conversation_part.
     */
    conversation_part_id: string;

    /**
     * Body param: The type of resource being redacted.
     */
    type: 'conversation_part';

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

  export interface RedactConversationSourceRequest {
    /**
     * Body param: The id of the conversation.
     */
    conversation_id: string;

    /**
     * Body param: The id of the source.
     */
    source_id: string;

    /**
     * Body param: The type of resource being redacted.
     */
    type: 'source';

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
}

export interface ConversationSearchParams {
  /**
   * Body param: Search using Intercoms Search APIs with a single filter.
   */
  query: Shared.SingleFilterSearchRequest | Shared.MultipleFilterSearchRequest;

  /**
   * Body param:
   */
  pagination?: Shared.StartingAfterPaging | null;

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

export namespace Conversations {
  export import Conversation = ConversationsAPI.Conversation;
  export import ConversationListResponse = ConversationsAPI.ConversationListResponse;
  export import ConversationSearchResponse = ConversationsAPI.ConversationSearchResponse;
  export import ConversationCreateParams = ConversationsAPI.ConversationCreateParams;
  export import ConversationRetrieveParams = ConversationsAPI.ConversationRetrieveParams;
  export import ConversationUpdateParams = ConversationsAPI.ConversationUpdateParams;
  export import ConversationListParams = ConversationsAPI.ConversationListParams;
  export import ConversationConvertParams = ConversationsAPI.ConversationConvertParams;
  export import ConversationRedactParams = ConversationsAPI.ConversationRedactParams;
  export import ConversationSearchParams = ConversationsAPI.ConversationSearchParams;
  export import Tags = TagsAPI.Tags;
  export import TagCreateParams = TagsAPI.TagCreateParams;
  export import TagDeleteParams = TagsAPI.TagDeleteParams;
  export import Reply = ReplyAPI.Reply;
  export import ReplyCreateParams = ReplyAPI.ReplyCreateParams;
  export import Parts = PartsAPI.Parts;
  export import PartCreateParams = PartsAPI.PartCreateParams;
  export import RunAssignmentRules = RunAssignmentRulesAPI.RunAssignmentRules;
  export import RunAssignmentRuleCreateParams = RunAssignmentRulesAPI.RunAssignmentRuleCreateParams;
  export import Customers = CustomersAPI.Customers;
  export import CustomerCreateParams = CustomersAPI.CustomerCreateParams;
  export import CustomerDeleteParams = CustomersAPI.CustomerDeleteParams;
}

export { ConversationListResponsesCursorPagination };
