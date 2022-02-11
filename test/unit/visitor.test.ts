import assert from 'assert';
import { Client, Role } from '../../lib';
import nock from 'nock';

describe('visitors', () => {
    const client = new Client({
        usernameAuth: { username: 'foo', password: 'bar' },
    });
    it('retrieves a visitor by id', async () => {
        const id = 'baz';

        nock('https://api.intercom.io').get(`/visitors/${id}`).reply(200, {});

        const response = await client.visitors.find({ id });

        assert.deepStrictEqual({}, response);
    });
    it('retrieves a visitor by user id', async () => {
        const userId = 'baz';

        nock('https://api.intercom.io')
            .get('/visitors')
            .query({ user_id: userId })
            .reply(200, {});

        const response = await client.visitors.find({ userId });

        assert.deepStrictEqual({}, response);
    });
    it('updates a visitor by id', async () => {
        const requestData = {
            user_id: '124',
            name: 'Winston Smith',
            custom_attributes: {
                paid_subscriber: true,
                monthly_spend: 155.5,
                team_mates: 9,
            },
        };
        nock('https://api.intercom.io').put('/visitors').reply(200, {});
        const response = await client.visitors.update({
            userId: requestData.user_id,
            name: requestData.name,
            customAttributes: requestData.custom_attributes,
        });

        assert.deepStrictEqual({}, response);
    });
    it('deletes a visitor', async () => {
        const id = 'baz';

        nock('https://api.intercom.io')
            .delete(`/visitors/${id}`)
            .reply(200, {});

        const response = await client.visitors.delete({
            id,
        });

        assert.deepStrictEqual({}, response);
    });
    it('converts a visitor into contact', async () => {
        const requestData = {
            visitor: { id: 'baz' },
            user: { user_id: 'bez' },
            type: Role.USER,
        };

        nock('https://api.intercom.io')
            .post('/visitors/convert', requestData)
            .reply(200, {});

        const response = await client.visitors.mergeToContact({
            visitor: {
                id: requestData.visitor.id,
            },
            user: {
                userId: requestData.user.user_id,
            },
            type: requestData.type,
        });

        assert.deepStrictEqual({}, response);
    });
});
