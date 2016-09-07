export default class Visitor {
  constructor(client) {
    this.client = client;
  }
  update(params, f) {
    return this.client.post('/visitors', params, f);
  }
  listBy(params, f) {
    return this.client.get('/visitors', params, f);
  }
  find(params, f) {
    return this.client.get(`/visitors/${params.id}`, {}, f);
  }
  delete(params, f) {
    return this.client.delete(`/visitors/${params.id}`, {}, f);
  }
  convert(params, f) {
    return this.client.post('/visitors/convert', params, f);
  }
}
