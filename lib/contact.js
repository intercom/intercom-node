import Scroll from './scroll';

export default class Contact {
  constructor(client) {
    this.client = client;
    this.scroll = new Scroll(this.client, 'contact');
  }
  create() {
    // TO-DO: refactor
    const parameters_or_function = arguments[0];
    let params = {};
    let callback = parameters_or_function;
    if (typeof parameters_or_function !== 'function') {
      params = parameters_or_function;
      callback = arguments[1];
    }
    return this.client.post({url: '/contacts',data:  params});
  }
  update(params, ) {
    return this.client.post({url: '/contacts',data:  params});
  }
  list() {
    return this.client.get({url: '/contacts'});
  }
  listBy(params, ) {
    return this.client.get({url: '/contacts',data:  params});
  }
  find(params, ) {
    if (params.id) {
      return this.client.get({url: `/contacts/${params.id}`,});
    } else if (params.user_id) {
      return this.client.get({url: '/contacts',data:  { user_id: params.user_id }});
    }
  }
  delete(params, ) {
    return this.client.delete({url: `/contacts/${params.id}`,});
  }
  convert(params, ) {
    return this.client.post({url: '/contacts/convert',data: params});
  }
}
