// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as DataAPI from './data';

export class Content extends APIResource {
  data: DataAPI.Data = new DataAPI.Data(this._client);
}

export namespace Content {
  export import Data = DataAPI.Data;
  export import DataRetrieveParams = DataAPI.DataRetrieveParams;
}
