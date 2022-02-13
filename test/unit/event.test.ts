import assert from 'assert';
import { Client } from '../../lib';
import nock from 'nock';

describe('events', () => {
    const client = new Client({
        usernameAuth: { username: 'foo', password: 'bar' },
    });

    it('should be submitted (created)', async () => {
        const requestBody = {
            event_name: 'placed-order',
            created_at: 1389913941,
            user_id: 'f4ca124298',
            metadata: {
                order_date: 1392036272,
                stripe_invoice: 'inv_3434343434',
                order_number: {
                    value: '3434-3434',
                    url: 'https://example.org/orders/3434-3434',
                },
                price: {
                    currency: 'usd',
                    amount: 2999,
                },
            },
        };

        nock('https://api.intercom.io')
            .post('/events', requestBody)
            .reply(200, {});

        const response = await client.events.create({
            eventName: requestBody.event_name,
            createdAt: requestBody.created_at,
            userId: requestBody.user_id,
            metadata: requestBody.metadata,
        });

        assert.deepStrictEqual({}, response);
    });
    it('should list by params', async () => {
        const requestParams = {
            type: 'user',
            user_id: '1234',
            per_page: 2,
            summary: true,
            email: 'i_love_memes@gmail.com',
        };

        nock('https://api.intercom.io')
            .get('/events')
            .query(requestParams)
            .reply(200, {});

        const response = await client.events.listBy({
            userId: requestParams.user_id,
            perPage: requestParams.per_page,
            summary: requestParams.summary,
            email: requestParams.email,
        });

        assert.deepStrictEqual({}, response);
    });
});
