import { Client } from '../../dist';
import assert from 'assert';
import { token } from './utils/config';
import { randomString } from './utils/random';

describe('Articles', () => {
    let newArticleId: string;
    let parentId: number;
    let adminId: number;

    before(async () => {
        const randomCollections = await client.helpCenter.collections.list({
            perPage: 1,
        });
        const randomAdmins = await client.admins.list();

        parentId = parseInt(randomCollections.data[0].id, 10);
        adminId = parseInt(randomAdmins.admins[0].id, 10);
    });

    const client = new Client({ tokenAuth: { token } });

    it('create', async () => {
        const response = await client.articles.create({
            title: randomString(),
            description: randomString(),
            body: '<b>Eins Zwei</b>',
            authorId: adminId,
            state: 'draft',
            parentId,
            parentType: 'collection',
            translatedContent: {
                fr: {
                    title: 'Allez les verts',
                    description: 'French description',
                    body: '<p>French body in html</p>',
                    author_id: adminId,
                    state: 'draft',
                },
            },
        });

        newArticleId = response.id;
        assert.notEqual(response, undefined);
    });
    it('find', async () => {
        const response = await client.articles.find({ id: newArticleId });

        assert.notEqual(response, undefined);
    });
    it('update', async () => {
        const response = await client.articles.update({
            id: newArticleId,
            title: 'Biba & Boba',
        });

        assert.notEqual(response, undefined);
    });
    it('delete', async () => {
        const response = await client.articles.delete({ id: newArticleId });

        assert.notEqual(response, undefined);
    });
    it('list', async () => {
        const response = await client.articles.list({ page: 1, perPage: 12 });

        assert.notEqual(response, undefined);
    });
});
