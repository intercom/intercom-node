// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as ConversationsAPI from './conversations';
import * as Shared from '../shared';
import * as CustomersAPI from './customers';
import * as PartsAPI from './parts';
import * as ReplyAPI from './reply';
import * as RunAssignmentRulesAPI from './run-assignment-rules';
import * as TagsAPI from './tags';

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
  ): Core.APIPromise<Shared.PaginatedResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<Shared.PaginatedResponse>;
  list(
    params: ConversationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.PaginatedResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { 'Intercom-Version': intercomVersion, ...query } = params;
    return this._client.get('/conversations', {
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
  search(params: ConversationSearchParams, options?: Core.RequestOptions): Core.APIPromise<ConversationList> {
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
export interface ConversationList {
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
  pages?: ConversationList.Pages | null;

  /**
   * A count of the total number of objects.
   */
  total_count?: number;

  /**
   * Always conversation.list
   */
  type?: 'conversation.list';
}

export namespace ConversationList {
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
      /**
       * The number of results to fetch per page.
       */
      per_page?: number;

      /**
       * The cursor to use in the next request to get the next page of results.
       */
      starting_after?: string | null;
    }
  }
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

export interface ConversationListParams {
  /**
   * Query param: How many results per page
   */
  per_page?: number;

  /**
   * Query param: String used to get the next page of conversations.
   */
  starting_after?: string;

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
  query: ConversationSearchParams.SingleFilterSearchRequest | Shared.MultipleFilterSearchRequest;

  /**
   * Body param:
   */
  pagination?: ConversationSearchParams.Pagination | null;

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

export namespace ConversationSearchParams {
  /**
   * Search using Intercoms Search APIs with a single filter.
   */
  export interface SingleFilterSearchRequest {
    /**
     * The accepted field that you want to search on.
     */
    field?: string;

    /**
     * The accepted operators you can use to define how you want to search for the
     * value.
     */
    operator?: '=' | '!=' | 'IN' | 'NIN' | '<' | '>' | '~' | '!~' | '^' | '$';

    /**
     * The value that you want to search on.
     */
    value?: string;
  }

  export interface Pagination {
    /**
     * The number of results to fetch per page.
     */
    per_page?: number;

    /**
     * The cursor to use in the next request to get the next page of results.
     */
    starting_after?: string | null;
  }
}

export namespace Conversations {
  export import ConversationList = ConversationsAPI.ConversationList;
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