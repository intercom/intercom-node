/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * A checkbox option component that can be selected.
 */
export interface CheckboxOption {
    /** The type of component you are rendering. */
    type: "option";
    /** A unique identifier for the option. */
    id: string;
    /** The text shown next to the checkbox. */
    text: string;
    /** Styles the option and prevents the action. Default is false. */
    disabled?: boolean;
}
