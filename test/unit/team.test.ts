import assert from 'assert';
import { Client } from '../../lib';
import nock from 'nock';

describe('teams', () => {
    let client: Client;

    before(() => {
        client = new Client({
            usernameAuth: { username: 'foo', password: 'bar' },
        });
    });

    it('should be retrieved by id', async () => {
        const teamId = '123';

        nock('https://api.intercom.io').get(`/teams/${teamId}`).reply(200, {});

        const response = await client.teams.find({
            id: teamId,
        });

        assert.deepStrictEqual({}, response);
    });

    it('should list all teams', async () => {
        nock('https://api.intercom.io').get('/teams').reply(200, {});

        const response = await client.teams.list();

        assert.deepStrictEqual({}, response);
    });
});
