/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Intercom from "../../../../index";

/**
 * @example
 *     {
 *         phone: "+353832345678",
 *         custom_attributes: {
 *             "issue_type": "Billing",
 *             "priority": "High"
 *         }
 *     }
 *
 * @example
 *     {
 *         phone: "+353832345678",
 *         custom_attributes: {
 *             "issue_type": "Billing",
 *             "priority": "High"
 *         }
 *     }
 *
 * @example
 *     {
 *         phone: "+353832345678",
 *         custom_attributes: {
 *             "issue_type": "Billing",
 *             "priority": "High"
 *         }
 *     }
 *
 * @example
 *     {
 *         phone: "+40241100100",
 *         custom_attributes: {
 *             "issue_type": "Billing",
 *             "priority": "High"
 *         }
 *     }
 */
export interface CreatePhoneCallRedirectRequest {
    /** Phone number in E.164 format, that will receive the SMS to continue the conversation in the Messenger. */
    phone: string;
    custom_attributes?: Intercom.CustomAttributes;
}
