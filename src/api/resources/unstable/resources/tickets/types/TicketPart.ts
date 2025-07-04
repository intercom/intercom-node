/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Intercom from "../../../../../index";

/**
 * A Ticket Part represents a message in the ticket.
 */
export interface TicketPart {
    /** Always ticket_part */
    type?: string;
    /** The id representing the ticket part. */
    id?: string;
    /** The type of ticket part. */
    part_type?: string;
    /** The message body, which may contain HTML. */
    body?: string;
    /** The previous state of the ticket. */
    previous_ticket_state?: TicketPart.PreviousTicketState;
    /** The state of the ticket. */
    ticket_state?: TicketPart.TicketState;
    /** The time the ticket part was created. */
    created_at?: number;
    /** The last time the ticket part was updated. */
    updated_at?: number;
    /** The id of the admin that was assigned the ticket by this ticket_part (null if there has been no change in assignment.) */
    assigned_to?: Intercom.unstable.Reference;
    author?: Intercom.unstable.TicketPartAuthor;
    /** A list of attachments for the part. */
    attachments?: Intercom.unstable.PartAttachment[];
    /** The external id of the ticket part */
    external_id?: string;
    /** Whether or not the ticket part has been redacted. */
    redacted?: boolean;
    /** The app package code if this part was created via API. Note this field won't show if the part was not created via API. */
    app_package_code?: string;
    /** The updated attribute data of the ticket part. Only present for attribute update parts. */
    updated_attribute_data?: TicketPart.UpdatedAttributeData;
}

export namespace TicketPart {
    /**
     * The previous state of the ticket.
     */
    export type PreviousTicketState = "submitted" | "in_progress" | "waiting_on_customer" | "resolved";
    export const PreviousTicketState = {
        Submitted: "submitted",
        InProgress: "in_progress",
        WaitingOnCustomer: "waiting_on_customer",
        Resolved: "resolved",
    } as const;
    /**
     * The state of the ticket.
     */
    export type TicketState = "submitted" | "in_progress" | "waiting_on_customer" | "resolved";
    export const TicketState = {
        Submitted: "submitted",
        InProgress: "in_progress",
        WaitingOnCustomer: "waiting_on_customer",
        Resolved: "resolved",
    } as const;

    /**
     * The updated attribute data of the ticket part. Only present for attribute update parts.
     */
    export interface UpdatedAttributeData {
        /** Information about the attribute that was updated. */
        attribute: UpdatedAttributeData.Attribute;
        /** The new value of the attribute. */
        value: UpdatedAttributeData.Value;
    }

    export namespace UpdatedAttributeData {
        /**
         * Information about the attribute that was updated.
         */
        export interface Attribute {
            /** The type of the object. Always 'attribute'. */
            type: "attribute";
            /** The unique identifier of the attribute. */
            id: string;
            /** The human-readable name of the attribute. */
            label: string;
        }

        /**
         * The new value of the attribute.
         */
        export interface Value {
            /** The type of the object. Always 'value'. */
            type: "value";
            id: Value.Id;
            label: Value.Label;
        }

        export namespace Value {
            export type Id =
                /**
                 * The value for text/number/decimal/boolean/date attributes, or the ID of the list option for list attributes. */
                | string
                | undefined
                /**
                 * Array of file IDs for file attributes. */
                | number[];
            export type Label =
                /**
                 * The display value for text/number/decimal/boolean/date/list attributes. */
                | string
                /**
                 * Array of file names for file attributes. */
                | string[];
        }
    }
}
