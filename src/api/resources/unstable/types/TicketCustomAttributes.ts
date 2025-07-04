/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Intercom from "../../../index";

/**
 * An object containing the different attributes associated to the ticket as key-value pairs. For the default title and description attributes, the keys are `_default_title_` and `_default_description_`.
 */
export type TicketCustomAttributes = Record<string, TicketCustomAttributes.Value>;

export namespace TicketCustomAttributes {
    export type Value = string | undefined | number | boolean | unknown[] | Intercom.unstable.FileAttribute;
}
