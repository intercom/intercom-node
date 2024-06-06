// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as VisitorsAPI from './visitors';
import * as Shared from './shared';

export class Visitors extends APIResource {
  /**
   * You can fetch the details of a single visitor.
   */
  retrieve(params: VisitorRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<Visitor | null> {
    const { 'Intercom-Version': intercomVersion, ...query } = params;
    return this._client.get('/visitors', {
      query,
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
   * Sending a PUT request to `/visitors` will result in an update of an existing
   * Visitor.
   *
   * **Option 1.** You can update a visitor by passing in the `user_id` of the
   * visitor in the Request body.
   *
   * **Option 2.** You can update a visitor by passing in the `id` of the visitor in
   * the Request body.
   */
  update(params: VisitorUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Visitor | null> {
    const { body, 'Intercom-Version': intercomVersion } = params;
    return this._client.put('/visitors', {
      body: body,
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
   * You can merge a Visitor to a Contact of role type `lead` or `user`.
   *
   * > 📘 What happens upon a visitor being converted?
   * >
   * > If the User exists, then the Visitor will be merged into it, the Visitor
   * > deleted and the User returned. If the User does not exist, the Visitor will be
   * > converted to a User, with the User identifiers replacing it's Visitor
   * > identifiers.
   */
  convert(params: VisitorConvertParams, options?: Core.RequestOptions): Core.APIPromise<Shared.Contact> {
    const { 'Intercom-Version': intercomVersion, ...body } = params;
    return this._client.post('/visitors/convert', {
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
 * Visitors are useful for representing anonymous people that have not yet been
 * identified. They usually represent website visitors. Visitors are not visible in
 * Intercom platform. The Visitors resource provides methods to fetch, update,
 * convert and delete.
 */
export interface Visitor {
  /**
   * The Intercom defined id representing the Visitor.
   */
  id?: string;

  /**
   * Identifies if this visitor is anonymous.
   */
  anonymous?: boolean;

  /**
   * The id of the app the visitor is associated with.
   */
  app_id?: string;

  avatar?: Visitor.Avatar;

  companies?: Visitor.Companies;

  /**
   * The time the Visitor was added to Intercom.
   */
  created_at?: number;

  /**
   * The custom attributes you have set on the Visitor.
   */
  custom_attributes?: Record<string, string>;

  /**
   * Identifies if this visitor has do not track enabled.
   */
  do_not_track?: boolean | null;

  /**
   * The email of the visitor.
   */
  email?: string;

  /**
   * Identifies if this visitor has had a hard bounce.
   */
  has_hard_bounced?: boolean;

  /**
   * The time the Lead last recorded making a request.
   */
  las_request_at?: number;

  location_data?: Visitor.LocationData;

  /**
   * Identifies if this visitor has marked an email as spam.
   */
  marked_email_as_spam?: boolean;

  /**
   * The name of the visitor.
   */
  name?: string | null;

  /**
   * The id of the admin that owns the Visitor.
   */
  owner_id?: string | null;

  /**
   * The phone number of the visitor.
   */
  phone?: string | null;

  /**
   * The pseudonym of the visitor.
   */
  pseudonym?: string | null;

  /**
   * The referer of the visitor.
   */
  referrer?: string | null;

  /**
   * The time the Visitor was added to Intercom.
   */
  remote_created_at?: number;

  segments?: Visitor.Segments;

  /**
   * The number of sessions the Visitor has had.
   */
  session_count?: number;

  /**
   * The time the Visitor signed up for your product.
   */
  signed_up_at?: number;

  social_profiles?: Visitor.SocialProfiles;

  tags?: Visitor.Tags;

  /**
   * Value is 'visitor'
   */
  type?: string;

  /**
   * Whether the Visitor is unsubscribed from emails.
   */
  unsubscribed_from_emails?: boolean;

  /**
   * The last time the Visitor was updated.
   */
  updated_at?: number;

  /**
   * Automatically generated identifier for the Visitor.
   */
  user_id?: string;

  /**
   * The utm_campaign of the visitor.
   */
  utm_campaign?: string | null;

  /**
   * The utm_content of the visitor.
   */
  utm_content?: string | null;

  /**
   * The utm_medium of the visitor.
   */
  utm_medium?: string | null;

  /**
   * The utm_source of the visitor.
   */
  utm_source?: string | null;

  /**
   * The utm_term of the visitor.
   */
  utm_term?: string | null;
}

export namespace Visitor {
  export interface Avatar {
    /**
     * This object represents the avatar associated with the visitor.
     */
    image_url?: string | null;

    type?: string;
  }

  export interface Companies {
    companies?: Array<Shared.Company>;

    /**
     * The type of the object
     */
    type?: 'company.list';
  }

  export interface LocationData {
    /**
     * The city name of the visitor.
     */
    city_name?: string;

    /**
     * The continent code of the visitor.
     */
    continent_code?: string;

    /**
     * The country code of the visitor.
     */
    country_code?: string;

    /**
     * The country name of the visitor.
     */
    country_name?: string;

    /**
     * The postal code of the visitor.
     */
    postal_code?: string;

    /**
     * The region name of the visitor.
     */
    region_name?: string;

    /**
     * The timezone of the visitor.
     */
    timezone?: string;

    type?: string;
  }

  export interface Segments {
    segments?: Array<string>;

    /**
     * The type of the object
     */
    type?: 'segment.list';
  }

  export interface SocialProfiles {
    social_profiles?: Array<string>;

    /**
     * The type of the object
     */
    type?: 'social_profile.list';
  }

  export interface Tags {
    tags?: Array<Tags.Tag>;

    /**
     * The type of the object
     */
    type?: 'tag.list';
  }

  export namespace Tags {
    export interface Tag {
      /**
       * The id of the tag.
       */
      id?: string;

      /**
       * The name of the tag.
       */
      name?: string;

      /**
       * The type of the object
       */
      type?: 'tag';
    }
  }
}

/**
 * Response returned when an object is deleted
 */
export interface VisitorDeletedObject {
  /**
   * The unique identifier for the visitor which is given by Intercom.
   */
  id?: string;

  /**
   * The type of object which was deleted
   */
  type?: 'visitor';

  /**
   * Automatically generated identifier for the Visitor.
   */
  user_id?: string;
}

export interface VisitorRetrieveParams {
  /**
   * Query param: The user_id of the Visitor you want to retrieve.
   */
  user_id: string;

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

export type VisitorUpdateParams = VisitorUpdateParams.Variant0 | VisitorUpdateParams.Variant1;

export namespace VisitorUpdateParams {
  export interface Variant0 {
    /**
     * Body param:
     */
    body: unknown;

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

  export interface Variant1 {
    /**
     * Body param:
     */
    body: unknown;

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
}

export interface VisitorConvertParams {
  /**
   * Body param: Represents the role of the Contact model. Accepts `lead` or `user`.
   */
  type: string;

  /**
   * Body param: The unique identifiers retained after converting or merging.
   */
  user: VisitorConvertParams.User;

  /**
   * Body param: The unique identifiers to convert a single Visitor.
   */
  visitor: VisitorConvertParams.Visitor;

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

export namespace VisitorConvertParams {
  /**
   * The unique identifiers retained after converting or merging.
   */
  export interface User {
    /**
     * The unique identifier for the contact which is given by Intercom.
     */
    id?: string;

    /**
     * The contact's email, retained by default if one is present.
     */
    email?: string;

    /**
     * A unique identifier for the contact which is given to Intercom, which will be
     * represented as external_id.
     */
    user_id?: string;
  }

  /**
   * The unique identifiers to convert a single Visitor.
   */
  export interface Visitor {
    /**
     * The unique identifier for the contact which is given by Intercom.
     */
    id?: string;

    /**
     * The visitor's email.
     */
    email?: string;

    /**
     * A unique identifier for the contact which is given to Intercom.
     */
    user_id?: string;
  }
}

export namespace Visitors {
  export import Visitor = VisitorsAPI.Visitor;
  export import VisitorDeletedObject = VisitorsAPI.VisitorDeletedObject;
  export import VisitorRetrieveParams = VisitorsAPI.VisitorRetrieveParams;
  export import VisitorUpdateParams = VisitorsAPI.VisitorUpdateParams;
  export import VisitorConvertParams = VisitorsAPI.VisitorConvertParams;
}
