// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'intercom/resource';
import * as ContentImportSourcesAPI from 'intercom/resources/ai/content-import-sources';
import * as ExternalPagesAPI from 'intercom/resources/ai/external-pages';

export class AI extends APIResource {
  contentImportSources: ContentImportSourcesAPI.ContentImportSources =
    new ContentImportSourcesAPI.ContentImportSources(this._client);
  externalPages: ExternalPagesAPI.ExternalPages = new ExternalPagesAPI.ExternalPages(this._client);
}

export namespace AI {
  export import ContentImportSources = ContentImportSourcesAPI.ContentImportSources;
  export import ContentImportSource = ContentImportSourcesAPI.ContentImportSource;
  export import ContentImportSourcesList = ContentImportSourcesAPI.ContentImportSourcesList;
  export import ContentImportSourceCreateParams = ContentImportSourcesAPI.ContentImportSourceCreateParams;
  export import ContentImportSourceRetrieveParams = ContentImportSourcesAPI.ContentImportSourceRetrieveParams;
  export import ContentImportSourceUpdateParams = ContentImportSourcesAPI.ContentImportSourceUpdateParams;
  export import ContentImportSourceListParams = ContentImportSourcesAPI.ContentImportSourceListParams;
  export import ContentImportSourceDeleteParams = ContentImportSourcesAPI.ContentImportSourceDeleteParams;
  export import ExternalPages = ExternalPagesAPI.ExternalPages;
  export import ExternalPage = ExternalPagesAPI.ExternalPage;
  export import ExternalPagesList = ExternalPagesAPI.ExternalPagesList;
  export import ExternalPageCreateParams = ExternalPagesAPI.ExternalPageCreateParams;
  export import ExternalPageRetrieveParams = ExternalPagesAPI.ExternalPageRetrieveParams;
  export import ExternalPageUpdateParams = ExternalPagesAPI.ExternalPageUpdateParams;
  export import ExternalPageListParams = ExternalPagesAPI.ExternalPageListParams;
  export import ExternalPageRemoveAllParams = ExternalPagesAPI.ExternalPageRemoveAllParams;
}
