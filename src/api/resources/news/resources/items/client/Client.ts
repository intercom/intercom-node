/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Intercom from "../../../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../../../errors/index";

export declare namespace Items {
    export interface Options {
        environment?: core.Supplier<environments.IntercomEnvironment | string>;
        /** Specify a custom URL to connect the client to. */
        baseUrl?: core.Supplier<string>;
        token?: core.Supplier<core.BearerToken | undefined>;
        /** Override the Intercom-Version header */
        version?:
            | "1.0"
            | "1.1"
            | "1.2"
            | "1.3"
            | "1.4"
            | "2.0"
            | "2.1"
            | "2.2"
            | "2.3"
            | "2.4"
            | "2.5"
            | "2.6"
            | "2.7"
            | "2.8"
            | "2.9"
            | "2.10"
            | "2.11"
            | "Unstable";
        fetcher?: core.FetchFunction;
    }

    export interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
        /** Override the Intercom-Version header */
        version?:
            | "1.0"
            | "1.1"
            | "1.2"
            | "1.3"
            | "1.4"
            | "2.0"
            | "2.1"
            | "2.2"
            | "2.3"
            | "2.4"
            | "2.5"
            | "2.6"
            | "2.7"
            | "2.8"
            | "2.9"
            | "2.10"
            | "2.11"
            | "Unstable";
    }
}

export class Items {
    constructor(protected readonly _options: Items.Options = {}) {}

    /**
     * You can fetch a list of all news items
     *
     * @param {Items.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Intercom.UnauthorizedError}
     *
     * @example
     *     await client.news.items.list()
     */
    public list(requestOptions?: Items.RequestOptions): core.HttpResponsePromise<Intercom.PaginatedNewsItemResponse> {
        return core.HttpResponsePromise.fromPromise(this.__list(requestOptions));
    }

    private async __list(
        requestOptions?: Items.RequestOptions,
    ): Promise<core.WithRawResponse<Intercom.PaginatedNewsItemResponse>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.IntercomEnvironment.UsProduction,
                "news/news_items",
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "intercom-client",
                "X-Fern-SDK-Version": "6.4.0",
                "User-Agent": "intercom-client/6.4.0",
                "Intercom-Version": requestOptions?.version ?? this._options?.version ?? "2.11",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 20000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return { data: _response.body as Intercom.PaginatedNewsItemResponse, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new Intercom.UnauthorizedError(
                        _response.error.body as Intercom.Error_,
                        _response.rawResponse,
                    );
                default:
                    throw new errors.IntercomError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.IntercomError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.IntercomTimeoutError("Timeout exceeded when calling GET /news/news_items.");
            case "unknown":
                throw new errors.IntercomError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * You can create a news item
     *
     * @param {Intercom.NewsItemRequest} request
     * @param {Items.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Intercom.UnauthorizedError}
     *
     * @example
     *     await client.news.items.create({
     *         title: "Halloween is here!",
     *         body: "<p>New costumes in store for this spooky season</p>",
     *         sender_id: 991267734,
     *         state: "live",
     *         deliver_silently: true,
     *         labels: ["Product", "Update", "New"],
     *         reactions: ["\uD83D\uDE06", "\uD83D\uDE05"],
     *         newsfeed_assignments: [{
     *                 newsfeed_id: 53,
     *                 published_at: 1664638214
     *             }]
     *     })
     */
    public create(
        request: Intercom.NewsItemRequest,
        requestOptions?: Items.RequestOptions,
    ): core.HttpResponsePromise<Intercom.NewsItem> {
        return core.HttpResponsePromise.fromPromise(this.__create(request, requestOptions));
    }

    private async __create(
        request: Intercom.NewsItemRequest,
        requestOptions?: Items.RequestOptions,
    ): Promise<core.WithRawResponse<Intercom.NewsItem>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.IntercomEnvironment.UsProduction,
                "news/news_items",
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "intercom-client",
                "X-Fern-SDK-Version": "6.4.0",
                "User-Agent": "intercom-client/6.4.0",
                "Intercom-Version": requestOptions?.version ?? this._options?.version ?? "2.11",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 20000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return { data: _response.body as Intercom.NewsItem, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new Intercom.UnauthorizedError(
                        _response.error.body as Intercom.Error_,
                        _response.rawResponse,
                    );
                default:
                    throw new errors.IntercomError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.IntercomError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.IntercomTimeoutError("Timeout exceeded when calling POST /news/news_items.");
            case "unknown":
                throw new errors.IntercomError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * You can fetch the details of a single news item.
     *
     * @param {Intercom.news.FindNewsItemRequest} request
     * @param {Items.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Intercom.UnauthorizedError}
     * @throws {@link Intercom.NotFoundError}
     *
     * @example
     *     await client.news.items.find({
     *         news_item_id: "123"
     *     })
     */
    public find(
        request: Intercom.news.FindNewsItemRequest,
        requestOptions?: Items.RequestOptions,
    ): core.HttpResponsePromise<Intercom.NewsItem> {
        return core.HttpResponsePromise.fromPromise(this.__find(request, requestOptions));
    }

    private async __find(
        request: Intercom.news.FindNewsItemRequest,
        requestOptions?: Items.RequestOptions,
    ): Promise<core.WithRawResponse<Intercom.NewsItem>> {
        const { news_item_id: newsItemId } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.IntercomEnvironment.UsProduction,
                `news/news_items/${encodeURIComponent(newsItemId)}`,
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "intercom-client",
                "X-Fern-SDK-Version": "6.4.0",
                "User-Agent": "intercom-client/6.4.0",
                "Intercom-Version": requestOptions?.version ?? this._options?.version ?? "2.11",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 20000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return { data: _response.body as Intercom.NewsItem, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new Intercom.UnauthorizedError(
                        _response.error.body as Intercom.Error_,
                        _response.rawResponse,
                    );
                case 404:
                    throw new Intercom.NotFoundError(_response.error.body as unknown, _response.rawResponse);
                default:
                    throw new errors.IntercomError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.IntercomError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.IntercomTimeoutError(
                    "Timeout exceeded when calling GET /news/news_items/{news_item_id}.",
                );
            case "unknown":
                throw new errors.IntercomError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * @param {Intercom.news.UpdateNewsItemRequest} request
     * @param {Items.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Intercom.UnauthorizedError}
     * @throws {@link Intercom.NotFoundError}
     *
     * @example
     *     await client.news.items.update({
     *         news_item_id: "123",
     *         body: {
     *             title: "Christmas is here!",
     *             body: "<p>New gifts in store for the jolly season</p>",
     *             sender_id: 991267745,
     *             reactions: ["\uD83D\uDE1D", "\uD83D\uDE02"]
     *         }
     *     })
     *
     * @example
     *     await client.news.items.update({
     *         news_item_id: "123",
     *         body: {
     *             title: "Christmas is here!",
     *             body: "<p>New gifts in store for the jolly season</p>",
     *             sender_id: 991267748,
     *             reactions: ["\uD83D\uDE1D", "\uD83D\uDE02"]
     *         }
     *     })
     */
    public update(
        request: Intercom.news.UpdateNewsItemRequest,
        requestOptions?: Items.RequestOptions,
    ): core.HttpResponsePromise<Intercom.NewsItem> {
        return core.HttpResponsePromise.fromPromise(this.__update(request, requestOptions));
    }

    private async __update(
        request: Intercom.news.UpdateNewsItemRequest,
        requestOptions?: Items.RequestOptions,
    ): Promise<core.WithRawResponse<Intercom.NewsItem>> {
        const { news_item_id: newsItemId, body: _body } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.IntercomEnvironment.UsProduction,
                `news/news_items/${encodeURIComponent(newsItemId)}`,
            ),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "intercom-client",
                "X-Fern-SDK-Version": "6.4.0",
                "User-Agent": "intercom-client/6.4.0",
                "Intercom-Version": requestOptions?.version ?? this._options?.version ?? "2.11",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: _body,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 20000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return { data: _response.body as Intercom.NewsItem, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new Intercom.UnauthorizedError(
                        _response.error.body as Intercom.Error_,
                        _response.rawResponse,
                    );
                case 404:
                    throw new Intercom.NotFoundError(_response.error.body as unknown, _response.rawResponse);
                default:
                    throw new errors.IntercomError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.IntercomError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.IntercomTimeoutError(
                    "Timeout exceeded when calling PUT /news/news_items/{news_item_id}.",
                );
            case "unknown":
                throw new errors.IntercomError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * You can delete a single news item.
     *
     * @param {Intercom.news.DeleteNewsItemRequest} request
     * @param {Items.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Intercom.UnauthorizedError}
     * @throws {@link Intercom.NotFoundError}
     *
     * @example
     *     await client.news.items.delete({
     *         news_item_id: "123"
     *     })
     */
    public delete(
        request: Intercom.news.DeleteNewsItemRequest,
        requestOptions?: Items.RequestOptions,
    ): core.HttpResponsePromise<Intercom.DeletedObject> {
        return core.HttpResponsePromise.fromPromise(this.__delete(request, requestOptions));
    }

    private async __delete(
        request: Intercom.news.DeleteNewsItemRequest,
        requestOptions?: Items.RequestOptions,
    ): Promise<core.WithRawResponse<Intercom.DeletedObject>> {
        const { news_item_id: newsItemId } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.IntercomEnvironment.UsProduction,
                `news/news_items/${encodeURIComponent(newsItemId)}`,
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "intercom-client",
                "X-Fern-SDK-Version": "6.4.0",
                "User-Agent": "intercom-client/6.4.0",
                "Intercom-Version": requestOptions?.version ?? this._options?.version ?? "2.11",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 20000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return { data: _response.body as Intercom.DeletedObject, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new Intercom.UnauthorizedError(
                        _response.error.body as Intercom.Error_,
                        _response.rawResponse,
                    );
                case 404:
                    throw new Intercom.NotFoundError(_response.error.body as unknown, _response.rawResponse);
                default:
                    throw new errors.IntercomError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.IntercomError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.IntercomTimeoutError(
                    "Timeout exceeded when calling DELETE /news/news_items/{news_item_id}.",
                );
            case "unknown":
                throw new errors.IntercomError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string> {
        const bearer = (await core.Supplier.get(this._options.token)) ?? process?.env["INTERCOM_API_KEY"];
        if (bearer == null) {
            throw new errors.IntercomError({
                message:
                    "Please specify a bearer by either passing it in to the constructor or initializing a INTERCOM_API_KEY environment variable",
            });
        }

        return `Bearer ${bearer}`;
    }
}
