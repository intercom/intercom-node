export type AppTotalCountResponse = {
    type: 'count.hash';
    company: CountObject;
    user: CountObject;
    lead: CountObject;
    tag: CountObject;
    segment: CountObject;
};

export type ConversationCountResponse = {
    type: 'count';
    conversation: {
        assigned: number;
        closed: number;
        open: number;
        unassigned: number;
    };
};

export type AdminConversationCountResponse = {
    type: 'count';
    conversation: {
        admin: {
            id: string;
            name: string;
            open: number;
            closed: number;
        }[];
    };
};

export type CompanyCountResponse = {
    type: 'count';
    company: CountObject;
};

export type CompanySegmentCountResponse = {
    type: 'count';
    company: { segment: GenericCountObject[] };
};

export type CompanyTagCountResponse = {
    type: 'count';
    company: { tag: GenericCountObject[] };
};

export type CompanyUserCountResponse = {
    type: 'count';
    company: {
        user: GenericCountObject & { remote_company_id: string }[];
    };
};

export type UserCountResponse = {
    type: 'count';
    user: {
        user: CountObject;
    };
};

export type UserSegmentCountResponse = {
    type: 'count';
    company: { segment: GenericCountObject[] };
};

export type UserTagCountResponse = {
    type: 'count';
    company: { tag: GenericCountObject[] };
};

export type CountObject = {
    count: number;
};

export enum CountType {
    CONVERSATION = 'conversation',
    USER = 'user',
    COMPANY = 'company',
}

export enum CountEntity {
    ADMIN = 'admin',
    SEGMENT = 'segment',
    TAG = 'tag',
    USER = 'user',
}

type GenericCountObject = {
    [title: string]: number;
};
