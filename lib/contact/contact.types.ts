import { JavascriptObject, Role, Timestamp } from '../common/common.types';

export interface ContactObject {
    type: 'contact';
    id: string;
    workspace_id: string;
    external_id: string;
    role: Role;
    email: string;
    phone: string;
    name: string;
    avatar: string;
    owner_id: number;
    social_profiles: Array<SocialProfileObject>;
    has_hard_bounced: boolean;
    marked_email_as_spam: boolean;
    unsubscribed_from_emails: boolean;
    created_at: Timestamp;
    updated_at: Timestamp;
    signed_up_at: Timestamp;
    last_seen_at: Timestamp;
    last_replied_at: Timestamp;
    last_contacted_at: Timestamp;
    last_email_opened_at: Timestamp;
    last_email_clicked_at: Timestamp;
    language_override: string;
    browser: string;
    browser_version: string;
    browser_language: string;
    os: string;
    location: LocationObject;
    android_app_name: string | null;
    android_app_version: string | null;
    android_device: string | null;
    android_os_version: string | null;
    android_sdk_version: string | null;
    android_last_seen_at: Timestamp | null;
    ios_app_name: string | null;
    ios_app_version: string | null;
    ios_device: string | null;
    ios_os_version: string | null;
    ios_sdk_version: string | null;
    ios_last_seen_at: Timestamp | null;
    custom_attributes: JavascriptObject;
    tags: AddressableList;
    notes: AddressableList;
    companies: AddressableList;
    referrer: string;
    utm_campaign: string | null;
    utm_content: string | null;
    utm_medium: string | null;
    utm_source: string | null;
    utm_term: string | null;
}

interface LocationObject {
    type: 'location';
    country: string;
    region: string;
    city: string;
    country_code: string;
    continent_code: string;
}

interface SocialProfileObject {
    type: 'social_profile';
    name: string;
    url: string;
}

interface AddressableList {
    type: 'list';
    data: Array<AddressableObject>;
    url: string;
    total_count: number;
    has_more: boolean;
}

interface AddressableObject {
    type: 'company' | 'note' | 'tag';
    id: string;
    url: string;
}
