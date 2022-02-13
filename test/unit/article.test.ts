import assert from 'assert';
import { Client } from '../../lib';
import nock from 'nock';

describe('articles', () => {
    const client = new Client({
        usernameAuth: { username: 'foo', password: 'bar' },
    });
    it('creates article', async () => {
        const requestData = {
            title: 'Thanks for everything',
            description: 'English description',
            body: '<p>This is the body in html</p>',
            author_id: 1,
            state: 'published',
            parent_id: 1,
            parent_type: 'collection',
            translated_content: {
                fr: {
                    title: 'Allez les verts',
                    description: 'French description',
                    body: '<p>French body in html</p>',
                    author_id: 1,
                    state: 'published',
                },
            },
        };
        nock('https://api.intercom.io').post('/articles').reply(200, {});
        const response = await client.articles.create({
            title: requestData.title,
            description: requestData.description,
            body: requestData.body,
            authorId: requestData.author_id,
            state: requestData.state,
            parentId: requestData.parent_id,
            parentType: requestData.parent_type,
            translatedContent: requestData.translated_content,
        });

        assert.deepStrictEqual({}, response);
    });
    it('retrieves an article', async () => {
        const id = 'baz';

        nock('https://api.intercom.io').get(`/articles/${id}`).reply(200, {});

        const response = await client.articles.find({ id });

        assert.deepStrictEqual({}, response);
    });
    it('updates an article', async () => {
        const id = 'baz';
        const requestData = {
            title: 'Thanks for everything',
            description: 'English description',
            body: '<p>This is the body in html</p>',
            author_id: 1,
            state: 'published',
            parent_id: 1,
            parent_type: 'collection',
            translated_content: {
                fr: {
                    title: 'Allez les verts',
                    description: 'French description',
                    body: '<p>French body in html</p>',
                    author_id: 1,
                    state: 'published',
                },
            },
        };
        nock('https://api.intercom.io').put(`/articles/${id}`).reply(200, {});
        const response = await client.articles.update({
            id,
            title: requestData.title,
            description: requestData.description,
            body: requestData.body,
            authorId: requestData.author_id,
            state: requestData.state,
            parentId: requestData.parent_id,
            parentType: requestData.parent_type,
            translatedContent: requestData.translated_content,
        });

        assert.deepStrictEqual({}, response);
    });
    it('deletes an article', async () => {
        const id = 'baz';
        nock('https://api.intercom.io')
            .delete(`/articles/${id}`)
            .reply(200, {});

        const response = await client.articles.delete({
            id,
        });

        assert.deepStrictEqual({}, response);
    });
    it('lists all', async () => {
        const requestQuery = { page: 3, per_page: 12 };

        nock('https://api.intercom.io')
            .get('/articles')
            .query(requestQuery)
            .reply(200, {});

        const response = await client.articles.list({
            page: requestQuery.page,
            perPage: requestQuery.per_page,
        });

        assert.deepStrictEqual({}, response);
    });
});
