/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Intercom from "../index";

/**
 * A Ticket Part representing a note, comment, or quick_reply on a ticket
 */
export interface TicketReply {
    /** Always ticket_part */
    type?: "ticket_part";
    /** The id representing the part. */
    id?: string;
    /** Type of the part */
    part_type?: Intercom.TicketReplyPartType;
    /** The message body, which may contain HTML. */
    body?: string;
    /** The time the note was created. */
    created_at?: number;
    /** The last time the note was updated. */
    updated_at?: number;
    author?: Intercom.TicketPartAuthor;
    /** A list of attachments for the part. */
    attachments?: Intercom.PartAttachment[];
    /** Whether or not the ticket part has been redacted. */
    redacted?: boolean;
}
