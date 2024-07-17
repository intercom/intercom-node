/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Intercom from "../index";

/**
 * The sender of the message. If not provided, the default sender will be used.
 */
export interface CreateMessageRequestTo {
    /** The role associated to the contact - `user` or `lead`. */
    type: Intercom.CreateMessageRequestType;
    /** The identifier for the contact which is given by Intercom. */
    id: string;
}
