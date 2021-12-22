import { Client } from '.';
import { JavascriptObject, Timestamp } from './common/common.types';
import { ContactObject } from './contact/contact.types';

export default class Company {
    public readonly baseUrl = 'companies';

    constructor(private readonly client: Client) {
        this.client = client;
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

        return this.client.post<ContactObject>({ url: '/companies', data });
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

        return this.client.put<ContactObject>({
            url: `/companies/${companyId}`,
            data,
        });
    }
    list() {
        return this.client.get({ url: '/companies' });
    }
    listBy(params: any) {
        return this.client.get({ url: '/companies', data: params });
    }
    find(params: any): any {
        if (params.id) {
            return this.client.get({ url: `/companies/${params.id}` });
        } else if (params.company_id) {
            return this.client.get({
                url: '/companies',
                data: { company_id: params.company_id },
            });
        } else if (params.name) {
            return this.client.get({
                url: '/companies',
                data: { name: params.name },
            });
        }
    }
    listUsers(params: any): any {
        if (params.id) {
            return this.client.get({ url: `/companies/${params.id}/users` });
        } else if (params.company_id) {
            return this.client.get({
                url: '/companies',
                data: { company_id: params.company_id, type: 'user' },
            });
        } else if (params.name) {
            return this.client.get({
                url: '/companies',
                data: { name: params.name, type: 'user' },
            });
        }
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
