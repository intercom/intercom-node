/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Intercom from "../../../index";

/**
 * A Ticket Part represents a message in the ticket.
 */
export interface TicketPart {
    /** Always ticket_part */
    type?: string;
    /** The id representing the ticket part. */
    id?: string;
    /** The type of ticket part. */
    part_type?: string;
    /** The message body, which may contain HTML. */
    body?: string;
    /** The previous state of the ticket. */
    previous_ticket_state?: Intercom.TicketPartPreviousTicketState;
    /** The state of the ticket. */
    ticket_state?: Intercom.TicketPartTicketState;
    /** The time the ticket part was created. */
    created_at?: number;
    /** The last time the ticket part was updated. */
    updated_at?: number;
    /** The id of the admin that was assigned the ticket by this ticket_part (null if there has been no change in assignment.) */
    assigned_to?: Intercom.Reference;
    author?: Intercom.TicketPartAuthor;
    /** A list of attachments for the part. */
    attachments?: Intercom.PartAttachment[];
    /** The external id of the ticket part */
    external_id?: string;
    /** Whether or not the ticket part has been redacted. */
    redacted?: boolean;
}
