export default class Contact {
  constructor(client) {
    this.client = client;
  }
  create() {
    const parameters_or_function = arguments[0];
    let params = {};
    let callback = parameters_or_function;
    if (typeof parameters_or_function !== 'function') {
      params = parameters_or_function;
      callback = arguments[1];
    }
    return this.client.post('/contacts', params, callback);
  }
  update(params, f) {
    return this.client.post('/contacts', params, f);
  }
  list(params, f) {
    return this.client.get('/contacts', params, f);
  }
  listBy(params, f) {
    return this.client.get('/contacts', params, f);
  }
  find(params, f) {
    return this.client.get(`/contacts/${params.id}`, {}, f);
  }
  delete(params, f) {
    return this.client.delete(`/contacts/${params.id}`, {}, f);
  }
  convert(params, f) {
    return this.client.post('/contacts/convert', params, f);
  }
}
