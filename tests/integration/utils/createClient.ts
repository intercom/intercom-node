import { type Intercom, IntercomClient } from "../../../src";

type IntercomVersion = Intercom.IntercomVersion;

export function createClient(options?: { version?: IntercomVersion }): IntercomClient {
    const { version } = options || {};
    return new IntercomClient({
        token: process.env.API_TOKEN as string,
        version,
    });
}
