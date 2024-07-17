/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Ticket type attribute, used to define each data field to be captured in a ticket.
 */
export interface TicketTypeAttribute {
    /** String representing the object's type. Always has the value `ticket_type_attribute`. */
    type?: string;
    /** The id representing the ticket type attribute. */
    id?: string;
    /** The id of the workspace that the ticket type attribute belongs to. */
    workspace_id?: string;
    /** The name of the ticket type attribute */
    name?: string;
    /** The description of the ticket type attribute */
    description?: string;
    /** The type of the data attribute (allowed values: "string list integer decimal boolean datetime files") */
    data_type?: string;
    /** Input options for the attribute */
    input_options?: Record<string, unknown>;
    /** The order of the attribute against other attributes */
    order?: number;
    /** Whether the attribute is required or not for teammates. */
    required_to_create?: boolean;
    /** Whether the attribute is required or not for contacts. */
    required_to_create_for_contacts?: boolean;
    /** Whether the attribute is visible or not to teammates. */
    visible_on_create?: boolean;
    /** Whether the attribute is visible or not to contacts. */
    visible_to_contacts?: boolean;
    /** Whether the attribute is built in or not. */
    default?: boolean;
    /** The id of the ticket type that the attribute belongs to. */
    ticket_type_id?: number;
    /** Whether the ticket type attribute is archived or not. */
    archived?: boolean;
    /** The date and time the ticket type attribute was created. */
    created_at?: number;
    /** The date and time the ticket type attribute was last updated. */
    updated_at?: number;
}
