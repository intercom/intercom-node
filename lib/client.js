var unirest = require('unirest');
import {User} from './user';
import {Event} from './event';
import {Company} from './company';
import {Contact} from './contact';
import {Counts} from './counts';
import {Admin} from './admin';

export class Client {
  constructor(appId, appApiKey) {
    this.appId = appId;
    this.appApiKey = appApiKey;
    this.users = new User(this);
    this.events = new Event(this);
    this.companies = new Company(this);
    this.contacts = new Contact(this);
    this.counts = new Counts(this);
    this.admins = new Admin(this);
  }
  ping(f) {
    unirest.get('https://api.intercom.io/admins')
    .auth(this.appId, this.appApiKey)
    .type('json')
    .header('Accept', 'application/json')
    .header('User-Agent', 'intercom-node-client/0.1.2')
    .end(r => f(r.status));
  }
  post(endpoint, data, f) {
    unirest.post(`https://api.intercom.io${endpoint}`)
    .auth(this.appId, this.appApiKey)
    .type('json')
    .send(data)
    .header('Accept', 'application/json')
    .header('User-Agent', 'intercom-node-client/0.1.2')
    .end(r => f(r));
  }
  get(endpoint, data, f) {
    unirest.get(`https://api.intercom.io${endpoint}`)
    .auth(this.appId, this.appApiKey)
    .type('json')
    .query(data)
    .header('Accept', 'application/json')
    .header('User-Agent', 'intercom-node-client/0.1.2')
    .end(r => f(r));
  }
  nextPage(paginationObject, f) {
    unirest.get(paginationObject.next)
    .auth(this.appId, this.appApiKey)
    .type('json')
    .header('Accept', 'application/json')
    .header('User-Agent', 'intercom-node-client/0.1.2')
    .end(r => f(r));
  }
  delete(endpoint, data, f) {
    unirest.delete(`https://api.intercom.io${endpoint}`)
    .auth(this.appId, this.appApiKey)
    .type('json')
    .query(data)
    .header('Accept', 'application/json')
    .header('User-Agent', 'intercom-node-client/0.1.2')
    .end(r => f(r));
  }
}
