export default class Visitor {
    constructor(client) {
        this.client = client;
    }
    update(params) {
        return this.client.post({ url: '/visitors', data: params });
    }
    find(params) {
        if (params.id) {
            return this.client.get({ url: `/visitors/${params.id}` });
        } else if (params.user_id) {
            return this.client.get({
                url: '/visitors',
                data: { user_id: params.user_id },
            });
        }
    }
    delete(params) {
        return this.client.delete({ url: `/visitors/${params.id}` });
    }
    convert(params) {
        return this.client.post({ url: '/visitors/convert', data: params });
    }
}
