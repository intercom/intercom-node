import Scroll from './scroll';

export default class Company {
  constructor(client) {
    this.client = client;
    this.scroll = new Scroll(this.client, 'companie');
  }
  create(data, f) {
    return this.client.post('/companies', data, f);
  }
  update(data, f) {
    return this.create(data, f);
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
