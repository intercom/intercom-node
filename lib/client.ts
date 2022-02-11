import axios, { Axios, AxiosDefaults, AxiosResponse } from 'axios';
import { merge, omit } from 'lodash';

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

import { BadResponseError } from './errors/badResponse.error';

interface RequestOptions {
    url: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    params?: any;
}

type Constructor = {
    usernameAuth?: UsernameAuth;
    tokenAuth?: TokenAuth;
    apiKeyAuth?: ApiKeyAuth;
};

type UsernameAuth = {
    username: string;
    password: string;
};

type TokenAuth = {
    token: string;
};

type ApiKeyAuth = {
    appId: string;
    appApiKey: string;
};

export default class Client {
    articles: Article;
    admins: Admin;
    axiosInstance: Axios;
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
    passwordPart?: string;
    propertiesToOmitInRequestOpts: string[];
    requestOpts: Partial<AxiosDefaults>;
    tags: Tag;
    teams: Team;
    usernamePart?: string;
    visitors: Visitor;

    constructor(args: Constructor) {
        const [usernamePart, passwordPart] = Client.getAuthDetails(args);

        this.usernamePart = usernamePart;
        this.passwordPart = passwordPart;

        if (!this.usernamePart || this.passwordPart === undefined) {
            throw new Error(
                'Could not construct a client with those parameters'
            );
        }

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
        this.requestOpts = {
            baseURL: 'https://api.intercom.io',
        };
        this.propertiesToOmitInRequestOpts = ['headers.common.Accept'];

        this.axiosInstance = this.initiateAxiosInstance();
    }
    initiateAxiosInstance(): Axios {
        const defaultHeaders = {
            'User-Agent': `intercom-node-client/${packageJson.version}`,
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

    private static getAuthDetails(
        args: Constructor
    ): [username: string | undefined, password: string | undefined] {
        if (args.apiKeyAuth) {
            return [args.apiKeyAuth.appId, args.apiKeyAuth.appApiKey];
        }
        if (args.tokenAuth) {
            return [args.tokenAuth.token, ''];
        }
        if (args.usernameAuth) {
            return [args.usernameAuth.username, args.usernameAuth.password];
        }

        return [undefined, undefined];
    }
}
