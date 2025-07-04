/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Intercom from "../../../index";

/**
 * This will return a list of Collections for the App.
 */
export interface CollectionList {
    /** The type of the object - `list`. */
    type?: "list";
    pages?: Intercom.unstable.CursorPages;
    /** A count of the total number of collections. */
    total_count?: number;
    /** An array of collection objects */
    data?: Intercom.unstable.Collection[];
}
