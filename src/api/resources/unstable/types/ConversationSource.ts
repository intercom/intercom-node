/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Intercom from "../../../index";

/**
 * The type of the conversation part that started this conversation. Can be Contact, Admin, Campaign, Automated or Operator initiated.
 */
export interface ConversationSource {
    /** This includes conversation, email, facebook, instagram, phone_call, phone_switch, push, sms, twitter and whatsapp. */
    type?: ConversationSource.Type;
    /** The id representing the message. */
    id?: string;
    /** The conversation's initiation type. Possible values are customer_initiated, campaigns_initiated (legacy campaigns), operator_initiated (Custom bot), automated (Series and other outbounds with dynamic audience message) and admin_initiated (fixed audience message, ticket initiated by an admin, group email). */
    delivered_as?: string;
    /** Optional. The message subject. For Twitter, this will show a generic message regarding why the subject is obscured. */
    subject?: string;
    /** The message body, which may contain HTML. For Twitter, this will show a generic message regarding why the body is obscured. */
    body?: string;
    author?: Intercom.unstable.ConversationPartAuthor;
    /** A list of attachments for the part. */
    attachments?: Intercom.unstable.PartAttachment[];
    /** The URL where the conversation was started. For Twitter, Email, and Bots, this will be blank. */
    url?: string;
    /** Whether or not the source message has been redacted. Only applicable for contact initiated messages. */
    redacted?: boolean;
}

export namespace ConversationSource {
    /**
     * This includes conversation, email, facebook, instagram, phone_call, phone_switch, push, sms, twitter and whatsapp.
     */
    export type Type =
        | "conversation"
        | "email"
        | "facebook"
        | "instagram"
        | "phone_call"
        | "phone_switch"
        | "push"
        | "sms"
        | "twitter"
        | "whatsapp";
    export const Type = {
        Conversation: "conversation",
        Email: "email",
        Facebook: "facebook",
        Instagram: "instagram",
        PhoneCall: "phone_call",
        PhoneSwitch: "phone_switch",
        Push: "push",
        Sms: "sms",
        Twitter: "twitter",
        Whatsapp: "whatsapp",
    } as const;
}
