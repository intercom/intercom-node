/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Intercom from "../index";

export interface ContentSourcesList {
    type?: "content_source.list";
    /** The total number of content sources used by AI Agent in the conversation. */
    total_count?: number;
    /** The content sources used by AI Agent in the conversation. */
    content_sources?: Intercom.ContentSource[];
}
