/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../errors/index";
import * as Intercom from "../index";
import * as core from "../../core";

export class UnauthorizedError extends errors.IntercomError {
    constructor(body: Intercom.Error_, rawResponse?: core.RawResponse) {
        super({
            message: "UnauthorizedError",
            statusCode: 401,
            body: body,
            rawResponse: rawResponse,
        });
        Object.setPrototypeOf(this, UnauthorizedError.prototype);
    }
}
