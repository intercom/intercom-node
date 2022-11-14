import { Client, NoteObject } from '.';
import { JavascriptObject } from './common/common.types';

export default class PhoneCallRedirect {
    public readonly baseUrl = 'phone_call_redirects';

    constructor(private readonly client: Client) {
        this.client = client;
    }

    create({ phone, custom_attributes }: CreateRedirect) {
        const data = {
            phone,
            custom_attributes,
        };

        return this.client.post<NoteObject>({
            url: `/${this.client.phone_call_redirect.baseUrl}`,
            data,
        });
    }
}

interface CreateRedirect {
    phone: string;
    custom_attributes: JavascriptObject;
}

