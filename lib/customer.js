export default class Customer {
  constructor(client) {
    this.client = client;
  }
  search(params) {
    return this.client.post({url: '/customers/search', data: params});
  }
}
