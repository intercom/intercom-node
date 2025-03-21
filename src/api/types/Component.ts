/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Intercom from "../index";

export type Component =
    | Intercom.Component.Button
    | Intercom.Component.Checkbox
    | Intercom.Component.Dropdown
    | Intercom.Component.Input
    | Intercom.Component.List
    | Intercom.Component.SingleSelect
    | Intercom.Component.Textarea
    | Intercom.Component.DataTable
    | Intercom.Component.Divider
    | Intercom.Component.Image
    | Intercom.Component.Spacer
    | Intercom.Component.Text;

export namespace Component {
    export interface Button extends Intercom.ButtonComponent {
        type: "button";
    }

    export interface Checkbox extends Intercom.CheckboxComponent {
        type: "checkbox";
    }

    export interface Dropdown extends Intercom.DropdownComponent {
        type: "dropdown";
    }

    export interface Input extends Intercom.InputComponent {
        type: "input";
    }

    export interface List extends Intercom.ListComponent {
        type: "list";
    }

    export interface SingleSelect extends Intercom.SingleSelectComponent {
        type: "single-select";
    }

    export interface Textarea extends Intercom.TextAreaComponent {
        type: "textarea";
    }

    export interface DataTable extends Intercom.DataTableComponent {
        type: "data-table";
    }

    export interface Divider extends Intercom.DividerComponent {
        type: "divider";
    }

    export interface Image extends Intercom.ImageComponent {
        type: "image";
    }

    export interface Spacer extends Intercom.SpacerComponent {
        type: "spacer";
    }

    export interface Text extends Intercom.TextComponent {
        type: "text";
    }
}
