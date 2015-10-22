import Bulk from './bulk';

export default class User {
  constructor(client) {
    this.client = client;
  }
  create(data, f) {
    return this.client.post('/users', data, f);
  }
  list(f) {
    return this.client.get('/users', {}, f);
  }
  listBy(params, f) {
    return this.client.get('/users', params, f);
  }
  find(params, f) {
    return this.client.get(`/users/${params.id}`, {}, f);
  }
  delete(params, f) {
    return this.client.delete(`/users/${params.id}`, {}, f);
  }
  bulk(params, f) {
    return (new Bulk(this.client, 'user').bulk(params, f));
  }
}
