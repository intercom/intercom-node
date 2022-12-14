import { Client } from '../../dist';
import assert from 'assert';
import { token } from './utils/config';

describe('Subscriptions', () => {
    const client = new Client({ tokenAuth: { token } });

    it('listTypes', async () => {
        const response = await client.subscriptions.listTypes();

        assert.notEqual(response, undefined);
    });
});
