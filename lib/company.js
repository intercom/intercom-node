import Scroll from './scroll';

export default class Company {
    constructor(client) {
        this.client = client;
        this.scroll = new Scroll(this.client, 'companie');
    }
    create(data) {
        return this.client.post({ url: '/companies', data });
    }
    update(data) {
        return this.create(data);
    }
    list() {
        return this.client.get({ url: '/companies' });
    }
    listBy(params) {
        return this.client.get({ url: '/companies', data: params });
    }
    find(params) {
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
    listUsers(params) {
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
