export default class Segment {
  constructor(client) {
    this.client = client;
  }
  list() {
    return this.client.get({url: '/segments'});
  }
  find(params) {
    return this.client.get({url: `/segments/${params.id}`});
  }
}
