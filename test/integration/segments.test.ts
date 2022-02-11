import { Client } from '../../dist';
import assert from 'assert';
import { segmentId, token } from './utils/config';

describe('Segments', () => {
    const client = new Client({ tokenAuth: { token } });

    it('find', async () => {
        const response = await client.segments.find({ id: segmentId });

        assert.notEqual(response, undefined);
    });
    it('list', async () => {
        const response = await client.segments.list({ includeCount: true });

        assert.notEqual(response, undefined);
    });
});
