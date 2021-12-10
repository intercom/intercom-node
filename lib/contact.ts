import { Client } from '.';
import { GenericSearchFilters, Leaves, Paginated } from './common/common.types';
import { ListCompaniesResponse } from './company/company.types';
import { ContactObject, Role } from './contact/contact.types';
import { SegmentObject } from './segment/segment.types';
import { TagObject } from './tag/tag.types';
import { SubscriptionObject } from './subscription/subscription.types';

export default class Contact {
  private contactBaseUrl = 'contacts';

  constructor(private readonly client: Client) {
    this.client = client;
  }
  createUser({externalId,
    phone,
    name,
    avatar,
    signedUpAt,
    lastSeenAt,
    ownerId,
    isUnsubscribedFromEmails,
    customAttributes}: CreateUserData) {
    const requestData: CreateContactRequest = {
      role: Role.USER,
      external_id: externalId,
      phone,
      name,
      avatar,
      signed_up_at: signedUpAt,
      last_seen_at: lastSeenAt,
      owner_id: ownerId,
      unsubscribed_from_emails: isUnsubscribedFromEmails,
      custom_attributes: customAttributes,
    }

    return this.client.post<ContactObject>({url: `/${this.contactBaseUrl}`, data: requestData});
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
      unsubscribed_from_emails: data?.isUnsubscribedFromMails,
      custom_attributes: data?.customAttributes,
    }
    return this.client.post<ContactObject>({url: `/${this.contactBaseUrl}`, data: requestData});
  }
  find({id}: RetrieveContactData) {
    return this.client.get<ContactObject>({url: `/${this.contactBaseUrl}/${id}`});
  }
  update({id,
    role,
    externalId,
    phone,
    name,
    avatar,
    signedUpAt,
    lastSeenAt,
    ownerId,
    isUnsubscribedFromMails,
    customAttributes}: UpdateContactData) {
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
    }

    return this.client.put<ContactObject>({url: `/${this.contactBaseUrl}/${id}`, data});
  }
  mergeLeadInUser({leadId, userId}: MergeLeadInUserContactData) {
    const data: MergeLeadInUserContactRequest = {
      from: leadId,
      into: userId
    }

    return this.client.post<ContactObject>({url: `/${this.contactBaseUrl}/merge`, data});
  }
  search({data}: SearchContactRequest){
    return this.client.post<SearchContactResponse>({url: `/${this.contactBaseUrl}/search`, data});
  }
  list() {
    return this.client.get<ListContactsResponse>({url: `/${this.contactBaseUrl}`});
  }
  delete({id}: DeleteContactData) {
    return this.client.delete<DeleteContactResponse>({url: `/${this.contactBaseUrl}/${id}`});
  }
  archive({id}: ArchiveContactData) {
    return this.client.post<ArchiveContactResponse>({url: `/${this.contactBaseUrl}/${id}/archive`});
  }
  unarchive({id}: UnarchiveContactData) {
    return this.client.post<UnarchiveContactResponse>({url: `/${this.contactBaseUrl}/${id}/unarchive`});
  }
  listAttachedCompanies({id}: RetrieveContactData) {
    return this.client.get<ListCompaniesResponse>({url: `/${this.contactBaseUrl}/${id}/companies`});
  }
  listAttachedTags({id}: RetrieveContactData) {
    return this.client.get<ListAttachedTagsResponse>({url: `/${this.contactBaseUrl}/${id}/tags`});
  }
  listAttachedSegments({id}: RetrieveContactData) {
    return this.client.get<ListAttachedSegmentsResponse>({url: `/${this.contactBaseUrl}/${id}/segments`});
  }
  listAttachedEmailSubscriptions({id}: RetrieveContactData) {
    return this.client.get<ListAttachedEmailSubscriptionsResponse>({url: `/${this.contactBaseUrl}/${id}/subscriptions`});
  }
}

type CreateContactRequest = Pick<ContactObject, 'role'> & Partial<Pick<ContactObject,  'external_id' | 'email' | 'phone' | 'name' | 'avatar' | 'signed_up_at' | 'last_seen_at' | 'owner_id' | 'unsubscribed_from_emails' | 'custom_attributes'>>;

interface CreateUserData {
  externalId?: CreateContactRequest['external_id'],
  phone?: CreateContactRequest['phone'],
  name?: CreateContactRequest['name'],
  avatar?: CreateContactRequest['avatar'],
  signedUpAt?: CreateContactRequest['signed_up_at'],
  lastSeenAt?: CreateContactRequest['last_seen_at'],
  ownerId?: CreateContactRequest['owner_id'],
  isUnsubscribedFromEmails?: CreateContactRequest['unsubscribed_from_emails'],
  customAttributes?: CreateContactRequest['custom_attributes']
}

interface CreateLeadData {
  phone?: CreateContactRequest['phone'],
  name?: CreateContactRequest['name'],
  avatar?: CreateContactRequest['avatar'],
  signedUpAt?: CreateContactRequest['signed_up_at'],
  lastSeenAt?: CreateContactRequest['last_seen_at'],
  ownerId?: CreateContactRequest['owner_id'],
  isUnsubscribedFromMails?: CreateContactRequest['unsubscribed_from_emails'],
  customAttributes?: CreateContactRequest['custom_attributes']
}
//
interface RetrieveContactData {
  id: string,
}
//
type UpdateContactRequest = Partial<Pick<ContactObject, 'role' | 'external_id' | 'email' | 'phone' | 'name' | 'avatar' | 'signed_up_at' | 'last_seen_at' | 'owner_id' | 'unsubscribed_from_emails' | 'custom_attributes'>>;

type UpdateContactData = {
  id: string,
  role?: UpdateContactRequest['role'],
  externalId?: UpdateContactRequest['external_id'],
  phone?: UpdateContactRequest['phone'],
  name?: UpdateContactRequest['name'],
  avatar?: UpdateContactRequest['avatar'],
  signedUpAt?: UpdateContactRequest['signed_up_at'],
  lastSeenAt?: UpdateContactRequest['last_seen_at'],
  ownerId?: UpdateContactRequest['owner_id'],
  isUnsubscribedFromMails?: UpdateContactRequest['unsubscribed_from_emails'],
  customAttributes?: UpdateContactRequest['custom_attributes']
}
//
interface DeleteContactData {
  id: string
}

interface DeleteContactResponse {
  id: string,
  object: ContactObject,
  deleted: boolean,
}
//
interface ArchiveContactData {
  id: string
}

interface ArchiveContactResponse {
  id: string,
  object: ContactObject,
  archived: boolean,
}
//
type UnarchiveContactData = ArchiveContactData;

type UnarchiveContactResponse = ArchiveContactResponse;
//
interface MergeLeadInUserContactRequest {
  from: string,
  into: string
}

interface MergeLeadInUserContactData {
  leadId: string,
  userId: string
}
//
export enum SearchContactOrderBy {
  ASC = "ascending",
  DESC = "descending"
}
interface SearchContactPagination {
  pagination: {
    per_page: number,
    starting_after?: string,
  }
}

interface SearchContactOrder {
  sort: {
    field: Leaves<ContactObject>,
    order: SearchContactOrderBy,
  }
}

interface SearchContactRequest {
  data: GenericSearchFilters<ContactObject> & Partial<SearchContactPagination> & Partial<SearchContactOrder>;
}

interface SearchContactResponse {
  type: 'list',
  data: ContactObject[],
  total_count: number,
  pages: {
    type: 'pages',
    next?: {
        page: number,
        starting_after?: string,
    },
    page?: number,
    per_page: number,
    total_pages: number
  ,}
}
//
// TO-DO: Refactor to generic Paginated
type ListContactsResponse = Paginated & {data: Array<ContactObject>};
//
type ListAttachedTagsResponse = {
  type: string,
  tags: Array<TagObject>
}
//
type ListAttachedSegmentsResponse = {
  type: string,
  data: Array<SegmentObject>
}
//
type ListAttachedEmailSubscriptionsResponse = {
  type: string,
  data: Array<SubscriptionObject>
}
