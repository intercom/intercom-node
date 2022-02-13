import { Client } from '../../dist';
import assert from 'assert';
import { token } from './utils/config';

describe('Segments', () => {
    let segmentId: string;

    const client = new Client({ tokenAuth: { token } });

    it('list', async () => {
        const response = await client.segments.list({ includeCount: true });

        segmentId = response.segments[0].id;

        assert.notEqual(response, undefined);
    });
    it('find', async () => {
        const response = await client.segments.find({ id: segmentId });

        assert.notEqual(response, undefined);
    });
});
