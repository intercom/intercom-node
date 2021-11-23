import { AxiosResponse } from 'axios';
import Client from './client'
import { Leaves, Paginated, StringifiedTimestamp } from './common/common.types';
import { ContactType, ConversationObject, ConversationObjectWithoutParts } from './conversation/conversation.types';
import { MessageObject } from './message/message.types';

export default class Conversation {
  private conversationBaseUrl = 'conversations'

  constructor(private readonly client: Client) {
    this.client = client;
  }
  create({data}: CreateConversationRequest) {
    return this.client.post({url: `/${this.conversationBaseUrl}`, data}) as Promise<AxiosResponse<MessageObject, CreateConversationRequest['data']>>;
  }
  find({id, query}: RetrieveConversationRequest) {
    return this.client.get({url: `/${this.conversationBaseUrl}/${id}`, data: query}) as Promise<AxiosResponse<ConversationObject, void>>;;
  }
  update({id, data}: UpdateConversationRequest) {
    return this.client.put({url: `/${this.conversationBaseUrl}/${id}`, data}) as Promise<AxiosResponse<ConversationObject, UpdateConversationRequest['data']>>;
  }
  replyById({id, data}: ReplyByIdConversationRequest) {
    return this.client.post({url: `/${this.conversationBaseUrl}/${id}/reply`, data}) as Promise<AxiosResponse<ConversationObject, ReplyByIdConversationRequest['data']>>;
  }
  replyByLast({data}: ReplyByLastConversationRequest) {
    return this.client.post({url: `/${this.conversationBaseUrl}/last/reply`, data}) as Promise<AxiosResponse<ConversationObject, ReplyByLastConversationRequest['data']>>;
  }
  assign({id, data: requestData, withRunningAssignmentRules = false}: AssignConversationRequest) {
    const url = `/${this.conversationBaseUrl}/${id}/${withRunningAssignmentRules ? 'run_assignment_rules' : ''}`;
    const data = withRunningAssignmentRules ? undefined : requestData;

    return this.client.post({url, data}) as Promise<AxiosResponse<ConversationObject, AssignConversationRequest['data']>>;
  }
  snooze({id, data}: SnoozeConversationRequest) {
    return this.client.post({url: `/${this.conversationBaseUrl}/${id}/reply`, data}) as Promise<AxiosResponse<ConversationObject, SnoozeConversationRequest['data']>>;
  }
  close({id, data}: CloseConversationRequest) {
    return this.client.post({url: `/${this.conversationBaseUrl}/${id}/parts`, data}) as Promise<AxiosResponse<ConversationObject, CloseConversationRequest['data']>>
  }
  open({id, data}: OpenConversationRequest) {
    return this.client.post({url: `/${this.conversationBaseUrl}/${id}/parts`, data}) as Promise<AxiosResponse<ConversationObject, OpenConversationRequest['data']>>
  }
  attachContact({id, data}: AttachContactToConversationRequest) {
    return this.client.post({url: `/${this.conversationBaseUrl}/${id}/customers`, data}) as Promise<AxiosResponse<AttachContactToConversationResponse, AttachContactToConversationRequest['data']>>
  }
  detachContact({conversationId, contactId, data}: DetachContactFromConversationRequest) {
    return this.client.delete({url: `/${this.conversationBaseUrl}/${conversationId}/customers/${contactId}`, data}) as Promise<AxiosResponse<ConversationObject, DetachContactFromConversationRequest['data']>>
  }
  search({data}: SearchConversationRequest){
    return this.client.post({url: `/${this.conversationBaseUrl}/search`, data}) as Promise<AxiosResponse<SearchConversationResponse, SearchConversationRequest['data']>>
  }
  list({query}: ListConversationRequest) {
    return this.client.get({url: `/${this.conversationBaseUrl}`, data: query}) as Promise<AxiosResponse<ListConversationResponse, void>>;
  }
  redactConversationPart({data}: RedactConversationPartRequest) {
    return this.client.post({url: `/${this.conversationBaseUrl}/redact`, data}) as Promise<AxiosResponse<Conversation, RedactConversationPartRequest>>;
  }
}

interface CreateConversationRequest {
  data:
  {from: {
    type: 'user' | string,
    id: string,
  },
  body: string
  }
}
//
interface RetrieveConversationRequest {
  id: string,
  query?:  { display_as?: 'plaintext' | string }
}
//
interface UpdateConversationRequest {
  id: string,
  data?: {
    read?: boolean,
    custom_attributes: object
  }
}
//
export enum ReplyToConversationMessageType {
  COMMENT = 'comment',
  NOTE = 'note'
}
export enum ReplyToConversationUserType {
  ADMIN = 'admin',
  USER = 'user'
}

interface ReplyToConversationAsUser {
  message_type: ReplyToConversationMessageType,
  type: ReplyToConversationUserType,
  body: string,
  // refactor to CustomerObject
  intercom_user_id?: string,
  user_id?: string,
  email?: string,
  attachment_urls?: Array<string>,
}

interface ReplyToConversationAsAdmin {
  message_type: ReplyToConversationMessageType,
  type: ReplyToConversationUserType,
  body: string,
  attachment_urls?: Array<string>,
}

interface ReplyByIdConversationRequest {
  id: string;
  data?: ReplyToConversationAsUser | ReplyToConversationAsAdmin
};

interface ReplyByLastConversationRequest {
  data?: ReplyToConversationAsUser | ReplyToConversationAsAdmin
}
//
export enum AssignToConversationMessageType {
  ASSIGNMENT = 'assignment'
}
export enum AssignToConversationUserType {
  ADMIN = 'admin',
  TEAM = 'team'
}

interface AssignConversationRequest {
  id: string,
  data?: {
    message_type: AssignToConversationMessageType,
    type: AssignToConversationUserType,
    admin_id?: string,
    assignee_id?: string | 0,
    body?: string,
  },
  withRunningAssignmentRules?: boolean
}
//
export enum SnoozeConversationMessageType {
  SNOOZED = 'snoozed'
}

interface SnoozeConversationRequest {
  id: string,
  data: {
    message_type: SnoozeConversationMessageType,
    admin_id: string,
    snoozed_until: StringifiedTimestamp
  }
}
//
export enum CloseConversationMessageType {
  CLOSED = 'closed'
}
export enum CloseConversationType {
  ADMIN = 'admin'
}

interface CloseConversationRequest {
  id: string,
  data: {
    message_type: CloseConversationMessageType,
    type: CloseConversationType,
    admin_id: string,
    body?: string
  }
}
//
export enum OpenConversationMessageType {
  OPEN = 'open'
}

interface OpenConversationRequest {
  id: string,
  data: {
    message_type: OpenConversationMessageType,
    admin_id: string,
  }
}
//
interface CustomerObject {
  intercom_user_id?: string;
  user_id?: string;
  email?: string;
}

interface AttachContactToConversationAdminRequest {
  admin_id: string
  customer: CustomerObject
}

interface AttachContactToConversationContactRequest extends CustomerObject {
  customer: CustomerObject;
}

interface AttachContactToConversationRequest {
  id: string,
  data: AttachContactToConversationAdminRequest | AttachContactToConversationContactRequest
}

interface AttachContactToConversationResponse {
  customers: Array<{id: string, type: ContactType}>
}
//
interface DetachContactFromConversationRequest {
  conversationId: string,
  contactId: string,
  data: {
    admin_id: string
  }
}
//
export enum Operators {
  AND = "AND",
  OR = "OR",
  EQUALS = "=",
  NOT_EQUALS = "!=",
  IN = "IN",
  NIN = "NIN",
  GREATER_THAN = ">",
  LESS_THAN = "<",
  CONTAINS = "~",
  NOT_CONTAINS = "!~",
  STARTS_WITH = "^",
  ENDS_WITH = "$",
}

interface FlatQuery {
  field: Leaves<ConversationObject>,
  operator: Operators,
  value: string | number;
}

interface NestedQueries {
  operator: Operators,
  value: Array<FlatQuery | NestedQueries> | string | number,
}

interface SearchFilters {
  query: FlatQuery | NestedQueries
}
interface SearchConversationRequest {
  data: SearchFilters
}

interface SearchConversationResponse extends ConversationObject {
  total_count: number
}
//
export enum Order {
  DESC = 'desc',
  ASC = 'asc',
}

export enum SortBy {
  CreatedAt = 'created_at',
  UpdatedAt = 'updated_at',
  WaitingSince = 'waiting_since'
}

interface ListConversationRequest {
  query: {
    order: Order,
    sort: SortBy
  },
}

type ListConversationResponse = Paginated<ConversationObjectWithoutParts>
//
export enum RedactConversationPartType {
  CONVERSATION_PART = 'conversation_part',
  SOURCE = 'source'
}

interface RedactConversationPartRequest {
  data: {
    type: RedactConversationPartType,
    conversation_id: string,
    conversation_part_id?: string,
    source_id?: string,
  }
}
