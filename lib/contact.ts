import { Client } from '.';
import { ContactObject } from './contact/contact.types';
import {
    GenericDeletedResponse,
    GenericSearchFilters,
    Paginated,
    Role,
} from './common/common.types';
import { ListCompaniesResponse } from './company/company.types';
import { SegmentObject } from './segment/segment.types';
import { TagObject } from './tag/tag.types';
import { SubscriptionObject } from './subscription/subscription.types';

export default class Contact {
    public readonly baseUrl = 'contacts';

    constructor(private readonly client: Client) {
        this.client = client;
    }
    createUser({
        externalId,
        email,
        phone,
        name,
        avatar,
        signedUpAt,
        lastSeenAt,
        ownerId,
        isUnsubscribedFromEmails,
        customAttributes,
    }: CreateUserData) {
        const requestData: CreateContactRequest = {
            role: Role.USER,
            external_id: externalId,
            email,
            phone,
            name,
            avatar,
            signed_up_at: signedUpAt,
            last_seen_at: lastSeenAt,
            owner_id: ownerId,
            unsubscribed_from_emails: isUnsubscribedFromEmails,
            custom_attributes: customAttributes,
        };

        return this.client.post<ContactObject>({
            url: `/${this.baseUrl}`,
            data: requestData,
        });
    }
    createLead(data?: CreateLeadData) {
        const requestData: CreateContactRequest = {
            role: Role.LEAD,
            phone: data?.phone,
            name: data?.name,
            avatar: data?.avatar,
            signed_up_at: data?.signedUpAt,
            last_seen_at: data?.lastSeenAt,
            owner_id: data?.ownerId,
            unsubscribed_from_emails: data?.isUnsubscribedFromEmails,
            custom_attributes: data?.customAttributes,
        };
        return this.client.post<ContactObject>({
            url: `/${this.baseUrl}`,
            data: requestData,
        });
    }
    find({ id }: RetrieveContactData) {
        return this.client.get<ContactObject>({
            url: `/${this.baseUrl}/${id}`,
        });
    }
    update({
        id,
        role,
        externalId,
        phone,
        name,
        avatar,
        signedUpAt,
        lastSeenAt,
        ownerId,
        isUnsubscribedFromMails,
        customAttributes,
    }: UpdateContactData) {
        const data: UpdateContactRequest = {
            role,
            external_id: externalId,
            phone,
            name,
            avatar,
            signed_up_at: signedUpAt,
            last_seen_at: lastSeenAt,
            owner_id: ownerId,
            unsubscribed_from_emails: isUnsubscribedFromMails,
            custom_attributes: customAttributes,
        };

        return this.client.put<ContactObject>({
            url: `/${this.baseUrl}/${id}`,
            data,
        });
    }
    mergeLeadInUser({ leadId, userId }: MergeLeadInUserContactData) {
        const data: MergeLeadInUserContactRequest = {
            from: leadId,
            into: userId,
        };

        return this.client.post<ContactObject>({
            url: `/${this.baseUrl}/merge`,
            data,
        });
    }
    search({ data }: SearchContactRequest) {
        return this.client.post<SearchContactResponse>({
            url: `/${this.baseUrl}/search`,
            data,
        });
    }
    list({ perPage, startingAfter }: ListAllContactsData) {
        const params: ListAllContactsRequest = {
            per_page: perPage,
            starting_after: startingAfter,
        };
        return this.client.get<ListContactsResponse>({
            url: `/${this.baseUrl}`,
            params,
        });
    }
    delete({ id }: DeleteContactData) {
        return this.client.delete<DeleteContactResponse>({
            url: `/${this.baseUrl}/${id}`,
        });
    }
    archive({ id }: ArchiveContactData) {
        return this.client.post<ArchiveContactResponse>({
            url: `/${this.baseUrl}/${id}/archive`,
        });
    }
    unarchive({ id }: UnarchiveContactData) {
        return this.client.post<UnarchiveContactResponse>({
            url: `/${this.baseUrl}/${id}/unarchive`,
        });
    }
    listAttachedCompanies({ id, perPage, page }: ListAttachedCompaniesData) {
        const params = {
            per_page: perPage,
            page,
        };
        return this.client.get<ListCompaniesResponse>({
            url: `/${this.baseUrl}/${id}/companies`,
            params,
        });
    }
    listAttachedTags({ id }: RetrieveContactData) {
        return this.client.get<ListAttachedTagsResponse>({
            url: `/${this.baseUrl}/${id}/tags`,
        });
    }
    listAttachedSegments({ id }: RetrieveContactData) {
        return this.client.get<ListAttachedSegmentsResponse>({
            url: `/${this.baseUrl}/${id}/segments`,
        });
    }
    listAttachedEmailSubscriptions({ id }: RetrieveContactData) {
        return this.client.get<ListAttachedEmailSubscriptionsResponse>({
            url: `/${this.baseUrl}/${id}/subscriptions`,
        });
    }
}

type CreateContactRequest = Pick<ContactObject, 'role'> &
    Partial<
        Pick<
            ContactObject,
            | 'external_id'
            | 'email'
            | 'phone'
            | 'name'
            | 'avatar'
            | 'signed_up_at'
            | 'last_seen_at'
            | 'owner_id'
            | 'unsubscribed_from_emails'
            | 'custom_attributes'
        >
    >;

interface CreateUserDataBase {
    phone?: CreateContactRequest['phone'];
    name?: CreateContactRequest['name'];
    avatar?: CreateContactRequest['avatar'];
    signedUpAt?: CreateContactRequest['signed_up_at'];
    lastSeenAt?: CreateContactRequest['last_seen_at'];
    ownerId?: CreateContactRequest['owner_id'];
    isUnsubscribedFromEmails?: CreateContactRequest['unsubscribed_from_emails'];
    customAttributes?: CreateContactRequest['custom_attributes'];
}

interface CreateUserData extends CreateUserDataBase {
    email?: string;
    externalId?: string;
}

type CreateLeadData = CreateUserDataBase;
//
interface RetrieveContactData {
    id: string;
}
//
type UpdateContactRequest = Partial<
    Pick<
        ContactObject,
        | 'role'
        | 'external_id'
        | 'email'
        | 'phone'
        | 'name'
        | 'avatar'
        | 'signed_up_at'
        | 'last_seen_at'
        | 'owner_id'
        | 'unsubscribed_from_emails'
        | 'custom_attributes'
    >
>;

type UpdateContactData = {
    id: string;
    role?: UpdateContactRequest['role'];
    externalId?: UpdateContactRequest['external_id'];
    phone?: UpdateContactRequest['phone'];
    name?: UpdateContactRequest['name'];
    avatar?: UpdateContactRequest['avatar'];
    signedUpAt?: UpdateContactRequest['signed_up_at'];
    lastSeenAt?: UpdateContactRequest['last_seen_at'];
    ownerId?: UpdateContactRequest['owner_id'];
    isUnsubscribedFromMails?: UpdateContactRequest['unsubscribed_from_emails'];
    customAttributes?: UpdateContactRequest['custom_attributes'];
};
//
interface DeleteContactData {
    id: string;
}

type DeleteContactResponse = GenericDeletedResponse<'contact'>;
//
interface ArchiveContactData {
    id: string;
}

interface ArchiveContactResponse {
    id: string;
    object: ContactObject;
    archived: boolean;
}
//
type UnarchiveContactData = ArchiveContactData;

type UnarchiveContactResponse = ArchiveContactResponse;
//
interface MergeLeadInUserContactRequest {
    from: string;
    into: string;
}

interface MergeLeadInUserContactData {
    leadId: string;
    userId: string;
}
//
export enum SearchContactOrderBy {
    ASC = 'ascending',
    DESC = 'descending',
}
interface SearchContactPagination {
    pagination: {
        per_page: number;
        starting_after?: string;
    };
}

interface SearchContactOrder {
    sort: {
        field: string;
        order: SearchContactOrderBy;
    };
}

interface SearchContactRequest {
    data: GenericSearchFilters &
        Partial<SearchContactPagination> &
        Partial<SearchContactOrder>;
}

type SearchContactResponse = Paginated<ContactObject>;
//
interface ListAllContactsRequest {
    per_page?: number;
    starting_after?: string;
}

interface ListAllContactsData {
    perPage?: number;
    startingAfter?: string;
}

type ListContactsResponse = Paginated<ContactObject>;
//
type ListAttachedTagsResponse = {
    type: string;
    tags: Array<TagObject>;
};
//
type ListAttachedSegmentsResponse = {
    type: string;
    data: Array<SegmentObject>;
};
//
type ListAttachedEmailSubscriptionsResponse = {
    type: string;
    data: Array<SubscriptionObject>;
};
//
type ListAttachedCompaniesData = {
    id: string;
    perPage?: number;
    page?: number;
};
