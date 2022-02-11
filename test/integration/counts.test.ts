import { Client } from '../../dist';
import assert from 'assert';
import { token } from './utils/config';

describe('Counts', () => {
    const client = new Client({ tokenAuth: { token } });

    it('forApp', async () => {
        const response = await client.counts.forApp();

        assert.notEqual(response, undefined);
    });
    it('countConversation', async () => {
        const response = await client.counts.countConversation();

        assert.notEqual(response, undefined);
    });
    it('countAdminConversation', async () => {
        const response = await client.counts.countAdminConversation();

        assert.notEqual(response, undefined);
    });
    it('countUserSegment', async () => {
        const response = await client.counts.countUserSegment();

        assert.notEqual(response, undefined);
    });
    it('countUserTag', async () => {
        const response = await client.counts.countUserTag();

        assert.notEqual(response, undefined);
    });
    it('countCompanySegment', async () => {
        const response = await client.counts.countCompanySegment();

        assert.notEqual(response, undefined);
    });
    it('countCompanyTag', async () => {
        const response = await client.counts.countCompanyTag();

        assert.notEqual(response, undefined);
    });
    it('countCompanyUser', async () => {
        const response = await client.counts.countCompanyUser();

        assert.notEqual(response, undefined);
    });
});
