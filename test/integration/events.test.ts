import { Client } from '../../dist';
import { dateToUnixTimestamp } from '../../dist/util/time';
import assert from 'assert';
import { token, userId } from './utils/config';

describe('Events', () => {
    const client = new Client({ tokenAuth: { token } });

    it('create', async () => {
        const response = await client.events.create({
            userId,
            eventName: 'opinion-rejected',
            createdAt: dateToUnixTimestamp(new Date()),
            metadata: {
                guidance: 'provided',
                wereall: 'gonna make it',
                price: { amount: 9001, currency: 'eur' },
            },
        });

        assert.notEqual(response, undefined);
    });
    it('listBy', async () => {
        const response = await client.events.listBy({
            userId,
            perPage: 2,
            summary: true,
        });

        assert.notEqual(response, undefined);
    });
});
