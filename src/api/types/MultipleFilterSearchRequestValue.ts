/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Intercom from "../index";

export type MultipleFilterSearchRequestValue =
    /**
     * Add mutiple filters. */
    | Intercom.MultipleFilterSearchRequest[]
    /**
     * Add a single filter field. */
    | Intercom.SingleFilterSearchRequest[];
