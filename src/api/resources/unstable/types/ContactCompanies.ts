/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Intercom from "../../../index";

/**
 * An object with metadata about companies attached to a contact . Up to 10 will be displayed here. Use the url to get more.
 */
export interface ContactCompanies {
    /** An array of company data objects attached to the contact. */
    data?: Intercom.unstable.CompanyData[];
    /** Url to get more company resources for this contact */
    url?: string;
    /** Integer representing the total number of companies attached to this contact */
    total_count?: number;
    /** Whether there's more Addressable Objects to be viewed. If true, use the url to view all */
    has_more?: boolean;
}
