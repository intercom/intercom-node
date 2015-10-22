export default class Note {
  constructor(client) {
    this.client = client;
  }
  create(params, f) {
    return this.client.post('/notes', params, f);
  }
  list(params, f) {
    return this.client.get('/notes', params, f);
  }
  find(params, f) {
    return this.client.get(`/notes/${params.id}`, {}, f);
  }
}
