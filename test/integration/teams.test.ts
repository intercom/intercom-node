import { Client } from '../../dist';
import assert from 'assert';
import { teamId, token } from './utils/config';

describe('Teams', () => {
    const client = new Client({ tokenAuth: { token } });

    it('find', async () => {
        const response = client.teams.find({ id: teamId });

        assert.notEqual(response, undefined);
    });
    it('list', async () => {
        const response = client.teams.list();

        assert.notEqual(response, undefined);
    });
});
