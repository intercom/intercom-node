// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as DataExportsAPI from './data-exports';

export class DataExports extends APIResource {
  /**
   * To create your export job, you need to send a `POST` request to the export
   * endpoint `https://api.intercom.io/export/content/data`.
   *
   * The only parameters you need to provide are the range of dates that you want
   * exported.
   *
   * > 🚧 Limit of one active job
   * >
   * > You can only have one active job per workspace. You will receive a HTTP status
   * > code of 429 with the message Exceeded rate limit of 1 pending message data
   * > export jobs if you attempt to create a second concurrent job.
   *
   * > ❗️ Updated_at not included
   * >
   * > It should be noted that the timeframe only includes messages sent during the
   * > time period and not messages that were only updated during this period. For
   * > example, if a message was updated yesterday but sent two days ago, you would
   * > need to set the created_at_after date before the message was sent to include
   * > that in your retrieval job.
   *
   * > 📘 Date ranges are inclusive
   * >
   * > Requesting data for 2018-06-01 until 2018-06-30 will get all data for those
   * > days including those specified - e.g. 2018-06-01 00:00:00 until 2018-06-30
   * > 23:59:99.
   */
  contentData(
    params: DataExportContentDataParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DataExport> {
    const { 'Intercom-Version': intercomVersion, ...body } = params;
    return this._client.post('/export/content/data', {
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
 * The data export api is used to view all message sent & viewed in a given
 * timeframe.
 */
export interface DataExport {
  /**
   * The time after which you will not be able to access the data.
   */
  download_expires_at?: string;

  /**
   * The location where you can download your data.
   */
  download_url?: string;

  /**
   * The identifier for your job.
   */
  job_identfier?: string;

  /**
   * The current state of your job.
   */
  status?: 'pending' | 'in_progress' | 'failed' | 'completed' | 'no_data' | 'canceled';
}

export interface DataExportContentDataParams {
  /**
   * Body param: The start date that you request data for. It must be formatted as a
   * unix timestamp.
   */
  created_at_after: number;

  /**
   * Body param: The end date that you request data for. It must be formatted as a
   * unix timestamp.
   */
  created_at_before: number;

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

export namespace DataExports {
  export import DataExport = DataExportsAPI.DataExport;
  export import DataExportContentDataParams = DataExportsAPI.DataExportContentDataParams;
}
