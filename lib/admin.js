export class Admin {
  constructor(client) {
    this.client = client;
  }
  list(f) {
    this.client.get('/admins', {}, f);
  }
}
