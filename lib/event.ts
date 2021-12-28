import { Client } from '.';
import { EventObject } from './event/event.types';

export default class Event {
    public readonly baseUrl = 'events';

    constructor(private readonly client: Client) {
        this.client = client;
    }
    create({
        eventName: event_name,
        createdAt: created_at,
        userId: user_id,
        id,
        email,
        metadata,
    }: ICreateEventData) {
        const data: EventObject = {
            event_name,
            created_at,
            user_id,
            id,
            email,
            metadata,
        };

        return this.client.post<void>({ url: `/${this.baseUrl}`, data });
    }
    listBy({
        userId: user_id,
        email,
        intercomUserId: intercom_user_id,
        perPage: per_page,
        summary,
    }: IListParams) {
        const params = {
            type: 'user',
            user_id,
            email,
            intercom_user_id,
            per_page,
            summary,
        };

        // TO-DO: Change to `params` from `data: params`
        return this.client.get({ url: `/${this.baseUrl}`, data: params });
    }
}

interface ICreateEventData {
    eventName: EventObject['event_name'];
    createdAt: EventObject['created_at'];
    userId?: EventObject['user_id'];
    id?: EventObject['id'];
    email?: EventObject['email'];
    metadata?: EventObject['metadata'];
}
//
interface IListParams {
    userId?: EventObject['user_id'];
    email?: EventObject['email'];
    intercomUserId?: string;
    perPage?: number;
    summary?: boolean;
}
