import { createClient } from "./utils/createClient";

describe("Segments", () => {
    let segmentId: string;

    const client = createClient();

    beforeAll(async () => {
        // arrange
        const response = await client.segments.list();
        segmentId = response.segments?.[0]?.id ?? "0";
    });

    it("list", async () => {
        // act
        const response = await client.segments.list({
            include_count: true,
        });

        // assert
        expect(response).toBeDefined();
    });

    it("find", async () => {
        // act
        const response = await client.segments.find({ segment_id: segmentId });

        // assert
        expect(response).toBeDefined();
    });
});
