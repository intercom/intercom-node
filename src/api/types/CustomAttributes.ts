/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Intercom from "../index";

/**
 * An object containing the different custom attributes associated to the conversation as key-value pairs. For relationship attributes the value will be a list of custom object instance models.
 */
export type CustomAttributes = Record<string, CustomAttributes.Value>;

export namespace CustomAttributes {
    export type Value = string | Intercom.CustomObjectInstance;
}