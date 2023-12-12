// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'intercom/resource';
import * as DataAPI from 'intercom/resources/download/content/data';

export class Content extends APIResource {
  data: DataAPI.Data = new DataAPI.Data(this._client);
}

export namespace Content {
  export import Data = DataAPI.Data;
  export import DataRetrieveParams = DataAPI.DataRetrieveParams;
}
