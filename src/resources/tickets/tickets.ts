// File generated from our OpenAPI spec by Stainless.

import * as Core from 'intercom/core';
import { APIResource } from 'intercom/resource';
import { isRequestOptions } from 'intercom/core';
import * as TicketsAPI from 'intercom/resources/tickets/tickets';
import * as Shared from 'intercom/resources/shared';
import * as TagsAPI from 'intercom/resources/tickets/tags';

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
      headers: { 'Intercom-Version': intercomVersion?.toString() || '', ...options?.headers },
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
      headers: { 'Intercom-Version': intercomVersion?.toString() || '', ...options?.headers },
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
      headers: { 'Intercom-Version': intercomVersion?.toString() || '', ...options?.headers },
    });
  }

  /**
   * You can search for multiple tickets by the value of their attributes in order to
   * fetch exactly which ones you want.
   *
   * To search for tickets, you send a POST request to
   * https://api.intercom.io/tickets/search. This will accept a query object in the
   * body which will define your filters.
   *
   * > 🚧 Nesting & Limitations
   * >
   * > You can nest these filters in order to get even more granular insights that
   * > pinpoint exactly what you need. Example: (1 OR 2) AND (3 OR 4). There are some
   * > limitations to the amount of multiples there can be:
   * >
   * > - There's a limit of max 2 nested filters
   * > - There's a limit of max 15 filters for each AND or OR group
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
   * | title                 | String                                                         |
   * | description           | String                                                         |
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
   */
  search(params: TicketSearchParams, options?: Core.RequestOptions): Core.APIPromise<TicketList> {
    const { 'Intercom-Version': intercomVersion, ...body } = params;
    return this._client.post('/tickets/search', {
      body,
      ...options,
      headers: { 'Intercom-Version': intercomVersion?.toString() || '', ...options?.headers },
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
      headers: { 'Intercom-Version': intercomVersion?.toString() || '', ...options?.headers },
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
  pages?: TicketList.Pages | null;

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

export namespace TicketList {
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
  attachments?: Array<TicketReply.Attachment>;

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
  | TicketReplyParams.ContactReplyTicketRequest
  | TicketReplyParams.AdminReplyTicketRequest;

export namespace TicketReplyParams {
  export interface ContactReplyTicketRequest {
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
     * include up to 5 URLs.
     */
    attachment_urls?: Array<string>;

    /**
     * Body param: The email you have defined for the user.
     */
    email?: string;

    /**
     * Body param: The identifier for the contact as given by Intercom.
     */
    intercom_user_id?: string;

    /**
     * Body param: The external_id you have defined for the contact.
     */
    user_id?: string;

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
     * include up to 5 URLs.
     */
    attachment_urls?: Array<string>;

    /**
     * Body param: The text body of the reply.\nNotes accept some HTML formatting. Must
     * be present for comment and note message types.
     */
    body?: string;

    /**
     * Body param: The quick reply options to display. Must be present for quick_reply
     * message types.
     */
    reply_options?: Array<TicketReplyParams.AdminReplyTicketRequest.ReplyOption>;

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

export interface TicketSearchParams {
  /**
   * Body param:
   */
  query: TicketSearchParams.SingleFilterSearchRequest | TicketSearchParams.MultipleFilterSearchRequest;

  /**
   * Body param:
   */
  pagination?: TicketSearchParams.Pagination | null;

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

export namespace TicketSearchParams {
  export interface SingleFilterSearchRequest {
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

  export interface MultipleFilterSearchRequest {
    /**
     * An operator to allow boolean inspection between multiple fields.
     */
    operator?: 'AND' | 'OR';

    /**
     * Add mutiple filters.
     */
    value?: Array<MultipleFilterSearchRequest.UnionMember0> | Array<MultipleFilterSearchRequest.UnionMember1>;
  }

  export namespace MultipleFilterSearchRequest {
    export interface UnionMember0 {
      /**
       * An operator to allow boolean inspection between multiple fields.
       */
      operator?: 'AND' | 'OR';

      /**
       * Add mutiple filters.
       */
      value?: Array<unknown> | Array<UnionMember0.UnionMember1>;
    }

    export namespace UnionMember0 {
      export interface UnionMember1 {
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
    }

    export interface UnionMember1 {
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
  }

  export interface Pagination {
    page?: number;

    starting_after?: string;
  }
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
