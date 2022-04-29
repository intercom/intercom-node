import {
    Client,
    AssignToConversationUserType,
    RedactConversationPartType,
    ReplyToConversationMessageType,
    Operators,
    ContactObject,
    ConversationObject,
    MessageObject,
} from '../../dist';
import assert from 'assert';
import { token } from './utils/config';
import { randomString } from './utils/random';

describe('Conversations', () => {
    let user: ContactObject;
    let secondUser: ContactObject;
    let createdConversation: MessageObject;
    let foundConversation: ConversationObject;

    let adminId: string;
    let anotherAdminId: string;

    const client = new Client({ tokenAuth: { token } });

    before(async () => {
        const admins = await client.admins.list();

        adminId = admins.admins[0].id;
        anotherAdminId = admins.admins[1].id;

        user = await client.contacts.createUser({
            externalId: randomString(),
            name: 'Baba Booey',
        });
        secondUser = await client.contacts.createUser({
            externalId: randomString(),
            name: 'Babushka Boy',
            email: 'babushka_boy@bababooey.com',
        });
    });

    it('create', async () => {
        const response = await client.conversations.create({
            userId: user.id,
            body: 'Raz-dwa-try kalyna, czorniawaja diwczyna',
            subject: 'Test subject'
        });

        createdConversation = response;

        assert.notEqual(response, undefined);
    });

    it('find - by id', async () => {
        const response = await client.conversations.find({
            id: createdConversation.conversation_id as string,
        });

        foundConversation = response;

        assert.notEqual(response, undefined);
    });
    it('update', async () => {
        const response = await client.conversations.update({
            id: foundConversation.id,
            markRead: false,
        });

        assert.notEqual(response, undefined);
    });
    // TO-DO: Fix on API side.
    it.skip('replyToLastConversationAsAdmin', async () => {
        const response = await client.conversations.replyByLastAsAdmin({
            adminId,
            messageType: ReplyToConversationMessageType.COMMENT,
            body: 'test',
        });
        assert.notEqual(response, undefined);
    });
    it('replyByIdAsAdmin', async () => {
        const response = await client.conversations.replyByIdAsAdmin({
            id: foundConversation.id,
            adminId,
            body: 'test',
            messageType: ReplyToConversationMessageType.COMMENT,
        });

        assert.notEqual(response, undefined);
    });
    it('replyByIdAsUser', async () => {
        const response = await client.conversations.replyByIdAsUser({
            id: foundConversation.id,
            intercomUserId: user.id,
            body: '*click* Nice!',
        });

        foundConversation = response;

        assert.notEqual(response, undefined);
    });
    it('assign', async () => {
        const response = await client.conversations.assign({
            id: foundConversation.id,
            assigneeId: anotherAdminId,
            adminId,
            type: AssignToConversationUserType.ADMIN,
        });
        assert.notEqual(response, undefined);
    });
    it('snooze', async () => {
        const response = await client.conversations.snooze({
            id: foundConversation.id,
            adminId,
            snoozedUntil: `${new Date('2040.06.19').getTime() / 1000}`,
        });

        assert.notEqual(response, undefined);
    });
    it('open', async () => {
        const response = await client.conversations.open({
            id: foundConversation.id,
            adminId,
        });

        assert.notEqual(response, undefined);
    });
    it('attachContactAsAdmin', async () => {
        const response = await client.conversations.attachContactAsAdmin({
            id: foundConversation.id,
            adminId,
            customer: { intercomUserId: secondUser.id },
        });

        assert.notEqual(response, undefined);
    });
    it('detachContactAsAdmin', async () => {
        const response = await client.conversations.detachContactAsAdmin({
            conversationId: foundConversation.id,
            adminId,
            contactId: user.id,
        });

        assert.notEqual(response, undefined);
    });
    it('redactConversationPart', async () => {
        const response = await client.conversations.redactConversationPart({
            conversationId: foundConversation.id,
            conversationPartId:
                foundConversation.conversation_parts.conversation_parts[0].id,
            type: RedactConversationPartType.CONVERSATION_PART,
        });

        assert.notEqual(response, undefined);
    });
    it('close', async () => {
        const response = await client.conversations.close({
            id: foundConversation.id,
            adminId,
            body: 'Hasta la vista, baby',
        });

        assert.notEqual(response, undefined);
    });
    it('search', async () => {
        const response = await client.conversations.search({
            data: {
                query: {
                    operator: Operators.AND,
                    value: [
                        {
                            field: 'id',
                            operator: Operators.NOT_EQUALS,
                            value: '123',
                        },
                    ],
                },
            },
        });

        assert.notEqual(response, undefined);
    });
});
