/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Intercom from "../index";

/**
 * A button component is used to take an action by clicking a button. This can either:
 * - [Trigger a submit request to be sent](https://developers.intercom.com/docs/references/canvas-kit/actioncomponents/submit-action) Inbox Messenger
 * - [Open a link in a new page](https://developers.intercom.com/docs/references/canvas-kit/actioncomponents/url-action) Inbox Messenger
 * - [Open a sheet](https://developers.intercom.com/docs/references/canvas-kit/actioncomponents/sheets-action) Messenger
 */
export interface ButtonComponent {
    /** A unique identifier for the component. */
    id: string;
    /** The text that will be rendered inside the button. */
    label: string;
    /** This can be a Submit Action, URL Action, or Sheets Action. */
    action: Intercom.ActionComponent;
    /** Styles the button. Default is 'primary'. */
    style?: ButtonComponent.Style;
    /** Styles the button and prevents the action. Default is false. */
    disabled?: boolean;
}

export namespace ButtonComponent {
    /**
     * Styles the button. Default is 'primary'.
     */
    export type Style = "primary" | "secondary" | "link";
    export const Style = {
        Primary: "primary",
        Secondary: "secondary",
        Link: "link",
    } as const;
}
