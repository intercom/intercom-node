export class Contact {
  constructor(client) {
    this.client = client;
  }
  create(f) {
    this.client.post('/contacts', {}, f);
  }
  update(params, f) {
    let id = params.id;
    delete params.id;
    this.client.post(`/contacts/${id}`, params, f);
  }
  list(f) {
    this.client.get('/contacts', {}, f);
  }
  listBy(params, f) {
    this.client.get('/contacts', params, f);
  }
  find(params, f) {
    this.client.get(`/contacts/${params.id}`, {}, f);
  }
  delete(params, f) {
    this.client.delete(`/contacts/${params.id}`, {}, f);
  }
  convert(params, f) {
    this.client.post('/contacts/convert', params, f);
  }
}
