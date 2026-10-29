import { IntercomClient } from "../../../src/Client";
import { makePassthroughRequest } from "../../../src/core/fetcher/makePassthroughRequest";

describe("makePassthroughRequest", () => {
    const BASE_URL = "https://api.example.com";

    function capture() {
        const calls: { url: string; init: RequestInit }[] = [];
        const fetch = async (url: string, init: RequestInit) => {
            calls.push({ url, init });
            return new Response("{}");
        };
        return { calls, fetch: fetch as unknown as typeof globalThis.fetch };
    }

    it("keeps the query string out of the path", async () => {
        const { calls, fetch } = capture();
        await makePassthroughRequest("/contacts?per_page=5&starting_after=next", undefined, {
            baseUrl: BASE_URL,
            fetch,
        });
        expect(calls[0]?.url).toBe(`${BASE_URL}/contacts?per_page=5&starting_after=next`);
    });

    it("keeps the hash after the query string", async () => {
        const { calls, fetch } = capture();
        await makePassthroughRequest("contacts?a=1#frag", undefined, { baseUrl: BASE_URL, fetch });
        expect(calls[0]?.url).toBe(`${BASE_URL}/contacts?a=1#frag`);
    });

    it("keeps method and body from a Request when init only sets headers", async () => {
        const { calls, fetch } = capture();
        const request = new Request(`${BASE_URL}/contacts`, {
            method: "POST",
            body: JSON.stringify({ email: "a@example.com" }),
            headers: { "Content-Type": "application/json" },
        });
        await makePassthroughRequest(request, { headers: { "X-Review": "true" } }, { baseUrl: BASE_URL, fetch });
        const init = calls[0]?.init;
        expect(init?.method).toBe("POST");
        expect(Buffer.from(init?.body as ArrayBuffer).toString()).toBe('{"email":"a@example.com"}');
        expect(init?.headers).toMatchObject({ "x-review": "true" });
        expect(init?.headers).not.toHaveProperty("content-type");
    });

    it("lets init override the method of a Request", async () => {
        const { calls, fetch } = capture();
        const request = new Request(`${BASE_URL}/contacts`, { method: "POST", body: "x" });
        await makePassthroughRequest(request, { method: "PUT" }, { baseUrl: BASE_URL, fetch });
        expect(calls[0]?.init.method).toBe("PUT");
    });

    it("leaves the Request body unread when init replaces it", async () => {
        const { calls, fetch } = capture();
        const request = new Request(`${BASE_URL}/contacts`, { method: "POST", body: "x" });
        await makePassthroughRequest(request, { body: "y" }, { baseUrl: BASE_URL, fetch });
        expect(calls[0]?.init.body).toBe("y");
        expect(request.bodyUsed).toBe(false);
    });

    describe("client.fetch default environment", () => {
        it("resolves a relative path and sends auth without an explicit environment", async () => {
            const { calls, fetch } = capture();
            const client = new IntercomClient({ token: "test-token", fetch });
            await client.fetch("/contacts");
            expect(calls[0]?.url).toBe("https://api.intercom.io/contacts");
            expect(new Headers(calls[0]?.init.headers as Record<string, string>).get("authorization")).toBe(
                "Bearer test-token",
            );
        });

        it("sends auth for an absolute URL on the default origin", async () => {
            const { calls, fetch } = capture();
            const client = new IntercomClient({ token: "test-token", fetch });
            await client.fetch("https://api.intercom.io/contacts");
            expect(new Headers(calls[0]?.init.headers as Record<string, string>).get("authorization")).toBe(
                "Bearer test-token",
            );
        });

        it("prefers baseUrl over the default environment", async () => {
            const { calls, fetch } = capture();
            const client = new IntercomClient({ token: "test-token", baseUrl: BASE_URL, fetch });
            await client.fetch("/contacts");
            expect(calls[0]?.url).toBe(`${BASE_URL}/contacts`);
        });
    });
});
