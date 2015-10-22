export default class Admin {
  constructor(client) {
    this.client = client;
  }
  list(f) {
    return this.client.get('/admins', {}, f);
  }
}
