/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Intercom from "../../../index";

/**
 * Collections are top level containers for Articles within the Help Center.
 */
export interface Collection {
    /** The unique identifier for the collection which is given by Intercom. */
    id?: string;
    /** The id of the workspace which the collection belongs to. */
    workspace_id?: string;
    /** The name of the collection. For multilingual collections, this will be the name of the default language's content. */
    name?: string;
    /** The description of the collection. For multilingual help centers, this will be the description of the collection for the default language. */
    description?: string;
    /** The time when the article was created (seconds). For multilingual articles, this will be the timestamp of creation of the default language's content. */
    created_at?: number;
    /** The time when the article was last updated (seconds). For multilingual articles, this will be the timestamp of last update of the default language's content. */
    updated_at?: number;
    /** The URL of the collection. For multilingual help centers, this will be the URL of the collection for the default language. */
    url?: string;
    /** The icon of the collection. */
    icon?: string;
    /** The order of the section in relation to others sections within a collection. Values go from `0` upwards. `0` is the default if there's no order. */
    order?: number;
    /** The default locale of the help center. This field is only returned for multilingual help centers. */
    default_locale?: string;
    translated_content?: Intercom.GroupTranslatedContent;
    /** The id of the parent collection. If `null` then it is the first level collection. */
    parent_id?: string;
    /** The id of the help center the collection is in. */
    help_center_id?: number;
}
