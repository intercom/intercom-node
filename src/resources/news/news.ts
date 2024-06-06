// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as NewsItemsAPI from './news-items';
import * as NewsfeedsAPI from './newsfeeds/newsfeeds';

export class News extends APIResource {
  newsItems: NewsItemsAPI.NewsItems = new NewsItemsAPI.NewsItems(this._client);
  newsfeeds: NewsfeedsAPI.Newsfeeds = new NewsfeedsAPI.Newsfeeds(this._client);
}

export namespace News {
  export import NewsItems = NewsItemsAPI.NewsItems;
  export import NewsItem = NewsItemsAPI.NewsItem;
  export import NewsItemDeleteResponse = NewsItemsAPI.NewsItemDeleteResponse;
  export import NewsItemCreateParams = NewsItemsAPI.NewsItemCreateParams;
  export import NewsItemRetrieveParams = NewsItemsAPI.NewsItemRetrieveParams;
  export import NewsItemUpdateParams = NewsItemsAPI.NewsItemUpdateParams;
  export import NewsItemListParams = NewsItemsAPI.NewsItemListParams;
  export import NewsItemDeleteParams = NewsItemsAPI.NewsItemDeleteParams;
  export import Newsfeeds = NewsfeedsAPI.Newsfeeds;
  export import Newsfeed = NewsfeedsAPI.Newsfeed;
  export import NewsfeedRetrieveParams = NewsfeedsAPI.NewsfeedRetrieveParams;
  export import NewsfeedListParams = NewsfeedsAPI.NewsfeedListParams;
}
