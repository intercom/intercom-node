import assert from 'assert';
import { Client } from '../../lib';
import nock from 'nock';
import { dateToUnixTimestamp } from '../../lib/util/time';
import { Order } from '../../lib/common/common.types';

const dummyCompany = {
    type: 'company',
    company_id: 'dummy-company',
    id: '59yo',
    app_id: 'einszweidrei',
    name: 'Bitconeeeeeeect',
    created_at: 1509716268,
    updated_at: 1509977818,
    last_request_at: 1506274700,
    monthly_spend: 0,
    session_count: 0,
    user_count: 1,
    tags: {
        type: 'tag.list',
        tags: [],
    },
    segments: {
        type: 'segment.list',
        segments: [],
    },
    plan: {},
    custom_attributes: {},
};
describe('companies', () => {
    const client = new Client({
        usernameAuth: { username: 'foo', password: 'bar' },
    });

    it('should be created', async () => {
        const requestBody = {
            remote_created_at: dateToUnixTimestamp(new Date()),
            company_id: '46029',
            name: 'BestCompanyInc.',
            monthly_spend: 9001,
            plan: '1. Get pizzaid',
            size: 62049,
            website: 'http://the-best.one',
            industry: 'The Best One',
            custom_attributes: {},
        };

        nock('https://api.intercom.io')
            .post('/companies', requestBody)
            .reply(200, {});

        const response = await client.companies.create({
            createdAt: requestBody.remote_created_at,
            companyId: requestBody.company_id,
            name: requestBody.name,
            monthlySpend: requestBody.monthly_spend,
            plan: requestBody.plan,
            size: requestBody.size,
            website: requestBody.website,
            industry: requestBody.industry,
            customAttributes: requestBody.custom_attributes,
        });

        assert.deepStrictEqual({}, response);
    });
    it('should be updated', async () => {
        const company_id = '46029';
        const requestBody = {
            remote_created_at: dateToUnixTimestamp(new Date()),
            name: 'BestCompanyInc.',
            monthly_spend: 9001,
            plan: '1. Get pizzaid',
            size: 62049,
            website: 'http://the-best.one',
            industry: 'The Best One',
            custom_attributes: {},
        };

        nock('https://api.intercom.io')
            .put(`/companies/${company_id}`, requestBody)
            .reply(200, {});

        const response = await client.companies.update({
            createdAt: requestBody.remote_created_at,
            companyId: company_id,
            name: requestBody.name,
            monthlySpend: requestBody.monthly_spend,
            plan: requestBody.plan,
            size: requestBody.size,
            website: requestBody.website,
            industry: requestBody.industry,
            customAttributes: requestBody.custom_attributes,
        });

        assert.deepStrictEqual({}, response);
    });
    it('should find companies by company_id', async () => {
        const queryData = {
            company_id: 'baz',
        };
        nock('https://api.intercom.io')
            .get('/companies')
            .query(queryData)
            .reply(200, {});
        const response = await client.companies.find({
            companyId: queryData.company_id,
        });

        assert.deepStrictEqual({}, response);
    });
    it('should find companies by name', async () => {
        const queryData = {
            name: 'bruh moment inc.',
        };
        nock('https://api.intercom.io')
            .get('/companies')
            .query(queryData)
            .reply(200, {});
        const response = await client.companies.find({ name: queryData.name });

        assert.deepStrictEqual({}, response);
    });
    it('should delete company by id', async () => {
        const id = 'baz';

        nock('https://api.intercom.io')
            .delete(`/companies/${id}`)
            .reply(200, {});

        const response = await client.companies.delete({
            id,
        });

        assert.deepStrictEqual({}, response);
    });
    it('should list with pagination', async () => {
        nock('https://api.intercom.io')
            .get('/companies')
            .query({ page: 1, per_page: 35, order: Order.DESC })
            .reply(200, {});
        const response = await client.companies.list({
            page: 1,
            perPage: 35,
            order: Order.DESC,
        });

        assert.deepStrictEqual({}, response);
    });
    it('should list by params', async () => {
        nock('https://api.intercom.io')
            .get('/companies')
            .query({ tag_id: '1234', segment_id: '4567' })
            .reply(200, {});
        const response = await client.companies.list({
            tagId: '1234',
            segmentId: '4567',
        });

        assert.deepStrictEqual({}, response);
    });
    it('should get all infinite companies with scroll', async () => {
        nock('https://api.intercom.io')
            .get('/companies/scroll')
            .reply(200, {
                type: 'list',
                scroll_param: '123_soleil',
                data: [dummyCompany],
            });

        nock('https://api.intercom.io')
            .get('/companies/scroll?scroll_param=123_soleil')
            .reply(200, {
                type: 'list',
                scroll_param: '123_soleil_345',
                data: [],
            });

        const response = await client.companies.scroll.each({});

        assert.equal(1, response.length);
        assert.deepStrictEqual(dummyCompany, response[0]);
    });
    it('should get companies with manual scroll', async () => {
        nock('https://api.intercom.io')
            .get('/companies/scroll?scroll_param=123_soleil')
            .reply(200, {
                type: 'list',
                scroll_param: '123_soleil_345',
                data: [dummyCompany],
            });

        const response = await client.companies.scroll.next({
            scrollParam: '123_soleil',
        });

        assert.deepStrictEqual(dummyCompany, response.data[0]);
        assert.deepStrictEqual('123_soleil_345', response.scroll_param);
    });
    it('should attach contact to company', async () => {
        const contactId = '123';
        const companyId = '234';

        nock('https://api.intercom.io')
            .post(`/contacts/${contactId}/companies`, { id: companyId })
            .reply(200, {});

        const response = await client.companies.attachContact({
            contactId,
            companyId,
        });

        assert.deepStrictEqual({}, response);
    });
    it('should detach contact from company', async () => {
        const contactId = '123';
        const companyId = '234';

        nock('https://api.intercom.io')
            .delete(`/contacts/${contactId}/companies/${companyId}`)
            .reply(200, {});

        const response = await client.companies.detachContact({
            contactId,
            companyId,
        });

        assert.deepStrictEqual({}, response);
    });
    it('should list all attached contacts to company', async () => {
        const companyId = '234';
        const page = 1;
        const perPage = 15;

        nock('https://api.intercom.io')
            .get(`/companies/${companyId}/contacts`)
            .query({ page, perPage })
            .reply(200, {});

        const response = await client.companies.listAttachedContacts({
            companyId,
            page,
            perPage,
        });

        assert.deepStrictEqual({}, response);
    });
    it('should list all attached segments to company', async () => {
        const companyId = '234';

        nock('https://api.intercom.io')
            .get(`/companies/${companyId}/segments`)
            .reply(200, {});

        const response = await client.companies.listAttachedSegments({
            companyId,
        });

        assert.deepStrictEqual({}, response);
    });
});
