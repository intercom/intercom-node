var unirest = require('unirest');
import {User} from './user';
import {Event} from './event';
import {Company} from './company';
import {Contact} from './contact';
import {Counts} from './counts';
import {Admin} from './admin';
import {Tag} from './tag';
import {Segment} from './segment';
import {Message} from './message';
import {Conversation} from './conversation';
import {Note} from './note';

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
    this.messages = new Message(this);
    this.conversations = new Conversation(this);
    this.notes = new Note(this);
    this.promises = false;
  }
  usePromises() {
    this.promises = true;
    return this;
  }
  promiseProxy(f, req) {
    if (this.promises) {
      const callbackHandler = this.callback;
      return new Promise((resolve, reject) => {
        const resolver = (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        };
        req.end(r => callbackHandler(resolver, r));
      });
    } else {
      req.end(r => this.callback(f, r));
    }
  }
  ping(f) {
    unirest.get('https://api.intercom.io/admins')
    .auth(this.appId, this.appApiKey)
    .type('json')
    .header('Accept', 'application/json')
    .header('User-Agent', 'intercom-node-client/2.0.0')
    .end(r => f(r.status));
  }
  put(endpoint, data, f) {
    return this.promiseProxy(f,
      unirest.put(`https://api.intercom.io${endpoint}`)
      .auth(this.appId, this.appApiKey)
      .type('json')
      .send(data)
      .header('Accept', 'application/json')
      .header('User-Agent', 'intercom-node-client/2.0.0')
    );
  }
  post(endpoint, data, f) {
    return this.promiseProxy(f,
      unirest.post(`https://api.intercom.io${endpoint}`)
      .auth(this.appId, this.appApiKey)
      .type('json')
      .send(data)
      .header('Accept', 'application/json')
      .header('User-Agent', 'intercom-node-client/2.0.0')
    );
  }
  get(endpoint, data, f) {
    return this.promiseProxy(f,
      unirest.get(`https://api.intercom.io${endpoint}`)
      .auth(this.appId, this.appApiKey)
      .type('json')
      .query(data)
      .header('Accept', 'application/json')
      .header('User-Agent', 'intercom-node-client/2.0.0')
    );
  }
  nextPage(paginationObject, f) {
    return this.promiseProxy(f,
      unirest.get(paginationObject.next)
      .auth(this.appId, this.appApiKey)
      .type('json')
      .header('Accept', 'application/json')
      .header('User-Agent', 'intercom-node-client/2.0.0')
    );
  }
  delete(endpoint, data, f) {
    return this.promiseProxy(f,
      unirest.delete(`https://api.intercom.io${endpoint}`)
      .auth(this.appId, this.appApiKey)
      .type('json')
      .query(data)
      .header('Accept', 'application/json')
      .header('User-Agent', 'intercom-node-client/2.0.0')
    );
  }
  callback(f, data) {
    if (!f) {
      return;
    }
    if (f.length >= 2) {
      let hasErrors = data.error || (data.body && data.body.type === 'error.list');
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
