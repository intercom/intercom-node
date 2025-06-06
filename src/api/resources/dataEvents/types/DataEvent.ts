/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Data events are used to notify Intercom of changes to your data.
 */
export interface DataEvent {
    /** The type of the object */
    type?: "event";
    /** The name of the event that occurred. This is presented to your App's admins when filtering and creating segments - a good event name is typically a past tense 'verb-noun' combination, to improve readability, for example `updated-plan`. */
    event_name: string;
    /** The time the event occurred as a UTC Unix timestamp */
    created_at: number;
    /** Your identifier for the user. */
    user_id?: string;
    /** Your identifier for a lead or a user. */
    id?: string;
    /** The Intercom identifier for the user. */
    intercom_user_id?: string;
    /** An email address for your user. An email should only be used where your application uses email to uniquely identify users. */
    email?: string;
    /** Optional metadata about the event. */
    metadata?: Record<string, string>;
}
