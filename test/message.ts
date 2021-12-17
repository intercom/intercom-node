import assert from 'assert';
import { Client } from '../lib';
import nock from 'nock';

describe('messages', () => {
    it('should be created', async () => {
        const requestBody = {
            message_type: 'email',
            subject: 'This is our demand now',
            body: 'Destroy ponies',
            template: 'plain',
            from: {
                type: 'admin',
                id: '394051',
            },
            to: {
                type: 'user',
                id: '536e564f316c83104c000020',
            },
        };

        nock('https://api.intercom.io')
            .post('/messages', requestBody)
            .reply(200, {});

        const client = new Client('foo', 'bar');
        const response = await client.messages.create({
            messageType: requestBody.message_type,
            subject: requestBody.subject,
            body: requestBody.body,
            template: requestBody.template,
            from: requestBody.from,
            to: requestBody.to,
        });

        assert.deepStrictEqual({}, response);
    });
});
