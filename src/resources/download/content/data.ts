// File generated from our OpenAPI spec by Stainless.

import * as Core from 'intercom/core';
import { APIResource } from 'intercom/resource';
import { isRequestOptions } from 'intercom/core';
import * as DataAPI from 'intercom/resources/download/content/data';

export class Data extends APIResource {
  /**
   * When a job has a status of complete, and thus a filled download_url, you can
   * download your data by hitting that provided URL, formatted like so:
   * https://api.intercom.io/download/content/data/xyz1234.
   *
   * Your exported message data will be streamed continuously back down to you in a
   * gzipped CSV format.
   *
   * > 📘 Octet header required
   * >
   * > You will have to specify the header Accept: `application/octet-stream` when
   * > hitting this endpoint.
   */
  retrieve(
    jobIdentifier: string,
    params?: DataRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void>;
  retrieve(jobIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  retrieve(
    jobIdentifier: string,
    params: DataRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(params)) {
      return this.retrieve(jobIdentifier, {}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.get(`/download/content/data/${jobIdentifier}`, {
      ...options,
      headers: { Accept: '', 'Intercom-Version': intercomVersion?.toString() || '', ...options?.headers },
    });
  }
}

export interface DataRetrieveParams {
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

export namespace Data {
  export import DataRetrieveParams = DataAPI.DataRetrieveParams;
}
