import { Client} from '../../dist';
import assert from 'assert';
import { token } from './utils/config';

describe('dataExport', () => {
    const client = new Client({ tokenAuth: { token } });
    let dataExport: string;

    it('create', async () => {
        const response = await client.dataExport.create({
          phone: '+353871234567'
        });
        dataExport = response.id;

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
