import { createClient } from "./utils/createClient";

describe("Admins", () => {
    let adminId: string;
    const client = createClient();

    beforeAll(async () => {
        // arrange
        const adminList = await client.admins.list();
        adminId = adminList.admins?.[0]?.id ?? "0";
    });

    it("list", async () => {
        // act
        const response = await client.admins.list();

        // assert
        expect(response).toBeDefined();
    });
    it("find", async () => {
        // act
        const response = await client.admins.find({ admin_id: parseInt(adminId, 10) });

        // assert
        expect(response).toBeDefined();
    });

    it("listAllActivityLogs", async () => {
        // act
        const response = await client.admins.listAllActivityLogs({
            created_at_after: new Date("2021-12-12").toISOString(),
            created_at_before: new Date("2022-01-01").toISOString(),
        });

        // assert
        expect(response).toBeDefined();
    });

    it("away - ON", async () => {
        // act
        const response = await client.admins.away({
            admin_id: parseInt(adminId, 10),
            away_mode_enabled: true,
            away_mode_reassign: true,
        });

        // assert
        expect(response).toBeDefined();
    });
    it("away - OFF", async () => {
        // act
        const response = await client.admins.away({
            admin_id: parseInt(adminId, 10),
            away_mode_enabled: false,
            away_mode_reassign: false,
        });

        // assert
        expect(response).toBeDefined();
    });
});
