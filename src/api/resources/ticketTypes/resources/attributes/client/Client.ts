/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Intercom from "../../../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../../../errors/index";

export declare namespace Attributes {
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

export class Attributes {
    constructor(protected readonly _options: Attributes.Options = {}) {}

    /**
     * You can create a new attribute for a ticket type.
     *
     * @param {Intercom.ticketTypes.CreateTicketTypeAttributeRequest} request
     * @param {Attributes.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Intercom.UnauthorizedError}
     *
     * @example
     *     await client.ticketTypes.attributes.create({
     *         ticket_type_id: "ticket_type_id",
     *         name: "Attribute Title",
     *         description: "Attribute Description",
     *         data_type: "string",
     *         required_to_create: false
     *     })
     */
    public async create(
        request: Intercom.ticketTypes.CreateTicketTypeAttributeRequest,
        requestOptions?: Attributes.RequestOptions
    ): Promise<Intercom.TicketTypeAttribute> {
        const { ticket_type_id: ticketTypeId, ..._body } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.IntercomEnvironment.UsProduction,
                `ticket_types/${encodeURIComponent(ticketTypeId)}/attributes`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "intercom-client",
                "X-Fern-SDK-Version": "6.0.1",
                "User-Agent": "intercom-client/6.0.1",
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
            return _response.body as Intercom.TicketTypeAttribute;
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
                throw new errors.IntercomTimeoutError(
                    "Timeout exceeded when calling POST /ticket_types/{ticket_type_id}/attributes."
                );
            case "unknown":
                throw new errors.IntercomError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * You can update an existing attribute for a ticket type.
     *
     * @param {Intercom.ticketTypes.UpdateTicketTypeAttributeRequest} request
     * @param {Attributes.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Intercom.UnauthorizedError}
     *
     * @example
     *     await client.ticketTypes.attributes.update({
     *         ticket_type_id: "ticket_type_id",
     *         attribute_id: "attribute_id",
     *         description: "New Attribute Description"
     *     })
     */
    public async update(
        request: Intercom.ticketTypes.UpdateTicketTypeAttributeRequest,
        requestOptions?: Attributes.RequestOptions
    ): Promise<Intercom.TicketTypeAttribute> {
        const { ticket_type_id: ticketTypeId, attribute_id: attributeId, ..._body } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.IntercomEnvironment.UsProduction,
                `ticket_types/${encodeURIComponent(ticketTypeId)}/attributes/${encodeURIComponent(attributeId)}`
            ),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "intercom-client",
                "X-Fern-SDK-Version": "6.0.1",
                "User-Agent": "intercom-client/6.0.1",
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
            return _response.body as Intercom.TicketTypeAttribute;
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
                throw new errors.IntercomTimeoutError(
                    "Timeout exceeded when calling PUT /ticket_types/{ticket_type_id}/attributes/{attribute_id}."
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
