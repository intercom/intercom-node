import { createClient } from "./utils/createClient";

describe("Subscriptions", () => {
    const client = createClient();

    it("listTypes", async () => {
        // act
        const response = await client.subscriptionTypes.list();

        // assert
        expect(response).toBeDefined();
    });
});
