/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Intercom from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Tags {
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
 * Everything about tags
 */
export class Tags {
    constructor(protected readonly _options: Tags.Options = {}) {}

    /**
     * You can tag a specific contact. This will return a tag object for the tag that was added to the contact.
     *
     * @param {Intercom.TagContactRequest} request
     * @param {Tags.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Intercom.UnauthorizedError}
     * @throws {@link Intercom.NotFoundError}
     *
     * @example
     *     await client.tags.tagContact({
     *         contact_id: "63a07ddf05a32042dffac965",
     *         id: "7522907"
     *     })
     *
     * @example
     *     await client.tags.tagContact({
     *         contact_id: "63a07ddf05a32042dffac965",
     *         id: "123"
     *     })
     */
    public async tagContact(
        request: Intercom.TagContactRequest,
        requestOptions?: Tags.RequestOptions
    ): Promise<Intercom.Tag> {
        const { contact_id: contactId, ..._body } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.IntercomEnvironment.UsProduction,
                `contacts/${encodeURIComponent(contactId)}/tags`
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
            body: _body,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Intercom.Tag;
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
                throw new errors.IntercomTimeoutError(
                    "Timeout exceeded when calling POST /contacts/{contact_id}/tags."
                );
            case "unknown":
                throw new errors.IntercomError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * You can remove tag from a specific contact. This will return a tag object for the tag that was removed from the contact.
     *
     * @param {Intercom.UntagContactRequest} request
     * @param {Tags.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Intercom.UnauthorizedError}
     * @throws {@link Intercom.NotFoundError}
     *
     * @example
     *     await client.tags.untagContact({
     *         contact_id: "63a07ddf05a32042dffac965",
     *         tag_id: "7522907"
     *     })
     */
    public async untagContact(
        request: Intercom.UntagContactRequest,
        requestOptions?: Tags.RequestOptions
    ): Promise<Intercom.Tag> {
        const { contact_id: contactId, tag_id: tagId } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.IntercomEnvironment.UsProduction,
                `contacts/${encodeURIComponent(contactId)}/tags/${encodeURIComponent(tagId)}`
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
            return _response.body as Intercom.Tag;
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
                throw new errors.IntercomTimeoutError(
                    "Timeout exceeded when calling DELETE /contacts/{contact_id}/tags/{tag_id}."
                );
            case "unknown":
                throw new errors.IntercomError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * You can tag a specific conversation. This will return a tag object for the tag that was added to the conversation.
     *
     * @param {Intercom.TagConversationRequest} request
     * @param {Tags.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Intercom.UnauthorizedError}
     * @throws {@link Intercom.NotFoundError}
     *
     * @example
     *     await client.tags.tagConversation({
     *         conversation_id: "64619700005694",
     *         id: "7522907",
     *         admin_id: "780"
     *     })
     */
    public async tagConversation(
        request: Intercom.TagConversationRequest,
        requestOptions?: Tags.RequestOptions
    ): Promise<Intercom.Tag> {
        const { conversation_id: conversationId, ..._body } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.IntercomEnvironment.UsProduction,
                `conversations/${encodeURIComponent(conversationId)}/tags`
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
            body: _body,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Intercom.Tag;
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
                throw new errors.IntercomTimeoutError(
                    "Timeout exceeded when calling POST /conversations/{conversation_id}/tags."
                );
            case "unknown":
                throw new errors.IntercomError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * You can remove tag from a specific conversation. This will return a tag object for the tag that was removed from the conversation.
     *
     * @param {Intercom.UntagConversationRequest} request
     * @param {Tags.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Intercom.UnauthorizedError}
     * @throws {@link Intercom.NotFoundError}
     *
     * @example
     *     await client.tags.untagConversation({
     *         conversation_id: "64619700005694",
     *         tag_id: "7522907",
     *         admin_id: "123"
     *     })
     */
    public async untagConversation(
        request: Intercom.UntagConversationRequest,
        requestOptions?: Tags.RequestOptions
    ): Promise<Intercom.Tag> {
        const { conversation_id: conversationId, tag_id: tagId, ..._body } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.IntercomEnvironment.UsProduction,
                `conversations/${encodeURIComponent(conversationId)}/tags/${encodeURIComponent(tagId)}`
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
            body: _body,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Intercom.Tag;
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
                throw new errors.IntercomTimeoutError(
                    "Timeout exceeded when calling DELETE /conversations/{conversation_id}/tags/{tag_id}."
                );
            case "unknown":
                throw new errors.IntercomError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * You can fetch a list of all tags for a given workspace.
     *
     *
     * @param {Tags.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Intercom.UnauthorizedError}
     *
     * @example
     *     await client.tags.list()
     */
    public async list(requestOptions?: Tags.RequestOptions): Promise<Intercom.TagList> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.IntercomEnvironment.UsProduction,
                "tags"
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
            return _response.body as Intercom.TagList;
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
                throw new errors.IntercomTimeoutError("Timeout exceeded when calling GET /tags.");
            case "unknown":
                throw new errors.IntercomError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * You can use this endpoint to perform the following operations:
     *
     *   **1. Create a new tag:** You can create a new tag by passing in the tag name as specified in "Create or Update Tag Request Payload" described below.
     *
     *   **2. Update an existing tag:** You can update an existing tag by passing the id of the tag as specified in "Create or Update Tag Request Payload" described below.
     *
     *   **3. Tag Companies:** You can tag single company or a list of companies. You can tag a company by passing in the tag name and the company details as specified in "Tag Company Request Payload" described below. Also, if the tag doesn't exist then a new one will be created automatically.
     *
     *   **4. Untag Companies:** You can untag a single company or a list of companies. You can untag a company by passing in the tag id and the company details as specified in "Untag Company Request Payload" described below.
     *
     *   **5. Tag Multiple Users:** You can tag a list of users. You can tag the users by passing in the tag name and the user details as specified in "Tag Users Request Payload" described below.
     *
     * Each operation will return a tag object.
     *
     * @param {Intercom.TagsCreateRequestBody} request
     * @param {Tags.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Intercom.BadRequestError}
     * @throws {@link Intercom.UnauthorizedError}
     * @throws {@link Intercom.NotFoundError}
     *
     * @example
     *     await client.tags.create({
     *         name: "test"
     *     })
     *
     * @example
     *     await client.tags.create({
     *         name: "Independent"
     *     })
     *
     * @example
     *     await client.tags.create({
     *         name: "test",
     *         companies: [{
     *                 company_id: "123"
     *             }]
     *     })
     *
     * @example
     *     await client.tags.create({
     *         name: "test",
     *         users: [{
     *                 id: "123"
     *             }]
     *     })
     */
    public async create(
        request: Intercom.TagsCreateRequestBody,
        requestOptions?: Tags.RequestOptions
    ): Promise<Intercom.Tag> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.IntercomEnvironment.UsProduction,
                "tags"
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
            return _response.body as Intercom.Tag;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Intercom.BadRequestError(_response.error.body as unknown);
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
                throw new errors.IntercomTimeoutError("Timeout exceeded when calling POST /tags.");
            case "unknown":
                throw new errors.IntercomError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * You can fetch the details of tags that are on the workspace by their id.
     * This will return a tag object.
     *
     * @param {Intercom.FindTagRequest} request
     * @param {Tags.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Intercom.UnauthorizedError}
     * @throws {@link Intercom.NotFoundError}
     *
     * @example
     *     await client.tags.find({
     *         tag_id: "123"
     *     })
     */
    public async find(request: Intercom.FindTagRequest, requestOptions?: Tags.RequestOptions): Promise<Intercom.Tag> {
        const { tag_id: tagId } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.IntercomEnvironment.UsProduction,
                `tags/${encodeURIComponent(tagId)}`
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
            return _response.body as Intercom.Tag;
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
                throw new errors.IntercomTimeoutError("Timeout exceeded when calling GET /tags/{tag_id}.");
            case "unknown":
                throw new errors.IntercomError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * You can delete the details of tags that are on the workspace by passing in the id.
     *
     * @param {Intercom.DeleteTagRequest} request
     * @param {Tags.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Intercom.BadRequestError}
     * @throws {@link Intercom.UnauthorizedError}
     * @throws {@link Intercom.NotFoundError}
     *
     * @example
     *     await client.tags.delete({
     *         tag_id: "123"
     *     })
     */
    public async delete(request: Intercom.DeleteTagRequest, requestOptions?: Tags.RequestOptions): Promise<void> {
        const { tag_id: tagId } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.IntercomEnvironment.UsProduction,
                `tags/${encodeURIComponent(tagId)}`
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
            return;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Intercom.BadRequestError(_response.error.body as unknown);
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
                throw new errors.IntercomTimeoutError("Timeout exceeded when calling DELETE /tags/{tag_id}.");
            case "unknown":
                throw new errors.IntercomError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * You can tag a specific ticket. This will return a tag object for the tag that was added to the ticket.
     *
     * @param {Intercom.TagTicketRequest} request
     * @param {Tags.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Intercom.UnauthorizedError}
     * @throws {@link Intercom.NotFoundError}
     *
     * @example
     *     await client.tags.tagTicket({
     *         ticket_id: "64619700005694",
     *         id: "7522907",
     *         admin_id: "780"
     *     })
     */
    public async tagTicket(
        request: Intercom.TagTicketRequest,
        requestOptions?: Tags.RequestOptions
    ): Promise<Intercom.Tag> {
        const { ticket_id: ticketId, ..._body } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.IntercomEnvironment.UsProduction,
                `tickets/${encodeURIComponent(ticketId)}/tags`
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
            body: _body,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Intercom.Tag;
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
                throw new errors.IntercomTimeoutError("Timeout exceeded when calling POST /tickets/{ticket_id}/tags.");
            case "unknown":
                throw new errors.IntercomError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * You can remove tag from a specific ticket. This will return a tag object for the tag that was removed from the ticket.
     *
     * @param {Intercom.UntagTicketRequest} request
     * @param {Tags.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Intercom.UnauthorizedError}
     * @throws {@link Intercom.NotFoundError}
     *
     * @example
     *     await client.tags.untagTicket({
     *         ticket_id: "64619700005694",
     *         tag_id: "7522907",
     *         admin_id: "123"
     *     })
     */
    public async untagTicket(
        request: Intercom.UntagTicketRequest,
        requestOptions?: Tags.RequestOptions
    ): Promise<Intercom.Tag> {
        const { ticket_id: ticketId, tag_id: tagId, ..._body } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.IntercomEnvironment.UsProduction,
                `tickets/${encodeURIComponent(ticketId)}/tags/${encodeURIComponent(tagId)}`
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
            body: _body,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Intercom.Tag;
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
                throw new errors.IntercomTimeoutError(
                    "Timeout exceeded when calling DELETE /tickets/{ticket_id}/tags/{tag_id}."
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