/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Intercom from "../../../index";

/**
 * Admins are the teammate accounts that have access to a workspace
 */
export interface AdminWithApp {
    /** String representing the object's type. Always has the value `admin`. */
    type?: string;
    /** The id representing the admin. */
    id?: string;
    /** The name of the admin. */
    name?: string;
    /** The email of the admin. */
    email?: string;
    /** The job title of the admin. */
    job_title?: string;
    /** Identifies if this admin is currently set in away mode. */
    away_mode_enabled?: boolean;
    /** Identifies if this admin is set to automatically reassign new conversations to the apps default inbox. */
    away_mode_reassign?: boolean;
    /** Identifies if this admin has a paid inbox seat to restrict/allow features that require them. */
    has_inbox_seat?: boolean;
    /** This is a list of ids of the teams that this admin is part of. */
    team_ids?: number[];
    /** This object represents the avatar associated with the admin. */
    avatar?: AdminWithApp.Avatar;
    /** Identifies if this admin's email is verified. */
    email_verified?: boolean;
    /** App that the admin belongs to. */
    app?: Intercom.unstable.App;
}

export namespace AdminWithApp {
    /**
     * This object represents the avatar associated with the admin.
     */
    export interface Avatar {
        /** This is a string that identifies the type of the object. It will always have the value `avatar`. */
        type?: string;
        /** This object represents the avatar associated with the admin. */
        image_url?: string;
    }
}
