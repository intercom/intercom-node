// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ContentAPI from './content/content';

export class Download extends APIResource {
  content: ContentAPI.Content = new ContentAPI.Content(this._client);
}

export namespace Download {
  export import Content = ContentAPI.Content;
}
