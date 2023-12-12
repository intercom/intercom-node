// File generated from our OpenAPI spec by Stainless.

import * as Core from 'intercom/core';
import { APIResource } from 'intercom/resource';
import { isRequestOptions } from 'intercom/core';
import * as ExportAPI from 'intercom/resources/export/export';
import * as DataExportsAPI from 'intercom/resources/data-exports';
import * as ContentAPI from 'intercom/resources/export/content/content';

export class Export extends APIResource {
  content: ContentAPI.Content = new ContentAPI.Content(this._client);

  /**
   * You can cancel your job
   */
  cancel(
    jobIdentifier: string,
    params?: ExportCancelParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DataExportsAPI.DataExport>;
  cancel(jobIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<DataExportsAPI.DataExport>;
  cancel(
    jobIdentifier: string,
    params: ExportCancelParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DataExportsAPI.DataExport> {
    if (isRequestOptions(params)) {
      return this.cancel(jobIdentifier, {}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.post(`/export/cancel/${jobIdentifier}`, {
      ...options,
      headers: { 'Intercom-Version': intercomVersion?.toString() || '', ...options?.headers },
    });
  }
}

export interface ExportCancelParams {
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

export namespace Export {
  export import ExportCancelParams = ExportAPI.ExportCancelParams;
  export import Content = ContentAPI.Content;
}
