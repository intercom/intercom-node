/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Intercom from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Messages {
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
 * Everything about your messages
 */
export class Messages {
    constructor(protected readonly _options: Messages.Options = {}) {}

    /**
     * You can create a message that has been initiated by an admin. The conversation can be either an in-app message or an email.
     *
     * > 🚧 Sending for visitors
     * >
     * > There can be a short delay between when a contact is created and when a contact becomes available to be messaged through the API. A 404 Not Found error will be returned in this case.
     *
     * This will return the Message model that has been created.
     *
     * > 🚧 Retrieving Associated Conversations
     * >
     * > As this is a message, there will be no conversation present until the contact responds. Once they do, you will have to search for a contact's conversations with the id of the message.
     *
     * @param {Intercom.CreateMessageRequest} request
     * @param {Messages.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Intercom.BadRequestError}
     * @throws {@link Intercom.UnauthorizedError}
     * @throws {@link Intercom.ForbiddenError}
     * @throws {@link Intercom.UnprocessableEntityError}
     *
     * @example
     *     await client.messages.create({
     *         message_type: "email",
     *         subject: "Thanks for everything",
     *         body: "Hello there",
     *         template: "plain",
     *         from: {
     *             type: "admin",
     *             id: 394051
     *         },
     *         to: {
     *             type: "user",
     *             id: "536e564f316c83104c000020"
     *         }
     *     })
     *
     * @example
     *     await client.messages.create({
     *         message_type: "inapp",
     *         subject: "heyy",
     *         body: "Hello there",
     *         template: "plain",
     *         from: {
     *             type: "admin",
     *             id: 394051
     *         },
     *         to: {
     *             type: "user",
     *             id: "667d616d8a68186f43bafe53"
     *         },
     *         created_at: 1590000000,
     *         create_conversation_without_contact_reply: true
     *     })
     *
     * @example
     *     await client.messages.create({
     *         message_type: "email",
     *         subject: "Thanks for everything",
     *         body: "hey there",
     *         template: "plain",
     *         from: {
     *             type: "admin",
     *             id: 394051
     *         },
     *         to: {
     *             type: "user",
     *             id: "536e564f316c83104c000020"
     *         },
     *         created_at: 1590000000,
     *         create_conversation_without_contact_reply: true
     *     })
     *
     * @example
     *     await client.messages.create({
     *         message_type: "email",
     *         subject: "heyy",
     *         body: "Hello there",
     *         template: "plain",
     *         from: {
     *             type: "admin",
     *             id: 394051
     *         },
     *         to: {
     *             type: "user",
     *             id: "667d616e8a68186f43bafe55"
     *         },
     *         created_at: 1590000000,
     *         create_conversation_without_contact_reply: true
     *     })
     */
    public async create(
        request: Intercom.CreateMessageRequest,
        requestOptions?: Messages.RequestOptions
    ): Promise<Intercom.Message> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.IntercomEnvironment.UsProduction,
                "messages"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "intercom-client",
                "X-Fern-SDK-Version": "6.2.0",
                "User-Agent": "intercom-client/6.2.0",
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
            return _response.body as Intercom.Message;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Intercom.BadRequestError(_response.error.body as unknown);
                case 401:
                    throw new Intercom.UnauthorizedError(_response.error.body as Intercom.Error_);
                case 403:
                    throw new Intercom.ForbiddenError(_response.error.body as Intercom.Error_);
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
                throw new errors.IntercomTimeoutError("Timeout exceeded when calling POST /messages.");
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
