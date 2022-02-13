import assert from 'assert';
import { Client } from '../../lib';
import nock from 'nock';

describe('admins', () => {
    it('should find admins by id', async () => {
        nock('https://api.intercom.io').get('/admins/baz').reply(200, {});
        const client = new Client({
            usernameAuth: { username: 'foo', password: 'bar' },
        });
        const response = await client.admins.find({ id: 'baz' });

        assert.deepStrictEqual({}, response);
    });
    it('should set an admin away', async () => {
        const id = 'baz';
        const requestData = {
            away_mode_enabled: true,
            away_mode_reassign: false,
        };

        nock('https://api.intercom.io')
            .put(`/admins/${id}/away`, requestData)
            .reply(200, {});
        const client = new Client({
            usernameAuth: { username: 'foo', password: 'bar' },
        });
        const response = await client.admins.away({
            adminId: id,
            enableAwayMode: true,
            enableReassignMode: false,
        });

        assert.deepStrictEqual({}, response);
    });
    it('should list all activites logs', async () => {
        const date = new Date('Fri, 17 Dec 2021 18:02:18 GMT');
        const dateInUnix = '1639764138';

        nock('https://api.intercom.io')
            .get(
                `/admins/activity_logs?created_at_after=${dateInUnix}&created_at_before=${dateInUnix}`
            )
            .reply(200, {});
        const client = new Client({
            usernameAuth: { username: 'foo', password: 'bar' },
        });
        const response = await client.admins.listAllActivityLogs({
            before: date,
            after: date,
        });

        assert.deepStrictEqual({}, response);
    });
    it('should list all', async () => {
        nock('https://api.intercom.io').get('/admins').reply(200, {});
        const client = new Client({
            usernameAuth: { username: 'foo', password: 'bar' },
        });
        const response = await client.admins.list();

        assert.deepStrictEqual({}, response);
    });
});
