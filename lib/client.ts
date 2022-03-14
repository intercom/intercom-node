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

export type RequestParams = Record<
    string,
    string | number | boolean | undefined
>;
export interface GetRequestOptions {
    url: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    params?: RequestParams;
}

export interface RequestOptions extends GetRequestOptions {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?: any;
}

export type Constructor = {
    usernameAuth?: UsernameAuth;
    tokenAuth?: TokenAuth;
    apiKeyAuth?: ApiKeyAuth;
};

export type UsernameAuth = {
    username: string;
    password: string;
};

export type TokenAuth = {
    token: string;
};

export type ApiKeyAuth = {
    appId: string;
    appApiKey: string;
};

export interface BaseClient {
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
    tags: Tag;
    teams: Team;
    visitors: Visitor;
    put<T>({ url, data }: RequestOptions): Promise<T>;
    post<T>({ url, data }: RequestOptions): Promise<T>;
    get<T>({ url, data, params }: RequestOptions): Promise<T>;
    nextPage<T>(paginationObject: { next: string }): Promise<T>;
    delete<T>({ url, data, params }: RequestOptions): Promise<T>;
}
