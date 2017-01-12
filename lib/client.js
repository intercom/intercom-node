import unirest from 'unirest';
import Bluebird from 'bluebird';
import User from './user';
import Event from './event';
import Company from './company';
import Contact from './contact';
import Visitor from './visitor';
import Counts from './counts';
import Admin from './admin';
import Tag from './tag';
import Segment from './segment';
import Message from './message';
import Conversation from './conversation';
import Note from './note';

export default class Client {
  constructor(...args) {
    if (args.length === 2) {
      this.usernamePart = args[0];
      this.passwordPart = args[1];
    } else if (args.length === 1) {
      if (args[0].token) {
        this.usernamePart = args[0].token;
        this.passwordPart = '';
      } else {
        this.usernamePart = args[0].appId;
        this.passwordPart = args[0].appApiKey;
      }
    }
    if (!this.usernamePart || this.passwordPart === undefined) {
      throw new Error('Could not construct a client with those parameters');
    }
    this.users = new User(this);
    this.events = new Event(this);
    this.companies = new Company(this);
    this.contacts = new Contact(this);
    this.leads = new Contact(this);
    this.visitors = new Visitor(this);
    this.counts = new Counts(this);
    this.admins = new Admin(this);
    this.tags = new Tag(this);
    this.segments = new Segment(this);
    this.messages = new Message(this);
    this.conversations = new Conversation(this);
    this.notes = new Note(this);
    this.promises = false;
    this.baseUrl = 'https://api.intercom.io';
  }
  usePromises() {
    this.promises = true;
    return this;
  }
  useBaseUrl(baseUrl) {
    this.baseUrl = baseUrl;
    return this;
  }
  promiseProxy(f, req) {
    if (this.promises || !f) {
      const callbackHandler = this.callback;
      return new Bluebird((resolve, reject) => {
        const resolver = (err, data) => {
          if (err) {
            reject(new Error(JSON.stringify(err)));
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
    unirest.get(`${this.baseUrl}/admins`)
    .auth(this.usernamePart, this.passwordPart)
    .type('json')
    .header('Accept', 'application/json')
    .header('User-Agent', 'intercom-node-client/2.0.0')
    .end(r => f(r.status));
  }
  put(endpoint, data, f) {
    return this.promiseProxy(f,
      unirest.put(`${this.baseUrl}${endpoint}`)
      .auth(this.usernamePart, this.passwordPart)
      .type('json')
      .send(data)
      .header('Accept', 'application/json')
      .header('User-Agent', 'intercom-node-client/2.0.0')
    );
  }
  post(endpoint, data, f) {
    return this.promiseProxy(f,
      unirest.post(`${this.baseUrl}${endpoint}`)
      .auth(this.usernamePart, this.passwordPart)
      .type('json')
      .send(data)
      .header('Accept', 'application/json')
      .header('User-Agent', 'intercom-node-client/2.0.0')
    );
  }
  get(endpoint, data, f) {
    return this.promiseProxy(f,
      unirest.get(`${this.baseUrl}${endpoint}`)
      .auth(this.usernamePart, this.passwordPart)
      .type('json')
      .query(data)
      .header('Accept', 'application/json')
      .header('User-Agent', 'intercom-node-client/2.0.0')
    );
  }
  nextPage(paginationObject, f) {
    return this.promiseProxy(f,
      unirest.get(paginationObject.next)
      .auth(this.usernamePart, this.passwordPart)
      .type('json')
      .header('Accept', 'application/json')
      .header('User-Agent', 'intercom-node-client/2.0.0')
    );
  }
  delete(endpoint, data, f) {
    return this.promiseProxy(f,
      unirest.delete(`${this.baseUrl}${endpoint}`)
      .auth(this.usernamePart, this.passwordPart)
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
      const hasErrors = data.error || (data.body && data.body.type === 'error.list');
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
