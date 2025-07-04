/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Intercom from "../../../index";

/**
 * Payload of the request to reply on behalf of a contact using their `intercom_user_id`
 */
export interface ContactReplyTicketIntercomUserIdRequest extends Intercom.unstable.ContactReplyBaseRequest {
    /** The identifier for the contact as given by Intercom. */
    intercom_user_id: string;
}
