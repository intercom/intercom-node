// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'intercom/resource';
import * as ContentAPI from 'intercom/resources/download/content/content';

export class Download extends APIResource {
  content: ContentAPI.Content = new ContentAPI.Content(this._client);
}

export namespace Download {
  export import Content = ContentAPI.Content;
}
