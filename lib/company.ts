import { Client } from '.';

export default class Company {
    public readonly baseUrl = 'companies';

    constructor(private readonly client: Client) {
        this.client = client;
    }
    create(data: any) {
        return this.client.post({ url: '/companies', data });
    }
    update(data: any) {
        return this.create(data);
    }
    list() {
        return this.client.get({ url: '/companies' });
    }
    listBy(params: any) {
        return this.client.get({ url: '/companies', data: params });
    }
    find(params: any) {
        if (params.id) {
            return this.client.get({ url: `/companies/${params.id}` });
        } else if (params.company_id) {
            return this.client.get({
                url: '/companies',
                data: { company_id: params.company_id },
            });
        } else if (params.name) {
            return this.client.get({
                url: '/companies',
                data: { name: params.name },
            });
        }
    }
    listUsers(params: any) {
        if (params.id) {
            return this.client.get({ url: `/companies/${params.id}/users` });
        } else if (params.company_id) {
            return this.client.get({
                url: '/companies',
                data: { company_id: params.company_id, type: 'user' },
            });
        } else if (params.name) {
            return this.client.get({
                url: '/companies',
                data: { name: params.name, type: 'user' },
            });
        }
    }
}
