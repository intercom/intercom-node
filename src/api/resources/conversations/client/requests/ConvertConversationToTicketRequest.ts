/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Intercom from "../../../../index";

/**
 * @example
 *     {
 *         conversation_id: "123",
 *         ticket_type_id: "79"
 *     }
 *
 * @example
 *     {
 *         conversation_id: "123",
 *         ticket_type_id: "80"
 *     }
 */
export interface ConvertConversationToTicketRequest {
    /**
     * The id of the conversation to target
     */
    conversation_id: string;
    /** The ID of the type of ticket you want to convert the conversation to */
    ticket_type_id: string;
    attributes?: Intercom.TicketRequestCustomAttributes;
}