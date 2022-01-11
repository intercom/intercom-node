import { JavascriptObject, Paginated, Timestamp } from '../common/common.types';
import { SegmentObject } from '../segment/segment.types';
import { TagObject } from '../tag/tag.types';

export interface CompanyObject {
    type: 'company';
    company_id: string;
    id: string;
    app_id: string;
    name: string;
    remote_created_at: Timestamp;
    created_at: Timestamp;
    updated_at: Timestamp;
    last_request_at: Timestamp;
    monthly_spend: number;
    session_count: number;
    user_count: number;
    size: number;
    website: string;
    industry: string;
    tags: {
        type: 'tag.list';
        tags: TagObject;
    };
    segments: {
        type: 'segment.list';
        segments: SegmentObject;
    };
    plan: PlanObject;
    custom_attributes: JavascriptObject;
}

export interface PlanObject {
    type: 'plan';
    id: string;
    name: string;
}

export type ListCompaniesResponse = Paginated<CompanyObject>;
