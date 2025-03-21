/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Intercom from "../../../../index";

/**
 * @example
 *     {
 *         title: "Thanks for everything",
 *         description: "Description of the Article",
 *         body: "Body of the Article",
 *         author_id: 991267407,
 *         state: "published",
 *         parent_id: 145,
 *         parent_type: "collection",
 *         translated_content: {
 *             fr: {
 *                 type: "article_content",
 *                 title: "Merci pour tout",
 *                 description: "Description de l'article",
 *                 body: "Corps de l'article",
 *                 author_id: 991267407,
 *                 state: "published"
 *             }
 *         }
 *     }
 *
 * @example
 *     {
 *         title: "Thanks for everything",
 *         description: "Description of the Article",
 *         body: "Body of the Article",
 *         author_id: 1295,
 *         state: "published"
 *     }
 */
export interface CreateArticleRequest {
    /** The title of the article.For multilingual articles, this will be the title of the default language's content. */
    title: string;
    /** The description of the article. For multilingual articles, this will be the description of the default language's content. */
    description?: string;
    /** The content of the article. For multilingual articles, this will be the body of the default language's content. */
    body?: string;
    /** The id of the author of the article. For multilingual articles, this will be the id of the author of the default language's content. Must be a teammate on the help center's workspace. */
    author_id: number;
    /** Whether the article will be `published` or will be a `draft`. Defaults to draft. For multilingual articles, this will be the state of the default language's content. */
    state?: CreateArticleRequest.State;
    /** The id of the article's parent collection or section. An article without this field stands alone. */
    parent_id?: number;
    /** The type of parent, which can either be a `collection` or `section`. */
    parent_type?: CreateArticleRequest.ParentType;
    translated_content?: Intercom.ArticleTranslatedContent;
}

export namespace CreateArticleRequest {
    /**
     * Whether the article will be `published` or will be a `draft`. Defaults to draft. For multilingual articles, this will be the state of the default language's content.
     */
    export type State = "published" | "draft";
    export const State = {
        Published: "published",
        Draft: "draft",
    } as const;
    /**
     * The type of parent, which can either be a `collection` or `section`.
     */
    export type ParentType = "collection" | "section";
    export const ParentType = {
        Collection: "collection",
        Section: "section",
    } as const;
}
