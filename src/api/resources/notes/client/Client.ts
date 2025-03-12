/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Intercom from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Notes {
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
 * Everything about your Notes
 */
export class Notes {
    constructor(protected readonly _options: Notes.Options = {}) {}

    /**
     * You can fetch a list of notes that are associated to a contact.
     *
     * @param {Intercom.ListContactNotesRequest} request
     * @param {Notes.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Intercom.NotFoundError}
     *
     * @example
     *     await client.notes.list({
     *         contact_id: "contact_id"
     *     })
     */
    public async list(
        request: Intercom.ListContactNotesRequest,
        requestOptions?: Notes.RequestOptions
    ): Promise<core.Page<Intercom.Note>> {
        const list = async (request: Intercom.ListContactNotesRequest): Promise<Intercom.NoteList> => {
            const { contact_id: contactId, page, per_page: perPage } = request;
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
                    `contacts/${encodeURIComponent(contactId)}/notes`
                ),
                method: "GET",
                headers: {
                    Authorization: await this._getAuthorizationHeader(),
                    "X-Fern-Language": "JavaScript",
                    "X-Fern-SDK-Name": "intercom-client",
                    "X-Fern-SDK-Version": "v6.1.0b0",
                    "User-Agent": "intercom-client/v6.1.0b0",
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
                return _response.body as Intercom.NoteList;
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
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
                        "Timeout exceeded when calling GET /contacts/{contact_id}/notes."
                    );
                case "unknown":
                    throw new errors.IntercomError({
                        message: _response.error.errorMessage,
                    });
            }
        };
        let _offset = request?.page != null ? request?.page : 1;
        return new core.Pageable<Intercom.NoteList, Intercom.Note>({
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
     * You can add a note to a single contact.
     *
     * @param {Intercom.CreateContactNoteRequest} request
     * @param {Notes.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Intercom.NotFoundError}
     *
     * @example
     *     await client.notes.create({
     *         contact_id: "123",
     *         body: "Hello",
     *         admin_id: "123"
     *     })
     */
    public async create(
        request: Intercom.CreateContactNoteRequest,
        requestOptions?: Notes.RequestOptions
    ): Promise<Intercom.Note> {
        const { contact_id: contactId, ..._body } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.IntercomEnvironment.UsProduction,
                `contacts/${encodeURIComponent(contactId)}/notes`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "intercom-client",
                "X-Fern-SDK-Version": "v6.1.0b0",
                "User-Agent": "intercom-client/v6.1.0b0",
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
            return _response.body as Intercom.Note;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
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
                    "Timeout exceeded when calling POST /contacts/{contact_id}/notes."
                );
            case "unknown":
                throw new errors.IntercomError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * You can fetch the details of a single note.
     *
     * @param {Intercom.FindNoteRequest} request
     * @param {Notes.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Intercom.UnauthorizedError}
     * @throws {@link Intercom.NotFoundError}
     *
     * @example
     *     await client.notes.find({
     *         note_id: "1"
     *     })
     */
    public async find(
        request: Intercom.FindNoteRequest,
        requestOptions?: Notes.RequestOptions
    ): Promise<Intercom.Note> {
        const { note_id: noteId } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.IntercomEnvironment.UsProduction,
                `notes/${encodeURIComponent(noteId)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "intercom-client",
                "X-Fern-SDK-Version": "v6.1.0b0",
                "User-Agent": "intercom-client/v6.1.0b0",
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
            return _response.body as Intercom.Note;
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
                throw new errors.IntercomTimeoutError("Timeout exceeded when calling GET /notes/{note_id}.");
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
