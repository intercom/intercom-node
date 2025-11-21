import { Intercom } from "../../src";
import { randomString } from "./utils/random";
import { createClient } from "./utils/createClient";

describe("Data Attributes", () => {
    let randomDataAttribute: Intercom.DataAttribute | undefined;

    const client = createClient();

    beforeAll(async () => {
        // arrange
        const attributes = await client.dataAttributes.list();
        randomDataAttribute = attributes.data?.find((attribute) => attribute.id !== undefined);
    });

    xit("create", async () => {
        //act

        // The workspace we test on has hit the CDA limit, so we can't create any more
        // for now. We should reenable this test once we have a new workspace.
        const response = await client.dataAttributes.create({
            model: "contact",
            data_type: "string",
            description: "Dummy description",
            options: ["yey", "yoy"],
        });

        // assert
        expect(response).toBeDefined();
    });
    it("update", async () => {
        // arrange
        if (!randomDataAttribute?.id) {
            console.log("randomDataAttribute", randomDataAttribute);
            throw new Error("random_data_attribute.id is required to update");
        }

        // act
        const response = await client.dataAttributes.update({
            data_attribute_id: parseInt(randomDataAttribute.id.toString(), 10),
            archived: false,
            description: "Woo-aaa",
            options: [
                {
                    value: "1-10",
                },
                {
                    value: "11-20",
                },
            ],
        });

        // assert
        expect(response).toBeDefined();
    });
    it("list", async () => {
        // act
        const response = await client.dataAttributes.list({
            include_archived: true,
            model: "conversation",
        });

        // assert
        expect(response).toBeDefined();
    });
});
