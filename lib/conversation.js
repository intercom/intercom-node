export default class Conversation {
  constructor(client) {
    this.client = client;
  }
  list(data) {
    return this.client.get({url: '/conversations', data});
  }
  find(params) {
    return this.client.get({url: `/conversations/${params.id}`, data: params});
  }
  reply(params) {
    return this.client.post({url: `/conversations/${params.id}/reply`, data: params});
  }
  markAsRead(params) {
    return this.client.put({url: `/conversations/${params.id}`, data: { read: true }});
  }
}
