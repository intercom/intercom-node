/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Intercom from "../index";

/**
 * The request payload will have all the data needed for you to understand who is using your app, where they are using it, and how you should respond. There are different request payloads for Messenger capabilities and Inbox capabilities.
 */
export interface InitializeRequest {
    /** The workspace ID of the teammate. Attribute is `app_id` for V1.2 and below. */
    workspace_id: string;
    /** The Intercom hosted region that this app is located in. */
    workspace_region: string;
    /** The Intercom teammate viewing the conversation. */
    admin: Intercom.Admin;
    /** Key-value pairs which were given as results in response to the Configure request. */
    card_creation_options: Record<string, unknown>;
    /** The context of where the app is added, where the user last visited, and information on the Messenger settings. */
    context: Intercom.Context;
    /** The conversation your app is being shown for. */
    conversation: Intercom.Conversation;
    /** The contact which is currently being viewed by the teammate in the conversation details panel. We send an individual initialize request for each customer when it's a group conversation. */
    contact: Intercom.Contact;
}
