import assert from 'assert';
import { Client } from '../lib';
import nock from 'nock';
import { dateToUnixTimestamp } from '../lib/util/time';

describe('companies', () => {
    let client: Client;
    before(() => {
        client = new Client('foo', 'bar');
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
    it('should list', async () => {
        nock('https://api.intercom.io').get('/companies').reply(200, {});
        const response = await client.companies.list();

        assert.deepStrictEqual({}, response);
    });
    it('should list by params', async () => {
        nock('https://api.intercom.io')
            .get('/companies')
            .query({ tag_id: '1234' })
            .reply(200, {});
        const response = await client.companies.listBy({ tag_id: '1234' });

        assert.deepStrictEqual({}, response);
    });
    it('should find companies by id', async () => {
        nock('https://api.intercom.io').get('/companies/baz').reply(200, {});
        const response = await client.companies.find({ id: 'baz' });

        assert.deepStrictEqual({}, response);
    });
    it('should find companies by company_id', async () => {
        nock('https://api.intercom.io')
            .get('/companies')
            .query({ company_id: 'baz' })
            .reply(200, {});
        const response = await client.companies.find({ company_id: 'baz' });

        assert.deepStrictEqual({}, response);
    });
    it('should find companies by name', async () => {
        nock('https://api.intercom.io')
            .get('/companies')
            .query({ name: 'baz' })
            .reply(200, {});
        const response = await client.companies.find({ name: 'baz' });

        assert.deepStrictEqual({}, response);
    });
    it('should list company users by id', async () => {
        nock('https://api.intercom.io')
            .get('/companies/baz/users')
            .reply(200, {});
        const response = await client.companies.listUsers({ id: 'baz' });

        assert.deepStrictEqual({}, response);
    });
    it('should list company users by company_id', async () => {
        nock('https://api.intercom.io')
            .get('/companies')
            .query({ company_id: 'baz', type: 'user' })
            .reply(200, {});
        const response = await client.companies.listUsers({
            company_id: 'baz',
        });

        assert.deepStrictEqual({}, response);
    });
    it('should list company users by company name', async () => {
        nock('https://api.intercom.io')
            .get('/companies')
            .query({ name: 'baz', type: 'user' })
            .reply(200, {});
        const response = await client.companies.listUsers({ name: 'baz' });

        assert.deepStrictEqual({}, response);
    });
});
