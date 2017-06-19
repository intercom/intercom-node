export default class Job {
  constructor(client) {
    this.client = client;
  }
  find(params, f) {
    return this.client.get(`/jobs/${params.id}`, {}, f);
  }
  error(params, f) {
    return this.client.get(`/jobs/${params.id}/error`, {}, f);
  }
}
