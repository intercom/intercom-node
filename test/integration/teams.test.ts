import { Client } from '../../dist';
import assert from 'assert';
import { token } from './utils/config';

describe('Teams', () => {
    let teamId: string;

    const client = new Client({ tokenAuth: { token } });

    it('list', async () => {
        const response = await client.teams.list();

        teamId = response.teams[0].id;

        assert.notEqual(response, undefined);
    });
    it('find', async () => {
        const response = await client.teams.find({ id: teamId });

        assert.notEqual(response, undefined);
    });
});
