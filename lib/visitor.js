export default class Visitor {
  constructor(client) {
    this.client = client;
  }
  update(params, f) {
    return this.client.post('/visitors', params, f);
  }
  find(params, f) {
    if (params.id) {
      return this.client.get(`/visitors/${params.id}`, {}, f);
    } else if (params.user_id) {
      return this.client.get('/visitors', { user_id: params.user_id }, f);
    }
  }
  delete(params, f) {
    return this.client.delete(`/visitors/${params.id}`, {}, f);
  }
  convert(params, f) {
    return this.client.post('/visitors/convert', params, f);
  }
}
