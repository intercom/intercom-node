/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Intercom from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Articles {
    interface Options {
        environment?: core.Supplier<environments.IntercomEnvironment | string>;
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

    interface RequestOptions {
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

/**
 * Everything about your Articles
 */
export class Articles {
    constructor(protected readonly _options: Articles.Options = {}) {}

    /**
     * You can fetch a list of all articles by making a GET request to `https://api.intercom.io/articles`.
     *
     * > 📘 How are the articles sorted and ordered?
     * >
     * > Articles will be returned in descending order on the `updated_at` attribute. This means if you need to iterate through results then we'll show the most recently updated articles first.
     *
     * @param {Intercom.ListArticlesRequest} request
     * @param {Articles.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Intercom.UnauthorizedError}
     *
     * @example
     *     await client.articles.list()
     */
    public async list(
        request: Intercom.ListArticlesRequest = {},
        requestOptions?: Articles.RequestOptions
    ): Promise<core.Page<Intercom.ArticleListItem>> {
        const list = async (request: Intercom.ListArticlesRequest): Promise<Intercom.ArticleList> => {
            const { page, per_page: perPage } = request;
            const _queryParams: Record<string, string | string[] | object | object[]> = {};
            if (page != null) {
                _queryParams["page"] = page.toString();
            }
            if (perPage != null) {
                _queryParams["per_page"] = perPage.toString();
            }
            const _response = await (this._options.fetcher ?? core.fetcher)({
                url: urlJoin(
                    (await core.Supplier.get(this._options.environment)) ??
                        environments.IntercomEnvironment.UsProduction,
                    "articles"
                ),
                method: "GET",
                headers: {
                    Authorization: await this._getAuthorizationHeader(),
                    "X-Fern-Language": "JavaScript",
                    "X-Fern-SDK-Name": "",
                    "X-Fern-SDK-Version": "6.0.0",
                    "Intercom-Version": requestOptions?.version ?? this._options?.version ?? "2.11",
                    "X-Fern-Runtime": core.RUNTIME.type,
                    "X-Fern-Runtime-Version": core.RUNTIME.version,
                    ...requestOptions?.headers,
                },
                contentType: "application/json",
                queryParameters: _queryParams,
                requestType: "json",
                timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions?.maxRetries,
                abortSignal: requestOptions?.abortSignal,
            });
            if (_response.ok) {
                return _response.body as Intercom.ArticleList;
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 401:
                        throw new Intercom.UnauthorizedError(_response.error.body as Intercom.Error_);
                    default:
                        throw new errors.IntercomError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                        });
                }
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.IntercomError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                    });
                case "timeout":
                    throw new errors.IntercomTimeoutError("Timeout exceeded when calling GET /articles.");
                case "unknown":
                    throw new errors.IntercomError({
                        message: _response.error.errorMessage,
                    });
            }
        };
        let _offset = request?.page != null ? request?.page : 1;
        return new core.Pageable<Intercom.ArticleList, Intercom.ArticleListItem>({
            response: await list(request),
            hasNextPage: (response) => (response?.data ?? []).length > 0,
            getItems: (response) => response?.data ?? [],
            loadPage: (_response) => {
                _offset += 1;
                return list(core.setObjectProperty(request, "page", _offset));
            },
        });
    }

    /**
     * You can create a new article by making a POST request to `https://api.intercom.io/articles`.
     *
     * @param {Intercom.CreateArticleRequest} request
     * @param {Articles.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Intercom.BadRequestError}
     * @throws {@link Intercom.UnauthorizedError}
     *
     * @example
     *     await client.articles.create({
     *         title: "Thanks for everything",
     *         description: "Description of the Article",
     *         body: "Body of the Article",
     *         author_id: 991267407,
     *         state: "published",
     *         parent_id: 145,
     *         parent_type: "collection",
     *         translated_content: {
     *             fr: {
     *                 type: "article_content",
     *                 title: "Merci pour tout",
     *                 description: "Description de l'article",
     *                 body: "Corps de l'article",
     *                 author_id: 991267407,
     *                 state: "published"
     *             }
     *         }
     *     })
     *
     * @example
     *     await client.articles.create({
     *         title: "Thanks for everything",
     *         description: "Description of the Article",
     *         body: "Body of the Article",
     *         author_id: 1295,
     *         state: "published"
     *     })
     */
    public async create(
        request: Intercom.CreateArticleRequest,
        requestOptions?: Articles.RequestOptions
    ): Promise<Intercom.Article> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.IntercomEnvironment.UsProduction,
                "articles"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "6.0.0",
                "Intercom-Version": requestOptions?.version ?? this._options?.version ?? "2.11",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Intercom.Article;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Intercom.BadRequestError(_response.error.body as unknown);
                case 401:
                    throw new Intercom.UnauthorizedError(_response.error.body as Intercom.Error_);
                default:
                    throw new errors.IntercomError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.IntercomError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.IntercomTimeoutError("Timeout exceeded when calling POST /articles.");
            case "unknown":
                throw new errors.IntercomError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * You can fetch the details of a single article by making a GET request to `https://api.intercom.io/articles/<id>`.
     *
     * @param {Intercom.FindArticleRequest} request
     * @param {Articles.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Intercom.UnauthorizedError}
     * @throws {@link Intercom.NotFoundError}
     *
     * @example
     *     await client.articles.find({
     *         article_id: "123"
     *     })
     */
    public async find(
        request: Intercom.FindArticleRequest,
        requestOptions?: Articles.RequestOptions
    ): Promise<Intercom.Article> {
        const { article_id: articleId } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.IntercomEnvironment.UsProduction,
                `articles/${encodeURIComponent(articleId)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "6.0.0",
                "Intercom-Version": requestOptions?.version ?? this._options?.version ?? "2.11",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Intercom.Article;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new Intercom.UnauthorizedError(_response.error.body as Intercom.Error_);
                case 404:
                    throw new Intercom.NotFoundError(_response.error.body as unknown);
                default:
                    throw new errors.IntercomError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.IntercomError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.IntercomTimeoutError("Timeout exceeded when calling GET /articles/{article_id}.");
            case "unknown":
                throw new errors.IntercomError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * You can update the details of a single article by making a PUT request to `https://api.intercom.io/articles/<id>`.
     *
     * @param {Intercom.UpdateArticleRequest} request
     * @param {Articles.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Intercom.UnauthorizedError}
     * @throws {@link Intercom.NotFoundError}
     *
     * @example
     *     await client.articles.update({
     *         article_id: "123",
     *         title: "Christmas is here!",
     *         body: "<p>New gifts in store for the jolly season</p>"
     *     })
     */
    public async update(
        request: Intercom.UpdateArticleRequest,
        requestOptions?: Articles.RequestOptions
    ): Promise<Intercom.Article> {
        const { article_id: articleId, ..._body } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.IntercomEnvironment.UsProduction,
                `articles/${encodeURIComponent(articleId)}`
            ),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "6.0.0",
                "Intercom-Version": requestOptions?.version ?? this._options?.version ?? "2.11",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: _body != null ? _body : undefined,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Intercom.Article;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new Intercom.UnauthorizedError(_response.error.body as Intercom.Error_);
                case 404:
                    throw new Intercom.NotFoundError(_response.error.body as unknown);
                default:
                    throw new errors.IntercomError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.IntercomError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.IntercomTimeoutError("Timeout exceeded when calling PUT /articles/{article_id}.");
            case "unknown":
                throw new errors.IntercomError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * You can delete a single article by making a DELETE request to `https://api.intercom.io/articles/<id>`.
     *
     * @param {Intercom.DeleteArticleRequest} request
     * @param {Articles.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Intercom.UnauthorizedError}
     * @throws {@link Intercom.NotFoundError}
     *
     * @example
     *     await client.articles.delete({
     *         article_id: "123"
     *     })
     */
    public async delete(
        request: Intercom.DeleteArticleRequest,
        requestOptions?: Articles.RequestOptions
    ): Promise<Intercom.DeletedArticleObject> {
        const { article_id: articleId } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.IntercomEnvironment.UsProduction,
                `articles/${encodeURIComponent(articleId)}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "6.0.0",
                "Intercom-Version": requestOptions?.version ?? this._options?.version ?? "2.11",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Intercom.DeletedArticleObject;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new Intercom.UnauthorizedError(_response.error.body as Intercom.Error_);
                case 404:
                    throw new Intercom.NotFoundError(_response.error.body as unknown);
                default:
                    throw new errors.IntercomError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.IntercomError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.IntercomTimeoutError("Timeout exceeded when calling DELETE /articles/{article_id}.");
            case "unknown":
                throw new errors.IntercomError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * You can search for articles by making a GET request to `https://api.intercom.io/articles/search`.
     *
     * @param {Intercom.SearchArticlesRequest} request
     * @param {Articles.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Intercom.UnauthorizedError}
     *
     * @example
     *     await client.articles.search({
     *         phrase: "Getting started",
     *         state: "published"
     *     })
     */
    public async search(
        request: Intercom.SearchArticlesRequest = {},
        requestOptions?: Articles.RequestOptions
    ): Promise<Intercom.SearchArticlesResponse> {
        const { phrase, state, help_center_id: helpCenterId, highlight } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (phrase != null) {
            _queryParams["phrase"] = phrase;
        }

        if (state != null) {
            _queryParams["state"] = state;
        }

        if (helpCenterId != null) {
            _queryParams["help_center_id"] = helpCenterId.toString();
        }

        if (highlight != null) {
            _queryParams["highlight"] = highlight.toString();
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.IntercomEnvironment.UsProduction,
                "articles/search"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "6.0.0",
                "Intercom-Version": requestOptions?.version ?? this._options?.version ?? "2.11",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Intercom.SearchArticlesResponse;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new Intercom.UnauthorizedError(_response.error.body as Intercom.Error_);
                default:
                    throw new errors.IntercomError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.IntercomError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.IntercomTimeoutError("Timeout exceeded when calling GET /articles/search.");
            case "unknown":
                throw new errors.IntercomError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string> {
        const bearer = (await core.Supplier.get(this._options.token)) ?? process?.env["INTERCOM_API_KEY"];
        if (bearer == null) {
            throw new errors.IntercomError({
                message: "Please specify INTERCOM_API_KEY when instantiating the client.",
            });
        }

        return `Bearer ${bearer}`;
    }
}