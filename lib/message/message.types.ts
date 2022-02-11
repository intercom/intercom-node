import { Timestamp } from '../common/common.types';

export interface MessageObject {
    type: string;
    id: string;
    created_at: Timestamp;
    subject?: string;
    body: string;
    message_type: MessageType;
    conversation_id?: string;
}

export enum MessageType {
    EMAIL = 'email',
    INAPP = 'inapp',
    FACEBOOK = 'facebook',
    TWITTER = 'twitter',
}
