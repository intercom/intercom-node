export default class Admin {
  constructor(client) {
    this.client = client;
  }
  list(f) {
    return this.client.get('/admins', {}, f);
  }
  find(id, f) {
    return this.client.get(`/admins/${id}`, {}, f);
  }
  me(f) {
    return this.client.get('/me', {}, f);
  }
}
