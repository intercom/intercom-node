import { Client, CompanyObject, Order } from '../../dist';
import assert from 'assert';
import { token } from './utils/config';
import { dateToUnixTimestamp } from '../../lib/util/time';

describe('Companies', () => {
    let createdCompany: CompanyObject;
    let contactId: string;

    before(async () => {
        const randomContacts = await client.contacts.list({
            perPage: 1,
        });

        contactId = randomContacts.data[0].id;
    });

    const client = new Client({ tokenAuth: { token } });

    it('create', async () => {
        const response = await client.companies.create({
            createdAt: dateToUnixTimestamp(new Date()),
            companyId: '46029',
            name: 'BestCompanyInc.',
            monthlySpend: 9001,
            plan: '1. Get pizzaid',
            size: 62049,
            website: 'http://the-best.one',
            industry: 'The Best One',
            customAttributes: {},
        });

        createdCompany = response;

        assert.notEqual(response, undefined);
    });
    it('update', async () => {
        const response = await client.companies.update({
            createdAt: dateToUnixTimestamp(new Date()),
            companyId: createdCompany.id,
            name: 'BestCompanyInc',
            monthlySpend: 9001,
            plan: '1. Get pizzaid',
            size: 62049,
            website: 'http://the-best.one',
            industry: 'The Best One',
            customAttributes: {},
        });

        assert.notEqual(response, undefined);
    });
    it('find - by id', async () => {
        const response = await client.companies.find({
            companyId: createdCompany.company_id,
        });

        assert.notEqual(response, undefined);
    });
    // TO-DO: Create issue on API. Doesn't work on API..
    it.skip('find - by name', async () => {
        const response = await client.companies.find({
            name: 'BestCompanyInc',
        });

        assert.notEqual(response, undefined);
    });
    it('list', async () => {
        const response = await client.companies.list({
            page: 1,
            perPage: 35,
            order: Order.DESC,
            tagId: '2084335',
        });

        assert.notEqual(response, undefined);
    });
    it('scroll - infinite one', async () => {
        const response = await client.companies.scroll.each({});

        assert.notEqual(response, undefined);
    });
    it('attachContact', async () => {
        const response = await client.companies.attachContact({
            contactId,
            companyId: createdCompany.id,
        });

        assert.notEqual(response, undefined);
    });
    it('detachContact', async () => {
        const response = await client.companies.detachContact({
            contactId,
            companyId: createdCompany.id,
        });

        assert.notEqual(response, undefined);
    });
    it('listAttachedContacts', async () => {
        const response = await client.companies.listAttachedContacts({
            companyId: createdCompany.id,
            page: 1,
            perPage: 25,
        });

        assert.notEqual(response, undefined);
    });
    it('listAttachedSegments', async () => {
        const response = await client.companies.listAttachedSegments({
            companyId: createdCompany.id,
        });

        assert.notEqual(response, undefined);
    });
    it('delete', async () => {
        const response = await client.companies.delete({
            id: createdCompany.id,
        });

        assert.notEqual(response, undefined);
    });
});
