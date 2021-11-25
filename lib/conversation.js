export default class Conversation {
  constructor(client) {
    this.client = client;
  }
  list(data, f) {
    return this.client.get('/conversations', data, f);
  }
  find(params, f) {
    return this.client.get(`/conversations/${params.id}`, params, f);
  }
  reply(params, f) {
    return this.client.post(`/conversations/${params.id}/reply`, params, f);
  }
  markAsRead(params, f) {
    return this.client.put(`/conversations/${params.id}`, { read: true }, f);
  }
  create(params, f) {
    return this.client.post('/conversations', params, f);
  }
  update(params, f) {
    return this.client.put(`/conversations/${params.id}`, params, f);
  }
}
