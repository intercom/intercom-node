/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Intercom from "../index";

/**
 * The attributes set on the ticket. When setting the default title and description attributes, the attribute keys that should be used are `_default_title_` and `_default_description_`. When setting ticket type attributes of the list attribute type, the key should be the attribute name and the value of the attribute should be the list item id, obtainable by [listing the ticket type](ref:get_ticket-types). For example, if the ticket type has an attribute called `priority` of type `list`, the key should be `priority` and the value of the attribute should be the guid of the list item (e.g. `de1825a0-0164-4070-8ca6-13e22462fa7e`).
 */
export type TicketRequestCustomAttributes = Record<string, Intercom.TicketRequestCustomAttributesValue>;
