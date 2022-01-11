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
    }: CreateMessageBody) {
        const data: CreateMessageRequest = {
            message_type,
            subject,
            body,
            template,
            from,
            to,
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
    from: Recepient;
    to: Recepient;
    subject?: string;
    template?: string;
}

interface CreateMessageBody extends Omit<CreateMessageRequest, 'message_type'> {
    messageType: MessageType;
}

type Recepient = {
    id: string;
    type: RecepientType;
};

export enum RecepientType {
    ADMIN = 'admin',
    USER = 'user',
    LEAD = 'lead',
}
