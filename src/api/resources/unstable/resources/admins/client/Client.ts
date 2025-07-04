/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Intercom from "../../../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../../../errors/index";

export declare namespace Admins {
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

/**
 * Everything about your Admins
 */
export class Admins {
    constructor(protected readonly _options: Admins.Options = {}) {}

    /**
     *
     * You can view the currently authorised admin along with the embedded app object (a "workspace" in legacy terminology).
     *
     * > 🚧 Single Sign On
     * >
     * > If you are building a custom "Log in with Intercom" flow for your site, and you call the `/me` endpoint to identify the logged-in user, you should not accept any sign-ins from users with unverified email addresses as it poses a potential impersonation security risk.
     *
     * @param {Admins.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.unstable.admins.identifyAdmin()
     */
    public identifyAdmin(
        requestOptions?: Admins.RequestOptions,
    ): core.HttpResponsePromise<Intercom.unstable.AdminWithApp | undefined> {
        return core.HttpResponsePromise.fromPromise(this.__identifyAdmin(requestOptions));
    }

    private async __identifyAdmin(
        requestOptions?: Admins.RequestOptions,
    ): Promise<core.WithRawResponse<Intercom.unstable.AdminWithApp | undefined>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.IntercomEnvironment.UsProduction,
                "me",
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
            return {
                data: _response.body as Intercom.unstable.AdminWithApp | undefined,
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.IntercomError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.IntercomError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.IntercomTimeoutError("Timeout exceeded when calling GET /me.");
            case "unknown":
                throw new errors.IntercomError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * You can set an Admin as away for the Inbox.
     *
     * @param {Intercom.unstable.SetAwayAdminRequest} request
     * @param {Admins.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Intercom.unstable.BadRequestError}
     * @throws {@link Intercom.unstable.UnauthorizedError}
     * @throws {@link Intercom.unstable.NotFoundError}
     *
     * @example
     *     await client.unstable.admins.setAwayAdmin({
     *         id: 1,
     *         away_mode_enabled: true,
     *         away_mode_reassign: true,
     *         away_status_reason_id: 12345
     *     })
     *
     * @example
     *     await client.unstable.admins.setAwayAdmin({
     *         id: 1,
     *         away_mode_enabled: true,
     *         away_mode_reassign: true
     *     })
     */
    public setAwayAdmin(
        request: Intercom.unstable.SetAwayAdminRequest,
        requestOptions?: Admins.RequestOptions,
    ): core.HttpResponsePromise<Intercom.unstable.Admin | undefined> {
        return core.HttpResponsePromise.fromPromise(this.__setAwayAdmin(request, requestOptions));
    }

    private async __setAwayAdmin(
        request: Intercom.unstable.SetAwayAdminRequest,
        requestOptions?: Admins.RequestOptions,
    ): Promise<core.WithRawResponse<Intercom.unstable.Admin | undefined>> {
        const { id, ..._body } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.IntercomEnvironment.UsProduction,
                `admins/${encodeURIComponent(id)}/away`,
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
            return { data: _response.body as Intercom.unstable.Admin | undefined, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Intercom.unstable.BadRequestError(_response.error.body as unknown, _response.rawResponse);
                case 401:
                    throw new Intercom.unstable.UnauthorizedError(
                        _response.error.body as Intercom.unstable.Error_,
                        _response.rawResponse,
                    );
                case 404:
                    throw new Intercom.unstable.NotFoundError(_response.error.body as unknown, _response.rawResponse);
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
                throw new errors.IntercomTimeoutError("Timeout exceeded when calling PUT /admins/{id}/away.");
            case "unknown":
                throw new errors.IntercomError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * You can get a log of activities by all admins in an app.
     *
     * @param {Intercom.unstable.ListActivityLogsRequest} request
     * @param {Admins.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Intercom.unstable.UnauthorizedError}
     *
     * @example
     *     await client.unstable.admins.listActivityLogs({
     *         created_at_after: "1677253093",
     *         created_at_before: "1677861493"
     *     })
     */
    public listActivityLogs(
        request: Intercom.unstable.ListActivityLogsRequest,
        requestOptions?: Admins.RequestOptions,
    ): core.HttpResponsePromise<Intercom.unstable.ActivityLogList> {
        return core.HttpResponsePromise.fromPromise(this.__listActivityLogs(request, requestOptions));
    }

    private async __listActivityLogs(
        request: Intercom.unstable.ListActivityLogsRequest,
        requestOptions?: Admins.RequestOptions,
    ): Promise<core.WithRawResponse<Intercom.unstable.ActivityLogList>> {
        const { created_at_after: createdAtAfter, created_at_before: createdAtBefore } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        _queryParams["created_at_after"] = createdAtAfter;
        if (createdAtBefore != null) {
            _queryParams["created_at_before"] = createdAtBefore;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.IntercomEnvironment.UsProduction,
                "admins/activity_logs",
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
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 20000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return { data: _response.body as Intercom.unstable.ActivityLogList, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new Intercom.unstable.UnauthorizedError(
                        _response.error.body as Intercom.unstable.Error_,
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
                throw new errors.IntercomTimeoutError("Timeout exceeded when calling GET /admins/activity_logs.");
            case "unknown":
                throw new errors.IntercomError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * You can fetch a list of admins for a given workspace.
     *
     * @param {Admins.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Intercom.unstable.UnauthorizedError}
     *
     * @example
     *     await client.unstable.admins.listAdmins()
     */
    public listAdmins(requestOptions?: Admins.RequestOptions): core.HttpResponsePromise<Intercom.unstable.AdminList> {
        return core.HttpResponsePromise.fromPromise(this.__listAdmins(requestOptions));
    }

    private async __listAdmins(
        requestOptions?: Admins.RequestOptions,
    ): Promise<core.WithRawResponse<Intercom.unstable.AdminList>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.IntercomEnvironment.UsProduction,
                "admins",
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
            return { data: _response.body as Intercom.unstable.AdminList, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new Intercom.unstable.UnauthorizedError(
                        _response.error.body as Intercom.unstable.Error_,
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
                throw new errors.IntercomTimeoutError("Timeout exceeded when calling GET /admins.");
            case "unknown":
                throw new errors.IntercomError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * You can retrieve the details of a single admin.
     *
     * @param {Intercom.unstable.RetrieveAdminRequest} request
     * @param {Admins.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Intercom.unstable.UnauthorizedError}
     * @throws {@link Intercom.unstable.NotFoundError}
     *
     * @example
     *     await client.unstable.admins.retrieveAdmin({
     *         id: 1
     *     })
     */
    public retrieveAdmin(
        request: Intercom.unstable.RetrieveAdminRequest,
        requestOptions?: Admins.RequestOptions,
    ): core.HttpResponsePromise<Intercom.unstable.Admin | undefined> {
        return core.HttpResponsePromise.fromPromise(this.__retrieveAdmin(request, requestOptions));
    }

    private async __retrieveAdmin(
        request: Intercom.unstable.RetrieveAdminRequest,
        requestOptions?: Admins.RequestOptions,
    ): Promise<core.WithRawResponse<Intercom.unstable.Admin | undefined>> {
        const { id } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.IntercomEnvironment.UsProduction,
                `admins/${encodeURIComponent(id)}`,
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
            return { data: _response.body as Intercom.unstable.Admin | undefined, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new Intercom.unstable.UnauthorizedError(
                        _response.error.body as Intercom.unstable.Error_,
                        _response.rawResponse,
                    );
                case 404:
                    throw new Intercom.unstable.NotFoundError(_response.error.body as unknown, _response.rawResponse);
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
                throw new errors.IntercomTimeoutError("Timeout exceeded when calling GET /admins/{id}.");
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
