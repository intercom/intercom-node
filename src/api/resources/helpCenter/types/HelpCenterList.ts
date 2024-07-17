/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Intercom from "../../../index";

/**
 * A list of Help Centers belonging to the App
 */
export interface HelpCenterList {
    /** The type of the object - `list`. */
    type?: "list";
    /** An array of Help Center objects */
    data?: Intercom.HelpCenter[];
}
