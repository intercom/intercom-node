/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         contact_id: "63a07ddf05a32042dffac965",
 *         tag_id: "7522907"
 *     }
 */
export interface UntagContactRequest {
    /**
     * The unique identifier for the contact which is given by Intercom
     */
    contact_id: string;
    /**
     * The unique identifier for the tag which is given by Intercom
     */
    tag_id: string;
}
