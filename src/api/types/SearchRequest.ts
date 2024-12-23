/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Intercom from "../index";

/**
 * Search using Intercoms Search APIs.
 */
export interface SearchRequest {
    query: SearchRequest.Query;
    pagination?: Intercom.StartingAfterPaging;
}

export namespace SearchRequest {
    export type Query = Intercom.SingleFilterSearchRequest | Intercom.MultipleFilterSearchRequest;
}
