export default class Tag {
  constructor(client) {
    this.client = client;
  }
  create(data, f) {
    return this.client.post('/tags', data, f);
  }
  tag(data, f) {
    return this.client.post('/tags', data, f);
  }
  untag(data, f) {
    (data.users || []).forEach(user => {
      user.untag = true;
    });
    (data.companies || []).forEach(company => {
      company.untag = true;
    });
    return this.client.post('/tags', data, f);
  }
  delete(params, f) {
    return this.client.delete(`/tags/${params.id}`, {}, f);
  }
  list(f) {
    return this.client.get('/tags', {}, f);
  }
}
