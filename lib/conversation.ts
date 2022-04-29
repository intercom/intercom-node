import Client from './client';
import {
    StringifiedTimestamp,
    GenericSearchFilters,
    Order,
    PaginatedBase,
} from './common/common.types';
import {
    ContactType,
    ConversationObject,
    ConversationObjectWithoutParts,
} from './conversation/conversation.types';
import { MessageObject } from './message/message.types';

export default class Conversation {
    public readonly baseUrl = 'conversations';

    constructor(private readonly client: Client) {
        this.client = client;
    }
    create({ userId, body, subject }: CreateConversationData) {
        const requestData: CreateConversationRequest = {
            from: {
                id: userId,
                type: 'user',
            },
            body,
            subject,
        };
        return this.client.post<MessageObject>({
            url: `/${this.baseUrl}`,
            data: requestData,
        });
    }
    find({ id, inPlainText }: RetrieveConversationData) {
        const params = inPlainText
            ? {
                  display_as: 'plaintext',
              }
            : undefined;

        return this.client.get<ConversationObject>({
            url: `/${this.baseUrl}/${id}`,
            params,
        });
    }
    update({ id, markRead, customAttributes }: UpdateConversationData) {
        const data: UpdateConversationRequest = {
            read: markRead,
            custom_attributes: customAttributes,
        };

        return this.client.put<ConversationObject>({
            url: `/${this.baseUrl}/${id}`,
            data,
        });
    }
    replyByIdAsUser({
        id,
        body,
        intercomUserId,
        userId,
        email,
        attachmentUrls,
    }: ReplyByIdAsUserData) {
        const data: ReplyToConversationAsUser = {
            message_type: ReplyToConversationMessageType.COMMENT,
            type: ReplyToConversationUserType.USER,
            body,
            intercom_user_id: intercomUserId,
            user_id: userId,
            email: email,
            attachment_urls: attachmentUrls,
        };
        return this.client.post<ConversationObject>({
            url: `/${this.baseUrl}/${id}/reply`,
            data,
        });
    }
    replyByIdAsAdmin({
        id,
        adminId,
        messageType,
        body,
        attachmentUrls,
    }: ReplyByIdAsAdminData) {
        const data: ReplyToConversationAsAdmin = {
            admin_id: adminId,
            message_type: messageType,
            type: ReplyToConversationUserType.ADMIN,
            body,
            attachment_urls: attachmentUrls,
        };
        return this.client.post<ConversationObject>({
            url: `/${this.baseUrl}/${id}/reply`,
            data,
        });
    }
    replyByLastAsUser({
        body,
        intercomUserId,
        userId,
        email,
        attachmentUrls,
    }: ReplyByLastAsUserData) {
        const data: ReplyToConversationAsUser = {
            message_type: ReplyToConversationMessageType.COMMENT,
            type: ReplyToConversationUserType.USER,
            body,
            intercom_user_id: intercomUserId,
            user_id: userId,
            email: email,
            attachment_urls: attachmentUrls,
        };
        return this.client.post<ConversationObject>({
            url: `/${this.baseUrl}/last/reply`,
            data,
        });
    }
    replyByLastAsAdmin({
        adminId,
        messageType,
        body,
        attachmentUrls,
    }: ReplyByLastAsAdminData) {
        const data: ReplyToConversationAsAdmin = {
            admin_id: adminId,
            message_type: messageType,
            type: ReplyToConversationUserType.ADMIN,
            body,
            attachment_urls: attachmentUrls,
        };
        return this.client.post<ConversationObject>({
            url: `/${this.baseUrl}/last/reply`,
            data,
        });
    }
    assign({
        id,
        type,
        adminId,
        assigneeId,
        body,
        withRunningAssignmentRules = false,
    }: AssignConversationData) {
        const url = `/${this.baseUrl}/${id}${
            withRunningAssignmentRules ? '/run_assignment_rules' : ''
        }/parts`;
        const data: AssignConversationRequest | undefined =
            withRunningAssignmentRules
                ? undefined
                : {
                      message_type: AssignToConversationMessageType.ASSIGNMENT,
                      type,
                      admin_id: adminId,
                      assignee_id: assigneeId,
                      body,
                  };

        return this.client.post<ConversationObject>({ url, data });
    }
    snooze({ id, adminId, snoozedUntil }: SnoozeConversationData) {
        const data: SnoozeConversationRequest = {
            message_type: SnoozeConversationMessageType.SNOOZED,
            admin_id: adminId,
            snoozed_until: snoozedUntil,
        };

        return this.client.post<ConversationObject>({
            url: `/${this.baseUrl}/${id}/reply`,
            data,
        });
    }
    close({ id, adminId, body }: CloseConversationData) {
        const data: CloseConversationRequest = {
            message_type: CloseConversationMessageType.CLOSED,
            type: CloseConversationType.ADMIN,
            admin_id: adminId,
            body,
        };

        return this.client.post<ConversationObject>({
            url: `/${this.baseUrl}/${id}/parts`,
            data,
        });
    }
    open({ id, adminId }: OpenConversationData) {
        const data: OpenConversationRequest = {
            message_type: OpenConversationMessageType.OPEN,
            admin_id: adminId,
        };

        return this.client.post<ConversationObject>({
            url: `/${this.baseUrl}/${id}/parts`,
            data,
        });
    }
    attachContactAsAdmin({
        id,
        adminId,
        customer,
    }: AttachContactToConversationAsAdminData) {
        const data: AttachContactToConversationAdminRequest = {
            admin_id: adminId,
            customer: {
                intercom_user_id: customer.intercomUserId,
                user_id: customer.userId,
                email: customer.email,
            },
        };

        return this.client.post<AttachContactToConversationResponse>({
            url: `/${this.baseUrl}/${id}/customers`,
            data,
        });
    }
    attachContactAsContact({
        id,
        userId,
        intercomUserId,
        email,
        customer,
    }: AttachContactToConversationAsContactData) {
        const data: AttachContactToConversationContactRequest = {
            intercom_user_id: intercomUserId,
            user_id: userId,
            email,
            customer: {
                intercom_user_id: customer.intercomUserId,
                user_id: customer.userId,
                email: customer.email,
            },
        };

        return this.client.post<AttachContactToConversationResponse>({
            url: `/${this.baseUrl}/${id}/customers`,
            data,
        });
    }
    detachContactAsAdmin({
        conversationId,
        contactId,
        adminId,
    }: DetachContactFromConversationData) {
        const data: DetachContactFromConversationRequest = {
            admin_id: adminId,
        };

        return this.client.delete<ConversationObject>({
            url: `/${this.baseUrl}/${conversationId}/customers/${contactId}`,
            data,
        });
    }
    search({ data }: SearchConversationRequest) {
        return this.client.post<SearchConversationResponse>({
            url: `/${this.baseUrl}/search`,
            data,
        });
    }
    list({ order, sort, page, perPage: per_page }: ListConversationData) {
        const params = { order, sort, page, per_page };

        return this.client.get<ListConversationResponse>({
            url: `/${this.baseUrl}`,
            params,
        });
    }
    redactConversationPart({
        conversationId,
        conversationPartId,
        sourceId,
        type,
    }: RedactConversationPartData) {
        const data: RedactConversationPartRequest = {
            conversation_id: conversationId,
            conversation_part_id: conversationPartId,
            source_id: sourceId,
            type,
        };

        return this.client.post<Conversation>({
            url: `/${this.baseUrl}/redact`,
            data,
        });
    }
}

interface CreateConversationRequest {
    from: {
        type: 'user' | string;
        id: string;
    };
    body: string;
    subject?: string;
}

interface CreateConversationData {
    userId: string;
    body: string;
    subject?: string;
}
//
interface RetrieveConversationData {
    id: string;
    inPlainText?: boolean;
}
//
interface UpdateConversationRequest {
    custom_attributes?: object;
    read?: boolean;
}
interface UpdateConversationData {
    id: string;
    markRead?: boolean;
    customAttributes?: object;
}
//
export enum ReplyToConversationMessageType {
    COMMENT = 'comment',
    NOTE = 'note',
}
export enum ReplyToConversationUserType {
    ADMIN = 'admin',
    USER = 'user',
}

interface ReplyToConversationAsUser {
    message_type: ReplyToConversationMessageType;
    type: ReplyToConversationUserType;
    body: string;
    // refactor to CustomerObject
    intercom_user_id?: string;
    user_id?: string;
    email?: string;
    attachment_urls?: Array<string>;
}

interface ReplyToConversationAsAdmin {
    admin_id: string;
    message_type: ReplyToConversationMessageType;
    type: ReplyToConversationUserType;
    body: string;
    attachment_urls?: Array<string>;
}

interface ReplyByIdAsUserData {
    id: string;
    body: string;
    intercomUserId?: string;
    userId?: string;
    email?: string;
    attachmentUrls?: Array<string>;
}

interface ReplyByIdAsAdminData {
    id: string;
    adminId: string;
    messageType: ReplyToConversationMessageType;
    body: string;
    attachmentUrls?: Array<string>;
}

type ReplyByLastAsUserData = Omit<ReplyByIdAsUserData, 'id'>;

type ReplyByLastAsAdminData = Omit<ReplyByIdAsAdminData, 'id'>;
//
export enum AssignToConversationMessageType {
    ASSIGNMENT = 'assignment',
}
export enum AssignToConversationUserType {
    ADMIN = 'admin',
    TEAM = 'team',
}

interface AssignConversationRequest {
    message_type: AssignToConversationMessageType;
    type?: AssignToConversationUserType;
    admin_id?: string;
    assignee_id?: string | 0;
    body?: string;
}

interface AssignConversationData {
    id: string;
    type?: AssignToConversationUserType;
    adminId?: string;
    assigneeId?: string | 0;
    body?: string;
    withRunningAssignmentRules?: boolean;
}
//
export enum SnoozeConversationMessageType {
    SNOOZED = 'snoozed',
}

interface SnoozeConversationRequest {
    message_type: SnoozeConversationMessageType;
    admin_id: string;
    snoozed_until: StringifiedTimestamp;
}

interface SnoozeConversationData {
    id: string;
    adminId: string;
    snoozedUntil: StringifiedTimestamp;
}
//
export enum CloseConversationMessageType {
    CLOSED = 'close',
}
export enum CloseConversationType {
    ADMIN = 'admin',
}

interface CloseConversationRequest {
    message_type: CloseConversationMessageType;
    type: CloseConversationType;
    admin_id: string;
    body?: string;
}

interface CloseConversationData {
    id: string;
    adminId: string;
    body?: string;
}
//
export enum OpenConversationMessageType {
    OPEN = 'open',
}

interface OpenConversationRequest {
    message_type: OpenConversationMessageType;
    admin_id: string;
}

interface OpenConversationData {
    id: string;
    adminId: string;
}
//
interface CustomerObject {
    intercom_user_id?: string;
    user_id?: string;
    email?: string;
}

interface NormalizedCustomerObject {
    intercomUserId?: string;
    userId?: string;
    email?: string;
}

interface AttachContactToConversationAdminRequest {
    admin_id: string;
    customer: CustomerObject;
}

interface AttachContactToConversationContactRequest extends CustomerObject {
    customer: CustomerObject;
}

interface AttachContactToConversationAsAdminData {
    id: string;
    adminId: string;
    customer: NormalizedCustomerObject;
}

interface AttachContactToConversationAsContactData
    extends NormalizedCustomerObject {
    id: string;
    customer: NormalizedCustomerObject;
}

interface AttachContactToConversationResponse {
    customers: Array<{ id: string; type: ContactType }>;
}
//
interface DetachContactFromConversationRequest {
    admin_id: string;
}

interface DetachContactFromConversationData {
    conversationId: string;
    contactId: string;
    adminId: string;
}
//
export enum SearchConversationOrderBy {
    ASC = 'ascending',
    DESC = 'descending',
}
interface SearchConversationPagination {
    pagination: {
        per_page: number;
        starting_after?: string;
    };
}

interface SearchConversationOrder {
    sort: {
        field: string;
        order: SearchConversationOrderBy;
    };
}

interface SearchConversationRequest {
    data: GenericSearchFilters &
        Partial<SearchConversationPagination> &
        Partial<SearchConversationOrder>;
}

type SearchConversationResponse = PaginatedBase & {
    conversations: ConversationObject[];
};
//
export enum SortBy {
    CreatedAt = 'created_at',
    UpdatedAt = 'updated_at',
    WaitingSince = 'waiting_since',
}

interface ListConversationData {
    order?: Order;
    sort?: SortBy;
    page?: number;
    perPage?: number;
}

type ListConversationResponse = PaginatedBase & {
    conversations: ConversationObjectWithoutParts[];
};
//
export enum RedactConversationPartType {
    CONVERSATION_PART = 'conversation_part',
    SOURCE = 'source',
}

interface RedactConversationPartRequest {
    type: RedactConversationPartType;
    conversation_id: string;
    conversation_part_id?: string;
    source_id?: string;
}

interface RedactConversationPartData {
    type: RedactConversationPartType;
    conversationId: string;
    conversationPartId?: string;
    sourceId?: string;
}
