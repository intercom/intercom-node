/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The majority of list resources in the API are paginated to allow clients to traverse data over multiple requests.
 *
 * Their responses are likely to contain a pages object that hosts pagination links which a client can use to paginate through the data without having to construct a query. The link relations for the pages field are as follows.
 */
export interface PagesLink {
    type: "pages";
    page: number;
    /** A link to the next page of results. A response that does not contain a next link does not have further data to fetch. */
    next?: string;
    per_page: number;
    total_pages: number;
}