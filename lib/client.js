var unirest = require('unirest');
import {User} from './user';
import {Event} from './event';
import {Company} from './company';
import {Contact} from './contact';
import {Counts} from './counts';
import {Admin} from './admin';
import {Tag} from './tag';
import {Segment} from './segment';

export class Client {
  constructor(...args) {
    if (args.length === 2) {
      this.appId = args[0];
      this.appApiKey = args[1];
    } else if (args.length === 1) {
      this.appId = args[0].appId;
      this.appApiKey = args[0].appApiKey;
    }
    if (!this.appId || !this.appApiKey) {
      throw new Error('Could not construct a client with those parameters');
    }
    this.users = new User(this);
    this.events = new Event(this);
    this.companies = new Company(this);
    this.contacts = new Contact(this);
    this.counts = new Counts(this);
    this.admins = new Admin(this);
    this.tags = new Tag(this);
    this.segments = new Segment(this);
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
    .end(r => this.callback(f, r));
  }
  get(endpoint, data, f) {
    unirest.get(`https://api.intercom.io${endpoint}`)
    .auth(this.appId, this.appApiKey)
    .type('json')
    .query(data)
    .header('Accept', 'application/json')
    .header('User-Agent', 'intercom-node-client/0.1.2')
    .end(r => this.callback(f, r));
  }
  nextPage(paginationObject, f) {
    unirest.get(paginationObject.next)
    .auth(this.appId, this.appApiKey)
    .type('json')
    .header('Accept', 'application/json')
    .header('User-Agent', 'intercom-node-client/0.1.2')
    .end(r => this.callback(f, r));
  }
  delete(endpoint, data, f) {
    unirest.delete(`https://api.intercom.io${endpoint}`)
    .auth(this.appId, this.appApiKey)
    .type('json')
    .query(data)
    .header('Accept', 'application/json')
    .header('User-Agent', 'intercom-node-client/0.1.2')
    .end(r => this.callback(f, r));
  }
  callback(f, data) {
    if (f.length >= 2) {
      let hasErrors = data.body && data.body.type === 'error.list';
      if (hasErrors) {
        f(data, null);
      } else {
        f(null, data);
      }
    } else {
      f(data);
    }
  }
}
