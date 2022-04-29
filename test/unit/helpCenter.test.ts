import assert from 'assert';
import { Client } from '../../lib';
import nock from 'nock';

describe('help center', () => {
    const client = new Client({
        usernameAuth: { username: 'foo', password: 'bar' },
    });
    describe('collections', () => {
        it('creates a collection', async () => {
            const requestData = {
                name: 'Thanks for everything',
                description: 'English description',
                translated_content: {
                    fr: {
                        name: 'Allez les verts',
                        description: 'French description',
                    },
                },
            };
            nock('https://api.intercom.io')
                .post('/help_center/collections')
                .reply(200, {});
            const response = await client.helpCenter.collections.create({
                name: requestData.name,
                description: requestData.description,
                translatedContent: requestData.translated_content,
            });

            assert.deepStrictEqual({}, response);
        });
        it('retrieves a collection', async () => {
            const id = 'baz';

            nock('https://api.intercom.io')
                .get(`/help_center/collections/${id}`)
                .reply(200, {});

            const response = await client.helpCenter.collections.find({ id });

            assert.deepStrictEqual({}, response);
        });
        it('updates a collection', async () => {
            const id = 'baz';
            const requestData = {
                name: 'Thanks for everything',
                description: 'English description',
                translated_content: {
                    fr: {
                        name: 'Allez les verts',
                        description: 'French description',
                    },
                },
            };
            nock('https://api.intercom.io')
                .put(`/help_center/collections/${id}`)
                .reply(200, {});
            const response = await client.helpCenter.collections.update({
                id,
                name: requestData.name,
                description: requestData.description,
                translatedContent: requestData.translated_content,
            });

            assert.deepStrictEqual({}, response);
        });
        it('deletes a collection', async () => {
            const id = 'baz';
            nock('https://api.intercom.io')
                .delete(`/help_center/collections/${id}`)
                .reply(200, {});

            const response = await client.helpCenter.collections.delete({
                id,
            });

            assert.deepStrictEqual({}, response);
        });
        it('lists all', async () => {
            const requestQuery = { page: 3, per_page: 12 };

            nock('https://api.intercom.io')
                .get('/help_center/collections')
                .query(requestQuery)
                .reply(200, {});

            const response = await client.helpCenter.collections.list({
                page: requestQuery.page,
                perPage: requestQuery.per_page,
            });

            assert.deepStrictEqual({}, response);
        });
    });
    describe('sections', () => {
        it('creates a section', async () => {
            const requestData = {
                name: 'Thanks for everything',
                parent_id: '123',
                translated_content: {
                    fr: {
                        name: 'Allez les verts',
                        description: 'French description',
                    },
                },
            };
            nock('https://api.intercom.io')
                .post('/help_center/sections')
                .reply(200, {});
            const response = await client.helpCenter.sections.create({
                name: requestData.name,
                parentId: requestData.parent_id,
                translatedContent: requestData.translated_content,
            });

            assert.deepStrictEqual({}, response);
        });
        it('retrieves a section', async () => {
            const id = 'baz';

            nock('https://api.intercom.io')
                .get(`/help_center/sections/${id}`)
                .reply(200, {});

            const response = await client.helpCenter.sections.find({ id });

            assert.deepStrictEqual({}, response);
        });
        it('updates a section', async () => {
            const id = 'baz';
            const requestData = {
                name: 'Thanks for everything',
                parent_id: '123',
                translated_content: {
                    fr: {
                        name: 'Allez les verts',
                        description: 'French description',
                    },
                },
            };
            nock('https://api.intercom.io')
                .put(`/help_center/sections/${id}`)
                .reply(200, {});
            const response = await client.helpCenter.sections.update({
                id,
                name: requestData.name,
                parentId: requestData.parent_id,
                translatedContent: requestData.translated_content,
            });

            assert.deepStrictEqual({}, response);
        });
        it('deletes a section', async () => {
            const id = 'baz';
            nock('https://api.intercom.io')
                .delete(`/help_center/sections/${id}`)
                .reply(200, {});

            const response = await client.helpCenter.sections.delete({
                id,
            });

            assert.deepStrictEqual({}, response);
        });
        it('lists all', async () => {
            const requestQuery = { page: 3, per_page: 12 };

            nock('https://api.intercom.io')
                .get('/help_center/sections')
                .query(requestQuery)
                .reply(200, {});

            const response = await client.helpCenter.sections.list({
                page: requestQuery.page,
                perPage: requestQuery.per_page,
            });

            assert.deepStrictEqual({}, response);
        });
    });
});
