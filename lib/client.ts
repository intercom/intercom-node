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
import DataAttribute from './dataAttribute';
import Team from './team';

import axios, { Axios, AxiosDefaults, AxiosResponse } from 'axios';
import { merge, omit } from 'lodash';

import { BadResponseError } from './errors/badResponse.error';

interface RequestOptions {
    url: string;
    data?: any;
    params?: any;
}

export default class Client {
    admins: Admin;
    axiosInstance: Axios;
    companies: Company;
    contacts: Contact;
    conversations: Conversation;
    counts: any;
    customers: any;
    leads: any;
    users: any;
    events: Event;
    dataAttributes: DataAttribute;
    segments: Segment;
    messages: any;
    notes: any;
    passwordPart?: string;
    propertiesToOmitInRequestOpts: string[];
    requestOpts: Partial<AxiosDefaults>;
    tags: Tag;
    teams: Team;
    usebaseURL: (baseURL: any) => this;
    usernamePart?: string;
    visitors: any;

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
            throw new Error(
                'Could not construct a client with those parameters'
            );
        }
        this.users = new User(this);
        this.events = new Event(this);
        this.companies = new Company(this);
        this.contacts = new Contact(this);
        this.leads = new Contact(this);
        this.visitors = new Visitor(this);
        this.counts = new Counts(this);
        this.admins = new Admin(this);
        this.segments = new Segment(this);
        this.messages = new Message(this);
        this.conversations = new Conversation(this);
        this.notes = new Note(this);
        this.customers = new Customer(this);
        this.tags = new Tag(this);
        this.teams = new Team(this);
        this.dataAttributes = new DataAttribute(this);
        this.requestOpts = {
            baseURL: 'https://api.intercom.io',
        };
        this.propertiesToOmitInRequestOpts = ['headers.common.Accept'];

        this.usebaseURL = deprecate(
            (baseURL) => this.useRequestOpts({ baseURL }),
            'intercom-client - client.usebaseURL(url): Use client.useRequestOpts({ baseURL: url }) instead'
        );

        this.axiosInstance = this.initiateAxiosInstance();
    }
    initiateAxiosInstance(): Axios {
        // TO-DO: Revise the params
        const defaultHeaders = {
            'User-Agent': 'intercom-node-client/3.0.0',
            Accept: 'application/json',
        };

        const axiosInstance = axios.create({
            auth: {
                username: this.usernamePart as string,
                password: this.passwordPart as string,
            },
            baseURL: this.requestOpts.baseURL,
        });

        axiosInstance.defaults.headers.common = merge(
            axiosInstance.defaults.headers.common,
            defaultHeaders
        );

        return axiosInstance;
    }

    useRequestOpts(opts: Partial<AxiosDefaults>) {
        const filteredOpts = this.filterUnwantedProperties(opts);

        this.requestOpts = merge(this.requestOpts, filteredOpts);
        this.updateAxiosInstanceDefaults();

        return this;
    }

    updateAxiosInstanceDefaults(): void {
        this.axiosInstance.defaults = merge(
            this.axiosInstance.defaults,
            this.requestOpts
        );
    }

    filterUnwantedProperties(
        opts: Partial<AxiosDefaults>
    ): Partial<AxiosDefaults> {
        return omit(opts, this.propertiesToOmitInRequestOpts);
    }

    async ping<T>(): Promise<T> {
        try {
            const response = await this.axiosInstance.get('/admins');

            return response.data;
        } catch (err) {
            const error = err.response
                ? this.checkOnErrorInResponse(err.response)
                : err;

            throw error;
        }
    }

    async put<T>({ url, data }: RequestOptions): Promise<T> {
        try {
            const response = await this.axiosInstance.put(url, data);

            return response.data;
        } catch (err) {
            const error = err.response
                ? this.checkOnErrorInResponse(err.response)
                : err;

            throw error;
        }
    }

    async post<T>({ url, data }: RequestOptions): Promise<T> {
        try {
            const response = await this.axiosInstance.post(url, data);

            return response.data;
        } catch (err) {
            const error = err.response
                ? this.checkOnErrorInResponse(err.response)
                : err;

            throw error;
        }
    }

    async get<T>({ url, data, params }: RequestOptions): Promise<T> {
        try {
            const response = await this.axiosInstance.get(url, {
                params,
                data,
            });

            return response.data;
        } catch (err) {
            const error = err.response
                ? this.checkOnErrorInResponse(err.response)
                : err;

            throw error;
        }
    }

    async nextPage<T>(paginationObject: { next: string }): Promise<T> {
        try {
            const response = await this.axiosInstance.get(
                paginationObject.next,
                { baseURL: undefined }
            );

            return response.data;
        } catch (err) {
            const error = err.response
                ? this.checkOnErrorInResponse(err.response)
                : err;

            throw error;
        }
    }

    async delete<T>({ url, data, params }: RequestOptions): Promise<T> {
        try {
            const response = await this.axiosInstance.delete(url, {
                data,
                params,
            });

            return response.data;
        } catch (err) {
            const error = err.response
                ? this.checkOnErrorInResponse(err.response)
                : err;

            throw error;
        }
    }

    private checkOnErrorInResponse({
        data,
        headers,
        status,
    }: AxiosResponse): Error | undefined {
        if (data.type !== 'error.list') {
            return undefined;
        }

        const message =
            Array.isArray(data.errors) && data.errors[0].message
                ? data.errors[0].message
                : null;
        return new BadResponseError(
            message || 'Response error',
            data,
            headers,
            status
        );
    }
}
