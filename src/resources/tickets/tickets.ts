// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as TicketsAPI from './tickets';
import * as Shared from '../shared';
import * as TagsAPI from './tags';

export class Tickets extends APIResource {
  tags: TagsAPI.Tags = new TagsAPI.Tags(this._client);

  /**
   * You can create a new ticket.
   */
  create(params: TicketCreateParams, options?: Core.RequestOptions): Core.APIPromise<Shared.Ticket | null> {
    const { 'Intercom-Version': intercomVersion, ...body } = params;
    return this._client.post('/tickets', {
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
   * You can reply to a ticket with a message from an admin or on behalf of a
   * contact, or with a note for admins.
   */
  reply(id: string, params: TicketReplyParams, options?: Core.RequestOptions): Core.APIPromise<TicketReply> {
    const { 'Intercom-Version': intercomVersion, ...body } = params;
    return this._client.post(`/tickets/${id}/reply`, {
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
   * You can fetch the details of a single ticket.
   */
  retrieveById(
    id: string,
    params?: TicketRetrieveByIDParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Ticket | null>;
  retrieveById(id: string, options?: Core.RequestOptions): Core.APIPromise<Shared.Ticket | null>;
  retrieveById(
    id: string,
    params: TicketRetrieveByIDParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Ticket | null> {
    if (isRequestOptions(params)) {
      return this.retrieveById(id, {}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.get(`/tickets/${id}`, {
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
   * You can search for multiple tickets by the value of their attributes in order to
   * fetch exactly which ones you want.
   *
   * To search for tickets, you send a `POST` request to
   * `https://api.intercom.io/tickets/search`.
   *
   * This will accept a query object in the body which will define your filters.
   * {% admonition type="warning" name="Optimizing search queries" %} Search queries
   * can be complex, so optimizing them can help the performance of your search. Use
   * the `AND` and `OR` operators to combine multiple filters to get the exact
   * results you need and utilize pagination to limit the number of results returned.
   * The default is `20` results per page. See the
   * [pagination section](https://developers.intercom.com/docs/build-an-integration/learn-more/rest-apis/pagination/#example-search-conversations-request)
   * for more details on how to use the `starting_after` param. {% /admonition %}
   *
   * ### Nesting & Limitations
   *
   * You can nest these filters in order to get even more granular insights that
   * pinpoint exactly what you need. Example: (1 OR 2) AND (3 OR 4). There are some
   * limitations to the amount of multiples there can be:
   *
   * - There's a limit of max 2 nested filters
   * - There's a limit of max 15 filters for each AND or OR group
   *
   * ### Accepted Fields
   *
   * Most keys listed as part of the Ticket model are searchable, whether writeable
   * or not. The value you search for has to match the accepted type, otherwise the
   * query will fail (ie. as `created_at` accepts a date, the `value` cannot be a
   * string such as `"foobar"`).
   *
   * | Field                 | Type                                                           |
   * | :-------------------- | :------------------------------------------------------------- |
   * | id                    | String                                                         |
   * | created_at            | Date (UNIX timestamp)                                          |
   * | updated_at            | Date (UNIX timestamp)                                          |
   * | _default_title_       | String                                                         |
   * | _default_description_ | String                                                         |
   * | category              | String                                                         |
   * | ticket_type_id        | String                                                         |
   * | contact_ids           | String                                                         |
   * | teammate_ids          | String                                                         |
   * | admin_assignee_id     | String                                                         |
   * | team_assignee_id      | String                                                         |
   * | open                  | Boolean                                                        |
   * | state                 | String                                                         |
   * | snoozed_until         | Date (UNIX timestamp)                                          |
   * | ticket_attribute.{id} | String or Boolean or Date (UNIX timestamp) or Float or Integer |
   *
   * ### Accepted Operators
   *
   * {% admonition type="info" name="Searching based on `created_at`" %} You may use
   * the `<=` or `>=` operators to search by `created_at`. {% /admonition %}
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
  search(params: TicketSearchParams, options?: Core.RequestOptions): Core.APIPromise<TicketList> {
    const { 'Intercom-Version': intercomVersion, ...body } = params;
    return this._client.post('/tickets/search', {
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
   * You can update a ticket.
   */
  updateById(
    id: string,
    params?: TicketUpdateByIDParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Ticket | null>;
  updateById(id: string, options?: Core.RequestOptions): Core.APIPromise<Shared.Ticket | null>;
  updateById(
    id: string,
    params: TicketUpdateByIDParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Ticket | null> {
    if (isRequestOptions(params)) {
      return this.updateById(id, {}, params);
    }
    const { 'Intercom-Version': intercomVersion, ...body } = params;
    return this._client.put(`/tickets/${id}`, {
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
 * Tickets are how you track requests from your users.
 */
export interface TicketList {
  /**
   * Cursor-based pagination is a technique used in the Intercom API to navigate
   * through large amounts of data. A "cursor" or pointer is used to keep track of
   * the current position in the result set, allowing the API to return the data in
   * small chunks or "pages" as needed.
   */
  pages?: Shared.CursorPages | null;

  /**
   * The list of ticket objects
   */
  tickets?: Array<Shared.Ticket | null>;

  /**
   * A count of the total number of objects.
   */
  total_count?: number;

  /**
   * Always ticket.list
   */
  type?: 'ticket.list';
}

/**
 * A Ticket Part representing a note, comment, or quick_reply on a ticket
 */
export interface TicketReply {
  /**
   * The id representing the part.
   */
  id?: string;

  /**
   * A list of attachments for the part.
   */
  attachments?: Array<Shared.PartAttachment>;

  /**
   * The author that wrote or triggered the part. Can be a bot, admin, team or user.
   */
  author?: TicketReply.Author;

  /**
   * The message body, which may contain HTML.
   */
  body?: string | null;

  /**
   * The time the note was created.
   */
  created_at?: number;

  /**
   * Type of the part
   */
  part_type?: 'note' | 'comment' | 'quick_reply';

  /**
   * Whether or not the ticket part has been redacted.
   */
  redacted?: boolean;

  /**
   * Always ticket_part
   */
  type?: 'ticket_part';

  /**
   * The last time the note was updated.
   */
  updated_at?: number;
}

export namespace TicketReply {
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

export interface TicketCreateParams {
  /**
   * Body param: The list of contacts (users or leads) affected by this ticket.
   * Currently only one is allowed
   */
  contacts: Array<TicketCreateParams.ID | TicketCreateParams.ExternalID | TicketCreateParams.Email>;

  /**
   * Body param: The ID of the type of ticket you want to create
   */
  ticket_type_id: string;

  /**
   * Body param: The ID of the company that the ticket is associated with. The ID
   * that you set upon company creation.
   */
  company_id?: string;

  /**
   * Body param: The time the ticket was created. If not provided, the current time
   * will be used.
   */
  created_at?: number;

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
  ticket_attributes?: Record<string, string | null | number | boolean | Array<unknown>>;

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

export namespace TicketCreateParams {
  export interface ID {
    /**
     * The identifier for the contact as given by Intercom.
     */
    id: string;
  }

  export interface ExternalID {
    /**
     * The external_id you have defined for the contact who is being added as a
     * participant.
     */
    external_id: string;
  }

  export interface Email {
    /**
     * The email you have defined for the contact who is being added as a participant.
     * If a contact with this email does not exist, one will be created.
     */
    email: string;
  }
}

export type TicketReplyParams =
  | TicketReplyParams.ContactReplyTicketIntercomUserIDRequest
  | TicketReplyParams.ContactReplyTicketUserIDRequest
  | TicketReplyParams.ContactReplyTicketEmailRequest
  | TicketReplyParams.AdminReplyTicketRequest;

export namespace TicketReplyParams {
  export interface ContactReplyTicketIntercomUserIDRequest {
    /**
     * Body param: The text body of the comment.
     */
    body: string;

    /**
     * Body param:
     */
    message_type: 'comment';

    /**
     * Body param:
     */
    type: 'user';

    /**
     * Body param: A list of image URLs that will be added as attachments. You can
     * include up to 10 URLs.
     */
    attachment_urls?: Array<string>;

    /**
     * Body param: The time the reply was created. If not provided, the current time
     * will be used.
     */
    created_at?: number;

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

  export interface ContactReplyTicketUserIDRequest {
    /**
     * Body param: The text body of the comment.
     */
    body: string;

    /**
     * Body param:
     */
    message_type: 'comment';

    /**
     * Body param:
     */
    type: 'user';

    /**
     * Body param: A list of image URLs that will be added as attachments. You can
     * include up to 10 URLs.
     */
    attachment_urls?: Array<string>;

    /**
     * Body param: The time the reply was created. If not provided, the current time
     * will be used.
     */
    created_at?: number;

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

  export interface ContactReplyTicketEmailRequest {
    /**
     * Body param: The text body of the comment.
     */
    body: string;

    /**
     * Body param:
     */
    message_type: 'comment';

    /**
     * Body param:
     */
    type: 'user';

    /**
     * Body param: A list of image URLs that will be added as attachments. You can
     * include up to 10 URLs.
     */
    attachment_urls?: Array<string>;

    /**
     * Body param: The time the reply was created. If not provided, the current time
     * will be used.
     */
    created_at?: number;

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

  export interface AdminReplyTicketRequest {
    /**
     * Body param: The id of the admin who is authoring the comment.
     */
    admin_id: string;

    /**
     * Body param:
     */
    message_type: 'comment' | 'note' | 'quick_reply';

    /**
     * Body param:
     */
    type: 'admin';

    /**
     * Body param: A list of image URLs that will be added as attachments. You can
     * include up to 10 URLs.
     */
    attachment_urls?: Array<string>;

    /**
     * Body param: The text body of the reply. Notes accept some HTML formatting. Must
     * be present for comment and note message types.
     */
    body?: string;

    /**
     * Body param: The time the reply was created. If not provided, the current time
     * will be used.
     */
    created_at?: number;

    /**
     * Body param: The quick reply options to display. Must be present for quick_reply
     * message types.
     */
    reply_options?: Array<TicketReplyParams.AdminReplyTicketRequest.ReplyOption>;

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

  export namespace AdminReplyTicketRequest {
    export interface ReplyOption {
      /**
       * The text to display in this quick reply option.
       */
      text: string;

      /**
       * A unique identifier for this quick reply option. This value will be available
       * within the metadata of the comment ticket part that is created when a user
       * clicks on this reply option.
       */
      uuid: string;
    }
  }
}

export interface TicketRetrieveByIDParams {
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

export interface TicketSearchParams {
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

export interface TicketUpdateByIDParams {
  /**
   * Body param:
   */
  assignment?: TicketUpdateByIDParams.Assignment;

  /**
   * Body param: Specify whether the ticket is visible to users.
   */
  is_shared?: boolean;

  /**
   * Body param: Specify if a ticket is open. Set to false to close a ticket. Closing
   * a ticket will also unsnooze it.
   */
  open?: boolean;

  /**
   * Body param: The time you want the ticket to reopen.
   */
  snoozed_until?: number;

  /**
   * Body param: The state of the ticket.
   */
  state?: 'in_progress' | 'waiting_on_customer' | 'resolved';

  /**
   * Body param: The attributes set on the ticket.
   */
  ticket_attributes?: unknown;

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

export namespace TicketUpdateByIDParams {
  export interface Assignment {
    /**
     * The ID of the admin performing the action.
     */
    admin_id?: string;

    /**
     * The ID of the admin or team to which the ticket is assigned. Set this 0 to
     * unassign it.
     */
    assignee_id?: string;
  }
}

export namespace Tickets {
  export import TicketList = TicketsAPI.TicketList;
  export import TicketReply = TicketsAPI.TicketReply;
  export import TicketCreateParams = TicketsAPI.TicketCreateParams;
  export import TicketReplyParams = TicketsAPI.TicketReplyParams;
  export import TicketRetrieveByIDParams = TicketsAPI.TicketRetrieveByIDParams;
  export import TicketSearchParams = TicketsAPI.TicketSearchParams;
  export import TicketUpdateByIDParams = TicketsAPI.TicketUpdateByIDParams;
  export import Tags = TagsAPI.Tags;
  export import TagCreateParams = TagsAPI.TagCreateParams;
  export import TagRemoveParams = TagsAPI.TagRemoveParams;
}
