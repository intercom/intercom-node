// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as DataEventsAPI from './data-events';

export class DataEvents extends APIResource {
  /**
   * You will need an Access Token that has write permissions to send Events. Once
   * you have a key you can submit events via POST to the Events resource, which is
   * located at https://api.intercom.io/events, or you can send events using one of
   * the client libraries. When working with the HTTP API directly a client should
   * send the event with a `Content-Type` of `application/json`.
   *
   * When using the JavaScript API,
   * [adding the code to your app](http://docs.intercom.io/configuring-Intercom/tracking-user-events-in-your-app)
   * makes the Events API available. Once added, you can submit an event using the
   * `trackEvent` method. This will associate the event with the Lead or currently
   * logged-in user or logged-out visitor/lead and send it to Intercom. The final
   * parameter is a map that can be used to send optional metadata about the event.
   *
   * With the Ruby client you pass a hash describing the event to
   * `Intercom::Event.create`, or call the `track_user` method directly on the
   * current user object (e.g. `user.track_event`).
   *
   * **NB: For the JSON object types, please note that we do not currently support
   * nested JSON structure.**
   *
   * | Type            | Description                                                                                                                                                                                                     | Example                                                                           |
   * | :-------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------- |
   * | String          | The value is a JSON String                                                                                                                                                                                      | `"source":"desktop"`                                                              |
   * | Number          | The value is a JSON Number                                                                                                                                                                                      | `"load": 3.67`                                                                    |
   * | Date            | The key ends with the String `_date` and the value is a [Unix timestamp](http://en.wikipedia.org/wiki/Unix_time), assumed to be in the [UTC](http://en.wikipedia.org/wiki/Coordinated_Universal_Time) timezone. | `"contact_date": 1392036272`                                                      |
   * | Link            | The value is a HTTP or HTTPS URI.                                                                                                                                                                               | `"article": "https://example.org/ab1de.html"`                                     |
   * | Rich Link       | The value is a JSON object that contains `url` and `value` keys.                                                                                                                                                | `"article": {"url": "https://example.org/ab1de.html", "value":"the dude abides"}` |
   * | Monetary Amount | The value is a JSON object that contains `amount` and `currency` keys. The `amount` key is a positive integer representing the amount in cents. The price in the example to the right denotes €349.99.          | `"price": {"amount": 34999, "currency": "eur"}`                                   |
   *
   * **Lead Events**
   *
   * When submitting events for Leads, you will need to specify the Lead's `id`.
   *
   * **Metadata behaviour**
   *
   * - We currently limit the number of tracked metadata keys to 10 per event. Once
   *   the quota is reached, we ignore any further keys we receive. The first 10
   *   metadata keys are determined by the order in which they are sent in with the
   *   event.
   * - It is not possible to change the metadata keys once the event has been sent. A
   *   new event will need to be created with the new keys and you can archive the
   *   old one.
   * - There might be up to 24 hrs delay when you send a new metadata for an existing
   *   event.
   *
   * **Event de-duplication**
   *
   * The API may detect and ignore duplicate events. Each event is uniquely
   * identified as a combination of the following data - the Workspace identifier,
   * the Contact external identifier, the Data Event name and the Data Event created
   * time. As a result, it is **strongly recommended** to send a second granularity
   * Unix timestamp in the `created_at` field.
   *
   * Duplicated events are responded to using the normal `202 Accepted` code - an
   * error is not thrown, however repeat requests will be counted against any rate
   * limit that is in place.
   *
   * ### HTTP API Responses
   *
   * - Successful responses to submitted events return `202 Accepted` with an empty
   *   body.
   * - Unauthorised access will be rejected with a `401 Unauthorized` or
   *   `403 Forbidden` response code.
   * - Events sent about users that cannot be found will return a `404 Not Found`.
   * - Event lists containing duplicate events will have those duplicates ignored.
   * - Server errors will return a `500` response code and may contain an error
   *   message in the body.
   */
  create(params: DataEventCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { body, 'Intercom-Version': intercomVersion } = params;
    return this._client.post('/events', {
      body: body,
      ...options,
      headers: {
        Accept: '*/*',
        ...(intercomVersion?.toString() != null ?
          { 'Intercom-Version': intercomVersion?.toString() }
        : undefined),
        ...options?.headers,
      },
    });
  }

  /**
   * > 🚧
   * >
   * > Please note that you can only 'list' events that are less than 90 days old.
   * > Event counts and summaries will still include your events older than 90 days
   * > but you cannot 'list' these events individually if they are older than 90 days
   *
   * The events belonging to a customer can be listed by sending a GET request to
   * `https://api.intercom.io/events` with a user or lead identifier along with a
   * `type` parameter. The identifier parameter can be one of `user_id`, `email` or
   * `intercom_user_id`. The `type` parameter value must be `user`.
   *
   * - `https://api.intercom.io/events?type=user&user_id={user_id}`
   * - `https://api.intercom.io/events?type=user&email={email}`
   * - `https://api.intercom.io/events?type=user&intercom_user_id={id}` (this call
   *   can be used to list leads)
   *
   * The `email` parameter value should be
   * [url encoded](http://en.wikipedia.org/wiki/Percent-encoding) when sending.
   *
   * You can optionally define the result page size as well with the `per_page`
   * parameter.
   */
  list(params: DataEventListParams, options?: Core.RequestOptions): Core.APIPromise<DataEventSummary> {
    const { 'Intercom-Version': intercomVersion, ...query } = params;
    return this._client.get('/events', {
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
   * Create event summaries for a user. Event summaries are used to track the number
   * of times an event has occurred, the first time it occurred and the last time it
   * occurred.
   */
  summaries(params?: DataEventSummariesParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  summaries(options?: Core.RequestOptions): Core.APIPromise<void>;
  summaries(
    params: DataEventSummariesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(params)) {
      return this.summaries({}, params);
    }
    const { 'Intercom-Version': intercomVersion, ...body } = params;
    return this._client.post('/events/summaries', {
      body,
      ...options,
      headers: {
        Accept: '*/*',
        ...(intercomVersion?.toString() != null ?
          { 'Intercom-Version': intercomVersion?.toString() }
        : undefined),
        ...options?.headers,
      },
    });
  }
}

/**
 * This will return a summary of data events for the App.
 */
export interface DataEventSummary {
  /**
   * The email address of the user
   */
  email?: string;

  /**
   * A summary of data events
   */
  events?: Array<DataEventSummary.Event | null>;

  /**
   * The Intercom user ID of the user
   */
  intercom_user_id?: string;

  /**
   * The type of the object
   */
  type?: 'event.summary';

  /**
   * The user ID of the user
   */
  user_id?: string;
}

export namespace DataEventSummary {
  /**
   * This will return a summary of a data event for the App.
   */
  export interface Event {
    /**
     * The number of times the event was sent
     */
    count?: number;

    /**
     * The description of the event
     */
    description?: string;

    /**
     * The first time the event was sent
     */
    first?: string;

    /**
     * The last time the event was sent
     */
    last?: string;

    /**
     * The name of the event
     */
    name?: string;
  }
}

export type DataEventCreateParams =
  | DataEventCreateParams.IDRequired
  | DataEventCreateParams.UserIDRequired
  | DataEventCreateParams.EmailRequired;

export namespace DataEventCreateParams {
  export interface IDRequired {
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

  export interface UserIDRequired {
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

  export interface EmailRequired {
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

export interface DataEventListParams {
  /**
   * Query param:
   */
  filter:
    | DataEventListParams.UserIDQueryParameter
    | DataEventListParams.IntercomUserIDQueryParameter
    | DataEventListParams.EmailQueryParameter;

  /**
   * Query param: The value must be user
   */
  type: string;

  /**
   * Query param: summary flag
   */
  summary?: boolean;

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

export namespace DataEventListParams {
  export interface UserIDQueryParameter {
    user_id: string;
  }

  export interface IntercomUserIDQueryParameter {
    intercom_user_id: string;
  }

  export interface EmailQueryParameter {
    email: string;
  }
}

export interface DataEventSummariesParams {
  /**
   * Body param: A list of event summaries for the user. Each event summary should
   * contain the event name, the time the event occurred, and the number of times the
   * event occurred. The event name should be a past tense 'verb-noun' combination,
   * to improve readability, for example `updated-plan`.
   */
  event_summaries?: DataEventSummariesParams.EventSummaries;

  /**
   * Body param: Your identifier for the user.
   */
  user_id?: string;

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

export namespace DataEventSummariesParams {
  /**
   * A list of event summaries for the user. Each event summary should contain the
   * event name, the time the event occurred, and the number of times the event
   * occurred. The event name should be a past tense 'verb-noun' combination, to
   * improve readability, for example `updated-plan`.
   */
  export interface EventSummaries {
    /**
     * The number of times the event occurred.
     */
    count?: number;

    /**
     * The name of the event that occurred. A good event name is typically a past tense
     * 'verb-noun' combination, to improve readability, for example `updated-plan`.
     */
    event_name?: string;

    /**
     * The first time the event was sent
     */
    first?: number;

    /**
     * The last time the event was sent
     */
    last?: number;
  }
}

export namespace DataEvents {
  export import DataEventSummary = DataEventsAPI.DataEventSummary;
  export import DataEventCreateParams = DataEventsAPI.DataEventCreateParams;
  export import DataEventListParams = DataEventsAPI.DataEventListParams;
  export import DataEventSummariesParams = DataEventsAPI.DataEventSummariesParams;
}
