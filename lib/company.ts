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
    /**
     * @deprecated Use `client.companies.createOrUpdate()` instead.
     */
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
        return this.createOrUpdate({
            createdAt,
            companyId,
            name,
            monthlySpend,
            plan,
            size,
            website,
            industry,
            customAttributes,
        });
    }
    /**
     * Create or update a company by its `companyId`.
     *
     * Companies are looked up via the `companyId` field. If a company with the given `companyId` does not exist, it will be created. If a company with the given `companyId` does exist, it will be updated.
     **/
    createOrUpdate({
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

    /**
     * Update a single company by its `id`.
     * @param id - The `id` field is required for updating a company. This is distinct from the `companyId` field on the Company object , which is an identifier for the company in your database.
     * @param createdAt - The time the company was created by you.
     * @param name - The name of the company.
     * @param monthlySpend - The amount the company spends on your product each month. How much revenue the company generates for your business.
     * Note that this will truncate floats. i.e. it only allow for whole integers, 155.98 will be truncated to 155. Note that this has an upper limit of 2**31-1 or 2147483647..
     * @param plan - The name of the plan you have associated with the company.
     * @param size - The number of employees the company has.
     * @param website -The URL for this company's website. Please note that the value specified here is not validated. Accepts any string.
     * @param industry - The industry the company operates in.
     * @param customAttributes - A hash of key/value pairs containing any other data about the company you want Intercom to store.
     */
    update({
        id,
        createdAt,
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
            url: `/${this.baseUrl}/${id}`,
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
    createdAt?: Timestamp;
    companyId: string;
    name?: string;
    monthlySpend?: number;
    plan?: string;
    size?: number;
    website?: string;
    industry?: string;
    customAttributes?: JavascriptObject;
}
//
interface UpdateCompanyData extends Omit<CreateCompanyData, 'companyId'> {
    id: string;
}
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
