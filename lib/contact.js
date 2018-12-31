import Scroll from './scroll';

export default class Contact {
  constructor(client) {
    this.client = client;
    this.scroll = new Scroll(this.client, 'contact');
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
  list(f) {
    return this.client.get('/contacts', {}, f);
  }
  listBy(params, f) {
    return this.client.get('/contacts', params, f);
  }
  find(params, f) {
    if (params.id) {
      return this.client.get(`/contacts/${params.id}`, {}, f);
    } else if (params.user_id) {
      return this.client.get('/contacts', { user_id: params.user_id }, f);
    }
  }
  delete(params, f) {
    return this.client.delete(`/contacts/${params.id}`, {}, f);
  }
  convert(params, f) {
    return this.client.post('/contacts/convert', params, f);
  }
}
