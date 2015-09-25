export class Contact {
  constructor(client) {
    this.client = client;
  }
  create() {
    let parameters_or_function = arguments[0];
    let params = {};
    let callback = parameters_or_function;
    if (typeof parameters_or_function !== 'function') {
      params = parameters_or_function;
      callback = arguments[1];
    }
    this.client.post('/contacts', params, callback);
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
