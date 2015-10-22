export class Company {
  constructor(client) {
    this.client = client;
  }
  create(data, f) {
    return this.client.post('/companies', data, f);
  }
  list(f) {
    return this.client.get('/companies', {}, f);
  }
  listBy(params, f) {
    return this.client.get('/companies', params, f);
  }
  find(params, f) {
    return this.client.get(`/companies/${params.id}`, {}, f);
  }
  listUsers(params, f) {
    return this.client.get(`/companies/${params.id}/users`, {}, f);
  }
}
