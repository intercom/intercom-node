export class Note {
  constructor(client) {
    this.client = client;
  }
  create(params, f) {
    this.client.post('/notes', params, f);
  }
  list(params, f) {
    this.client.get('/notes', params, f);
  }
  find(params, f) {
    this.client.get(`/notes/${params.id}`, {}, f);
  }
}
