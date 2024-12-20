import { createClient } from "./utils/createClient";

describe("phoneCallRedirect", () => {
    const client = createClient();

    // TODO: Configure Twilio to enable phone call redirect tests.
    it.skip("create", async () => {
        // act
        const response = await client.phoneCallRedirects.create({
            phone: "+353832345678",
            custom_attributes: {
                issue_type: "Billing",
                priority: "High",
            },
        });

        // assert
        expect(response).toBeDefined();
    });
});
