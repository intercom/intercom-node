import { IntercomClient as Client } from "../../src";
import { randomString } from "./utils/random";
import { createClient } from "./utils/createClient";

async function createArticle(client: Client, parentId: number, adminId: number) {
    return await client.articles.create({
        title: randomString(),
        description: randomString(),
        body: "<b>Eins Zwei</b>",
        author_id: adminId,
        state: "draft",
        parent_id: parentId,
        parent_type: "collection",
        translated_content: {
            fr: {
                type: "article_content",
                title: "Allez les verts",
                description: "French description",
                body: "<p>French body in html</p>",
                author_id: adminId,
                state: "draft",
            },
        },
    });
}

async function tryDeleteArticle(client: Client, articleId: string) {
    try {
        await client.articles.delete({ article_id: articleId });
    } catch (error) {
        console.error("Failed to delete article:", error);
    }
}

describe("Articles", () => {
    let articleId: string;
    let parentId: number;
    let adminId: number;
    const client = createClient();

    beforeAll(async () => {
        // arrange
        const randomCollections = await client.helpCenters.collections.list({
            per_page: 1,
        });
        const randomAdmins = await client.admins.list();

        parentId = parseInt(randomCollections.data[0].id, 10);
        adminId = parseInt(randomAdmins.admins[0].id, 10);

        const article = await createArticle(client, parentId, adminId);
        articleId = article.id;
    });

    afterAll(async () => {
        // cleanup
        await tryDeleteArticle(client, articleId);
    });

    it("create", async () => {
        // act
        const article = await createArticle(client, parentId, adminId);

        // assert
        expect(article).toBeDefined();

        // cleanup
        await tryDeleteArticle(client, article.id);
    });

    it("find", async () => {
        // act
        const response = await client.articles.find({ article_id: articleId });

        // assert
        expect(response).toBeDefined();
    });

    it("update", async () => {
        // arrange
        const article = await createArticle(client, parentId, adminId);

        // act
        const response = await client.articles.update({
            article_id: article.id,
            title: "Biba & Boba",
        });

        // assert
        expect(response).toBeDefined();

        // cleanup
        await tryDeleteArticle(client, article.id);
    });

    it("list", async () => {
        // act
        const response = await client.articles.list({ page: 1, per_page: 12 });

        // assert
        expect(response).toBeDefined();
    });

    it("delete", async () => {
        // arrange
        const article = await createArticle(client, parentId, adminId);

        // act
        const response = await client.articles.delete({ article_id: article.id });

        // assert
        expect(response).toBeDefined();
    });
});
