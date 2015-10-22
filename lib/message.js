export default class Message {
  constructor(client) {
    this.client = client;
  }
  create(data, f) {
    return this.client.post('/messages', data, f);
  }
}
