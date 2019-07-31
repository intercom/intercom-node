export default class Customer {
  constructor(client) {
    this.client = client;
  }
  search(params, f) {
    return this.client.post('/customers/search', params, f);
  }
}
