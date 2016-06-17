import Bulk from './bulk';

export default class Event {
  constructor(client) {
    this.client = client;
  }
  create(data, f) {
    return this.client.post('/events', data, f);
  }
  listBy(params, f) {
    return this.client.get('/events', params, f);
  }
  bulk(params, f) {
    return new Bulk(this.client, 'event').bulk(params, f);
  }
}
