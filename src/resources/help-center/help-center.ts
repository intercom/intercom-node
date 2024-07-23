// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as HelpCenterAPI from './help-center';
import * as CollectionsAPI from './collections';
import * as HelpCentersAPI from './help-centers';

export class HelpCenterResource extends APIResource {
  collections: CollectionsAPI.Collections = new CollectionsAPI.Collections(this._client);
  helpCenters: HelpCentersAPI.HelpCenters = new HelpCentersAPI.HelpCenters(this._client);
}

/**
 * Help Centers contain collections
 */
export interface HelpCenter {
  /**
   * The unique identifier for the Help Center which is given by Intercom.
   */
  id?: string;

  /**
   * The time when the Help Center was created.
   */
  created_at?: number;

  /**
   * The display name of the Help Center only seen by teammates.
   */
  display_name?: string;

  /**
   * The identifier of the Help Center. This is used in the URL of the Help Center.
   */
  identifier?: string;

  /**
   * The time when the Help Center was last updated.
   */
  updated_at?: number;

  /**
   * Whether the Help Center is turned on or not. This is controlled in your Help
   * Center settings.
   */
  website_turned_on?: boolean;

  /**
   * The id of the workspace which the Help Center belongs to.
   */
  workspace_id?: string;
}

/**
 * A list of Help Centers belonging to the App
 */
export interface HelpCenterList {
  /**
   * An array of Help Center objects
   */
  data?: Array<HelpCenter>;

  /**
   * The type of the object - `list`.
   */
  type?: 'list';
}

export namespace HelpCenterResource {
  export import HelpCenter = HelpCenterAPI.HelpCenter;
  export import HelpCenterList = HelpCenterAPI.HelpCenterList;
  export import Collections = CollectionsAPI.Collections;
  export import Collection = CollectionsAPI.Collection;
  export import CollectionList = CollectionsAPI.CollectionList;
  export import DeletedCollection = CollectionsAPI.DeletedCollection;
  export import CollectionCreateParams = CollectionsAPI.CollectionCreateParams;
  export import CollectionRetrieveParams = CollectionsAPI.CollectionRetrieveParams;
  export import CollectionUpdateParams = CollectionsAPI.CollectionUpdateParams;
  export import CollectionListParams = CollectionsAPI.CollectionListParams;
  export import CollectionDeleteParams = CollectionsAPI.CollectionDeleteParams;
  export import HelpCenters = HelpCentersAPI.HelpCenters;
  export import HelpCenterRetrieveParams = HelpCentersAPI.HelpCenterRetrieveParams;
  export import HelpCenterListParams = HelpCentersAPI.HelpCenterListParams;
}
