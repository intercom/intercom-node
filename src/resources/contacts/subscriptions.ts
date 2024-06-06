// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as SubscriptionsAPI from './subscriptions';
import * as Shared from '../shared';

export class Subscriptions extends APIResource {
  /**
   * You can add a specific subscription to a contact. In Intercom, we have two
   * different subscription types based on user consent - opt-out and opt-in:
   *
   * 1.Attaching a contact to an opt-out subscription type will opt that user out
   * from receiving messages related to that subscription type.
   *
   * 2.Attaching a contact to an opt-in subscription type will opt that user in to
   * receiving messages related to that subscription type.
   *
   * This will return a subscription type model for the subscription type that was
   * added to the contact.
   */
  create(
    contactId: string,
    params: SubscriptionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubscriptionType> {
    const { 'Intercom-Version': intercomVersion, ...body } = params;
    return this._client.post(`/contacts/${contactId}/subscriptions`, {
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
   * You can fetch a list of subscription types that are attached to a contact. These
   * can be subscriptions that a user has 'opted-in' to or has 'opted-out' from,
   * depending on the subscription type. This will return a list of Subscription Type
   * objects that the contact is associated with.
   *
   * The data property will show a combined list of:
   *
   * 1.Opt-out subscription types that the user has opted-out from. 2.Opt-in
   * subscription types that the user has opted-in to receiving.
   */
  list(
    contactId: string,
    params?: SubscriptionListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.SubscriptionTypeList>;
  list(contactId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.SubscriptionTypeList>;
  list(
    contactId: string,
    params: SubscriptionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.SubscriptionTypeList> {
    if (isRequestOptions(params)) {
      return this.list(contactId, {}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.get(`/contacts/${contactId}/subscriptions`, {
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
   * You can remove a specific subscription from a contact. This will return a
   * subscription type model for the subscription type that was removed from the
   * contact.
   */
  delete(
    contactId: string,
    id: string,
    params?: SubscriptionDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubscriptionType>;
  delete(contactId: string, id: string, options?: Core.RequestOptions): Core.APIPromise<SubscriptionType>;
  delete(
    contactId: string,
    id: string,
    params: SubscriptionDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubscriptionType> {
    if (isRequestOptions(params)) {
      return this.delete(contactId, id, {}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.delete(`/contacts/${contactId}/subscriptions/${id}`, {
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
 * A subscription type lets customers easily opt out of non-essential
 * communications without missing what's important to them.
 */
export interface SubscriptionType {
  /**
   * The unique identifier representing the subscription type.
   */
  id?: string;

  /**
   * Describes the type of consent.
   */
  consent_type?: 'opt_out' | 'opt_in';

  /**
   * The message types that this subscription supports - can contain `email` or
   * `sms_message`.
   */
  content_types?: Array<'email' | 'sms_message'>;

  /**
   * A translation object contains the localised details of a subscription type.
   */
  default_translation?: SubscriptionType.DefaultTranslation;

  /**
   * The state of the subscription type.
   */
  state?: 'live' | 'draft' | 'archived';

  /**
   * An array of translations objects with the localised version of the subscription
   * type in each available locale within your translation settings.
   */
  translations?: Array<SubscriptionType.Translation>;

  /**
   * The type of the object - subscription
   */
  type?: string;
}

export namespace SubscriptionType {
  /**
   * A translation object contains the localised details of a subscription type.
   */
  export interface DefaultTranslation {
    /**
     * The localised description of the subscription type.
     */
    description?: string;

    /**
     * The two character identifier for the language of the translation object.
     */
    locale?: string;

    /**
     * The localised name of the subscription type.
     */
    name?: string;
  }

  /**
   * A translation object contains the localised details of a subscription type.
   */
  export interface Translation {
    /**
     * The localised description of the subscription type.
     */
    description?: string;

    /**
     * The two character identifier for the language of the translation object.
     */
    locale?: string;

    /**
     * The localised name of the subscription type.
     */
    name?: string;
  }
}

export interface SubscriptionCreateParams {
  /**
   * Body param: The unique identifier for the subscription which is given by
   * Intercom
   */
  id: string;

  /**
   * Body param: The consent_type of a subscription, opt_out or opt_in.
   */
  consent_type: string;

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

export interface SubscriptionListParams {
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

export interface SubscriptionDeleteParams {
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

export namespace Subscriptions {
  export import SubscriptionType = SubscriptionsAPI.SubscriptionType;
  export import SubscriptionCreateParams = SubscriptionsAPI.SubscriptionCreateParams;
  export import SubscriptionListParams = SubscriptionsAPI.SubscriptionListParams;
  export import SubscriptionDeleteParams = SubscriptionsAPI.SubscriptionDeleteParams;
}
