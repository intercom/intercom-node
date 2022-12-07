import { Client } from '.';
import { SubscriptionObject } from './subscription/subscription.types';

export default class Subscription {
    public readonly baseUrl = 'subscription_types';

    constructor(private readonly client: Client) {
        this.client = client;
    }
    listTypes() {
        return this.client.get<ListResponse>({
            url: `/${this.baseUrl}`,
        });
    }
}

interface ListResponse {
    type: 'list';
    data: SubscriptionObject[];
}
