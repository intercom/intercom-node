/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Intercom from "../index";

/**
 * Conversations are how you can communicate with users in Intercom. They are created when a contact replies to an outbound message, or when one admin directly sends a message to a single contact.
 */
export interface PaginatedConversationResponse {
    /** Always conversation.list */
    type: "conversation.list";
    /** The list of conversation objects */
    conversations: Intercom.Conversation[];
    /** A count of the total number of objects. */
    total_count: number;
    pages?: Intercom.CursorPages;
}
