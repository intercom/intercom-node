import { Timestamp } from '../common/common.types';

export interface SummaryEventObject {
    name: string;
    first: Date | string;
    last: Date | string;
    count: number;
    description: string | null;
}

export interface EventObject {
    event_name: string;
    created_at: Timestamp;
    user_id?: string;
    id?: string;
    email?: string;
    metadata?: Metadata;
}

export interface Metadata {
    [x: string]: string | number | RichLink | MonetaryAmount;
}

type RichLink = {
    url: string;
    value: string;
};

type MonetaryAmount = { amount: number; currency: string };
