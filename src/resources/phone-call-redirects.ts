// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as PhoneCallRedirectsAPI from './phone-call-redirects';

export class PhoneCallRedirects extends APIResource {
  /**
   * You can use the API to deflect phone calls to the Intercom Messenger. Calling
   * this endpoint will send an SMS with a link to the Messenger to the phone number
   * specified.
   *
   * If custom attributes are specified, they will be added to the user or lead's
   * custom data attributes.
   */
  create(
    params: PhoneCallRedirectCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PhoneSwitch | null> {
    const { 'Intercom-Version': intercomVersion, ...body } = params;
    return this._client.post('/phone_call_redirects', {
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
 * Phone Switch Response
 */
export interface PhoneSwitch {
  /**
   * Phone number in E.164 format, that has received the SMS to continue the
   * conversation in the Messenger.
   */
  phone?: string;

  type?: 'phone_call_redirect';
}

export interface PhoneCallRedirectCreateParams {
  /**
   * Body param: Phone number in E.164 format, that will receive the SMS to continue
   * the conversation in the Messenger.
   */
  phone: string;

  /**
   * Body param: An object containing the different custom attributes associated to
   * the conversation as key-value pairs. For relationship attributes the value will
   * be a list of custom object instance models.
   */
  custom_attributes?: Record<string, string | PhoneCallRedirectCreateParams.CustomObjectInstance | null>;

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

export namespace PhoneCallRedirectCreateParams {
  /**
   * A Custom Object Instance represents an instance of a custom object type. This
   * allows you to create and set custom attributes to store data about your
   * customers that is not already captured by Intercom. The parent object includes
   * recommended default attributes and you can add your own custom attributes.
   */
  export interface CustomObjectInstance {
    /**
     * The Intercom defined id representing the custom object instance.
     */
    id?: string;

    /**
     * The custom attributes you have set on the custom object instance.
     */
    custom_attributes?: Record<string, string>;

    /**
     * The id you have defined for the custom object instance.
     */
    external_id?: string;

    /**
     * The identifier of the custom object type that defines the structure of the
     * custom object instance.
     */
    type?: string;
  }
}

export namespace PhoneCallRedirects {
  export import PhoneSwitch = PhoneCallRedirectsAPI.PhoneSwitch;
  export import PhoneCallRedirectCreateParams = PhoneCallRedirectsAPI.PhoneCallRedirectCreateParams;
}
