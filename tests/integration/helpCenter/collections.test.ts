import { IntercomClient as Client } from "../../../src";
import { Collection } from "../../../src/api/resources/helpCenter/types";
import { createClient } from "../utils/createClient";

async function createCollection(client: Client): Promise<Collection> {
    return await client.helpCenters.collections.create({
        name: "The Bruh Moment",
        description: "Bruuuuuh",
        translated_content: {
            type: "group_translated_content",
            fr: {
                type: "group_content",
                name: "Le Moment Frère",
                description: "Frèèèèère",
            },
        },
    });
}

async function tryDeleteCollection(client: Client, collectionId: string) {
    try {
        await client.helpCenters.collections.delete({ collection_id: parseInt(collectionId, 10) });
    } catch (error) {
        console.log(error);
    }
}

describe("Collections", () => {
    let collectionId: string;

    const client = createClient();

    beforeAll(async () => {
        // arrange
        const collection = await createCollection(client);
        collectionId = collection.id;
    });

    afterAll(async () => {
        // cleanup
        await tryDeleteCollection(client, collectionId);
    });

    it("create", async () => {
        // act
        const collection = await createCollection(client);

        // assert
        expect(collection).toBeDefined();

        // cleanup
        await tryDeleteCollection(client, collection.id);
    });

    it("find", async () => {
        // act
        const response = await client.helpCenters.collections.find({
            collection_id: parseInt(collectionId, 10),
        });

        // assert
        expect(response).toBeDefined();
    });

    it("update", async () => {
        // arrange
        const collection = await createCollection(client);

        // act
        const response = await client.helpCenters.collections.update({
            collection_id: parseInt(collection.id, 10),
            name: "People of future, tell us if NFTs make sense in 2026",
        });

        // assert
        expect(response).toBeDefined();

        // cleanup
        await tryDeleteCollection(client, collection.id);
    });

    it("list", async () => {
        // act
        const response = await client.helpCenters.collections.list({
            per_page: 25,
            page: 1,
        });

        // assert
        expect(response).toBeDefined();
    });

    it("delete", async () => {
        // arrange
        const collection = await createCollection(client);

        // act
        const response = await client.helpCenters.collections.delete({
            collection_id: parseInt(collection.id, 10),
        });

        // assert
        expect(response).toBeDefined();
    });
});
