/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The state the ticket is currently in
 */
export type TicketTicketState = "submitted" | "in_progress" | "waiting_on_customer" | "resolved";

export const TicketTicketState = {
    Submitted: "submitted",
    InProgress: "in_progress",
    WaitingOnCustomer: "waiting_on_customer",
    Resolved: "resolved",
} as const;
