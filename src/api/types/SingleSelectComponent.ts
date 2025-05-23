/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Intercom from "../index";

/**
 * A single-select component is used to capture a choice from up to 10 options that you provide. You can submit the value of the select option by:
 *
 * - Adding an `action` to the single-select component
 * - Using a ButtonComponent (which will submit all interactive components in the canvas)
 *
 * When a submit action takes place, the results are given in a hash with the `id` from the single-select component used as the key and the `id` from the chosen option as the value.
 */
export interface SingleSelectComponent {
    /** A unique identifier for the component. */
    id: string;
    /** The list of options. Can provide 2 to 10. */
    options: Intercom.SingleSelectOption[];
    /** The text shown above the options. */
    label?: string;
    /** The option that is selected by default. */
    value?: string;
    /** Styles the input. Default is `unsaved`. Prevent action with `saved`. */
    save_state?: SingleSelectComponent.SaveState;
    /** Styles all options and prevents the action. Default is false. Will be overridden if save_state is saved. */
    disabled?: boolean;
    /** This can be a Submit Action, URL Action, or Sheets Action. */
    action?: Intercom.ActionComponent;
}

export namespace SingleSelectComponent {
    /**
     * Styles the input. Default is `unsaved`. Prevent action with `saved`.
     */
    export type SaveState = "unsaved" | "saved" | "failed";
    export const SaveState = {
        Unsaved: "unsaved",
        Saved: "saved",
        Failed: "failed",
    } as const;
}
