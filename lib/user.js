import Bulk from './bulk';
import Scroll from './scroll';
import { deprecate } from 'util';

export default class User {
  constructor(client) {
    this.client = client;
    this.scroll = new Scroll(this.client, 'user');

    // Keep this API around but mark it deprecated
    this.delete = deprecate(this.archive.bind(this), 'intercom-client - user.delete: Use user.archive instead');
  }
  create(data, f) {
    return this.client.post('/users', data, f);
  }
  update(data, f) {
    return this.create(data, f);
  }
  list(f) {
    return this.client.get('/users', {}, f);
  }
  listBy(params, f) {
    return this.client.get('/users', params, f);
  }
  find(params, f) {
    if (params.id) {
      return this.client.get(`/users/${params.id}`, {}, f);
    } else if (params.user_id) {
      return this.client.get(`/users`, { user_id: params.user_id }, f);
    } else if (params.email) {
      return this.client.get(`/users`, { email: params.email }, f);
    }
  }
  archive(params, f) {
    if (params.id) {
      return this.client.delete(`/users/${params.id}`, {}, f);
    } else if (params.user_id) {
      return this.client.delete(`/users`, { user_id: params.user_id }, f);
    } else if (params.email) {
      return this.client.delete(`/users`, { email: params.email }, f);
    }
  }
  bulk(params, f) {
    return (new Bulk(this.client, 'user').bulk(params, f));
  }
}
