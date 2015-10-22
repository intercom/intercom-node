import Bulk from './bulk';

export default class User {
  constructor(client) {
    this.client = client;
  }
  create(data, f) {
    this.client.post('/users', data, f);
  }
  list(f) {
    this.client.get('/users', {}, f);
  }
  listBy(params, f) {
    this.client.get('/users', params, f);
  }
  find(params, f) {
    this.client.get(`/users/${params.id}`, {}, f);
  }
  delete(params, f) {
    this.client.delete(`/users/${params.id}`, {}, f);
  }
  bulk(params, f) {
    new Bulk(this.client, 'user').bulk(params, f);
  }
}
