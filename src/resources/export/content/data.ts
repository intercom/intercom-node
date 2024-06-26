// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as DataAPI from './data';
import * as DataExportsAPI from '../../data-exports';

export class Data extends APIResource {
  /**
   * You can view the status of your job by sending a `GET` request to the URL
   * `https://api.intercom.io/export/content/data/{job_identifier}` - the
   * `{job_identifier}` is the value returned in the response when you first created
   * the export job. More on it can be seen in the Export Job Model.
   *
   * > 🚧 Jobs expire after two days All jobs that have completed processing (and are
   * > thus available to download from the provided URL) will have an expiry limit of
   * > two days from when the export ob completed. After this, the data will no
   * > longer be available.
   */
  retrieve(
    jobIdentifier: string,
    params?: DataRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DataExportsAPI.DataExport>;
  retrieve(jobIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<DataExportsAPI.DataExport>;
  retrieve(
    jobIdentifier: string,
    params: DataRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DataExportsAPI.DataExport> {
    if (isRequestOptions(params)) {
      return this.retrieve(jobIdentifier, {}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.get(`/export/content/data/${jobIdentifier}`, {
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

export interface DataRetrieveParams {
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

export namespace Data {
  export import DataRetrieveParams = DataAPI.DataRetrieveParams;
}
