import Article from './article';
import Admin from './admin';
import Company from './company';
import Contact from './contact';
import Conversation from './conversation';
import Count from './count';
import DataAttribute from './dataAttribute';
import Event from './event';
import HelpCenter from './helpCenter';
import Message from './message';
import Note from './note';
import Segment from './segment';
import Team from './team';
import Tag from './tag';
import Visitor from './visitor';

import * as packageJson from '../package.json';

import { BadResponseError, ErrorHeaders } from './errors/badResponse.error';
import {
    BaseClient,
    Constructor,
    GetRequestOptions,
    RequestOptions,
    RequestParams,
} from './client';

export default class Client implements BaseClient {
    articles: Article;
    admins: Admin;
    companies: Company;
    contacts: Contact;
    conversations: Conversation;
    counts: Count;
    dataAttributes: DataAttribute;
    events: Event;
    helpCenter: HelpCenter;
    messages: Message;
    notes: Note;
    segments: Segment;
    headers: HeadersInit;
    requestOpts: Partial<RequestInit>;
    tags: Tag;
    teams: Team;
    visitors: Visitor;
    baseURL: string;

    constructor(args: Constructor) {
        const authHeader = Client.getAuthHeader(args);

        if (!authHeader) {
            throw new Error(
                'Could not construct a client with those parameters'
            );
        }

        this.headers = {
            'User-Agent': `intercom-node-client/${packageJson.version}`,
            Accept: 'application/json',
            Authentication: authHeader,
        };

        this.admins = new Admin(this);
        this.articles = new Article(this);
        this.companies = new Company(this);
        this.contacts = new Contact(this);
        this.conversations = new Conversation(this);
        this.counts = new Count(this);
        this.dataAttributes = new DataAttribute(this);
        this.events = new Event(this);
        this.helpCenter = new HelpCenter(this);
        this.messages = new Message(this);
        this.notes = new Note(this);
        this.segments = new Segment(this);
        this.tags = new Tag(this);
        this.teams = new Team(this);
        this.visitors = new Visitor(this);
        this.baseURL = 'https://api.intercom.io';
    }

    async ping<T>(): Promise<T> {
        const response = await fetch(`${this.baseURL}/admins`, {
            method: 'GET',
            headers: this.headers,
        });

        const result = await response.json();
        if (!response.ok) {
            const error = this.checkOnErrorInResponse(result, response);
            if (error) {
                throw error;
            }
        }
        return result;
    }

    async put<T>({ url, data }: RequestOptions): Promise<T> {
        const response = await fetch(`${this.baseURL}${url}`, {
            method: 'PUT',
            headers: this.headers,
            body: data ? JSON.stringify(data) : undefined,
        });

        const result = await response.json();
        if (!response.ok) {
            const error = this.checkOnErrorInResponse(result, response);
            if (error) {
                throw error;
            }
        }
        return result;
    }

    async post<T>({ url, data }: RequestOptions): Promise<T> {
        const response = await fetch(`${this.baseURL}${url}`, {
            method: 'POST',
            headers: this.headers,
            body: data ? JSON.stringify(data) : undefined,
        });

        const result = await response.json();
        if (!response.ok) {
            const error = this.checkOnErrorInResponse(result, response);
            if (error) {
                throw error;
            }
        }
        return result;
    }

    async get<T>({ url, params }: GetRequestOptions): Promise<T> {
        const response = await fetch(
            `${this.baseURL}${url}${Client.paramsToQuery(params)}`,
            {
                method: 'GET',
                headers: this.headers,
            }
        );

        const result = await response.json();
        if (!response.ok) {
            const error = this.checkOnErrorInResponse(result, response);
            if (error) {
                throw error;
            }
        }
        return result;
    }

    async nextPage<T>(paginationObject: { next: string }): Promise<T> {
        const response = await fetch(paginationObject.next, {
            method: 'GET',
            headers: this.headers,
        });

        const result = await response.json();
        if (!response.ok) {
            const error = this.checkOnErrorInResponse(result, response);
            if (error) {
                throw error;
            }
        }
        return result;
    }

    async delete<T>({ url, data, params }: RequestOptions): Promise<T> {
        const response = await fetch(
            `${this.baseURL}${url}${Client.paramsToQuery(params)}`,
            {
                method: 'DELETE',
                headers: this.headers,
                body: data ? JSON.stringify(data) : undefined,
            }
        );

        const result = await response.json();

        if (!response.ok) {
            const error = this.checkOnErrorInResponse(result, response);
            if (error) {
                throw error;
            }
        }
        return result;
    }

    private checkOnErrorInResponse(
        data: any,
        { headers, status }: Response
    ): Error | undefined {
        if (data.type !== 'error.list') {
            return undefined;
        }

        const outHeaders: ErrorHeaders = {};
        headers.forEach((value, key) => {
            outHeaders[key] = value;
        });

        const message =
            Array.isArray(data.errors) && data.errors[0].message
                ? data.errors[0].message
                : null;
        return new BadResponseError(
            message || 'Response error',
            data,
            outHeaders,
            status
        );
    }

    private static getAuthHeader(args: Constructor): string | undefined {
        if (args.apiKeyAuth) {
            return (
                'Basic ' +
                btoa(`${args.apiKeyAuth.appId}:${args.apiKeyAuth.appApiKey}`)
            );
        }
        if (args.tokenAuth) {
            return 'Bearer ' + args.tokenAuth.token;
        }
        if (args.usernameAuth) {
            return (
                'Basic ' +
                btoa(
                    `${args.usernameAuth.username}:${args.usernameAuth.password}`
                )
            );
        }

        return undefined;
    }

    private static paramsToQuery(params?: RequestParams): string {
        if (!params) {
            return '';
        }
        let query = '?';
        Object.entries(params).forEach(([key, value]) => {
            if (value) {
                query += `${key}=${encodeURIComponent(value)}`;
            }
        });
        return query;
    }
}
