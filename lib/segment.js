export default class Segment {
  constructor(client) {
    this.client = client;
  }
  list(f) {
    this.client.get('/segments', {}, f);
  }
  find(params, f) {
    this.client.get(`/segments/${params.id}`, {}, f);
  }
}
