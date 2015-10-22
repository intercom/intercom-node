export default class Conversation {
  constructor(client) {
    this.client = client;
  }
  list(data, f) {
    this.client.get('/conversations', data, f);
  }
  find(params, f) {
    this.client.get(`/conversations/${params.id}`, params, f);
  }
  reply(params, f) {
    this.client.post(`/conversations/${params.id}/reply`, params, f);
  }
  markAsRead(params, f) {
    this.client.put(`/conversations/${params.id}`, { read: true }, f);
  }
}
