import { Client } from '.';
import { PhoneCallRedirectObject } from './phoneCallRedirect/phoneCallRedirect.types';
import { JavascriptObject } from './common/common.types';

export default class PhoneCallRedirect {
    public readonly baseUrl = 'phone_call_redirects';

    constructor(private readonly client: Client) {
        this.client = client;
    }

    create({ phone, customAttributes }: CreatePhoneRedirectData) {
        const data = {
            phone,
            customAttributes,
        };
        return this.client.post<PhoneCallRedirectObject>({
            url: `/${this.client.phoneCallRedirect.baseUrl}/`,
            data,
        });
    }
}

interface CreatePhoneRedirectData {
    phone: string;
    customAttributes: JavascriptObject;
}
