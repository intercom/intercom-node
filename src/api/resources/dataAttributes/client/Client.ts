/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Intercom from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace DataAttributes {
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
 * Everything about your Data Attributes
 */
export class DataAttributes {
    constructor(protected readonly _options: DataAttributes.Options = {}) {}

    /**
     * You can fetch a list of all data attributes belonging to a workspace for contacts, companies or conversations.
     *
     * @param {Intercom.ListDataAttributesRequest} request
     * @param {DataAttributes.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Intercom.UnauthorizedError}
     *
     * @example
     *     await client.dataAttributes.list()
     */
    public async list(
        request: Intercom.ListDataAttributesRequest = {},
        requestOptions?: DataAttributes.RequestOptions
    ): Promise<Intercom.DataAttributeList> {
        const { model, include_archived: includeArchived } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (model != null) {
            _queryParams["model"] = model;
        }

        if (includeArchived != null) {
            _queryParams["include_archived"] = includeArchived.toString();
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.IntercomEnvironment.UsProduction,
                "data_attributes"
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
            return _response.body as Intercom.DataAttributeList;
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
                throw new errors.IntercomTimeoutError("Timeout exceeded when calling GET /data_attributes.");
            case "unknown":
                throw new errors.IntercomError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * You can create a data attributes for a `contact` or a `company`.
     *
     * @param {Intercom.CreateDataAttributeRequest} request
     * @param {DataAttributes.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Intercom.BadRequestError}
     * @throws {@link Intercom.UnauthorizedError}
     *
     * @example
     *     await client.dataAttributes.create({
     *         name: "Mithril Shirt",
     *         model: "company",
     *         data_type: "string"
     *     })
     *
     * @example
     *     await client.dataAttributes.create({
     *         name: "The One Ring",
     *         model: "contact",
     *         data_type: "integer"
     *     })
     *
     * @example
     *     await client.dataAttributes.create({
     *         name: "!nv@l!d n@me",
     *         model: "company",
     *         data_type: "string"
     *     })
     *
     * @example
     *     await client.dataAttributes.create({
     *         name: "The One Ring",
     *         model: "company",
     *         data_type: "string"
     *     })
     *
     * @example
     *     await client.dataAttributes.create({
     *         name: "The Second Ring",
     *         model: "company",
     *         data_type: "string"
     *     })
     *
     * @example
     *     await client.dataAttributes.create({
     *         name: "My Data Attribute",
     *         model: "contact",
     *         data_type: "string",
     *         description: "Just a plain old ring",
     *         options: ["options"]
     *     })
     */
    public async create(
        request: Intercom.CreateDataAttributeRequest,
        requestOptions?: DataAttributes.RequestOptions
    ): Promise<Intercom.DataAttribute> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.IntercomEnvironment.UsProduction,
                "data_attributes"
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
            return _response.body as Intercom.DataAttribute;
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
                throw new errors.IntercomTimeoutError("Timeout exceeded when calling POST /data_attributes.");
            case "unknown":
                throw new errors.IntercomError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     *
     * You can update a data attribute.
     *
     * > 🚧 Updating the data type is not possible
     * >
     * > It is currently a dangerous action to execute changing a data attribute's type via the API. You will need to update the type via the UI instead.
     *
     * @param {Intercom.UpdateDataAttributeRequest} request
     * @param {DataAttributes.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Intercom.BadRequestError}
     * @throws {@link Intercom.UnauthorizedError}
     * @throws {@link Intercom.NotFoundError}
     * @throws {@link Intercom.UnprocessableEntityError}
     *
     * @example
     *     await client.dataAttributes.update({
     *         data_attribute_id: "1",
     *         archived: false,
     *         description: "Just a plain old ring",
     *         options: [{
     *                 value: "1-10"
     *             }, {
     *                 value: "11-20"
     *             }]
     *     })
     *
     * @example
     *     await client.dataAttributes.update({
     *         data_attribute_id: "1",
     *         archived: false,
     *         description: "Too few options",
     *         options: [{
     *                 value: "value"
     *             }, {
     *                 value: "value"
     *             }]
     *     })
     *
     * @example
     *     await client.dataAttributes.update({
     *         data_attribute_id: "1",
     *         archived: true,
     *         description: "Trying to archieve"
     *     })
     */
    public async update(
        request: Intercom.UpdateDataAttributeRequest,
        requestOptions?: DataAttributes.RequestOptions
    ): Promise<Intercom.DataAttribute> {
        const { data_attribute_id: dataAttributeId, ..._body } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.IntercomEnvironment.UsProduction,
                `data_attributes/${encodeURIComponent(dataAttributeId)}`
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
            body: _body,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Intercom.DataAttribute;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Intercom.BadRequestError(_response.error.body as unknown);
                case 401:
                    throw new Intercom.UnauthorizedError(_response.error.body as Intercom.Error_);
                case 404:
                    throw new Intercom.NotFoundError(_response.error.body as unknown);
                case 422:
                    throw new Intercom.UnprocessableEntityError(_response.error.body as unknown);
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
                throw new errors.IntercomTimeoutError(
                    "Timeout exceeded when calling PUT /data_attributes/{data_attribute_id}."
                );
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
