/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Intercom from "../index";

/**
 * The content object is where you specify the UI of your app. You provide us with a set of `components` in a components array that we then render.
 *
 * The content object should usually be returned within the [canvas object](https://developers.intercom.com/docs/references/canvas-kit/responseobjects/canvas). If you're responding to a Live Canvas request however, then you should only respond with the content object.
 */
export interface ContentObject {
    /** The list of components to be rendered. */
    components: Intercom.Component[];
}
