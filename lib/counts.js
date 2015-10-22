export default class Counts {
  constructor(client) {
    this.client = client;
  }
  appCounts(f) {
    return this.client.get('/counts', {}, f);
  }
  conversationCounts(f) {
    return this.client.get('/counts', { type: 'conversation' }, f);
  }
  conversationAdminCounts(f) {
    return this.client.get('/counts', { type: 'conversation', count: 'admin' }, f);
  }
  userTagCounts(f) {
    return this.client.get('/counts', { type: 'user', count: 'tag' }, f);
  }
  userSegmentCounts(f) {
    return this.client.get('/counts', { type: 'user', count: 'segment' }, f);
  }
  companyTagCounts(f) {
    return this.client.get('/counts', { type: 'company', count: 'tag' }, f);
  }
  companySegmentCounts(f) {
    return this.client.get('/counts', { type: 'company', count: 'segment' }, f);
  }
  companyUserCounts(f) {
    return this.client.get('/counts', { type: 'company', count: 'user' }, f);
  }
}
