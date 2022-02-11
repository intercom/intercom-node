import { adminId, token } from './utils/config';
import { Client } from '../../dist';
import assert from 'assert';

describe('Admins', () => {
    const client = new Client({ tokenAuth: { token } });

    it('find', async () => {
        const response = await client.admins.find({ id: adminId });

        assert.notEqual(response, undefined);
    });
    it('list', async () => {
        const response = await client.admins.list();

        assert.notEqual(response, undefined);
    });
    it('listAllActivityLogs', async () => {
        const response = await client.admins.listAllActivityLogs({
            after: new Date('2021-12-12'),
        });

        assert.notEqual(response, undefined);
    });
    it('away - ON', async () => {
        const response = await client.admins.away({
            adminId,
            enableAwayMode: true,
            enableReassignMode: true,
        });

        assert.notEqual(response, undefined);
    });
    it('away - OFF', async () => {
        const response = await client.admins.away({
            adminId,
            enableAwayMode: false,
            enableReassignMode: false,
        });

        assert.notEqual(response, undefined);
    });
});
