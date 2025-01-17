import { Admin, Contact, Conversation } from "api/resources";
import { CanvasObject } from "./ResponseObjects";

/**
 * The context object provides additional details on where the app has been added (or is currently being used), what page the app is being used on, and information on the Messenger settings. This is in order for you give a fully customised experience based on the customers use case.
 *
 * If the `location` is `conversation` then you will also be given a `conversation_id`. If you need to use details about the conversation, then you have to use the `conversation_id` to [make a call to our Conversations API and retrieve the conversation object](https://developers.intercom.com/intercom-api-reference/reference#get-a-single-conversation).
 */
export interface Context {
    /** The id of the conversation where the app is added or being used. */
    conversation_id?: number;
    /** Where the app is added or the action took place. Can be either 'conversation', 'home', 'message', or 'operator'. */
    location?: string;
    /** The default end-user language of the Messenger. Use to localise Messenger App content. */
    locale?: string;
    /** The messengers action colour. Use in Sheets and Icons to make a Messenger App experience feel part of the host Messenger. */
    messenger_action_colour?: string;
    /** The messengers background colour. Use in Sheets and Icons to make a Messenger App experience feel part of the host Messenger. */
    messenger_background_colour?: string;
    /** The current page URL where the app is being used. */
    referrer?: string;
}

/**
 * The current_canvas object mirrors the same format as the Canvas Object ({@link CanvasObject}). This will be the canvas that was most recently showing before the request was sent.
 */
export interface CurrentCanvas {
    current_canvas: CanvasObject;
}

/**
 * The request payload will have all the data needed for you to understand who is using your app, where they are using it, and how you should respond. There are different request payloads for Messenger capabilities and Inbox capabilities.
 */
export interface InitializeRequest {
    /** The workspace ID of the teammate. Attribute is `app_id` for V1.2 and below. */
    workspace_id: string;
    /** The Intercom hosted region that this app is located in. */
    workspace_region: string;
    /** The Intercom teammate {@link Admin} viewing the conversation. */
    admin: Admin;
    /** Key-value pairs which were given as [results](https://developers.intercom.com/docs/references/unstable/canvas-kit/responseobjects/results) in response to the [Configure request](https://developers.intercom.com/docs/canvas-kit#configure). */
    card_creation_options: Record<string, any>;
    /** The [context](https://developers.intercom.com/docs/references/unstable/canvas-kit/requestobjects/context) of where the app is added, where the user last visited, and information on the Messenger settings. */
    context: Context;
    /** The {@link Conversation} your app is being shown for. */
    conversation: Conversation;
    /** The {@link Contact} which is currently being viewed by the teammate in the conversation details panel. We send an individual initialize request for each customer when it's a group conversation. */
    contact: Contact;
}

/**
 * The Submit request is triggered when:
 *
 * A component with a [submit action](https://developers.intercom.com/docs/references/unstable/canvas-kit/actioncomponents/submit-action) is interacted with Messenger Inbox
 */
export interface SubmitRequest {
    /** The workspace ID of the teammate. Attribute is `app_id` for V1.2 and below. */
    workspace_id: string;
    /** The Intercom hosted region that this app is located in. */
    workspace_region: string;
    /** The Intercom teammate {@link Admin} viewing the conversation. */
    admin: Admin;
    /** The id of the component clicked by the teammate to trigger the request. */
    component_id: string;
    /** The {@link Context} of where the app is added, where the user last visited, and information on the Messenger settings. */
    context: Context;
    /** The {@link Conversation} where your app is being shown. */
    conversation: Conversation;
    /** The current_canvas {@link CanvasObject} the teammate can see. */
    current_canvas: CanvasObject;
    /** The {@link Contact} which is currently being viewed by the teammate in the conversation details panel. */
    contact: Contact;
    /** A list of key/value pairs of data, inputted by the teammate on the current canvas. */
    input_values: Record<string, any>;
    /** The user {@link Contact} who took the action. */
    user: Contact;
}

/**
 * The first request we send will allow you to know the workspace where this is happening, the admin who will be configuring the app, and additional context such as where this will be added once complete.
 *
 * For subsequent requests whereby an admin has interacted with a component with a submit action, the request payload will contain the same details with `current_canvas`, `input_values` and the `component_id` also present. This allows you to understand what component the request came from, see what the value of any input was, action anything in your codebase, and then respond knowing what canvas was previously shown beforehand.
 */
export type ConfigureRequest =
    | {
          /** The workspace ID of the teammate. Attribute is app_id for V1.2 and below. */
          workspace_id: string;
          /** The Intercom hosted region that this app is located in. */
          admin: Admin;
          /** The context {@link Context} of where the app is added, where the user last visited, and information on the Messenger settings. */
          context: Context;
      }
    | {
          /** The workspace ID of the teammate. Attribute is app_id for V1.2 and below. */
          workspace_id: string;
          /** The Intercom hosted region that this app is located in. */
          worspace_region: string;
          /** The id of the component clicked by the teammate to trigger the request. */
          component_id: string;
          admin: Admin;
          /** The context {@link Context} of where the app is added, where the user last visited, and information on the Messenger settings. */
          context: Context;
          /** The current_canvas {@link CanvasObject} the teammate can see. */
          current_canvas: CanvasObject;
          /** A list of key/value pairs of data, inputted by the teammate on the current canvas. */
          input_values: Record<string, any>;
      };

/**
 * Canvases are static by default and require a new request to come through in order to update them. Live canvases however will make requests every time the card is viewed without any interaction needed, meaning the canvas can be kept up-to-date with no action from the user.
 *
 * This works for every Messenger request that you can respond with a canvas object {@link CanvasObject} to. Instead of returning the content object {@link ContentObject} within the canvas object, you should provide a `content_url` attribute instead with the value being the URL you want us to send a POST request to when someone views the app.
 */
export interface LiveCanvasRequest {
    /** The workspace ID of the teammate. Attribute is `app_id` for V1.2 and below. */
    workspace_id: string;
    /** The Intercom hosted region that this app is located in. */
    workspace_region: string;
    /** The current_canvas {@link CanvasObject} the teammate can see. */
    canvas: CanvasObject;
    /** The context {@link Context} of where the app is added, where the user last visited, and information on the Messenger settings. */
    context: Context;
    /** The contact {@link Contact} who viewed the card. */
    contact: Contact;
}
