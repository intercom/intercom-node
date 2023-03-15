import { Client } from '.';
import { MessageObject, MessageType } from './message/message.types';

export default class Message {
    private messagesBaseUrl = 'messages';

    constructor(private readonly client: Client) {
        this.client = client;
    }

    create({
        messageType: message_type,
        subject,
        body,
        template,
        from,
        to,
        createConversationWithoutContactReply:
            create_conversation_without_contact_reply,
    }: CreateMessageBody) {
        const data: CreateMessageRequest = {
            message_type,
            subject,
            body,
            template,
            from,
            to,
            create_conversation_without_contact_reply,
        };

        return this.client.post<MessageObject>({
            url: `/${this.messagesBaseUrl}`,
            data,
        });
    }
}

interface CreateMessageRequest {
    message_type: MessageType;
    body: string;
    from: Recipient;
    to: Recipient;
    subject?: string;
    template?: string;
    create_conversation_without_contact_reply?: boolean;
}

interface CreateMessageBody
    extends Omit<
        CreateMessageRequest,
        'message_type' | 'create_conversation_without_contact_reply'
    > {
    messageType: MessageType;
    createConversationWithoutContactReply?: boolean;
}

type Recipient = {
    id: string;
    type: RecipientType;
};

export enum RecipientType {
    ADMIN = 'admin',
    USER = 'user',
    LEAD = 'lead',
}
