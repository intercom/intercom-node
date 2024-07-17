/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Intercom from "../index";

/**
 * A list of subscription type objects.
 */
export interface SubscriptionTypeList {
    /** The type of the object */
    type?: "list";
    /** A list of subscription type objects associated with the workspace . */
    data?: Intercom.SubscriptionType[];
}
