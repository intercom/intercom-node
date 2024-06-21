// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { AbstractPage, Response, APIClient, FinalRequestOptions, PageInfo } from './core';

export interface CursorPaginationResponse<Item> {
  pages: CursorPaginationResponse.Pages;

  total_count: number;

  data: Array<Item>;
}

export namespace CursorPaginationResponse {
  export interface Pages {
    next?: Pages.Next;

    page?: number;

    total_pages?: number;

    type?: string;
  }

  export namespace Pages {
    export interface Next {
      page?: number;

      starting_after?: string;
    }
  }
}

export interface CursorPaginationParams {
  /**
   * The pagination cursor value.
   */
  starting_after?: string;

  /**
   * Number of results to return per page.
   */
  per_page?: number;
}

export class CursorPagination<Item> extends AbstractPage<Item> implements CursorPaginationResponse<Item> {
  pages: CursorPaginationResponse.Pages;

  total_count: number;

  data: Array<Item>;

  constructor(
    client: APIClient,
    response: Response,
    body: CursorPaginationResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.pages = body.pages || {};
    this.total_count = body.total_count || 0;
    this.data = body.data || [];
  }

  getPaginatedItems(): Item[] {
    return this.data ?? [];
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<CursorPaginationParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const cursor = this.pages?.next?.starting_after;
    if (!cursor) {
      return null;
    }

    return {
      params: {
        starting_after: cursor,
      },
    };
  }
}
