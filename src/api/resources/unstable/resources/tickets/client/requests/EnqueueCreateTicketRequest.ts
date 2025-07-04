/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Intercom from "../../../../../../index";

/**
 * @example
 *     {
 *         ticket_type_id: "1234",
 *         contacts: [{
 *                 id: "6762f2d81bb69f9f2193bc54"
 *             }]
 *     }
 */
export interface EnqueueCreateTicketRequest extends Intercom.unstable.CreateTicketRequestBody {
    /** Option to disable notifications when a Ticket is created. */
    skip_notifications?: boolean;
}
