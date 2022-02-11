import { Client, Role } from '../../dist';
import assert from 'assert';
import { token } from './utils/config';

// Skip by default, because there is no automation yet
describe.skip('Visitors', () => {
    // Info: should be set manually. Find a way to automate it.
    // Tip: headless browser to visit test application and get visitorId from ping request.
    const visitorId = '0';
    const userId = '0';

    const client = new Client({ tokenAuth: { token } });

    it('find by id', async () => {
        const response = await client.visitors.find({ id: visitorId });

        assert.notEqual(response, undefined);
    });
    it('find by user id', async () => {
        const response = await client.visitors.find({ userId });

        assert.notEqual(response, undefined);
    });
    it('update', async () => {
        const response = await client.visitors.update({
            userId,
            name: 'Winston Smith',
        });

        assert.notEqual(response, undefined);
    });
    it('delete', async () => {
        const response = await client.visitors.delete({
            id: visitorId,
        });

        assert.notEqual(response, undefined);
    });
    it('mergeToContact', async () => {
        const response = await client.visitors.mergeToContact({
            visitor: {
                id: visitorId,
            },
            user: {
                email: 'mcboxford@intercom-test.com',
            } as any,
            type: Role.USER,
        });

        assert.notEqual(response, undefined);
    });
});
