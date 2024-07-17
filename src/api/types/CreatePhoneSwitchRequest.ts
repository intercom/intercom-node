/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Intercom from "../index";

/**
 * You can create an phone switch
 */
export interface CreatePhoneSwitchRequest {
    /** Phone number in E.164 format, that will receive the SMS to continue the conversation in the Messenger. */
    phone: string;
    custom_attributes?: Intercom.CustomAttributes;
}
