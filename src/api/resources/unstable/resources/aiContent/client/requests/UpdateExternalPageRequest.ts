/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         id: "id",
 *         title: "Test",
 *         html: "<html><body><h1>Test</h1></body></html>",
 *         url: "https://www.example.com",
 *         source_id: 47,
 *         external_id: "5678"
 *     }
 */
export interface UpdateExternalPageRequest {
    /**
     * The unique identifier for the external page which is given by Intercom.
     */
    id: string;
    /** The title of the external page. */
    title: string;
    /** The body of the external page in HTML. */
    html: string;
    /** The URL of the external page. This will be used by Fin to link end users to the page it based its answer on. */
    url: string;
    /** Whether the external page should be used to answer questions by Fin. */
    fin_availability?: boolean;
    /** The unique identifier for the source of the external page which was given by Intercom. Every external page must be associated with a Content Import Source which represents the place it comes from and from which it inherits a default audience (configured in the UI). For a new source, make a POST request to the Content Import Source endpoint and an ID for the source will be returned in the response. */
    source_id: number;
    /** The identifier for the external page which was given by the source. Must be unique for the source. */
    external_id?: string;
}
