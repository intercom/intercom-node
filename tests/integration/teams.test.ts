import { createClient } from "./utils/createClient";

describe("Teams", () => {
    let teamId: string;

    const client = createClient();

    beforeAll(async () => {
        // arrange
        const response = await client.teams.list();
        teamId = response.teams?.[0]?.id ?? "0";
    });

    it("list", async () => {
        // act
        const response = await client.teams.list();

        // assert
        expect(response).toBeDefined();
    });

    it("find", async () => {
        // act
        const response = await client.teams.find({ team_id: teamId });

        // assert
        expect(response).toBeDefined();
    });
});
