// File generated from our OpenAPI spec by Stainless.

import * as Core from 'intercom/core';
import { APIResource } from 'intercom/resource';
import { isRequestOptions } from 'intercom/core';
import * as CustomersAPI from 'intercom/resources/conversations/customers';
import * as Shared from 'intercom/resources/shared';

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
      headers: { 'Intercom-Version': intercomVersion?.toString() || '', ...options?.headers },
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
  customer?:
    | CustomerCreateParams.UnionMember0
    | CustomerCreateParams.UnionMember1
    | CustomerCreateParams.UnionMember2;

  /**
   * Header param: Intercom API version.</br>By default, it's equal to the version
   * set in the app package.
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
  export interface UnionMember0 {
    /**
     * The identifier for the contact as given by Intercom.
     */
    intercom_user_id: string;

    customer?: UnionMember0.IntercomUserID | UnionMember0.UserID | UnionMember0.Email | null;
  }

  export namespace UnionMember0 {
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

  export interface UnionMember1 {
    /**
     * The external_id you have defined for the contact who is being added as a
     * participant.
     */
    user_id: string;

    customer?: UnionMember1.IntercomUserID | UnionMember1.UserID | UnionMember1.Email | null;
  }

  export namespace UnionMember1 {
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

  export interface UnionMember2 {
    /**
     * The email you have defined for the contact who is being added as a participant.
     */
    email: string;

    customer?: UnionMember2.IntercomUserID | UnionMember2.UserID | UnionMember2.Email | null;
  }

  export namespace UnionMember2 {
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

export namespace Customers {
  export import CustomerCreateParams = CustomersAPI.CustomerCreateParams;
}
