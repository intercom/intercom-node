/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         contact_id: "63a07ddf05a32042dffac965"
 *     }
 */
export interface ListAttachedCompaniesRequest {
    /**
     * The unique identifier for the contact which is given by Intercom
     */
    contact_id: string;
    /**
     * The page of results to fetch. Defaults to first page
     */
    page?: number;
    /**
     * How many results to display per page. Defaults to 15
     */
    per_page?: number;
}
