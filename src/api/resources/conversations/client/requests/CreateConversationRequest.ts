/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Intercom from "../../../../index";

/**
 * @example
 *     {
 *         from: {
 *             type: Intercom.CreateConversationRequestFromType.User,
 *             id: "667d60d18a68186f43bafddd"
 *         },
 *         body: "Hello there"
 *     }
 *
 * @example
 *     {
 *         from: {
 *             type: Intercom.CreateConversationRequestFromType.User,
 *             id: "123_doesnt_exist"
 *         },
 *         body: "Hello there"
 *     }
 */
export interface CreateConversationRequest {
    from: Intercom.CreateConversationRequestFrom;
    /** The content of the message. HTML is not supported. */
    body: string;
}
