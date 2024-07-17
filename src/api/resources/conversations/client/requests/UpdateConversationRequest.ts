/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Intercom from "../../../../index";

/**
 * @example
 *     {
 *         read: true,
 *         custom_attributes: {
 *             "issue_type": "Billing",
 *             "priority": "High"
 *         }
 *     }
 *
 * @example
 *     {
 *         read: true,
 *         custom_attributes: {
 *             "issue_type": "Billing",
 *             "priority": "High"
 *         }
 *     }
 */
export interface UpdateConversationRequest {
    /**
     * Set to plaintext to retrieve conversation messages in plain text.
     */
    display_as?: string;
    /** Mark a conversation as read within Intercom. */
    read?: boolean;
    custom_attributes?: Intercom.CustomAttributes;
}
