import { deprecate } from 'util';
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

import axios, { Axios, AxiosDefaults, AxiosResponse } from 'axios';
import {merge, omit} from 'lodash'

import { BadResponseError } from './errors/badResponse.error';

interface IRequestOptions {
  url: string;
  data?: any;
  params?: any
}

export default class Client {
  axiosInstance: Axios;
  usernamePart?: string;
  passwordPart?: string;
  users: any;
  events: any;
  companies: any;
  contacts: Contact;
  leads: any;
  visitors: any;
  counts: any;
  admins: any;
  tags: any;
  segments: any;
  messages: any;
  conversations: Conversation;
  notes: any;
  customers: any;
  requestOpts: Partial<AxiosDefaults>;
  usebaseURL: (baseURL: any) => this;
  propertiesToOmitInRequestOpts: string[];

  // TO-DO: Fix any
  constructor(...args: any) {
    // TO-DO: Refactor it!
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
    this.requestOpts = {
      baseURL: 'https://api.intercom.io'
    };
    this.propertiesToOmitInRequestOpts = ['headers.common.Accept'];

    this.usebaseURL = deprecate(baseURL => this.useRequestOpts({ baseURL }), 'intercom-client - client.usebaseURL(url): Use client.useRequestOpts({ baseURL: url }) instead');

    this.axiosInstance = this.initiateAxiosInstance();
  }
  initiateAxiosInstance(): Axios {
    // TO-DO: Revise the params
    const defaultHeaders = {
      'User-Agent': 'intercom-node-client/2.0.0',
      Accept: 'application/json'
    };

    const axiosInstance = axios.create({auth: {username: this.usernamePart as string, password: this.passwordPart as string}, baseURL: this.requestOpts.baseURL});

    axiosInstance.defaults.headers.common = merge(axiosInstance.defaults.headers.common, defaultHeaders);

    return axiosInstance;
  }

  useRequestOpts(opts: Partial<AxiosDefaults>) {
    const filteredOpts = this.filterUnwantedProperties(opts);

    this.requestOpts = merge(this.requestOpts, filteredOpts);
    this.updateAxiosInstanceDefaults();

    return this;
  }

  updateAxiosInstanceDefaults(): void {
    this.axiosInstance.defaults = merge(this.axiosInstance.defaults, this.requestOpts);
  }

  filterUnwantedProperties(opts: Partial<AxiosDefaults>): Partial<AxiosDefaults> {
    return omit(opts, this.propertiesToOmitInRequestOpts);
  }

  async ping<T>(): Promise<T | void> {
    try {
      const response = await this.axiosInstance.get('/admins');
      this.checkOnErrorInResponse(response);
      return response.data;
    }
    catch(err) {
      if (!err.response) {
        throw err;
      }
      this.checkOnErrorInResponse(err.response)
    }
  }

  async put<T>({url, data}: IRequestOptions): Promise<T | void> {
    try {
      const response = await this.axiosInstance.put(url, data);
      this.checkOnErrorInResponse(response);
      return response.data;
    }
    catch(err) {
      if (!err.response) {
        throw err;
      }
      this.checkOnErrorInResponse(err.response)
    }
  }

  async post<T>({url, data}: IRequestOptions): Promise<T | void> {
    try {
      const response = await this.axiosInstance.post(url, data);
      this.checkOnErrorInResponse(response);
      return response.data;
    }
    catch(err) {
      if (!err.response) {
        throw err;
      }
      this.checkOnErrorInResponse(err.response)
    }
  }

  async get<T>({url, data}: IRequestOptions): Promise<T | void> {
    try {
      const response = await this.axiosInstance.get(url, {params: data});
      this.checkOnErrorInResponse(response);
      return response.data;
    }
    catch(err) {
      if (!err.response) {
        throw err;
      }
      this.checkOnErrorInResponse(err.response)
    }
  }

  async nextPage<T>(paginationObject: {next: string}): Promise<T | void> {
    try {
      const response = await this.axiosInstance.get(paginationObject.next, {baseURL: undefined});
      this.checkOnErrorInResponse(response);
      return response.data;
    }
    catch(err) {
      if (!err.response) {
        throw err;
      }
      this.checkOnErrorInResponse(err.response)
    }
  }

  async delete<T>({url, data, params}: IRequestOptions): Promise<T | void> {
    try {
      const response = await this.axiosInstance.delete(url, {data, params});
      this.checkOnErrorInResponse(response);
      return response.data;
    }
    catch(err) {
      if (!err.response) {
        throw err;
      }
      this.checkOnErrorInResponse(err.response)
    }
  }

  private checkOnErrorInResponse({data, headers, status}: AxiosResponse): void {
    if (data.type !== 'error.list') {
      return;
    }

    const message = Array.isArray(data.errors) && data.errors[0].message ? data.errors[0].message : null;
    throw new BadResponseError(message || 'Response error', data, headers, status);
  }
}
