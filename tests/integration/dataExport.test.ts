import { Intercom, IntercomClient } from "../../src";
import { createClient } from "./utils/createClient";

async function createDataExport(client: IntercomClient): Promise<Intercom.DataExport> {
    const dataExport = await client.dataExport.create({
        created_at_after: 1670000000,
        created_at_before: 1670940528,
    });
    return dataExport;
}

async function tryCancelDataExport(client: IntercomClient, jobIdentifier: string): Promise<void> {
    try {
        await client.dataExport.cancel({ job_identifier: jobIdentifier });
    } catch (error: unknown) {
        console.log(error);
    }
}

describe("dataExport", () => {
    const client = createClient();
    it("create", async () => {
        // act
        const response = await createDataExport(client);

        // assert
        expect(response).toBeDefined();

        // cleanup
        await tryCancelDataExport(client, response.job_identifier);
    });

    it("find", async () => {
        // arrange
        const dataExport = await createDataExport(client);

        // act
        const response = await client.dataExport.find({ job_identifier: dataExport.job_identifier });

        // assert
        expect(response).toBeDefined();

        // cleanup
        await tryCancelDataExport(client, dataExport.job_identifier);
    });

    it("cancel", async () => {
        // arrange
        const dataExport = await createDataExport(client);

        // act
        const response = await client.dataExport.cancel({ job_identifier: dataExport.job_identifier });

        // assert
        expect(response).toBeDefined();
    });
});
