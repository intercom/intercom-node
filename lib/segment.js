export default class Segment {
  constructor(client) {
    this.client = client;
  }
  list(f) {
    return this.client.get('/segments', {}, f);
  }
  find(params, f) {
    return this.client.get(`/segments/${params.id}`, {}, f);
  }
}
