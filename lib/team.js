export default class Team {
  constructor(client) {
    this.client = client;
  }
  list(f) {
    return this.client.get('/teams', {}, f);
  }
  find(id, f) {
    return this.client.get(`/teams/${id}`, {}, f);
  }
}
