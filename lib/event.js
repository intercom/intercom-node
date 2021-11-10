import Bulk from './bulk';

export default class Event {
  constructor(client) {
    this.client = client;
  }
  create(data) {
    return this.client.post({url:'/events', data});
  }
  listBy(params) {
    return this.client.get({url: '/events', data: params});
  }
  bulk(params) {
    return new Bulk(this.client, 'event').bulk(params);
  }
}
