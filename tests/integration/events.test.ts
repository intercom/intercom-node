import { IntercomClient as Client } from "../../src";
import { dateToUnixTimestamp } from "./utils/date";
import { randomString } from "./utils/random";
import { createClient } from "./utils/createClient";

describe("Events", () => {
    let userId: string;
    let eventId = randomString();

    const client = createClient();

    beforeAll(async () => {
        // arrange
        const randomUsers = await client.contacts.search({
            query: {
                operator: "AND",
                value: [
                    {
                        field: "role",
                        operator: "=",
                        value: "user",
                    },
                    {
                        field: "external_id",
                        operator: "!=",
                        value: undefined,
                    },
                ],
            },
            pagination: {
                per_page: 1,
            },
        });
        userId = randomUsers.data[0].external_id || "";
        if (!userId) {
            console.warn("user_id is required to run tests");
        }
    });

    it("create", async () => {
        // act
        expect(
            async () =>
                await client.events.create({
                    id: eventId,
                    user_id: userId,
                    event_name: "opinion-rejected",
                    created_at: dateToUnixTimestamp(new Date()),
                    metadata: {
                        guidance: "provided",
                        wereall: "gonna make it",
                        price: "9001",
                    },
                })
        ).not.toThrowError();
    });

    // expected to fail for now
    it("listBy", async () => {
        const response = await client.events.list({
            type: "user",
            user_id: userId,
            per_page: 2,
            summary: true,
        });

        expect(response).toBeDefined();
    });
});
