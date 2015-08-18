export class Counts {
  constructor(client) {
    this.client = client;
  }
  appCounts(f) {
    this.client.get('/counts', {}, f);
  }
  conversationCounts(f) {
    this.client.get('/counts', { type: 'conversation' }, f);
  }
  conversationAdminCounts(f) {
    this.client.get('/counts', { type: 'conversation', count: 'admin' }, f);
  }
  userTagCounts(f) {
    this.client.get('/counts', { type: 'user', count: 'tag' }, f);
  }
  userSegmentCounts(f) {
    this.client.get('/counts', { type: 'user', count: 'segment' }, f);
  }
  companyTagCounts(f) {
    this.client.get('/counts', { type: 'company', count: 'tag' }, f);
  }
  companySegmentCounts(f) {
    this.client.get('/counts', { type: 'company', count: 'segment' }, f);
  }
  companyUserCounts(f) {
    this.client.get('/counts', { type: 'company', count: 'user' }, f);
  }
}
