/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Intercom from "../index";

/**
 * This will return a list of team objects for the App.
 */
export interface TeamList {
    /** The type of the object */
    type?: "team.list";
    /** A list of team objects */
    teams?: Intercom.Team[];
}
