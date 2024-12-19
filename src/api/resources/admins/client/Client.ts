/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Intercom from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Admins {
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
     *     await client.admins.identify()
     */
    public async identify(requestOptions?: Admins.RequestOptions): Promise<Intercom.AdminWithApp> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.IntercomEnvironment.UsProduction,
                "me"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "0.0.42",
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
            return _response.body as Intercom.AdminWithApp;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.IntercomError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.IntercomError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.IntercomTimeoutError("Timeout exceeded when calling GET /me.");
            case "unknown":
                throw new errors.IntercomError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * You can set an Admin as away for the Inbox.
     *
     * @param {Intercom.ConfigureAwayAdminRequest} request
     * @param {Admins.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Intercom.UnauthorizedError}
     * @throws {@link Intercom.NotFoundError}
     *
     * @example
     *     await client.admins.away({
     *         admin_id: "admin_id",
     *         away_mode_enabled: true,
     *         away_mode_reassign: true
     *     })
     */
    public async away(
        request: Intercom.ConfigureAwayAdminRequest,
        requestOptions?: Admins.RequestOptions
    ): Promise<Intercom.Admin> {
        const { admin_id: adminId, ..._body } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.IntercomEnvironment.UsProduction,
                `admins/${encodeURIComponent(adminId)}/away`
            ),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "0.0.42",
                "Intercom-Version": requestOptions?.version ?? this._options?.version ?? "2.11",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: _body,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Intercom.Admin;
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
                throw new errors.IntercomTimeoutError("Timeout exceeded when calling PUT /admins/{admin_id}/away.");
            case "unknown":
                throw new errors.IntercomError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * You can get a log of activities by all admins in an app.
     *
     * @param {Intercom.ListAllActivityLogsRequest} request
     * @param {Admins.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Intercom.UnauthorizedError}
     *
     * @example
     *     await client.admins.listAllActivityLogs({
     *         created_at_after: "1677253093",
     *         created_at_before: "1677861493"
     *     })
     */
    public async listAllActivityLogs(
        request: Intercom.ListAllActivityLogsRequest,
        requestOptions?: Admins.RequestOptions
    ): Promise<Intercom.ActivityLogList> {
        const { created_at_after: createdAtAfter, created_at_before: createdAtBefore } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        _queryParams["created_at_after"] = createdAtAfter;
        if (createdAtBefore != null) {
            _queryParams["created_at_before"] = createdAtBefore;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.IntercomEnvironment.UsProduction,
                "admins/activity_logs"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "0.0.42",
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
            return _response.body as Intercom.ActivityLogList;
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
                throw new errors.IntercomTimeoutError("Timeout exceeded when calling GET /admins/activity_logs.");
            case "unknown":
                throw new errors.IntercomError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * You can fetch a list of admins for a given workspace.
     *
     * @param {Admins.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Intercom.UnauthorizedError}
     *
     * @example
     *     await client.admins.list()
     */
    public async list(requestOptions?: Admins.RequestOptions): Promise<Intercom.AdminList> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.IntercomEnvironment.UsProduction,
                "admins"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "0.0.42",
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
            return _response.body as Intercom.AdminList;
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
                throw new errors.IntercomTimeoutError("Timeout exceeded when calling GET /admins.");
            case "unknown":
                throw new errors.IntercomError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * You can retrieve the details of a single admin.
     *
     * @param {Intercom.FindAdminRequest} request
     * @param {Admins.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Intercom.UnauthorizedError}
     * @throws {@link Intercom.NotFoundError}
     *
     * @example
     *     await client.admins.find({
     *         admin_id: "123"
     *     })
     */
    public async find(
        request: Intercom.FindAdminRequest,
        requestOptions?: Admins.RequestOptions
    ): Promise<Intercom.Admin> {
        const { admin_id: adminId } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.IntercomEnvironment.UsProduction,
                `admins/${encodeURIComponent(adminId)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "0.0.42",
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
            return _response.body as Intercom.Admin;
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
                throw new errors.IntercomTimeoutError("Timeout exceeded when calling GET /admins/{admin_id}.");
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
