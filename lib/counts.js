export default class Counts {
    constructor(client) {
        this.client = client;
    }
    appCounts() {
        return this.client.get({ url: '/counts' });
    }
    conversationCounts() {
        return this.client.get({
            url: '/counts',
            params: { type: 'conversation' },
        });
    }
    conversationAdminCounts() {
        return this.client.get({
            url: '/counts',
            params: { type: 'conversation', count: 'admin' },
        });
    }
    userTagCounts() {
        return this.client.get({
            url: '/counts',
            params: { type: 'user', count: 'tag' },
        });
    }
    userSegmentCounts() {
        return this.client.get({
            url: '/counts',
            params: { type: 'user', count: 'segment' },
        });
    }
    companyTagCounts() {
        return this.client.get({
            url: '/counts',
            params: { type: 'company', count: 'tag' },
        });
    }
    companySegmentCounts() {
        return this.client.get({
            url: '/counts',
            params: { type: 'company', count: 'segment' },
        });
    }
    companyUserCounts() {
        return this.client.get({
            url: '/counts',
            params: { type: 'company', count: 'user' },
        });
    }
}
