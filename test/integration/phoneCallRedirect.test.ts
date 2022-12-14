import { Client} from '../../dist';
import assert from 'assert';
import { token } from './utils/config';

describe('phoneCallRedirect', () => {
    const client = new Client({ tokenAuth: { token } });

    it('create', async () => {
        const response = await client.phoneCallRedirect.create({
          phone: '+353871234567'
        });

        assert.notEqual(response, undefined);
    });
});
