import { Client, DataAttributeObject, DataType, ModelType } from '../../dist';
import assert from 'assert';
import { token } from './utils/config';
import { randomInt } from './utils/random';

describe('Data Attributes', () => {
    let createdDataAttribute: DataAttributeObject;

    const client = new Client({ tokenAuth: { token } });

    it('create', async () => {
        const response = await client.dataAttributes.create({
            name: `Bebech${randomInt(0, 999)},${randomInt(
                randomInt(0, 999)
            )},${randomInt(0, 999)},${randomInt(randomInt(0, 999))}`,
            model: ModelType.CONTACT,
            dataType: DataType.STRING,
            description: 'Dummy description',
            options: [{ value: 'yey' }, { value: 'yoy' }],
        });

        createdDataAttribute = response;

        assert.notEqual(response, undefined);
    });
    it('update', async () => {
        const response = await client.dataAttributes.update({
            id: createdDataAttribute.id,
            archived: false,
            description: 'Woo-aaa',
            options: [{ value: 'yey' }, { value: 'yoy' }],
        });

        assert.notEqual(response, undefined);
    });
    it('list', async () => {
        const response = await client.dataAttributes.list({
            includeArchived: true,
            model: ModelType.CONVERSATION,
        });

        assert.notEqual(response, undefined);
    });
});
