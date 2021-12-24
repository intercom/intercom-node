export default class Note {
    constructor(client) {
        this.client = client;
    }
    create(params) {
        return this.client.post({ url: '/notes', data: params });
    }
    list(params) {
        return this.client.get({ url: '/notes', params });
    }
    find(params) {
        return this.client.get({ url: `/notes/${params.id}` });
    }
}
