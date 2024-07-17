/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Intercom from "../index";

/**
 * You can Update an Article
 */
export interface UpdateArticleRequest {
    /** The title of the article.For multilingual articles, this will be the title of the default language's content. */
    title?: string;
    /** The description of the article. For multilingual articles, this will be the description of the default language's content. */
    description?: string;
    /** The content of the article. For multilingual articles, this will be the body of the default language's content. */
    body?: string;
    /** The id of the author of the article. For multilingual articles, this will be the id of the author of the default language's content. Must be a teammate on the help center's workspace. */
    author_id?: number;
    /** Whether the article will be `published` or will be a `draft`. Defaults to draft. For multilingual articles, this will be the state of the default language's content. */
    state?: Intercom.UpdateArticleRequestState;
    /** The id of the article's parent collection or section. An article without this field stands alone. */
    parent_id?: string;
    /** The type of parent, which can either be a `collection` or `section`. */
    parent_type?: string;
    translated_content?: Intercom.ArticleTranslatedContent;
}
