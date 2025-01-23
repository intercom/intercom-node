import { Component } from "./Components";

/**
 * The content object is where you specify the UI of your app. You provide us with a set of `components` in a components array that we then render.
 *
 * The content object should usually be returned within the [canvas object](https://developers.intercom.com/docs/references/canvas-kit/responseobjects/canvas). If you're responding to a Live Canvas request however, then you should only respond with the content object.
 */
export interface ContentObject {
    /** The list of components to be rendered. See the {@link Component} further in this reference. */
    components: Array<Component>;
}

/**
 * You have to respond to the majority of requests with a canvas object. This will tell us what UI to show for your app.
 *
 * A canvas can either be static (meaning we send you the next request only when an action takes place) or live (meaning we send you the next request when someone views the app).
 *
 * - A static canvas needs a {@link ContentObject} which will contain the components to show.
 * - A live canvas needs a `content_url` which we we will make the [Live Canvas requests](https://developers.intercom.com/build-an-integration/docs/canvas-kit#section-live-canvas-optional) to when the app is viewed. This is only possible for apps viewed or used in the Messenger.
 */
export interface CanvasObject {
    /** The {@link ContentObject} that will be shown as the UI of the app. Max Size is 64KB. */
    content: ContentObject;
    /** The URL which we make [Live Canvas requests](https://developers.intercom.com/build-an-integration/docs/canvas-kit#section-live-canvas-optional) to. You must respond to these with a {@link ContentObject}. Max size is 64KB. */
    content_url?: string;
    /** Optional [Stored Data](https://developers.intercom.com/docs/references/canvas-kit/responseobjects/stored-data) that you want to be returned in the next sent request. Max Size is 64KB. */
    stored_data?: Record<string, any>;
}

/**
 * The event object enables Intercom to know more about the actions that took place in your app. Currently, you can only tell us when an app's flow has been completed.
 */
export interface EventResponse {
    /** What action took place. The only value currently accepted is `completed`. */
    type: "completed";
}

/**
 * The results object should be sent when you want to end configuration of the app and trigger the [Initialize request](https://developers.intercom.com/docs/canvas-kit/#initialize) to be sent. You provide the key-value pairs of data you want access to and we will send these in the Initialize request within a [card_creation_options object](https://developers.intercom.com/docs/references/canvas-kit/requestobjects/card-creation-options/#card-creation-options).
 */
export interface ResultsResponse {
    results: Record<string, any>;
}

/**
 * We expect a {@link CanvasObject} object in response to the request. This is where you'll specify the UI for the first screen of the app using {@link Component}.
 */
export interface InitializeResponse {
    canvas: CanvasObject;
}

/**
 * We expect a {@link CanvasObject} in response to the request. This will **replace the previous canvas** that was visible until the app was interacted with.
 *
 * You can optionally provide an event object {@link EventResponse} with the attribute `type` given as `completed` to **tell us if the app has completed its purpose**. For example, an email collector app would be complete when the end-user submits their email address.
 *
 * Apps in conversation details can also optionally **insert an app into the conversation reply:**
 *
 * 1. You respond with a [card_creation_options object](https://developers.intercom.com/canvas-kit-reference/reference/card-creation-options).
 * 2. We send a request to the [initialize URL for Messenger capabilities](https://developers.intercom.com/docs/build-an-integration/getting-started/build-an-app-for-your-messenger/request-flows) with the [card_creation_options](https://developers.intercom.com/canvas-kit-reference/reference/card-creation-options) object present.
 * 3. You respond with a canvas object {@link CanvasObject} with the components {@link Component} you want to insert into the conversation reply.
 */
export interface SubmitResponse {
    canvas: CanvasObject;
    card_creation_options?: Record<string, any>;
    event?: EventResponse;
}

/**
 * We either expect:
 *
 * - A canvas object {@link CanvasObject} which will **replace the previous canvas** that was visible until the teammate interacted with your app.
 * - A results object {@link ResultsResponse} which will end the configuration and trigger the initialize request to be sent. There will be a [card_creation_options](https://developers.intercom.com/canvas-kit-reference/reference/card-creation-options) object in the payload showing your key-value pairs from the results object.
 */
export type ConfigureResponse = ResultsResponse | { canvas: CanvasObject };

/**
 * We expect a content {@link ContentObject} object back in response that contains the components you want to show.
 */
export interface LiveCanvasResponse {
    content: ContentObject;
}
