/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Intercom from "../index";

/**
 * A list of Ticket Part objects for each note and event in the ticket. There is a limit of 500 parts.
 */
export interface TicketParts {
    /** */
    type: "ticket_part.list";
    /** A list of Ticket Part objects for each ticket. There is a limit of 500 parts. */
    ticket_parts: Intercom.TicketPart[];
    /** */
    total_count: number;
}
