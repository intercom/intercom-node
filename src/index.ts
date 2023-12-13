// File generated from our OpenAPI spec by Stainless.

import * as Core from './core';
import * as Errors from './error';
import { type Agent } from './_shims/index';
import * as Uploads from './uploads';
import * as API from 'intercom/resources/index';

const environments = {
  production: 'https://api.intercom.io',
  environment_1: 'https://api.eu.intercom.io',
  environment_2: 'https://api.au.intercom.io',
};
type Environment = keyof typeof environments;

export interface ClientOptions {
  /**
   * Defaults to process.env['INTERCOM_TEST_1_BEARER_TOKEN'].
   */
  bearerToken?: string;

  /**
   * Specifies the environment to use for the API.
   *
   * Each environment maps to a different base URL:
   * - `production` corresponds to `https://api.intercom.io`
   * - `environment_1` corresponds to `https://api.eu.intercom.io`
   * - `environment_2` corresponds to `https://api.au.intercom.io`
   */
  environment?: Environment;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['INTERCOM_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/** API Client for interfacing with the Intercom API. */
export class Intercom extends Core.APIClient {
  bearerToken: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Intercom API.
   *
   * @param {string} [opts.bearerToken=process.env['INTERCOM_TEST_1_BEARER_TOKEN'] ?? undefined]
   * @param {Environment} [opts.environment=production] - Specifies the environment URL to use for the API.
   * @param {string} [opts.baseURL=process.env['INTERCOM_BASE_URL'] ?? https://api.intercom.io] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('INTERCOM_BASE_URL'),
    bearerToken = Core.readEnv('INTERCOM_TEST_1_BEARER_TOKEN'),
    ...opts
  }: ClientOptions = {}) {
    if (bearerToken === undefined) {
      throw new Errors.IntercomError(
        "The INTERCOM_TEST_1_BEARER_TOKEN environment variable is missing or empty; either provide it, or instantiate the Intercom client with an bearerToken option, like new Intercom({ bearerToken: 'My Bearer Token' }).",
      );
    }

    const options: ClientOptions = {
      bearerToken,
      ...opts,
      baseURL,
      environment: opts.environment ?? 'production',
    };

    if (baseURL && opts.environment) {
      throw new Errors.IntercomError(
        'Ambiguous URL; The `baseURL` option (or INTERCOM_BASE_URL env var) and the `environment` option are given. If you want to use the environment you must pass baseURL: null',
      );
    }

    super({
      baseURL: options.baseURL || environments[options.environment || 'production'],
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });
    this._options = options;

    this.bearerToken = bearerToken;
  }

  me: API.Me = new API.Me(this);
  admins: API.Admins = new API.Admins(this);
  articles: API.Articles = new API.Articles(this);
  helpCenter: API.HelpCenter = new API.HelpCenter(this);
  companies: API.Companies = new API.Companies(this);
  contacts: API.Contacts = new API.Contacts(this);
  conversations: API.Conversations = new API.Conversations(this);
  dataAttributes: API.DataAttributes = new API.DataAttributes(this);
  dataEvents: API.DataEvents = new API.DataEvents(this);
  dataExports: API.DataExports = new API.DataExports(this);
  export: API.Export = new API.Export(this);
  download: API.Download = new API.Download(this);
  messages: API.Messages = new API.Messages(this);
  news: API.News = new API.News(this);
  notes: API.Notes = new API.Notes(this);
  segments: API.Segments = new API.Segments(this);
  subscriptionTypes: API.SubscriptionTypes = new API.SubscriptionTypes(this);
  phoneCallRedirects: API.PhoneCallRedirects = new API.PhoneCallRedirects(this);
  tags: API.Tags = new API.Tags(this);
  teams: API.Teams = new API.Teams(this);
  ticketTypes: API.TicketTypes = new API.TicketTypes(this);
  tickets: API.Tickets = new API.Tickets(this);
  visitors: API.Visitors = new API.Visitors(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return { Authorization: `Bearer ${this.bearerToken}` };
  }

  static Intercom = this;

  static IntercomError = Errors.IntercomError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;
}

export const {
  IntercomError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} = Errors;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

export namespace Intercom {
  // Helper functions
  export import toFile = Uploads.toFile;
  export import fileFromPath = Uploads.fileFromPath;

  export import RequestOptions = Core.RequestOptions;

  export import Me = API.Me;
  export import AdminWithApp = API.AdminWithApp;
  export import MeRetrieveParams = API.MeRetrieveParams;

  export import Admins = API.Admins;
  export import AdminList = API.AdminList;
  export import AdminRetrieveParams = API.AdminRetrieveParams;
  export import AdminListParams = API.AdminListParams;

  export import Articles = API.Articles;
  export import Article = API.Article;
  export import ArticleList = API.ArticleList;
  export import ArticleSearchResponse = API.ArticleSearchResponse;
  export import DeletedArticleObject = API.DeletedArticleObject;
  export import ArticleCreateParams = API.ArticleCreateParams;
  export import ArticleRetrieveParams = API.ArticleRetrieveParams;
  export import ArticleUpdateParams = API.ArticleUpdateParams;
  export import ArticleListParams = API.ArticleListParams;
  export import ArticleRemoveParams = API.ArticleRemoveParams;
  export import ArticleSearchParams = API.ArticleSearchParams;

  export import HelpCenter = API.HelpCenter;

  export import Companies = API.Companies;
  export import DeletedCompanyObject = API.DeletedCompanyObject;
  export import CompanyRetrieveParams = API.CompanyRetrieveParams;
  export import CompanyUpdateParams = API.CompanyUpdateParams;
  export import CompanyDeleteParams = API.CompanyDeleteParams;
  export import CompanyCreateUpdateParams = API.CompanyCreateUpdateParams;

  export import Contacts = API.Contacts;
  export import ContactArchived = API.ContactArchived;
  export import ContactDeleted = API.ContactDeleted;
  export import ContactList = API.ContactList;
  export import ContactUnarchived = API.ContactUnarchived;
  export import ContactCreateParams = API.ContactCreateParams;
  export import ContactRetrieveParams = API.ContactRetrieveParams;
  export import ContactUpdateParams = API.ContactUpdateParams;
  export import ContactListParams = API.ContactListParams;
  export import ContactDeleteParams = API.ContactDeleteParams;
  export import ContactArchiveParams = API.ContactArchiveParams;
  export import ContactMergeParams = API.ContactMergeParams;
  export import ContactSearchParams = API.ContactSearchParams;
  export import ContactUnarchiveParams = API.ContactUnarchiveParams;

  export import Conversations = API.Conversations;
  export import ConversationCreateParams = API.ConversationCreateParams;
  export import ConversationRetrieveParams = API.ConversationRetrieveParams;
  export import ConversationUpdateParams = API.ConversationUpdateParams;
  export import ConversationListParams = API.ConversationListParams;
  export import ConversationConvertParams = API.ConversationConvertParams;
  export import ConversationRedactParams = API.ConversationRedactParams;

  export import DataAttributes = API.DataAttributes;
  export import DataAttribute = API.DataAttribute;
  export import DataAttributeList = API.DataAttributeList;
  export import DataAttributeCreateParams = API.DataAttributeCreateParams;
  export import DataAttributeUpdateParams = API.DataAttributeUpdateParams;
  export import DataAttributeListParams = API.DataAttributeListParams;

  export import DataEvents = API.DataEvents;
  export import DataEventSummary = API.DataEventSummary;
  export import DataEventCreateParams = API.DataEventCreateParams;
  export import DataEventListParams = API.DataEventListParams;
  export import DataEventSummariesParams = API.DataEventSummariesParams;

  export import DataExports = API.DataExports;
  export import DataExport = API.DataExport;
  export import DataExportContentDataParams = API.DataExportContentDataParams;

  export import Export = API.Export;
  export import ExportCancelParams = API.ExportCancelParams;

  export import Download = API.Download;

  export import Messages = API.Messages;
  export import MessageCreateParams = API.MessageCreateParams;

  export import News = API.News;

  export import Notes = API.Notes;
  export import NoteRetrieveParams = API.NoteRetrieveParams;

  export import Segments = API.Segments;
  export import Segment = API.Segment;
  export import SegmentList = API.SegmentList;
  export import SegmentRetrieveParams = API.SegmentRetrieveParams;
  export import SegmentListParams = API.SegmentListParams;

  export import SubscriptionTypes = API.SubscriptionTypes;
  export import SubscriptionTypeListParams = API.SubscriptionTypeListParams;

  export import PhoneCallRedirects = API.PhoneCallRedirects;
  export import PhoneSwitch = API.PhoneSwitch;
  export import PhoneCallRedirectCreateParams = API.PhoneCallRedirectCreateParams;

  export import Tags = API.Tags;
  export import TagRetrieveParams = API.TagRetrieveParams;
  export import TagListParams = API.TagListParams;
  export import TagDeleteParams = API.TagDeleteParams;
  export import TagCreateOrUpdateParams = API.TagCreateOrUpdateParams;

  export import Teams = API.Teams;
  export import Team = API.Team;
  export import TeamList = API.TeamList;
  export import TeamRetrieveParams = API.TeamRetrieveParams;
  export import TeamListParams = API.TeamListParams;

  export import TicketTypes = API.TicketTypes;
  export import TicketType = API.TicketType;
  export import TicketTypeList = API.TicketTypeList;
  export import TicketTypeCreateParams = API.TicketTypeCreateParams;
  export import TicketTypeRetrieveParams = API.TicketTypeRetrieveParams;
  export import TicketTypeUpdateParams = API.TicketTypeUpdateParams;
  export import TicketTypeListParams = API.TicketTypeListParams;

  export import Tickets = API.Tickets;
  export import TicketList = API.TicketList;
  export import TicketReply = API.TicketReply;
  export import TicketCreateParams = API.TicketCreateParams;
  export import TicketReplyParams = API.TicketReplyParams;
  export import TicketRetrieveByIDParams = API.TicketRetrieveByIDParams;
  export import TicketSearchParams = API.TicketSearchParams;
  export import TicketUpdateByIDParams = API.TicketUpdateByIDParams;

  export import Visitors = API.Visitors;
  export import Visitor = API.Visitor;
  export import VisitorDeletedObject = API.VisitorDeletedObject;
  export import VisitorRetrieveParams = API.VisitorRetrieveParams;
  export import VisitorUpdateParams = API.VisitorUpdateParams;
  export import VisitorConvertParams = API.VisitorConvertParams;
  export import VisitorDeleteByIDParams = API.VisitorDeleteByIDParams;
  export import VisitorRetrieveByIDParams = API.VisitorRetrieveByIDParams;

  export import Admin = API.Admin;
  export import Company = API.Company;
  export import Contact = API.Contact;
  export import Conversation = API.Conversation;
  export import Message = API.Message;
  export import Note = API.Note;
  export import PaginatedResponse = API.PaginatedResponse;
  export import SubscriptionTypeList = API.SubscriptionTypeList;
  export import Tag = API.Tag;
  export import TagList = API.TagList;
  export import Ticket = API.Ticket;
  export import TicketTypeAttribute = API.TicketTypeAttribute;
}

export default Intercom;
