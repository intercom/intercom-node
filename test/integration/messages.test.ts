import { token } from './utils/config';
import { Client, Operators } from '../../dist';
import { randomString } from './utils/random';
import { MessageType } from '../../lib/message/message.types';
import { RecepientType } from '../../lib/message';
import assert from 'assert';

describe('Messages', () => {
    let adminId: string;
    let userIntercomId: string;
    const client = new Client({
        tokenAuth: { token },
    });

    before(async () => {
        const adminList = await client.admins.list();
        adminId = adminList.admins[0].id;

        const createdUser = await client.contacts.createUser({
            externalId: randomString(),
            name: 'Message Test User',
        });
        userIntercomId = createdUser.id;
    });

    it('Message that creates a converation', async () => {
        const requestBody = {
            message_type: MessageType.INAPP,
            body: 'Hey, look at me! I am the conversations creator now!',
            from: {
                type: RecepientType.ADMIN,
                id: `${adminId}`,
            },
            to: {
                type: RecepientType.USER,
                id: `${userIntercomId}`,
            },
        };
        const response = await client.messages.create({
            messageType: requestBody.message_type,
            body: requestBody.body,
            from: requestBody.from,
            to: requestBody.to,
            createConversationWithoutContactReply: true,
        });

        const messageId = response.id;

        // Give Intercom a few seconds to index conversation
        await new Promise((resolve) => setTimeout(resolve, 5000));

        const searchResults = await client.conversations.search({
            data: {
                query: {
                    field: 'source.id',
                    operator: Operators.EQUALS,
                    value: messageId,
                },
            },
        });
        assert.equal(searchResults.total_count > 0, true);
    });
});
