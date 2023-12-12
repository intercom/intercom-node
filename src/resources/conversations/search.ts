// File generated from our OpenAPI spec by Stainless.

import * as Core from 'intercom/core';
import { APIResource } from 'intercom/resource';
import * as SearchAPI from 'intercom/resources/conversations/search';
import * as Shared from 'intercom/resources/shared';

export class Search extends APIResource {
  /**
   * You can search for multiple conversations by the value of their attributes in
   * order to fetch exactly which ones you want.
   *
   * To search for conversations, you need to send a POST request to
   * https://api.intercom.io/conversations/search. This will accept a query object in
   * the body which will define your filters in order to search for conversations.
   *
   * > 🚧 Nesting & Limitations
   * >
   * > You can nest these filters in order to get even more granular insights that
   * > pinpoint exactly what you need. Example: (1 OR 2) AND (3 OR 4). There are some
   * > limitations to the amount of multiple's there can be:
   * >
   * > - There's a limit of max 2 nested filters
   * > - There's a limit of max 15 filters for each AND or OR group
   *
   * ### Accepted Fields
   *
   * Most keys listed as part of the The conversation model is searchable, whether
   * writeable or not. The value you search for has to match the accepted type,
   * otherwise the query will fail (ie. as `created_at` accepts a date, the `value`
   * cannot be a string such as `"foorbar"`).
   *
   * | Field                                     | Type                                                                                     |
   * | :---------------------------------------- | :--------------------------------------------------------------------------------------- |
   * | id                                        | String                                                                                   |
   * | created_at                                | Date (UNIX timestamp)                                                                    |
   * | updated_at                                | Date (UNIX timestamp)                                                                    |
   * | source.type                               | String                                                                                   |
   * | source.id                                 | String                                                                                   |
   * | source.delivered_as                       | String                                                                                   |
   * | source.subject                            | String                                                                                   |
   * | source.body                               | String                                                                                   |
   * | source.author.id                          | String                                                                                   |
   * | source.author.type                        | String                                                                                   |
   * | source.author.name                        | String                                                                                   |
   * | source.author.email                       | String                                                                                   |
   * | source.url                                | String                                                                                   |
   * | contact_ids                               | String                                                                                   |
   * | teammate_ids                              | String                                                                                   |
   * | admin_assignee_id                         | String                                                                                   |
   * | team_assignee_id                          | String                                                                                   |
   * | channel_initiated                         | String<br>Accepted fields are `conversation`, `push`, `facebook`, `twitter` and `email`. |
   * | open                                      | Boolean                                                                                  |
   * | read                                      | Boolean                                                                                  |
   * | state                                     | String                                                                                   |
   * | waiting_since                             | Date (UNIX timestamp)                                                                    |
   * | snoozed_until                             | Date (UNIX timestamp)                                                                    |
   * | tag_ids                                   | String                                                                                   |
   * | priority                                  | String                                                                                   |
   * | statistics.time_to_assignment             | Integer                                                                                  |
   * | statistics.time_to_admin_reply            | Integer                                                                                  |
   * | statistics.time_to_first_close            | Integer                                                                                  |
   * | statistics.time_to_last_close             | Integer                                                                                  |
   * | statistics.median_time_to_reply           | Integer                                                                                  |
   * | statistics.first_contact_reply_at         | Date (UNIX timestamp)                                                                    |
   * | statistics.first_assignment_at            | Date (UNIX timestamp)                                                                    |
   * | statistics.first_admin_reply_at           | Date (UNIX timestamp)                                                                    |
   * | statistics.first_close_at                 | Date (UNIX timestamp)                                                                    |
   * | statistics.last_assignment_at             | Date (UNIX timestamp)                                                                    |
   * | statistics.last_assignment_admin_reply_at | Date (UNIX timestamp)                                                                    |
   * | statistics.last_contact_reply_at          | Date (UNIX timestamp)                                                                    |
   * | statistics.last_admin_reply_at            | Date (UNIX timestamp)                                                                    |
   * | statistics.last_close_at                  | Date (UNIX timestamp)                                                                    |
   * | statistics.last_closed_by_id              | String                                                                                   |
   * | statistics.count_reopens                  | Integer                                                                                  |
   * | statistics.count_assignments              | Integer                                                                                  |
   * | statistics.count_conversation_parts       | Integer                                                                                  |
   * | conversation_rating.requested_at          | Date (UNIX timestamp)                                                                    |
   * | conversation_rating.replied_at            | Date (UNIX timestamp)                                                                    |
   * | conversation_rating.score                 | Integer                                                                                  |
   * | conversation_rating.remark                | String                                                                                   |
   * | conversation_rating.contact_id            | String                                                                                   |
   * | conversation_rating.admin_d               | String                                                                                   |
   */
  create(params: SearchCreateParams, options?: Core.RequestOptions): Core.APIPromise<ConversationList> {
    const { 'Intercom-Version': intercomVersion, ...body } = params;
    return this._client.post('/conversations/search', {
      body,
      ...options,
      headers: { 'Intercom-Version': intercomVersion?.toString() || '', ...options?.headers },
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
      page?: number;

      starting_after?: string;
    }
  }
}

export interface SearchCreateParams {
  /**
   * Body param:
   */
  query: SearchCreateParams.Query;

  /**
   * Body param:
   */
  pagination?: SearchCreateParams.Pagination | null;

  /**
   * Header param: Intercom API version.</br>By default, it's equal to the version
   * set in the app package.
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

export namespace SearchCreateParams {
  export interface Query {
    /**
     * The Intercom defined id representing the company.
     */
    field?: string;

    /**
     * The Intercom defined id representing the company.
     */
    operator?: '=' | '!=' | 'IN' | 'NIN' | '<' | '>' | '~' | '!~' | '^' | '$';

    /**
     * The Intercom defined id representing the company.
     */
    value?: string;
  }

  export interface Pagination {
    page?: number;

    starting_after?: string;
  }
}

export namespace Search {
  export import ConversationList = SearchAPI.ConversationList;
  export import SearchCreateParams = SearchAPI.SearchCreateParams;
}
