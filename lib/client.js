import { deprecate } from 'util';
import request from 'request';
import Bluebird from 'bluebird';
import merge from 'lodash/merge';
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
import Customer from './customer';

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
    this.customers = new Customer(this);
    this.promises = false;
    this.requestOpts = {
      baseUrl: 'https://api.intercom.io'
    };

    this.useBaseUrl = deprecate(baseUrl => this.useRequestOpts({ baseUrl }), 'intercom-client - client.useBaseUrl(url): Use client.useRequestOpts({ baseUrl: url }) instead');
  }
  usePromises() {
    this.promises = true;
    return this;
  }
  useRequestOpts(opts) {
    this.requestOpts = Object.assign(this.requestOpts, opts);
    return this;
  }
  promiseProxy(f, args) {
    if (this.promises || !f) {
      const callbackHandler = this.callback;
      return new Bluebird((resolve, reject) => {
        const resolver = (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        };
        this.request(args, (err, r) => {
          callbackHandler(resolver, err, r);
        });
      });
    } else {
      this.request(args, (err, r) => this.callback(f, err, r));
    }
  }
  ping(f) {
    this.request({
      uri: '/admins'
    }, (_, response) => f(response.statusCode));
  }
  put(endpoint, data, f) {
    return this.promiseProxy(f,
      {
        method: 'put',
        uri: endpoint,
        body: data
      }
    );
  }
  post(endpoint, data, f) {
    return this.promiseProxy(f,
      {
        method: 'post',
        uri: endpoint,
        body: data
      }
    );
  }
  get(endpoint, data, f) {
    return this.promiseProxy(f,
      {
        method: 'get',
        uri: endpoint,
        qs: data
      }
    );
  }
  nextPage(paginationObject, f) {
    return this.promiseProxy(f,
      {
        method: 'get',
        uri: paginationObject.next,
        baseUrl: null
      }
    );
  }
  delete(endpoint, data, f) {
    return this.promiseProxy(f,
      {
        method: 'delete',
        uri: endpoint,
        qs: data
      }
    );
  }
  request(args, callback) {
    const defaultArgs = {
      json: true,
      headers: {
        Accept: 'application/json',
        'User-Agent': 'intercom-node-client/2.0.0'
      }
    };
    // Don't just use Object.assign(requestArgs, args) here because we need to handle special cases like .headers
    // Per request args should take prededence over the default, and both of these over the user specified args via .useRequestOpts
    const requestArgs = merge({}, this.requestOpts, defaultArgs, args);
    return request(requestArgs, callback).auth(this.usernamePart, this.passwordPart);
  }
  callback(f, err, res) {
    if (!f) {
      return;
    }
    if (f.length >= 2) {
      if (res && res.body && res.body.type === 'error.list') {
        let message = null;
        if (Array.isArray(res.body.errors) && res.body.errors[0] && 'message' in res.body.errors[0]) {
          // Try to use the first errors message
          message = res.body.errors[0].message;
        }
        err = new Error(message || 'Response error');
        err.statusCode = res.statusCode;
        err.body = res.body;
        err.headers = res.headers;
      }
      if (err) {
        f(err, null);
      } else {
        f(null, res);
      }
    } else {
      f(res || null);
    }
  }
}
