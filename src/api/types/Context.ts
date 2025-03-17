/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The context object provides additional details on where the app has been added (or is currently being used), what page the app is being used on, and information on the Messenger settings. This is in order for you give a fully customised experience based on the customers use case.
 *
 * If the `location` is `conversation` then you will also be given a `conversation_id`. If you need to use details about the conversation, then you have to use the `conversation_id` to [make a call to our Conversations API and retrieve the conversation object](https://developers.intercom.com/intercom-api-reference/reference#get-a-single-conversation).
 */
export interface Context {
    /** The id of the conversation where the app is added or being used. */
    conversation_id?: number;
    /** Where the app is added or the action took place. Can be either 'conversation', 'home', 'message', or 'operator'. */
    location?: Context.Location;
    /** The default end-user language of the Messenger. Use to localise Messenger App content. */
    locale?: string;
    /** The messengers action colour. Use in Sheets and Icons to make a Messenger App experience feel part of the host Messenger. */
    messenger_action_colour?: string;
    /** The messengers background colour. Use in Sheets and Icons to make a Messenger App experience feel part of the host Messenger. */
    messenger_background_colour?: string;
    /** The current page URL where the app is being used. */
    referrer?: string;
}

export namespace Context {
    /**
     * Where the app is added or the action took place. Can be either 'conversation', 'home', 'message', or 'operator'.
     */
    export type Location = "conversation" | "home" | "message" | "operator";
    export const Location = {
        Conversation: "conversation",
        Home: "home",
        Message: "message",
        Operator: "operator",
    } as const;
}
