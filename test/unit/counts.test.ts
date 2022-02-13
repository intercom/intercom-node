import assert from 'assert';
import { Client, CountEntity, CountType } from '../../lib';
import nock from 'nock';

describe('counts', () => {
    const client = new Client({
        usernameAuth: { username: 'foo', password: 'bar' },
    });
    it('gets total app count', async () => {
        nock('https://api.intercom.io').get('/counts').reply(200, {});
        const response = await client.counts.forApp();

        assert.deepStrictEqual({}, response);
    });
    it('gets conversations count', async () => {
        nock('https://api.intercom.io')
            .get('/counts')
            .query({ type: CountType.CONVERSATION })
            .reply(200, {});
        const response = await client.counts.countConversation();

        assert.deepStrictEqual({}, response);
    });
    it('gets admin conversations count', async () => {
        nock('https://api.intercom.io')
            .get('/counts')
            .query({ type: CountType.CONVERSATION, count: CountEntity.ADMIN })
            .reply(200, {});
        const response = await client.counts.countAdminConversation();

        assert.deepStrictEqual({}, response);
    });
    describe('for user', () => {
        it('gets segment count', async () => {
            nock('https://api.intercom.io')
                .get('/counts')
                .query({ type: CountType.USER, count: CountEntity.SEGMENT })
                .reply(200, {});
            const response = await client.counts.countUserSegment();

            assert.deepStrictEqual({}, response);
        });

        it('gets tags count', async () => {
            nock('https://api.intercom.io')
                .get('/counts')
                .query({ type: CountType.USER, count: CountEntity.TAG })
                .reply(200, {});
            const response = await client.counts.countUserTag();

            assert.deepStrictEqual({}, response);
        });
    });
    describe('for company', () => {
        it('gets segment count', async () => {
            nock('https://api.intercom.io')
                .get('/counts')
                .query({ type: CountType.COMPANY, count: CountEntity.SEGMENT })
                .reply(200, {});
            const response = await client.counts.countCompanySegment();

            assert.deepStrictEqual({}, response);
        });

        it('gets tags count', async () => {
            nock('https://api.intercom.io')
                .get('/counts')
                .query({ type: CountType.COMPANY, count: CountEntity.TAG })
                .reply(200, {});
            const response = await client.counts.countCompanyTag();

            assert.deepStrictEqual({}, response);
        });

        it('gets users count', async () => {
            nock('https://api.intercom.io')
                .get('/counts')
                .query({ type: CountType.COMPANY, count: CountEntity.USER })
                .reply(200, {});
            const response = await client.counts.countCompanyUser();

            assert.deepStrictEqual({}, response);
        });
    });
});
