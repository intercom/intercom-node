// File generated from our OpenAPI spec by Stainless.

import * as Core from 'intercom/core';
import { APIResource } from 'intercom/resource';
import { isRequestOptions } from 'intercom/core';
import * as NotesAPI from 'intercom/resources/notes';
import * as Shared from 'intercom/resources/shared';

export class Notes extends APIResource {
  /**
   * You can fetch the details of a single note.
   */
  retrieve(
    id: number,
    params?: NoteRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Note>;
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<Shared.Note>;
  retrieve(
    id: number,
    params: NoteRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Note> {
    if (isRequestOptions(params)) {
      return this.retrieve(id, {}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.get(`/notes/${id}`, {
      ...options,
      headers: { 'Intercom-Version': intercomVersion?.toString() || '', ...options?.headers },
    });
  }
}

export interface NoteRetrieveParams {
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

export namespace Notes {
  export import NoteRetrieveParams = NotesAPI.NoteRetrieveParams;
}
