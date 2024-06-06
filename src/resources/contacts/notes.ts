// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as NotesAPI from './notes';
import * as Shared from '../shared';

export class Notes extends APIResource {
  /**
   * You can add a note to a single contact.
   */
  create(id: number, params: NoteCreateParams, options?: Core.RequestOptions): Core.APIPromise<Shared.Note> {
    const { 'Intercom-Version': intercomVersion, ...body } = params;
    return this._client.post(`/contacts/${id}/notes`, {
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
   * You can fetch a list of notes that are associated to a contact.
   */
  list(id: number, params?: NoteListParams, options?: Core.RequestOptions): Core.APIPromise<NoteList>;
  list(id: number, options?: Core.RequestOptions): Core.APIPromise<NoteList>;
  list(
    id: number,
    params: NoteListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<NoteList> {
    if (isRequestOptions(params)) {
      return this.list(id, {}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.get(`/contacts/${id}/notes`, {
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
 * A paginated list of notes associated with a contact.
 */
export interface NoteList {
  /**
   * An array of notes.
   */
  data?: Array<Shared.Note>;

  /**
   * Cursor-based pagination is a technique used in the Intercom API to navigate
   * through large amounts of data. A "cursor" or pointer is used to keep track of
   * the current position in the result set, allowing the API to return the data in
   * small chunks or "pages" as needed.
   */
  pages?: NoteList.Pages | null;

  /**
   * A count of the total number of notes.
   */
  total_count?: number;

  /**
   * String representing the object's type. Always has the value `list`.
   */
  type?: string;
}

export namespace NoteList {
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

export interface NoteCreateParams {
  /**
   * Body param: The text of the note.
   */
  body: string;

  /**
   * Body param: The unique identifier of a given admin.
   */
  admin_id?: string;

  /**
   * Body param: The unique identifier of a given contact.
   */
  contact_id?: string;

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

export interface NoteListParams {
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

export namespace Notes {
  export import NoteList = NotesAPI.NoteList;
  export import NoteCreateParams = NotesAPI.NoteCreateParams;
  export import NoteListParams = NotesAPI.NoteListParams;
}
