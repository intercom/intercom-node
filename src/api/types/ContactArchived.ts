/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * archived contact object
 */
export interface ContactArchived {
    /** always contact */
    type: "contact";
    /** The unique identifier for the contact which is given by Intercom. */
    id: string;
    /** The unique identifier for the contact which is provided by the Client. */
    external_id?: string;
    /** Whether the contact is archived or not. */
    archived: boolean;
}
