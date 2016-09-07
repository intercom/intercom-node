import Bulk from './bulk';

export default class User {
  constructor(client) {
    this.client = client;
  }
  create(data, f) {
    return this.client.post('/users', data, f);
  }
  list(params, f) {
    return this.client.get('/users', params, f);
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
  delete(params, f) {
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
