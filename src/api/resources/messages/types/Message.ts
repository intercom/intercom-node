/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Intercom from "../../../index";

/**
 * Message are how you reach out to contacts in Intercom. They are created when an admin sends an outbound message to a contact.
 */
export interface Message {
    /** The type of the message */
    type: string;
    /** The id representing the message. */
    id: string;
    /** The time the conversation was created. */
    created_at: number;
    /** The subject of the message. Only present if message_type: email. */
    subject?: string;
    /** The message body, which may contain HTML. */
    body: string;
    /** The type of message that was sent. Can be email, inapp, facebook or twitter. */
    message_type: Intercom.MessageMessageType;
    /** The associated conversation_id */
    conversation_id?: string;
}
