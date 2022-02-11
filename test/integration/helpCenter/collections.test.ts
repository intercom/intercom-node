import { Client, CollectionObject } from '../../../dist';
import assert from 'assert';
import { token } from '../utils/config';

describe('Collections', () => {
    let collection: CollectionObject;

    const client = new Client({ tokenAuth: { token } });

    it('create', async () => {
        const response = await client.helpCenter.collections.create({
            name: 'The Bruh Moment',
            description: 'Bruuuuuh',
            translatedContent: {
                fr: {
                    name: 'Le Moment Frère',
                    description: 'Frèèèèère',
                },
            },
        });

        collection = response;

        assert.notEqual(response, undefined);
    });
    it('find', async () => {
        const response = await client.helpCenter.collections.find({
            id: collection.id,
        });

        assert.notEqual(response, undefined);
    });
    it('update', async () => {
        const response = await client.helpCenter.collections.update({
            id: collection.id,
            name: 'People of future, tell us if NFTs make sense in 2026',
        });

        assert.notEqual(response, undefined);
    });
    it('delete', async () => {
        const response = await client.helpCenter.collections.delete({
            id: collection.id,
        });

        assert.notEqual(response, undefined);
    });
    it('list', async () => {
        const response = await client.helpCenter.collections.list({
            perPage: 25,
            page: 1,
        });

        assert.notEqual(response, undefined);
    });
});
