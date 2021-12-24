import Bulk from './bulk';
import Scroll from './scroll';
import { deprecate } from 'util';

export default class User {
    constructor(client) {
        this.client = client;
        this.scroll = new Scroll(this.client, 'user');

        // Keep this API around but mark it deprecated
        this.delete = deprecate(
            this.archive.bind(this),
            'intercom-client - user.delete: Use user.archive instead'
        );
    }
    create(data) {
        return this.client.post({ url: '/users', data });
    }
    update(data) {
        return this.create(data);
    }
    list() {
        return this.client.get({ url: '/users' });
    }
    listBy(params) {
        return this.client.get({ url: '/users', params });
    }
    find(params) {
        if (params.id) {
            return this.client.get({ url: `/users/${params.id}` });
        }

        if (params.user_id) {
            return this.client.get({
                url: '/users',
                params: { user_id: params.user_id },
            });
        }

        if (params.email) {
            return this.client.get({
                url: '/users',
                params: { email: params.email },
            });
        }
    }
    archive(params) {
        if (params.id) {
            return this.client.delete({ url: `/users/${params.id}` });
        }

        if (params.user_id) {
            return this.client.delete({
                url: '/users',
                params: { user_id: params.user_id },
            });
        }

        if (params.email) {
            return this.client.delete({
                url: '/users',
                params: { email: params.email },
            });
        }
    }
    bulk(params) {
        return new Bulk(this.client, 'user').bulk(params);
    }
    requestPermanentDeletion(intercom_user_id) {
        return this.client.post({
            url: '/user_delete_requests',
            data: { intercom_user_id },
        });
    }
    requestPermanentDeletionByParams(params) {
        if (params.id) {
            return this.requestPermanentDeletion(params.id);
        }

        return this.find(params).then((res) =>
            this.requestPermanentDeletion(res.id)
        );
    }
}
