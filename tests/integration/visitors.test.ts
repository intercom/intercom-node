import { createClient } from "./utils/createClient";

// Skip by default, because there is no automation yet
describe.skip("Visitors", () => {
    // Info: should be set manually. Find a way to automate it.
    // Tip: headless browser to visit test application and get visitorId from ping request.
    const visitorId = "0";
    const userId = "0";

    const client = createClient();

    it("find by id", async () => {
        // act
        const response = await client.visitors.find({ user_id: visitorId });

        // assert
        expect(response).toBeDefined();
    });
    it("find by user id", async () => {
        // act
        const response = await client.visitors.find({ user_id: userId });

        // assert
        expect(response).toBeDefined();
    });
    it("update", async () => {
        // act
        const response = await client.visitors.update({
            user_id: userId,
            name: "Winston Smith",
        });

        // assert

        expect(response).toBeDefined();
    });

    it("mergeToContact", async () => {
        // act
        const response = await client.visitors.mergeToContact({
            visitor: {
                id: visitorId,
            },
            user: {
                email: "mcboxford@intercom-test.com",
            } as any,
            type: "user",
        });

        // assert
        expect(response).toBeDefined();
    });
});
