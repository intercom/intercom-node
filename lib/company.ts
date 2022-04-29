import { Client } from '.';
import {
    PaginationParams,
    JavascriptObject,
    Order,
    Paginated,
    Timestamp,
    GenericDeletedResponse,
} from './common/common.types';
import { CompanyObject, ListCompaniesResponse } from './company/company.types';
import { ContactObject } from './contact/contact.types';
import Scroll from './scroll';
import { SegmentObject } from './segment/segment.types';
import { encodeParamsForURL } from './util/url';

export default class Company {
    public readonly baseUrl = 'companies';
    public readonly scroll: Scroll<Company>;

    constructor(private readonly client: Client) {
        this.client = client;
        this.scroll = new Scroll<Company>(this.client, this.baseUrl);
    }
    create({
        createdAt,
        companyId,
        name,
        monthlySpend,
        plan,
        size,
        website,
        industry,
        customAttributes,
    }: CreateCompanyData) {
        const data = {
            remote_created_at: createdAt,
            company_id: companyId,
            name,
            monthly_spend: monthlySpend,
            plan,
            size,
            website,
            industry,
            custom_attributes: customAttributes,
        };

        return this.client.post<CompanyObject>({
            url: `/${this.baseUrl}`,
            data,
        });
    }
    update({
        createdAt,
        companyId,
        name,
        monthlySpend,
        plan,
        size,
        website,
        industry,
        customAttributes,
    }: UpdateCompanyData) {
        const data = {
            remote_created_at: createdAt,
            name,
            monthly_spend: monthlySpend,
            plan,
            size,
            website,
            industry,
            custom_attributes: customAttributes,
        };

        return this.client.put<CompanyObject>({
            url: `/${this.baseUrl}/${companyId}`,
            data,
        });
    }
    find({ companyId, name }: FindCompanyData) {
        const query = {
            company_id: companyId,
            name,
        };

        return this.client.get<CompanyObject>({
            url: `/${this.baseUrl}`,
            params: encodeParamsForURL(
                query as Record<string, string | ReadonlyArray<string>>
            ),
        });
    }
    delete({ id }: DeleteCompanyData) {
        return this.client.delete<DeleteCompanyResponse>({
            url: `/${this.baseUrl}/${id}`,
        });
    }
    list({
        page,
        perPage: per_page,
        order,
        tagId: tag_id,
        segmentId: segment_id,
    }: ListCompaniesData) {
        const params = {
            page,
            per_page,
            order,
            tag_id,
            segment_id,
        };

        return this.client.get<ListCompaniesResponse>({
            url: `/${this.baseUrl}`,
            params,
        });
    }
    attachContact({ contactId, companyId }: AttachContactData) {
        const data = {
            id: companyId,
        };

        return this.client.post<CompanyObject>({
            url: `/${this.client.contacts.baseUrl}/${contactId}/${this.baseUrl}`,
            data,
        });
    }
    detachContact({ contactId, companyId }: DetachContactData) {
        return this.client.delete<CompanyObject>({
            url: `/${this.client.contacts.baseUrl}/${contactId}/${this.baseUrl}/${companyId}`,
        });
    }
    listAttachedContacts({
        companyId,
        page,
        perPage,
    }: ListAttachedContactsData) {
        const params = { page, perPage };

        return this.client.get<Paginated<ContactObject>>({
            url: `/${this.baseUrl}/${companyId}/${this.client.contacts.baseUrl}`,
            params,
        });
    }
    listAttachedSegments({ companyId }: ListAttachedSegmentsData) {
        return this.client.get<ListAttachedSegmentsResponse>({
            url: `/${this.baseUrl}/${companyId}/${this.client.segments.baseUrl}`,
        });
    }
}

interface CreateCompanyData {
    createdAt: Timestamp;
    companyId: string;
    name: string;
    monthlySpend: number;
    plan: string;
    size: number;
    website: string;
    industry: string;
    customAttributes: JavascriptObject;
}
//
type UpdateCompanyData = CreateCompanyData;
//
interface FindCompanyData {
    companyId?: string;
    name?: string;
}
//
interface DeleteCompanyData {
    id: string;
}
type DeleteCompanyResponse = GenericDeletedResponse<'company'>;
//
interface ListCompaniesData extends PaginationParams {
    order?: Order;
    tagId?: string;
    segmentId?: string;
}
//
interface AttachContactData {
    contactId: string;
    companyId: string;
}
//
type DetachContactData = AttachContactData;
//
interface ListAttachedContactsData extends PaginationParams {
    companyId: string;
}
//
interface ListAttachedSegmentsData {
    companyId: string;
}
interface ListAttachedSegmentsResponse {
    type: 'list';
    data: SegmentObject[];
}
