/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Intercom from "../index";

/**
 * An object containing tags meta data about the tags that a contact has. Up to 10 will be displayed here. Use the url to get more.
 */
export interface ContactTags {
    /** This object represents the tags attached to a contact. */
    data?: Intercom.AddressableList[];
    /** url to get more tag resources for this contact */
    url?: string;
    /** Int representing the total number of tags attached to this contact */
    total_count?: number;
    /** Whether there's more Addressable Objects to be viewed. If true, use the url to view all */
    has_more?: boolean;
}
