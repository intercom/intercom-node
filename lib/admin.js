export default class Admin {
    constructor(client) {
        this.client = client;
    }
    list() {
        return this.client.get({ url: '/admins' });
    }
    find(id) {
        return this.client.get({ url: `/admins/${id}` });
    }
    me() {
        return this.client.get({ url: '/me' });
    }
    away(id, data) {
        return this.client.put({ url: `/admins/${id}/away`, data });
    }
}
