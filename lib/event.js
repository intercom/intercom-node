export class Event {
  constructor(client) {
    this.client = client;
  }
  create(data, f) {
    this.client.post('/events', data, f);
  }
}
