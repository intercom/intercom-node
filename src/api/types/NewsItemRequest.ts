/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Intercom from "../index";

/**
 * A News Item is a content type in Intercom enabling you to announce product updates, company news, promotions, events and more with your customers.
 */
export interface NewsItemRequest {
    /** The title of the news item. */
    title: string;
    /** The news item body, which may contain HTML. */
    body?: string;
    /** The id of the sender of the news item. Must be a teammate on the workspace. */
    sender_id: number;
    /** News items will not be visible to your users in the assigned newsfeeds until they are set live. */
    state?: Intercom.NewsItemRequestState;
    /** When set to `true`, the news item will appear in the messenger newsfeed without showing a notification badge. */
    deliver_silently?: boolean;
    /** Label names displayed to users to categorize the news item. */
    labels?: string[];
    /** Ordered list of emoji reactions to the news item. When empty, reactions are disabled. */
    reactions?: (string | undefined)[];
    /** A list of newsfeed_assignments to assign to the specified newsfeed. */
    newsfeed_assignments?: Intercom.NewsfeedAssignment[];
}
