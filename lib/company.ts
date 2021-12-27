import { Client } from '.';
import {
    IPaginationParams,
    JavascriptObject,
    Order,
    Paginated,
    Timestamp,
} from './common/common.types';
import { CompanyObject, IListCompaniesResponse } from './company/company.types';
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
    }: ICreateCompanyData) {
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
    }: IUpdateCompanyData) {
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
    find({ companyId, name }: IFindCompanyData) {
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
    delete({ id }: IDeleteCompanyData) {
        return this.client.delete<IDeleteCompanyResponse>({
            url: `/${this.baseUrl}/${id}`,
        });
    }
    list({
        page,
        perPage: per_page,
        order,
        tagId: tag_id,
        segmentId: segment_id,
    }: IListCompaniesData) {
        const params = {
            page,
            per_page,
            order,
            tag_id,
            segment_id,
        };

        return this.client.get<IListCompaniesResponse>({
            url: `/${this.baseUrl}`,
            params,
        });
    }
    attachContact({ contactId, companyId }: IAttachContactData) {
        const data = {
            id: companyId,
        };

        return this.client.get<CompanyObject>({
            url: `/${this.client.contacts.baseUrl}/${contactId}/${this.baseUrl}`,
            data,
        });
    }
    detachContact({ contactId, companyId }: IDetachContactData) {
        return this.client.delete<CompanyObject>({
            url: `/${this.client.contacts.baseUrl}/${contactId}/${this.baseUrl}/${companyId}`,
        });
    }
    listAttachedContacts({
        companyId,
        page,
        perPage,
    }: IListAttachedContactsData) {
        const params = { page, perPage };

        return this.client.get<Paginated<ContactObject>>({
            url: `/${this.baseUrl}/${companyId}/${this.client.contacts.baseUrl}`,
            params,
        });
    }
    listAttachedSegments({ companyId }: IListAttachedSegmentsData) {
        return this.client.get<IListAttachedSegmentsResponse>({
            url: `/${this.baseUrl}/${companyId}/${this.client.segments.baseUrl}`,
        });
    }
}

interface ICreateCompanyData {
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
type IUpdateCompanyData = ICreateCompanyData;
//
interface IFindCompanyData {
    companyId?: string;
    name?: string;
}
//
interface IDeleteCompanyData {
    id: string;
}
interface IDeleteCompanyResponse {
    id: string;
    object: 'company';
    deleted: boolean;
}
//
interface IListCompaniesData extends IPaginationParams {
    order?: Order;
    tagId?: string;
    segmentId?: string;
}
//
interface IAttachContactData {
    contactId: string;
    companyId: string;
}
//
type IDetachContactData = IAttachContactData;
//
interface IListAttachedContactsData extends IPaginationParams {
    companyId: string;
}
//
interface IListAttachedSegmentsData {
    companyId: string;
}
interface IListAttachedSegmentsResponse {
    type: 'list';
    data: SegmentObject[];
}
