import { IntercomClient } from "../../../src";

export function createClient(): IntercomClient {
    return new IntercomClient({ token: process.env.API_TOKEN as string });
}
