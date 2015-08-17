var unirest = require('unirest');

export class Client {
  constructor(appId, appApiKey) {
    this.appId = appId;
    this.appApiKey = appApiKey;
  }
  ping(f) {
    unirest.get('https://api.intercom.io/admins')
    .header('Accept', 'application/json')
    .header('Content-Type', 'application/json')
    .end(r => f(r.status));
  }
}
