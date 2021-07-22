export default class Section {
  constructor(client) {
    this.client = client;
  }
  create(data, f) {
    return this.client.post('/help_center/sections', data, f);
  }
  find(id, f) {
    return this.client.get(`/help_center/sections/${id}`, {}, f);
  }
  update(id, params, f) {
    return this.client.put(`/help_center/sections/${id}`, params, f);
  }
  delete(id, f) {
    return this.client.delete(`/help_center/sections/${id}`, {}, f);
  }
  list(f) {
    return this.client.get('/help_center/sections', {}, f);
  }
}
