export class Tag {
  constructor(client) {
    this.client = client;
  }
  create(data, f) {
    this.client.post('/tags', data, f);
  }
  tag(data, f) {
    this.client.post('/tags', data, f);
  }
  untag(data, f) {
    (data.users || []).forEach(user => user.untag = true);
    (data.companies || []).forEach(company => company.untag = true);
    this.client.post('/tags', data, f);
  }
  delete(params, f) {
    this.client.delete(`/tags/${params.id}`, {}, f);
  }
  list(f) {
    this.client.get('/tags', {}, f);
  }
}
