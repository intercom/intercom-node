// File generated from our OpenAPI spec by Stainless.

import * as Core from 'intercom/core';
import { APIResource } from 'intercom/resource';
import { isRequestOptions } from 'intercom/core';
import * as SubscriptionTypesAPI from 'intercom/resources/subscription-types';
import * as Shared from 'intercom/resources/shared';

export class SubscriptionTypes extends APIResource {
  /**
   * You can list all subscription types. A list of subscription type objects will be
   * returned.
   */
  list(
    params?: SubscriptionTypeListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.SubscriptionTypeList>;
  list(options?: Core.RequestOptions): Core.APIPromise<Shared.SubscriptionTypeList>;
  list(
    params: SubscriptionTypeListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.SubscriptionTypeList> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.get('/subscription_types', {
      ...options,
      headers: { 'Intercom-Version': intercomVersion?.toString() || '', ...options?.headers },
    });
  }
}

export interface SubscriptionTypeListParams {
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

export namespace SubscriptionTypes {
  export import SubscriptionTypeListParams = SubscriptionTypesAPI.SubscriptionTypeListParams;
}
