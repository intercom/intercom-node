import { AdminObject } from '../admin/admin.types';
import { JavascriptObject, Seconds, Timestamp } from '../common/common.types';

export interface ConversationObject {
    type: 'conversation';
    id: string;
    created_at: Timestamp;
    updated_at: Timestamp;
    source: SourceObject;
    contacts: Array<ContactObject>;
    teammates: Array<TeammateObject>;
    title: string;
    admin_assignee_id: number;
    team_assignee_id: number;
    custom_attributes: JavascriptObject;
    topics: JavascriptObject;
    open: boolean;
    state: ConversationState;
    read: boolean;
    waiting_since: Timestamp;
    snoozed_until: Timestamp;
    tags: JavascriptObject[];
    first_contact_reply: FirstContactReplyObject;
    priority: ConversationPriority;
    sla_applied: SLAObject;
    conversation_rating: ConversationRatingObject;
    statistics: StatisticsObject;
    conversation_parts: ConversationPartObject;
}

export type ConversationObjectWithoutParts = Exclude<
    ConversationObject,
    'conversation_parts'
>;

interface SourceObject {
    type: ConversationSourceType;
    id: string;
    delivered_as: string;
    subject?: string;
    body: string;
    author: Author;
    attachments: JavascriptObject[];
    url: string;
    redacted: boolean;
}

interface ContactObject {
    type: ContactType;
    id: string;
}

interface TeammateObject {
    type: 'admin';
    id: string;
}

interface FirstContactReplyObject {
    type: ConversationSourceType;
    url: string;
    created_at: Timestamp;
}

interface ConversationRatingObject {
    rating: FromOneToFiveRating;
    remark?: string;
    created_at: Timestamp;
    contact: ContactObject;
    teammate: TeammateObject;
}

interface SLAObject {
    sla_name: string;
    sla_status: SLAStatus;
}

interface StatisticsObject {
    time_to_assignment: Seconds;
    time_to_admin_reply: Seconds;
    time_to_first_close: Seconds;
    time_to_last_close: Seconds;
    median_time_to_reply: Seconds;
    first_contact_reply_at: Seconds;
    first_assignment_at: Seconds;
    first_admin_reply_at: Seconds;
    first_close_at: Seconds;
    last_assignment_at: Seconds;
    last_assignment_admin_reply_at: Seconds;
    last_contact_reply_at: Seconds;
    last_admin_reply_at: Seconds;
    last_close_at: Seconds;
    last_closed_by: AdminObject;
    count_reopens: number;
    count_assignments: number;
    count_conversations_parts: number;
}

interface ConversationPartObject {
    type: 'conversation_part.list';
    conversation_parts: {
        id: string;
        part_type: string;
        body: string;
        created_at: Timestamp;
        updated_at: Timestamp;
        notified_at: Timestamp;
        assigned_to: string | null;
        author: Author;
        attachments: JavascriptObject[];
        redacted: boolean;
    }[];
}

enum ConversationState {
    OPEN = 'open',
    CLOSED = 'closed',
    SNOOZED = 'snoozed',
}

enum ConversationPriority {
    PRIORITY = 'priority',
    NOT_PRIORITY = 'not_priority',
}

enum ConversationSourceType {
    CONVERASTION = 'conversation',
    PUSH = 'push',
    FACEBOOK = 'facebook',
    TWITTER = 'twitter',
    EMAIL = 'email',
}

export enum ContactType {
    USER = 'user',
    LEAD = 'lead',
}

enum FromOneToFiveRating {
    ONE = 1,
    TWO = 2,
    THREE = 3,
    FOUR = 4,
    FIVE = 5,
}

enum SLAStatus {
    HIT = 'hit',
    MISSED = 'missed',
    CANCELLED = 'cancelled',
    ACTIVE = 'active',
}

interface Author {
    id: string;
    type: AuthorType;
}

enum AuthorType {
    USER = 'user',
    ADMIN = 'admin',
    BOT = 'bot',
    TEAM = 'team',
}
