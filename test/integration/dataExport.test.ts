import { Client } from '../../lib';
import assert from 'assert';
import { token } from './utils/config';

describe('dataExport', () => {
    const client = new Client({ tokenAuth: { token } });
    let dataExport: string;

    it('create', async () => {
        const response = await client.dataExport.create({
            createdAtAfter: 1670000000,
            createdAtBefore: 1670940528,
        });
        dataExport = response.job_identifier;

        assert.notEqual(response, undefined);
    });

    it('find', async () => {
        const response = await client.dataExport.find({ id: dataExport });

        assert.notEqual(response, undefined);
    });

    it('delete', async () => {
        const response = await client.dataExport.cancel({ id: dataExport });

        assert.notEqual(response, undefined);
    });
});
