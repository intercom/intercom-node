export default class Message {
  constructor(client) {
    this.client = client;
  }
  create(data) {
    return this.client.post({url: '/messages', data});
  }
}
