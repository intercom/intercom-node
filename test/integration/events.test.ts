import { Client, Operators, Role } from '../../dist';
import { dateToUnixTimestamp } from '../../dist/util/time';
import assert from 'assert';
import { token } from './utils/config';

describe('Events', () => {
    let userId: string;

    before(async () => {
        const randomUsers = await client.contacts.search({
            data: {
                query: {
                    operator: Operators.AND,
                    value: [
                        {
                            field: 'role',
                            operator: Operators.EQUALS,
                            value: Role.USER,
                        },
                        {
                            field: 'external_id',
                            operator: Operators.NOT_EQUALS,
                            value: null,
                        },
                    ],
                },
                pagination: {
                    per_page: 1,
                },
            },
        });

        userId = randomUsers.data[0].external_id;
    });

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
