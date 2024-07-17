/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface UpdateVisitorRequestWithId {
    /** A unique identified for the visitor which is given by Intercom. */
    id: string;
    /** The custom attributes which are set for the visitor. */
    custom_attributes?: Record<string, string>;
}
