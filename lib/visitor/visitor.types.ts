import { JavascriptObject, SegmentObject, TagObject, Timestamp } from '..';

export type VisitorObject = {
    type: 'visitor';
    id: string;
    created_at: Timestamp;
    updated_at: Timestamp;
    user_id: string;
    name: string;
    custom_attributes: JavascriptObject;
    last_request_at: Timestamp;
    avatar: string | { url: string };
    unsubscribed_from_emails: boolean;
    location_data: JavascriptObject;
    social_profiles: JavascriptObject[];
    segments: SegmentObject[];
    tags: TagObject[];
};
