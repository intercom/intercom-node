export type ErrorHeaders = Record<string, string> & {
    'set-cookie'?: string[];
};
export class BadResponseError extends Error {
    constructor(
        readonly message: string,
        readonly body: any,
        readonly headers: ErrorHeaders,
        readonly statusCode: number
    ) {
        super(message);
        this.body = body;
        this.headers = headers;
        this.statusCode = statusCode;
    }
}
