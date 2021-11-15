export default class Tag {
  constructor(client) {
    this.client = client;
  }
  create(data) {
    return this.client.post({url: '/tags', data});
  }
  tag(data) {
    return this.client.post({url: '/tags', data});
  }
  untag(data) {
    (data.users || []).forEach(user => {
      user.untag = true;
    });
    (data.companies || []).forEach(company => {
      company.untag = true;
    });
    return this.client.post({url: '/tags', data});
  }
  delete(params) {
    return this.client.delete({url: `/tags/${params.id}`});
  }
  list() {
    return this.client.get({url: '/tags'});
  }
}
