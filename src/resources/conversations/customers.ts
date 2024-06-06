// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as CustomersAPI from './customers';
import * as Shared from '../shared';

export class Customers extends APIResource {
  /**
   * You can add participants who are contacts to a conversation, on behalf of either
   * another contact or an admin.
   *
   * > 🚧 Note about contacts without an email
   * >
   * > If you add a contact via the email parameter and there is no user/lead found
   * > on that workspace with he given email, then we will create a new contact with
   * > `role` set to `lead`.
   */
  create(
    id: string,
    params?: CustomerCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Conversation>;
  create(id: string, options?: Core.RequestOptions): Core.APIPromise<Shared.Conversation>;
  create(
    id: string,
    params: CustomerCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Conversation> {
    if (isRequestOptions(params)) {
      return this.create(id, {}, params);
    }
    const { 'Intercom-Version': intercomVersion, ...body } = params;
    return this._client.post(`/conversations/${id}/customers`, {
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
   * You can add participants who are contacts to a conversation, on behalf of either
   * another contact or an admin.
   *
   * > 🚧 Note about contacts without an email
   * >
   * > If you add a contact via the email parameter and there is no user/lead found
   * > on that workspace with he given email, then we will create a new contact with
   * > `role` set to `lead`.
   */
  delete(
    conversationId: string,
    contactId: string,
    params: CustomerDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Conversation> {
    const { 'Intercom-Version': intercomVersion, ...body } = params;
    return this._client.delete(`/conversations/${conversationId}/customers/${contactId}`, {
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

export interface CustomerCreateParams {
  /**
   * Body param: The `id` of the admin who is adding the new participant.
   */
  admin_id?: string;

  /**
   * Body param:
   */
  customer?: CustomerCreateParams.IntercomUserID | CustomerCreateParams.UserID | CustomerCreateParams.Email;

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
    | 'Unstable';
}

export namespace CustomerCreateParams {
  export interface IntercomUserID {
    /**
     * The identifier for the contact as given by Intercom.
     */
    intercom_user_id: string;

    customer?: IntercomUserID.IntercomUserID | IntercomUserID.UserID | IntercomUserID.Email | null;
  }

  export namespace IntercomUserID {
    export interface IntercomUserID {
      /**
       * The identifier for the contact as given by Intercom.
       */
      intercom_user_id: string;
    }

    export interface UserID {
      /**
       * The external_id you have defined for the contact who is being added as a
       * participant.
       */
      user_id: string;
    }

    export interface Email {
      /**
       * The email you have defined for the contact who is being added as a participant.
       */
      email: string;
    }
  }

  export interface UserID {
    /**
     * The external_id you have defined for the contact who is being added as a
     * participant.
     */
    user_id: string;

    customer?: UserID.IntercomUserID | UserID.UserID | UserID.Email | null;
  }

  export namespace UserID {
    export interface IntercomUserID {
      /**
       * The identifier for the contact as given by Intercom.
       */
      intercom_user_id: string;
    }

    export interface UserID {
      /**
       * The external_id you have defined for the contact who is being added as a
       * participant.
       */
      user_id: string;
    }

    export interface Email {
      /**
       * The email you have defined for the contact who is being added as a participant.
       */
      email: string;
    }
  }

  export interface Email {
    /**
     * The email you have defined for the contact who is being added as a participant.
     */
    email: string;

    customer?: Email.IntercomUserID | Email.UserID | Email.Email | null;
  }

  export namespace Email {
    export interface IntercomUserID {
      /**
       * The identifier for the contact as given by Intercom.
       */
      intercom_user_id: string;
    }

    export interface UserID {
      /**
       * The external_id you have defined for the contact who is being added as a
       * participant.
       */
      user_id: string;
    }

    export interface Email {
      /**
       * The email you have defined for the contact who is being added as a participant.
       */
      email: string;
    }
  }
}

export interface CustomerDeleteParams {
  /**
   * Body param: The `id` of the admin who is performing the action.
   */
  admin_id: string;

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
    | 'Unstable';
}

export namespace Customers {
  export import CustomerCreateParams = CustomersAPI.CustomerCreateParams;
  export import CustomerDeleteParams = CustomersAPI.CustomerDeleteParams;
}
