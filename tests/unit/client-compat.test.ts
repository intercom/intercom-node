import { normalizeClientOptions } from "../../src/BaseClient";
import { IntercomClient } from "../../src/Client";
import type { Intercom } from "../../src/index";

describe("7.0.x compatibility", () => {
    describe("custom fetcher", () => {
        function recordingFetcher() {
            const received: { queryParameters?: Record<string, unknown>; queryString?: string }[] = [];
            const fetcher = async (args: { queryParameters?: Record<string, unknown>; queryString?: string }) => {
                received.push({ queryParameters: args.queryParameters, queryString: args.queryString });
                return {
                    ok: true as const,
                    body: { type: "event.list", events: [] },
                    rawResponse: { headers: new Headers(), status: 200 } as never,
                };
            };
            return { received, fetcher: fetcher as never };
        }

        it("still receives queryParameters alongside queryString", async () => {
            const { received, fetcher } = recordingFetcher();
            const client = new IntercomClient({ token: "t", fetcher });
            await client.events.list({ email: "a@example.com", type: "user", per_page: 5 });
            expect(received[0]?.queryParameters).toEqual({ email: "a@example.com", type: "user", per_page: "5" });
            expect(received[0]?.queryString).toBe("email=a%40example.com&type=user&per_page=5");
        });

        it("collects repeated keys into arrays and applies requestOptions.queryParams", async () => {
            const { received, fetcher } = recordingFetcher();
            const client = new IntercomClient({ token: "t", fetcher });
            await client.events.list(
                { type: "user", per_page: 5 },
                { queryParams: { per_page: undefined, tags: ["a", "b"] } },
            );
            expect(received[0]?.queryParameters).toEqual({ type: "user", tags: ["a", "b"] });
        });

        it("does not wrap an already wrapped fetcher again", () => {
            const { fetcher } = recordingFetcher();
            const once = normalizeClientOptions({ fetcher });
            expect(normalizeClientOptions(once).fetcher).toBe(once.fetcher);
        });
    });

    describe("token supplier", () => {
        it("accepts suppliers that return string | undefined", () => {
            const readToken: () => string | undefined = () => process.env.NOT_SET_FOR_TEST;
            expect(new IntercomClient({ token: readToken })).toBeInstanceOf(IntercomClient);
            expect(new IntercomClient({ token: async () => readToken() })).toBeInstanceOf(IntercomClient);
        });

        it("falls back to INTERCOM_API_KEY when the supplier returns undefined", async () => {
            process.env.INTERCOM_API_KEY = "from-env";
            try {
                const client = new IntercomClient({ token: () => undefined as string | undefined });
                const headers = await (client as any)._options.authProvider.getAuthRequest();
                expect(headers.headers.Authorization).toBe("Bearer from-env");
            } finally {
                delete process.env.INTERCOM_API_KEY;
            }
        });
    });

    it("exposes the deprecated stable aliases", () => {
        const aliases: [
            Intercom.CreateContactRequestTwo,
            Intercom.CreateDataEventRequestTwo,
            Intercom.UpdateVisitorRequestOne,
        ] = [1, "a", {}];
        expect(aliases).toHaveLength(3);
    });
});
