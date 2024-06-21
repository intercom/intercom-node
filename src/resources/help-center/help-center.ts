// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as CollectionsAPI from './collections';
import * as HelpCentersAPI from './help-centers';

export class HelpCenter extends APIResource {
  collections: CollectionsAPI.Collections = new CollectionsAPI.Collections(this._client);
  helpCenters: HelpCentersAPI.HelpCenters = new HelpCentersAPI.HelpCenters(this._client);
}

export namespace HelpCenter {
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
  export import HelpCenter = HelpCentersAPI.HelpCenter;
  export import HelpCenterList = HelpCentersAPI.HelpCenterList;
  export import HelpCenterRetrieveParams = HelpCentersAPI.HelpCenterRetrieveParams;
  export import HelpCenterListParams = HelpCentersAPI.HelpCenterListParams;
}
