/**
 * A sheet action opens the link you give within the Messenger as an embedded iframe.
 *
 * [More on how Sheets work is in our Canvas Kit documentation.](https://developers.intercom.com/docs/canvas-kit#sheets-optional)
 */
export interface SheetActionComponent {
    /** The type of action you are attaching to a component. */
    type: "sheet";
    /** The link which hosts your sheet. */
    url: string;
}

/**
 * A submit action triggers a [Submit Request](https://developers.intercom.com/docs/canvas-kit#submit-request) to be sent. This request will include all values which have been entered into all the interactive components on the current canvas.
 */
export interface SubmitActionComponent {
    /** The type of action you are attaching to a component. */
    type: "submit";
}

/**
 * A URL action opens a given link in a new browser tab.
 */
export interface UrlActionComponent {
    /** The type of action you are attaching to a component. */
    type: "sheet";
    /** The link which will open in a new tab. */
    url: string;
}

export type ActionComponent = SheetActionComponent | UrlActionComponent | SubmitActionComponent;

/**
 * A button component is used to take an action by clicking a button. This can either:
 * - [Trigger a submit request to be sent](https://developers.intercom.com/docs/references/canvas-kit/actioncomponents/submit-action) Inbox Messenger
 * - [Open a link in a new page](https://developers.intercom.com/docs/references/canvas-kit/actioncomponents/url-action) Inbox Messenger
 * - [Open a sheet](https://developers.intercom.com/docs/references/canvas-kit/actioncomponents/sheets-action) Messenger
 */
export interface ButtonComponent {
    /** The type of component you are rendering. */
    type: "button";
    /** A unique identifier for the component. */
    id: string;
    /** The text that will be rendered inside the button. */
    label: string;
    /** This can be a Submit Action, URL Action, or Sheets Action. */
    action: ActionComponent;
    /** Styles the button. Default is `primary`. */
    style?: "primary" | "secondary" | "link";
    /** Styles the button and prevents the action. Default is `false`. */
    disabled?: boolean;
}

type CheckboxOption = {
    /** The type of component you are rendering. */
    type: "option";
    /** A unique identifier for the option. */
    id: string;
    /** The text shown next to the checkbox. */
    text: string;
    /** Styles the option and prevents the action. Default is `false`. */
    disabled?: boolean;
};

/**
 * A checkbox component is used to capture multiple choices from as many options as you want to provide. You can submit the options by:
 *
 * - Using a {@link ButtonComponent} (which will submit all interactive components in the canvas)
 *
 * When a submit action takes place, the results are given in a hash with the `id` from the checkbox component used as the key and an array containing the `id` of each chosen option as the value.
 */
export interface CheckboxComponent {
    /** The type of component you are rendering. */
    type: "checkbox";
    /** A unique identifier for the component. */
    id: string;
    /** The list of options.Minimum of 1. */
    option: Array<CheckboxOption>;
    /** The text shown above the options. */
    label: string;
    /** The option's that are selected by default. */
    value?: Array<CheckboxOption["id"]>;
    /** Styles the input. Default is `unsaved`. Prevent action with `saved`. */
    save_state?: "unsaved" | "saved" | "failed";
    /** Styles all options and prevents the action. Default is `false`. Will be overridden if `save_state` is `saved`. */
    disabled?: boolean;
}

type DropdownOption = {
    /** The type of component you are rendering. */
    type: "option";
    /** A unique identifier for the option. */
    id: string;
    /** The text shown within this option. */
    text: string;
    /** Styles the option and prevents the action. Default is `false`. */
    disabled?: boolean;
};

/**
 * A dropdown component is used to capture a choice from the options that you provide.
 *
 * When submitted, the dropdown choices are returned in a hash with the id from the dropdown component used as the key and the id from the chosen option as the value.
 */
export interface DropdownComponent {
    /** The type of component you are rendering. */
    type: "dropdown";
    /** A unique identifier for the component. */
    id: string;
    /** The list of options.Can provide 2 to 10. */
    options: Array<DropdownOption>;
    /** The text shown above the dropdown. */
    label?: string;
    /** The option that is selected by default. */
    value?: DropdownOption["id"];
    /** Styles all options and prevents the action. Default is `false`. Will be overridden if `save_state` is `saved`. */
    save_state?: "unsaved" | "saved" | "failed";
    /** Styles all options and prevents the action. Default is `false`. Will be overridden if `save_state` is saved. */
    disabled?: boolean;
}

/**
 * An input component is used to capture text input from the end user. You can submit the value of the input by:
 *
 * - Adding an `action` to the input component (which will render an inline button)
 * - Using a {@link ButtonComponent} (which will submit all interactive components in the canvas)
 */
export interface InputComponent {
    /** The type of component you are rendering. */
    type: "input";
    /** A unique identifier for the component. */
    id: string;
    /** The text shown above the input. */
    label?: string;
    /** An example value shown inside the component when it’s empty. */
    placeholder?: string;
    /** An entered value which is already inside the component. */
    value?: string;
    /** This can be a Submit Action, URL Action, or Sheets Action. */
    action?: ActionComponent;
    /** Styles the input. Default is `unsaved`. Prevent action with `saved`. */
    save_state?: "unsaved" | "saved" | "failed";
    /** Styles the input and prevents the action. Default is `false`. Will be overridden if `save_state` is `saved`. */
    disabled?: boolean;
}

type ListItem = {
    /** The type of component you are rendering. */
    type: "item";
    /** A unique identifier for the item. */
    id: string;
    /** The text shown as the title for the item. */
    title: string;
    /** The text shown underneath the item's title. */
    subtitle?: string;
    /** The text shown next to the subtitle, separates by a bullet. */
    tertiary_text?: string;
    /** Rounds the corners of the image. Default is `false`. */
    rounded_image?: boolean;
    /** The defined state of the inputted value to render a specific style. */
    disabled?: boolean;
    /** This can be a Submit Action, URL Action, or Sheets Action. */
    action?: ActionComponent;
};

type ListItemWithoutImage = ListItem & {
    /** An image that will be displayed to the left of the item. */
    image?: string;
    /** The exact width of the image in pixels. */
    image_width?: number;
    /** The exact height of the image in pixels. */
    image_height?: number;
};

type ListItemWithImage = ListItem & {
    /** An image that will be displayed to the left of the item. */
    image: string;
    /** The exact width of the image in pixels. */
    image_width: number;
    /** The exact height of the image in pixels. */
    image_height: number;
};

/**
 * A list component renders a list of items which you provide in an array. You can make each list item take an action by adding the relevant action object to the item:
 *
 * - [Trigger a submit request to be sent](https://developers.intercom.com/docs/references/canvas-kit/actioncomponents/submit-action) Inbox Messenger
 * - [Open a link in a new page](https://developers.intercom.com/docs/references/canvas-kit/actioncomponents/url-action) Inbox Messenger
 * - [Open a sheet](https://developers.intercom.com/docs/references/canvas-kit/actioncomponents/sheets-action) Messenger
 */
export interface ListComponent {
    /** The type of component you are rendering. */
    type: "list";
    /** The items that will be rendered in the list. */
    items: Array<ListItemWithImage | ListItemWithoutImage>;
    /** Styles all list items and prevents the action. Default is `false`. */
    disabled?: boolean;
}

type SingleSelectOption = {
    /** The type of component you are rendering. */
    type: "option";
    /** A unique identifier for the option. */
    id: string;
    /** The text shown within this option. */
    text: string;
    /** Styles the option and prevents the action. Default is `false`. */
    disabled?: boolean;
};

/**
 * A single-select component is used to capture a choice from up to 10 options that you provide. You can submit the value of the select option by:
 *
 * - Adding an `action` to the single-select component
 * - Using a {@link ButtonComponent} (which will submit all interactive components in the canvas)
 * When a submit action takes place, the results are given in a hash with the `id` from the single-select component used as the key and the `id` from the chosen option as the value.
 */
export interface SingleSelectComponent {
    /** The type of component you are rendering. */
    type: "single-select";
    /** A unique identifier for the component. */
    id: string;
    /** The list of options.Can provide 2 to 10. */
    options: Array<SingleSelectOption>;
    /** The text shown above the options. */
    label?: string;
    /** The option that is selected by default. */
    value?: SingleSelectOption["id"];
    /** Styles the input. Default is `unsaved`. Prevent action with `saved`. */
    save_state?: "unsaved" | "saved" | "failed";
    /** Styles all options and prevents the action. Default is `false`. Will be overridden if `save_state` is `saved`. */
    disabled?: boolean;
    /** This can be a Submit Action, URL Action, or Sheets Action. */
    action?: ActionComponent;
}

/**
 * A text area component is used to capture a large amount of text as input with a multi-line text box. You can submit the value of the text area by:
 *
 * - Using a {@link ButtonComponent} (which will submit all interactive components in the canvas)
 */
export interface TextAreaComponent {
    /** The type of component you are rendering */
    type: "textarea";
    /** A unique identifier for the component. */
    id: string;
    /** The text shown above the text area. */
    label?: string;
    /** An example value shown inside the component when it’s empty. */
    placeholder?: string;
    /** An entered value which is already inside the component. */
    value?: string;
    /** Styles the input as failed. Default is `false`. */
    error?: boolean;
    /** Styles the input and prevents the action. Default is `false`. */
    disabled?: boolean;
}

type DataTableItem = {
    /** The type of component you are rendering. */
    type: "field-value";
    /** The text of the key in your key-value pair. */
    field: string;
    /** The text of the value in your key-value pair. */
    value: string;
};

/*
 * A data-table component is used for rendering a table of key-value pairs. For Messenger, text will wrap around on multiple lines. For Inbox and Frame (ie. Configure) views, we will truncate and use tooltips on hover if the text overflows.
 */
export interface DataTableComponent {
    /** The type of component you are rendering. */
    type: "data-table";
    /** The items that will be rendered in the data-table. */
    items: Array<DataTableItem>;
}

/*
 * A divider component is used to separate components with a line.
 */
export interface DividerComponent {
    // The type of component you are rendering.
    type: "divider";
    /** A unique identifier for the component. */
    id?: string;
    /** Disables a component’s margin-bottom of 10px. */
    bottom_margin?: "none";
}

/** An image component is used to display an image.
 *
 * HTTPS Images:
 * If your request URLs (or website URLs) are over HTTPS, you will need to ensure that images are loaded over HTTPS likewise. Otherwise, they will not work.
 */
export interface ImageComponent {
    /** The type of component you are rendering. */
    type: "image";
    /** A unique identifier for the component. */
    id?: string;
    /** The URL where the image is located. */
    url: string;
    /** Aligns the image inside the component. Default is `left`. */
    align?: "left" | "center" | "right" | "full_width";
    /** The exact width of the image in pixels. */
    width: number;
    /** The exact height of the image in pixels. */
    height: number;
    /** Rounds the corners of the image. Default is `false`. */
    rounded?: boolean;
    /** Disables a component’s margin-bottom of 10px. */
    bottom_margin?: "none";
    /** This can be a URL Action only. */
    action?: UrlActionComponent;
}

/**
 * A spacer component is used to create empty space between components.
 */
export interface SpacerComponent {
    /** The type of component you are rendering. */
    type: "spacer";
    /** A unique identifier for the component. */
    id?: string;
    /** The amount of space between components. Default is `s`. */
    size?: "xs" | "s" | "m" | "l" | "xl";
}

/**
 * The text component is used for rendering blocks of text. Links and bold font can be rendered through Markdown. There are different styles provided which edit the color, weight, and font size. These cannot be edited through Markdown.
 */
export interface TextComponent {
    /** The type of component you are rendering. */
    type: "text";
    /** A unique identifier for the component. */
    id?: string;
    /** The text that will be rendered. */
    text: string;
    /** Aligns the text. Default is `left`. */
    align?: "left" | "center" | "right";
    /** Styles the text. Default is `paragraph`. */
    style?: "header" | "paragraph" | "muted" | "error";
    /** Disables a component’s margin-bottom of 10px. */
    bottom_margin?: "none";
}

export type Component =
    | ButtonComponent
    | CheckboxComponent
    | DropdownComponent
    | InputComponent
    | ListComponent
    | SingleSelectComponent
    | TextAreaComponent
    | DataTableComponent
    | DividerComponent
    | ImageComponent
    | SpacerComponent
    | TextComponent;
