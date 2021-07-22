export default class Collection {
  constructor(client) {
    this.client = client;
  }
  create(data, f) {
    return this.client.post('/help_center/collections', data, f);
  }
  find(id, f) {
    return this.client.get(`/help_center/collections/${id}`, {}, f);
  }
  update(id, params, f) {
    return this.client.put(`/help_center/collections/${id}`, params, f);
  }
  delete(id, f) {
    return this.client.delete(`/help_center/collections/${id}`, {}, f);
  }
  list(f) {
    return this.client.get('/help_center/collections', {}, f);
  }
}
