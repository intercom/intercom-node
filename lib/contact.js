export class Contact {
  constructor(client) {
    this.client = client;
  }
  create(data,f) {
    this.client.post('/contacts', data, f);
  }
  update(params, f) {
    this.client.post('/contacts', params, f);
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
