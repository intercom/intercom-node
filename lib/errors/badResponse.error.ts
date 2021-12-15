import { AxiosResponse } from 'axios';

export class BadResponseError extends Error {
    constructor(
        readonly message: string,
        readonly body: AxiosResponse['data'],
        readonly headers: AxiosResponse['headers'],
        readonly statusCode: AxiosResponse['status']
    ) {
        super(message);
        this.body = body;
        this.headers = headers;
        this.statusCode = statusCode;
    }
}
