// File generated from our OpenAPI spec by Stainless.

import * as Core from 'intercom/core';
import { APIResource } from 'intercom/resource';
import { isRequestOptions } from 'intercom/core';
import * as CollectionsAPI from 'intercom/resources/help-center/collections';

export class Collections extends APIResource {
  /**
   * You can create a new collection by making a POST request to
   * `https://api.intercom.io/help_center/collections.`
   */
  create(params: CollectionCreateParams, options?: Core.RequestOptions): Core.APIPromise<Collection> {
    const { 'Intercom-Version': intercomVersion, ...body } = params;
    return this._client.post('/help_center/collections', {
      body,
      ...options,
      headers: { 'Intercom-Version': intercomVersion?.toString() || '', ...options?.headers },
    });
  }

  /**
   * You can fetch the details of a single collection by making a GET request to
   * `https://api.intercom.io/help_center/collections/<id>`.
   */
  retrieve(
    id: number,
    params?: CollectionRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Collection>;
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<Collection>;
  retrieve(
    id: number,
    params: CollectionRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Collection> {
    if (isRequestOptions(params)) {
      return this.retrieve(id, {}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.get(`/help_center/collections/${id}`, {
      ...options,
      headers: { 'Intercom-Version': intercomVersion?.toString() || '', ...options?.headers },
    });
  }

  /**
   * You can update the details of a single collection by making a PUT request to
   * `https://api.intercom.io/collections/<id>`.
   */
  update(
    id: number,
    params?: CollectionUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Collection>;
  update(id: number, options?: Core.RequestOptions): Core.APIPromise<Collection>;
  update(
    id: number,
    params: CollectionUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Collection> {
    if (isRequestOptions(params)) {
      return this.update(id, {}, params);
    }
    const { 'Intercom-Version': intercomVersion, ...body } = params;
    return this._client.put(`/help_center/collections/${id}`, {
      body,
      ...options,
      headers: { 'Intercom-Version': intercomVersion?.toString() || '', ...options?.headers },
    });
  }

  /**
   * You can fetch a list of all collections by making a GET request to
   * `https://api.intercom.io/help_center/collections`.
   *
   * > 📘 How are the collections sorted and ordered?
   * >
   * > Collections will be returned in descending order on the `updated_at`
   * > attribute. This means if you need to iterate through results then we'll show
   * > the most recently updated collections first.
   */
  list(params?: CollectionListParams, options?: Core.RequestOptions): Core.APIPromise<CollectionList>;
  list(options?: Core.RequestOptions): Core.APIPromise<CollectionList>;
  list(
    params: CollectionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CollectionList> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.get('/help_center/collections', {
      ...options,
      headers: { 'Intercom-Version': intercomVersion?.toString() || '', ...options?.headers },
    });
  }

  /**
   * You can delete a single collection by making a DELETE request to
   * `https://api.intercom.io/collections/<id>`.
   */
  delete(
    id: number,
    params?: CollectionDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeletedCollectionObject>;
  delete(id: number, options?: Core.RequestOptions): Core.APIPromise<DeletedCollectionObject>;
  delete(
    id: number,
    params: CollectionDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeletedCollectionObject> {
    if (isRequestOptions(params)) {
      return this.delete(id, {}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.delete(`/help_center/collections/${id}`, {
      ...options,
      headers: { 'Intercom-Version': intercomVersion?.toString() || '', ...options?.headers },
    });
  }
}

/**
 * Collections are top level containers for Articles within the Help Center.
 */
export interface Collection {
  /**
   * The unique identifier for the collection which is given by Intercom.
   */
  id?: string;

  /**
   * The time when the article was created. For multilingual articles, this will be
   * the timestamp of creation of the default language's content.
   */
  created_at?: number;

  /**
   * The default locale of the help center. This field is only returned for
   * multilingual help centers.
   */
  default_locale?: string;

  /**
   * The description of the collection. For multilingual help centers, this will be
   * the description of the collection for the default language.
   */
  description?: string | null;

  /**
   * The id of the help center the collection is in.
   */
  help_center_id?: number | null;

  /**
   * The icon of the collection.
   */
  icon?: string | null;

  /**
   * The name of the collection. For multilingual collections, this will be the name
   * of the default language's content.
   */
  name?: string;

  /**
   * The order of the section in relation to others sections within a collection.
   * Values go from ` 0`` upwards.  `0`` is the default if there's no order.
   */
  order?: number;

  /**
   * The id of the parent collection. If `null` then it is the first level
   * collection.
   */
  parent_id?: string | null;

  /**
   * The Translated Content of an Group. The keys are the locale codes and the values
   * are the translated content of the Group.
   */
  translated_content?: Collection.TranslatedContent | null;

  /**
   * The time when the article was last updated. For multilingual articles, this will
   * be the timestamp of last update of the default language's content.
   */
  updated_at?: number;

  /**
   * The URL of the collection. For multilingual help centers, this will be the URL
   * of the collection for the default language.
   */
  url?: string | null;

  /**
   * The id of the workspace which the collection belongs to.
   */
  workspace_id?: string;
}

export namespace Collection {
  /**
   * The Translated Content of an Group. The keys are the locale codes and the values
   * are the translated content of the Group.
   */
  export interface TranslatedContent {
    /**
     * The content of the group in Indonesian
     */
    id?: TranslatedContent.ID | null;

    /**
     * The content of the group in Arabic
     */
    ar?: TranslatedContent.Ar | null;

    /**
     * The content of the group in Bulgarian
     */
    bg?: TranslatedContent.Bg | null;

    /**
     * The content of the group in Bosnian
     */
    bs?: TranslatedContent.Bs | null;

    /**
     * The content of the group in Catalan
     */
    ca?: TranslatedContent.Ca | null;

    /**
     * The content of the group in Czech
     */
    cs?: TranslatedContent.Cs | null;

    /**
     * The content of the group in Danish
     */
    da?: TranslatedContent.Da | null;

    /**
     * The content of the group in German
     */
    de?: TranslatedContent.De | null;

    /**
     * The content of the group in Greek
     */
    el?: TranslatedContent.El | null;

    /**
     * The content of the group in English
     */
    en?: TranslatedContent.En | null;

    /**
     * The content of the group in Spanish
     */
    es?: TranslatedContent.Es | null;

    /**
     * The content of the group in Estonian
     */
    et?: TranslatedContent.Et | null;

    /**
     * The content of the group in Finnish
     */
    fi?: TranslatedContent.Fi | null;

    /**
     * The content of the group in French
     */
    fr?: TranslatedContent.Fr | null;

    /**
     * The content of the group in Hebrew
     */
    he?: TranslatedContent.He | null;

    /**
     * The content of the group in Croatian
     */
    hr?: TranslatedContent.Hr | null;

    /**
     * The content of the group in Hungarian
     */
    hu?: TranslatedContent.Hu | null;

    /**
     * The content of the group in Italian
     */
    it?: TranslatedContent.It | null;

    /**
     * The content of the group in Japanese
     */
    ja?: TranslatedContent.Ja | null;

    /**
     * The content of the group in Korean
     */
    ko?: TranslatedContent.Ko | null;

    /**
     * The content of the group in Lithuanian
     */
    lt?: TranslatedContent.Lt | null;

    /**
     * The content of the group in Latvian
     */
    lv?: TranslatedContent.Lv | null;

    /**
     * The content of the group in Mongolian
     */
    mn?: TranslatedContent.Mn | null;

    /**
     * The content of the group in Norwegian
     */
    nb?: TranslatedContent.Nb | null;

    /**
     * The content of the group in Dutch
     */
    nl?: TranslatedContent.Nl | null;

    /**
     * The content of the group in Polish
     */
    pl?: TranslatedContent.Pl | null;

    /**
     * The content of the group in Portuguese (Portugal)
     */
    pt?: TranslatedContent.Pt | null;

    /**
     * The content of the group in Portuguese (Brazil)
     */
    'pt-BR'?: TranslatedContent.PtBr | null;

    /**
     * The content of the group in Romanian
     */
    ro?: TranslatedContent.Ro | null;

    /**
     * The content of the group in Russian
     */
    ru?: TranslatedContent.Ru | null;

    /**
     * The content of the group in Slovenian
     */
    sl?: TranslatedContent.Sl | null;

    /**
     * The content of the group in Serbian
     */
    sr?: TranslatedContent.Sr | null;

    /**
     * The content of the group in Swedish
     */
    sv?: TranslatedContent.Sv | null;

    /**
     * The content of the group in Turkish
     */
    tr?: TranslatedContent.Tr | null;

    /**
     * The type of object - group_translated_content.
     */
    type?: 'group_translated_content' | null;

    /**
     * The content of the group in Vietnamese
     */
    vi?: TranslatedContent.Vi | null;

    /**
     * The content of the group in Chinese (China)
     */
    'zh-CN'?: TranslatedContent.ZhCn | null;

    /**
     * The content of the group in Chinese (Taiwan)
     */
    'zh-TW'?: TranslatedContent.ZhTw | null;
  }

  export namespace TranslatedContent {
    /**
     * The content of the group in Indonesian
     */
    export interface ID {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Arabic
     */
    export interface Ar {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Bulgarian
     */
    export interface Bg {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Bosnian
     */
    export interface Bs {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Catalan
     */
    export interface Ca {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Czech
     */
    export interface Cs {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Danish
     */
    export interface Da {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in German
     */
    export interface De {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Greek
     */
    export interface El {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in English
     */
    export interface En {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Spanish
     */
    export interface Es {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Estonian
     */
    export interface Et {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Finnish
     */
    export interface Fi {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in French
     */
    export interface Fr {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Hebrew
     */
    export interface He {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Croatian
     */
    export interface Hr {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Hungarian
     */
    export interface Hu {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Italian
     */
    export interface It {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Japanese
     */
    export interface Ja {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Korean
     */
    export interface Ko {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Lithuanian
     */
    export interface Lt {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Latvian
     */
    export interface Lv {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Mongolian
     */
    export interface Mn {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Norwegian
     */
    export interface Nb {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Dutch
     */
    export interface Nl {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Polish
     */
    export interface Pl {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Portuguese (Portugal)
     */
    export interface Pt {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Portuguese (Brazil)
     */
    export interface PtBr {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Romanian
     */
    export interface Ro {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Russian
     */
    export interface Ru {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Slovenian
     */
    export interface Sl {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Serbian
     */
    export interface Sr {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Swedish
     */
    export interface Sv {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Turkish
     */
    export interface Tr {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Vietnamese
     */
    export interface Vi {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Chinese (China)
     */
    export interface ZhCn {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Chinese (Taiwan)
     */
    export interface ZhTw {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }
  }
}

/**
 * This will return a list of Collections for the App.
 */
export interface CollectionList {
  /**
   * An array of collection objects
   */
  data?: Array<Collection>;

  /**
   * Cursor-based pagination is a technique used in the Intercom API to navigate
   * through large amounts of data. A "cursor" or pointer is used to keep track of
   * the current position in the result set, allowing the API to return the data in
   * small chunks or "pages" as needed.
   */
  pages?: CollectionList.Pages | null;

  /**
   * A count of the total number of collections.
   */
  total_count?: number;

  /**
   * The type of the object - `list`.
   */
  type?: 'list';
}

export namespace CollectionList {
  /**
   * Cursor-based pagination is a technique used in the Intercom API to navigate
   * through large amounts of data. A "cursor" or pointer is used to keep track of
   * the current position in the result set, allowing the API to return the data in
   * small chunks or "pages" as needed.
   */
  export interface Pages {
    next?: Pages.Next | null;

    /**
     * The current page
     */
    page?: number;

    /**
     * Number of results per page
     */
    per_page?: number;

    /**
     * Total number of pages
     */
    total_pages?: number;

    /**
     * the type of object `pages`.
     */
    type?: 'pages';
  }

  export namespace Pages {
    export interface Next {
      page?: number;

      starting_after?: string;
    }
  }
}

/**
 * Response returned when an object is deleted
 */
export interface DeletedCollectionObject {
  /**
   * The unique identifier for the collection which you provided in the URL.
   */
  id?: string;

  /**
   * Whether the collection was deleted successfully or not.
   */
  deleted?: boolean;

  /**
   * The type of object which was deleted. - `collection`
   */
  object?: 'collection';
}

export interface CollectionCreateParams {
  /**
   * Body param: The name of the collection. For multilingual collections, this will
   * be the name of the default language's content.
   */
  name: string;

  /**
   * Body param: The description of the collection. For multilingual collections,
   * this will be the description of the default language's content.
   */
  description?: string;

  /**
   * Body param: The id of the help center where the collection will be created. If
   * `null` then it will be created in the default help center.
   */
  help_center_id?: number | null;

  /**
   * Body param: The id of the parent collection. If `null` then it will be created
   * as the first level collection.
   */
  parent_id?: string | null;

  /**
   * Body param: The Translated Content of an Group. The keys are the locale codes
   * and the values are the translated content of the Group.
   */
  translated_content?: CollectionCreateParams.TranslatedContent | null;

  /**
   * Header param: Intercom API version.</br>By default, it's equal to the version
   * set in the app package.
   */
  'Intercom-Version'?:
    | '1.0'
    | '1.1'
    | '1.2'
    | '1.3'
    | '1.4'
    | '2.0'
    | '2.1'
    | '2.2'
    | '2.3'
    | '2.4'
    | '2.5'
    | '2.6'
    | '2.7'
    | '2.8'
    | '2.9'
    | '2.10'
    | 'Unstable';
}

export namespace CollectionCreateParams {
  /**
   * The Translated Content of an Group. The keys are the locale codes and the values
   * are the translated content of the Group.
   */
  export interface TranslatedContent {
    /**
     * The content of the group in Indonesian
     */
    id?: TranslatedContent.ID | null;

    /**
     * The content of the group in Arabic
     */
    ar?: TranslatedContent.Ar | null;

    /**
     * The content of the group in Bulgarian
     */
    bg?: TranslatedContent.Bg | null;

    /**
     * The content of the group in Bosnian
     */
    bs?: TranslatedContent.Bs | null;

    /**
     * The content of the group in Catalan
     */
    ca?: TranslatedContent.Ca | null;

    /**
     * The content of the group in Czech
     */
    cs?: TranslatedContent.Cs | null;

    /**
     * The content of the group in Danish
     */
    da?: TranslatedContent.Da | null;

    /**
     * The content of the group in German
     */
    de?: TranslatedContent.De | null;

    /**
     * The content of the group in Greek
     */
    el?: TranslatedContent.El | null;

    /**
     * The content of the group in English
     */
    en?: TranslatedContent.En | null;

    /**
     * The content of the group in Spanish
     */
    es?: TranslatedContent.Es | null;

    /**
     * The content of the group in Estonian
     */
    et?: TranslatedContent.Et | null;

    /**
     * The content of the group in Finnish
     */
    fi?: TranslatedContent.Fi | null;

    /**
     * The content of the group in French
     */
    fr?: TranslatedContent.Fr | null;

    /**
     * The content of the group in Hebrew
     */
    he?: TranslatedContent.He | null;

    /**
     * The content of the group in Croatian
     */
    hr?: TranslatedContent.Hr | null;

    /**
     * The content of the group in Hungarian
     */
    hu?: TranslatedContent.Hu | null;

    /**
     * The content of the group in Italian
     */
    it?: TranslatedContent.It | null;

    /**
     * The content of the group in Japanese
     */
    ja?: TranslatedContent.Ja | null;

    /**
     * The content of the group in Korean
     */
    ko?: TranslatedContent.Ko | null;

    /**
     * The content of the group in Lithuanian
     */
    lt?: TranslatedContent.Lt | null;

    /**
     * The content of the group in Latvian
     */
    lv?: TranslatedContent.Lv | null;

    /**
     * The content of the group in Mongolian
     */
    mn?: TranslatedContent.Mn | null;

    /**
     * The content of the group in Norwegian
     */
    nb?: TranslatedContent.Nb | null;

    /**
     * The content of the group in Dutch
     */
    nl?: TranslatedContent.Nl | null;

    /**
     * The content of the group in Polish
     */
    pl?: TranslatedContent.Pl | null;

    /**
     * The content of the group in Portuguese (Portugal)
     */
    pt?: TranslatedContent.Pt | null;

    /**
     * The content of the group in Portuguese (Brazil)
     */
    'pt-BR'?: TranslatedContent.PtBr | null;

    /**
     * The content of the group in Romanian
     */
    ro?: TranslatedContent.Ro | null;

    /**
     * The content of the group in Russian
     */
    ru?: TranslatedContent.Ru | null;

    /**
     * The content of the group in Slovenian
     */
    sl?: TranslatedContent.Sl | null;

    /**
     * The content of the group in Serbian
     */
    sr?: TranslatedContent.Sr | null;

    /**
     * The content of the group in Swedish
     */
    sv?: TranslatedContent.Sv | null;

    /**
     * The content of the group in Turkish
     */
    tr?: TranslatedContent.Tr | null;

    /**
     * The type of object - group_translated_content.
     */
    type?: 'group_translated_content' | null;

    /**
     * The content of the group in Vietnamese
     */
    vi?: TranslatedContent.Vi | null;

    /**
     * The content of the group in Chinese (China)
     */
    'zh-CN'?: TranslatedContent.ZhCn | null;

    /**
     * The content of the group in Chinese (Taiwan)
     */
    'zh-TW'?: TranslatedContent.ZhTw | null;
  }

  export namespace TranslatedContent {
    /**
     * The content of the group in Indonesian
     */
    export interface ID {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Arabic
     */
    export interface Ar {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Bulgarian
     */
    export interface Bg {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Bosnian
     */
    export interface Bs {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Catalan
     */
    export interface Ca {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Czech
     */
    export interface Cs {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Danish
     */
    export interface Da {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in German
     */
    export interface De {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Greek
     */
    export interface El {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in English
     */
    export interface En {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Spanish
     */
    export interface Es {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Estonian
     */
    export interface Et {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Finnish
     */
    export interface Fi {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in French
     */
    export interface Fr {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Hebrew
     */
    export interface He {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Croatian
     */
    export interface Hr {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Hungarian
     */
    export interface Hu {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Italian
     */
    export interface It {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Japanese
     */
    export interface Ja {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Korean
     */
    export interface Ko {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Lithuanian
     */
    export interface Lt {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Latvian
     */
    export interface Lv {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Mongolian
     */
    export interface Mn {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Norwegian
     */
    export interface Nb {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Dutch
     */
    export interface Nl {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Polish
     */
    export interface Pl {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Portuguese (Portugal)
     */
    export interface Pt {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Portuguese (Brazil)
     */
    export interface PtBr {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Romanian
     */
    export interface Ro {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Russian
     */
    export interface Ru {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Slovenian
     */
    export interface Sl {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Serbian
     */
    export interface Sr {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Swedish
     */
    export interface Sv {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Turkish
     */
    export interface Tr {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Vietnamese
     */
    export interface Vi {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Chinese (China)
     */
    export interface ZhCn {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Chinese (Taiwan)
     */
    export interface ZhTw {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }
  }
}

export interface CollectionRetrieveParams {
  /**
   * Intercom API version.</br>By default, it's equal to the version set in the app
   * package.
   */
  'Intercom-Version'?:
    | '1.0'
    | '1.1'
    | '1.2'
    | '1.3'
    | '1.4'
    | '2.0'
    | '2.1'
    | '2.2'
    | '2.3'
    | '2.4'
    | '2.5'
    | '2.6'
    | '2.7'
    | '2.8'
    | '2.9'
    | '2.10'
    | 'Unstable';
}

export interface CollectionUpdateParams {
  /**
   * Body param: The description of the collection. For multilingual collections,
   * this will be the description of the default language's content.
   */
  description?: string;

  /**
   * Body param: The name of the collection. For multilingual collections, this will
   * be the name of the default language's content.
   */
  name?: string;

  /**
   * Body param: The id of the parent collection. If `null` then it will be updated
   * as the first level collection.
   */
  parent_id?: string | null;

  /**
   * Body param: The Translated Content of an Group. The keys are the locale codes
   * and the values are the translated content of the Group.
   */
  translated_content?: CollectionUpdateParams.TranslatedContent | null;

  /**
   * Header param: Intercom API version.</br>By default, it's equal to the version
   * set in the app package.
   */
  'Intercom-Version'?:
    | '1.0'
    | '1.1'
    | '1.2'
    | '1.3'
    | '1.4'
    | '2.0'
    | '2.1'
    | '2.2'
    | '2.3'
    | '2.4'
    | '2.5'
    | '2.6'
    | '2.7'
    | '2.8'
    | '2.9'
    | '2.10'
    | 'Unstable';
}

export namespace CollectionUpdateParams {
  /**
   * The Translated Content of an Group. The keys are the locale codes and the values
   * are the translated content of the Group.
   */
  export interface TranslatedContent {
    /**
     * The content of the group in Indonesian
     */
    id?: TranslatedContent.ID | null;

    /**
     * The content of the group in Arabic
     */
    ar?: TranslatedContent.Ar | null;

    /**
     * The content of the group in Bulgarian
     */
    bg?: TranslatedContent.Bg | null;

    /**
     * The content of the group in Bosnian
     */
    bs?: TranslatedContent.Bs | null;

    /**
     * The content of the group in Catalan
     */
    ca?: TranslatedContent.Ca | null;

    /**
     * The content of the group in Czech
     */
    cs?: TranslatedContent.Cs | null;

    /**
     * The content of the group in Danish
     */
    da?: TranslatedContent.Da | null;

    /**
     * The content of the group in German
     */
    de?: TranslatedContent.De | null;

    /**
     * The content of the group in Greek
     */
    el?: TranslatedContent.El | null;

    /**
     * The content of the group in English
     */
    en?: TranslatedContent.En | null;

    /**
     * The content of the group in Spanish
     */
    es?: TranslatedContent.Es | null;

    /**
     * The content of the group in Estonian
     */
    et?: TranslatedContent.Et | null;

    /**
     * The content of the group in Finnish
     */
    fi?: TranslatedContent.Fi | null;

    /**
     * The content of the group in French
     */
    fr?: TranslatedContent.Fr | null;

    /**
     * The content of the group in Hebrew
     */
    he?: TranslatedContent.He | null;

    /**
     * The content of the group in Croatian
     */
    hr?: TranslatedContent.Hr | null;

    /**
     * The content of the group in Hungarian
     */
    hu?: TranslatedContent.Hu | null;

    /**
     * The content of the group in Italian
     */
    it?: TranslatedContent.It | null;

    /**
     * The content of the group in Japanese
     */
    ja?: TranslatedContent.Ja | null;

    /**
     * The content of the group in Korean
     */
    ko?: TranslatedContent.Ko | null;

    /**
     * The content of the group in Lithuanian
     */
    lt?: TranslatedContent.Lt | null;

    /**
     * The content of the group in Latvian
     */
    lv?: TranslatedContent.Lv | null;

    /**
     * The content of the group in Mongolian
     */
    mn?: TranslatedContent.Mn | null;

    /**
     * The content of the group in Norwegian
     */
    nb?: TranslatedContent.Nb | null;

    /**
     * The content of the group in Dutch
     */
    nl?: TranslatedContent.Nl | null;

    /**
     * The content of the group in Polish
     */
    pl?: TranslatedContent.Pl | null;

    /**
     * The content of the group in Portuguese (Portugal)
     */
    pt?: TranslatedContent.Pt | null;

    /**
     * The content of the group in Portuguese (Brazil)
     */
    'pt-BR'?: TranslatedContent.PtBr | null;

    /**
     * The content of the group in Romanian
     */
    ro?: TranslatedContent.Ro | null;

    /**
     * The content of the group in Russian
     */
    ru?: TranslatedContent.Ru | null;

    /**
     * The content of the group in Slovenian
     */
    sl?: TranslatedContent.Sl | null;

    /**
     * The content of the group in Serbian
     */
    sr?: TranslatedContent.Sr | null;

    /**
     * The content of the group in Swedish
     */
    sv?: TranslatedContent.Sv | null;

    /**
     * The content of the group in Turkish
     */
    tr?: TranslatedContent.Tr | null;

    /**
     * The type of object - group_translated_content.
     */
    type?: 'group_translated_content' | null;

    /**
     * The content of the group in Vietnamese
     */
    vi?: TranslatedContent.Vi | null;

    /**
     * The content of the group in Chinese (China)
     */
    'zh-CN'?: TranslatedContent.ZhCn | null;

    /**
     * The content of the group in Chinese (Taiwan)
     */
    'zh-TW'?: TranslatedContent.ZhTw | null;
  }

  export namespace TranslatedContent {
    /**
     * The content of the group in Indonesian
     */
    export interface ID {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Arabic
     */
    export interface Ar {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Bulgarian
     */
    export interface Bg {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Bosnian
     */
    export interface Bs {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Catalan
     */
    export interface Ca {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Czech
     */
    export interface Cs {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Danish
     */
    export interface Da {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in German
     */
    export interface De {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Greek
     */
    export interface El {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in English
     */
    export interface En {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Spanish
     */
    export interface Es {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Estonian
     */
    export interface Et {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Finnish
     */
    export interface Fi {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in French
     */
    export interface Fr {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Hebrew
     */
    export interface He {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Croatian
     */
    export interface Hr {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Hungarian
     */
    export interface Hu {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Italian
     */
    export interface It {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Japanese
     */
    export interface Ja {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Korean
     */
    export interface Ko {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Lithuanian
     */
    export interface Lt {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Latvian
     */
    export interface Lv {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Mongolian
     */
    export interface Mn {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Norwegian
     */
    export interface Nb {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Dutch
     */
    export interface Nl {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Polish
     */
    export interface Pl {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Portuguese (Portugal)
     */
    export interface Pt {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Portuguese (Brazil)
     */
    export interface PtBr {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Romanian
     */
    export interface Ro {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Russian
     */
    export interface Ru {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Slovenian
     */
    export interface Sl {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Serbian
     */
    export interface Sr {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Swedish
     */
    export interface Sv {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Turkish
     */
    export interface Tr {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Vietnamese
     */
    export interface Vi {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Chinese (China)
     */
    export interface ZhCn {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }

    /**
     * The content of the group in Chinese (Taiwan)
     */
    export interface ZhTw {
      /**
       * The description of the collection. Only available for collections.
       */
      description?: string;

      /**
       * The name of the collection or section.
       */
      name?: string;

      /**
       * The type of object - `group_content` .
       */
      type?: 'group_content' | null;
    }
  }
}

export interface CollectionListParams {
  /**
   * Intercom API version.</br>By default, it's equal to the version set in the app
   * package.
   */
  'Intercom-Version'?:
    | '1.0'
    | '1.1'
    | '1.2'
    | '1.3'
    | '1.4'
    | '2.0'
    | '2.1'
    | '2.2'
    | '2.3'
    | '2.4'
    | '2.5'
    | '2.6'
    | '2.7'
    | '2.8'
    | '2.9'
    | '2.10'
    | 'Unstable';
}

export interface CollectionDeleteParams {
  /**
   * Intercom API version.</br>By default, it's equal to the version set in the app
   * package.
   */
  'Intercom-Version'?:
    | '1.0'
    | '1.1'
    | '1.2'
    | '1.3'
    | '1.4'
    | '2.0'
    | '2.1'
    | '2.2'
    | '2.3'
    | '2.4'
    | '2.5'
    | '2.6'
    | '2.7'
    | '2.8'
    | '2.9'
    | '2.10'
    | 'Unstable';
}

export namespace Collections {
  export import Collection = CollectionsAPI.Collection;
  export import CollectionList = CollectionsAPI.CollectionList;
  export import DeletedCollectionObject = CollectionsAPI.DeletedCollectionObject;
  export import CollectionCreateParams = CollectionsAPI.CollectionCreateParams;
  export import CollectionRetrieveParams = CollectionsAPI.CollectionRetrieveParams;
  export import CollectionUpdateParams = CollectionsAPI.CollectionUpdateParams;
  export import CollectionListParams = CollectionsAPI.CollectionListParams;
  export import CollectionDeleteParams = CollectionsAPI.CollectionDeleteParams;
}
