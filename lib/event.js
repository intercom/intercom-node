import {Bulk} from './bulk';

export class Event {
  constructor(client) {
    this.client = client;
  }
  create(data, f) {
    return this.client.post('/events', data, f);
  }
  bulk(params, f) {
    return new Bulk(this.client, 'event').bulk(params, f);
  }
}
