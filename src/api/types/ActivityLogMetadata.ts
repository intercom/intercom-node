/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Additional data provided about Admin activity.
 */
export interface ActivityLogMetadata {
    /** The way the admin signed in. */
    sign_in_method?: string;
    /** The unique identifier for the contact which is provided by the Client. */
    external_id?: string;
    /** The away mode status which is set to true when away and false when returned. */
    away_mode?: boolean;
    /** The reason the Admin is away. */
    away_status_reason?: string;
    /** Indicates if conversations should be reassigned while an Admin is away. */
    reassign_conversations?: boolean;
    /** The action that initiated the status change. */
    source?: string;
    /** Indicates if the status was changed automatically or manually. */
    auto_changed?: string;
    /** The ID of the Admin who initiated the activity. */
    update_by?: number;
    /** The name of the Admin who initiated the activity. */
    update_by_name?: string;
}
