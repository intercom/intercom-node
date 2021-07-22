export default class Article {
  constructor(client) {
    this.client = client;
  }
  create(data, f) {
    return this.client.post('/articles', data, f);
  }
  find(id, f) {
    return this.client.get(`/articles/${id}`, {}, f);
  }
  update(id, params, f) {
    return this.client.put(`/articles/${id}`, params, f);
  }
  delete(id, f) {
    return this.client.delete(`/articles/${id}`, {}, f);
  }
  list(f) {
    return this.client.get('/articles', {}, f);
  }
}
