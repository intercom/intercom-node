import assert from 'assert';
import { Client } from '../../lib';
import nock from 'nock';
import { MessageType } from '../../lib/message/message.types';
import { RecepientType } from '../../lib/message';

describe('messages', () => {
    it('should be created', async () => {
        const requestBody = {
            message_type: MessageType.EMAIL,
            subject: 'This is our demand now',
            body: 'Destroy ponies',
            template: 'plain',
            from: {
                type: RecepientType.ADMIN,
                id: '394051',
            },
            to: {
                type: RecepientType.USER,
                id: '536e564f316c83104c000020',
            },
        };

        nock('https://api.intercom.io')
            .post('/messages', requestBody)
            .reply(200, {});

        const client = new Client({
            usernameAuth: { username: 'foo', password: 'bar' },
        });
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
