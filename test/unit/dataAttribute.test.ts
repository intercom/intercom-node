import assert from 'assert';
import { Client } from '../../lib';
import {
    DataType,
    ModelType,
} from '../../lib/dataAttribute/dataAttribute.types';
import nock from 'nock';

describe('data attributes', () => {
    const client = new Client({
        usernameAuth: { username: 'foo', password: 'bar' },
    });

    it('should create', async () => {
        const requestBody = {
            name: 'list_cda',
            model: ModelType.CONTACT,
            data_type: DataType.STRING,
            description: 'You are either alive or dead',
            options: [{ value: 'alive' }, { value: 'dead' }],
        };

        nock('https://api.intercom.io')
            .post('/data_attributes', requestBody)
            .reply(200, {});
        const response = await client.dataAttributes.create({
            name: requestBody.name,
            model: ModelType.CONTACT,
            dataType: DataType.STRING,
            description: requestBody.description,
            options: requestBody.options,
        });

        assert.deepStrictEqual({}, response);
    });
    it('should update', async () => {
        const id = '123';
        const requestBody = {
            description: 'You are either alive or dead',
            options: [{ value: 'alive' }, { value: 'dead' }],
            archived: true,
        };

        nock('https://api.intercom.io')
            .put(`/data_attributes/${id}`)
            .reply(200, {});
        const response = await client.dataAttributes.update({
            id,
            description: requestBody.description,
            options: requestBody.options,
            archived: requestBody.archived,
        });

        assert.deepStrictEqual({}, response);
    });
    it('should list all', async () => {
        const queryParams = {
            model: ModelType.CONTACT,
            include_archived: true,
        };

        nock('https://api.intercom.io')
            .get('/data_attributes')
            .query(queryParams)
            .reply(200, {});
        const response = await client.dataAttributes.list({
            model: queryParams.model,
            includeArchived: queryParams.include_archived,
        });

        assert.deepStrictEqual({}, response);
    });
});
