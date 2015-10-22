export default class Message {
  constructor(client) {
    this.client = client;
  }
  create(data, f) {
    this.client.post('/messages', data, f);
  }
}
