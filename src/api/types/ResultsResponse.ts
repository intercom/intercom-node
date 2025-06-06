/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The results object should be sent when you want to end configuration of the app and trigger the [Initialize request](https://developers.intercom.com/docs/canvas-kit/#initialize) to be sent. You provide the key-value pairs of data you want access to and we will send these in the Initialize request within a [card_creation_options object](https://developers.intercom.com/docs/references/canvas-kit/requestobjects/card-creation-options/#card-creation-options).
 */
export interface ResultsResponse {
    /** Key-value pairs of data you want access to in the Initialize request */
    results: Record<string, unknown>;
}
