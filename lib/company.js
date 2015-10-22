export default class Company {
  constructor(client) {
    this.client = client;
  }
  create(data, f) {
    this.client.post('/companies', data, f);
  }
  list(f) {
    this.client.get('/companies', {}, f);
  }
  listBy(params, f) {
    this.client.get('/companies', params, f);
  }
  find(params, f) {
    this.client.get(`/companies/${params.id}`, {}, f);
  }
  listUsers(params, f) {
    this.client.get(`/companies/${params.id}/users`, {}, f);
  }
}
