import {Bulk} from './bulk';

export class Event {
  constructor(client) {
    this.client = client;
  }
  create(data, f) {
    this.client.post('/events', data, f);
  }
  bulk(params, f) {
    new Bulk(this.client, 'event').bulk(params, f);
  }
}
