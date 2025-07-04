/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Help Centers contain collections
 */
export interface HelpCenter {
    /** The unique identifier for the Help Center which is given by Intercom. */
    id?: string;
    /** The id of the workspace which the Help Center belongs to. */
    workspace_id?: string;
    /** The time when the Help Center was created. */
    created_at?: number;
    /** The time when the Help Center was last updated. */
    updated_at?: number;
    /** The identifier of the Help Center. This is used in the URL of the Help Center. */
    identifier?: string;
    /** Whether the Help Center is turned on or not. This is controlled in your Help Center settings. */
    website_turned_on?: boolean;
    /** The display name of the Help Center only seen by teammates. */
    display_name?: string;
}
