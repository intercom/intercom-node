/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Intercom from "../../../index";

/**
 * Tickets are how you track requests from your users.
 */
export interface TicketList {
    /** Always ticket.list */
    type?: "ticket.list";
    /** The list of ticket objects */
    tickets?: (Intercom.unstable.Ticket | undefined)[];
    /** A count of the total number of objects. */
    total_count?: number;
    pages?: Intercom.unstable.CursorPages;
}
