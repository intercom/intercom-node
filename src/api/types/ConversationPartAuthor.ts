/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The object who initiated the conversation, which can be a Contact, Admin or Team. Bots and campaigns send messages on behalf of Admins or Teams. For Twitter, this will be blank.
 */
export interface ConversationPartAuthor {
    /** The type of the author */
    type?: string;
    /** The id of the author */
    id?: string;
    /** The name of the author */
    name?: string;
    /** The email of the author */
    email?: string;
}
