// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'intercom/resource';
import * as NewsItemsAPI from 'intercom/resources/news/news-items';
import * as NewsfeedsAPI from 'intercom/resources/news/newsfeeds/newsfeeds';

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
