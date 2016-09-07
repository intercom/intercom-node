export default class Segment {
  constructor(client) {
    this.client = client;
  }
  list(params, f) {
    return this.client.get('/segments', params, f);
  }
  find(params, f) {
    return this.client.get(`/segments/${params.id}`, {}, f);
  }
}
