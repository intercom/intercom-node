/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The previous state of the ticket.
 */
export type TicketPartPreviousTicketState = "submitted" | "in_progress" | "waiting_on_customer" | "resolved";

export const TicketPartPreviousTicketState = {
    Submitted: "submitted",
    InProgress: "in_progress",
    WaitingOnCustomer: "waiting_on_customer",
    Resolved: "resolved",
} as const;
