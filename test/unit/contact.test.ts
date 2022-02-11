import assert from 'assert';
import { Client } from '../../lib';
import nock from 'nock';
import { Operators, Role } from '../../lib/common/common.types';
import { SearchContactOrderBy } from '../../lib/contact';

describe('contacts', () => {
    it('should create a contact with user role with external id', async () => {
        const id = '536e564f316c83104c000020';

        const contact = {
            role: 'user',
            external_id: id,
            phone: '+48370044567',
            name: 'Niko Bellic',
            avatar: 'https://nico-from-gta-iv.com/lets_go_bowling.jpg',
            signed_up_at: 1638203719,
            last_seen_at: 1638203719,
            owner_id: 1,
            unsubscribed_from_emails: true,
        };

        const expectedReply = {};

        nock('https://api.intercom.io')
            .post('/contacts', contact)
            .reply(200, expectedReply);

        const client = new Client({
            usernameAuth: { username: 'foo', password: 'bar' },
        });

        const response = await client.contacts.createUser({
            externalId: contact.external_id,
            phone: contact.phone,
            name: contact.name,
            avatar: contact.avatar,
            signedUpAt: contact.signed_up_at,
            lastSeenAt: contact.last_seen_at,
            ownerId: contact.owner_id,
            isUnsubscribedFromEmails: contact.unsubscribed_from_emails,
        });

        assert.deepStrictEqual(expectedReply, response);
    });

    it('should create a contact with user role with email', async () => {
        const contact = {
            role: 'user',
            email: 'niko_bellic@mail.com',
            phone: '+48370044567',
            name: 'Niko Bellic',
            avatar: 'https://nico-from-gta-iv.com/lets_go_bowling.jpg',
            signed_up_at: 1638203719,
            last_seen_at: 1638203719,
            owner_id: 1,
            unsubscribed_from_emails: true,
        };

        const expectedReply = {};

        nock('https://api.intercom.io')
            .post('/contacts', contact)
            .reply(200, expectedReply);

        const client = new Client({
            usernameAuth: { username: 'foo', password: 'bar' },
        });

        const response = await client.contacts.createUser({
            email: contact.email,
            phone: contact.phone,
            name: contact.name,
            avatar: contact.avatar,
            signedUpAt: contact.signed_up_at,
            lastSeenAt: contact.last_seen_at,
            ownerId: contact.owner_id,
            isUnsubscribedFromEmails: contact.unsubscribed_from_emails,
        });

        assert.deepStrictEqual(expectedReply, response);
    });

    it('should create a contact with lead role', async () => {
        const contact = {
            role: 'lead',
        };

        const expectedReply = {};

        nock('https://api.intercom.io')
            .post('/contacts', contact)
            .reply(200, expectedReply);

        const client = new Client({
            usernameAuth: { username: 'foo', password: 'bar' },
        });

        const response = await client.contacts.createLead();

        assert.deepStrictEqual(expectedReply, response);
    });

    it('should retrieve a contact by id', async () => {
        const id = '536e564f316c83104c000020';

        const expectedReply = {};

        nock('https://api.intercom.io')
            .get(`/contacts/${id}`)
            .reply(200, expectedReply);

        const client = new Client({
            usernameAuth: { username: 'foo', password: 'bar' },
        });

        const response = await client.contacts.find({ id });

        assert.deepStrictEqual(expectedReply, response);
    });

    it('should update a contact', async () => {
        const id = '536e564f316c83104c000020';

        const requestBody = {
            role: Role.USER,
            name: 'Roman The Bowling Fan',
            custom_attributes: {
                callBrother: "Hey Niko, it's me – Roman. Let's go bowling!",
            },
        };

        const expectedReply = {};

        nock('https://api.intercom.io')
            .put(`/contacts/${id}`, requestBody)
            .reply(200, expectedReply);

        const client = new Client({
            usernameAuth: { username: 'foo', password: 'bar' },
        });

        const response = await client.contacts.update({
            id,
            role: requestBody.role,
            name: requestBody.name,
            customAttributes: requestBody.custom_attributes,
        });

        assert.deepStrictEqual(expectedReply, response);
    });

    it('should delete a contact by id', async () => {
        const id = '536e564f316c83104c000020';

        const expectedReply = {};

        nock('https://api.intercom.io')
            .delete(`/contacts/${id}`)
            .reply(200, expectedReply);

        const client = new Client({
            usernameAuth: { username: 'foo', password: 'bar' },
        });

        const response = await client.contacts.delete({ id });

        assert.deepStrictEqual(expectedReply, response);
    });

    it('should archive a contact by id', async () => {
        const id = '536e564f316c83104c000020';

        const expectedReply = {};

        nock('https://api.intercom.io')
            .post(`/contacts/${id}/archive`)
            .reply(200, expectedReply);

        const client = new Client({
            usernameAuth: { username: 'foo', password: 'bar' },
        });

        const response = await client.contacts.archive({ id });

        assert.deepStrictEqual(expectedReply, response);
    });

    it('should unarchive a contact by id', async () => {
        const id = '536e564f316c83104c000020';

        const expectedReply = {};

        nock('https://api.intercom.io')
            .post(`/contacts/${id}/unarchive`)
            .reply(200, expectedReply);

        const client = new Client({
            usernameAuth: { username: 'foo', password: 'bar' },
        });

        const response = await client.contacts.unarchive({ id });

        assert.deepStrictEqual(expectedReply, response);
    });

    it('should merge two contacts', async () => {
        const leadId = '536e564f316c83104c000020';
        const userId = '536e564f316c83104c000021';

        const requestBody = {
            from: leadId,
            into: userId,
        };

        const expectedReply = {};

        nock('https://api.intercom.io')
            .post(`/contacts/merge`, requestBody)
            .reply(200, expectedReply);

        const client = new Client({
            usernameAuth: { username: 'foo', password: 'bar' },
        });

        const response = await client.contacts.mergeLeadInUser({
            leadId,
            userId,
        });

        assert.deepStrictEqual(expectedReply, response);
    });

    it('should search for contacts using filters, sorts ascending by name, paginates 5 pages per page on page 2', async () => {
        const requestBody = {
            query: {
                operator: Operators.AND,
                value: [
                    {
                        operator: Operators.AND,
                        value: [
                            {
                                field: 'updated_at',
                                operator: Operators.GREATER_THAN,
                                value: 1560436650,
                            },
                            {
                                field: 'conversation_rating.rating',
                                operator: Operators.EQUALS,
                                value: 1,
                            },
                        ],
                    },
                    {
                        operator: Operators.OR,
                        value: [
                            {
                                field: 'updated_at',
                                operator: Operators.GREATER_THAN,
                                value: 1560436650,
                            },
                            {
                                field: 'conversation_rating.rating',
                                operator: Operators.EQUALS,
                                value: 2,
                            },
                        ],
                    },
                ],
            },
            pagination: {
                per_page: 5,
                starting_after:
                    'WzE2MzU4NjA2NDgwMDAsIjYxODJiNjJlNDM4YjdhM2EwMWE4YWYxNSIsMl0=',
            },
            sort: {
                field: 'name',
                order: 'ascending',
            },
        };

        const expectedReply = {};

        nock('https://api.intercom.io')
            .post(`/contacts/search`, requestBody)
            .reply(200, expectedReply);

        const client = new Client({
            usernameAuth: { username: 'foo', password: 'bar' },
        });

        const response = await client.contacts.search({
            data: {
                query: requestBody.query,
                pagination: requestBody.pagination,
                sort: { field: 'name', order: SearchContactOrderBy.ASC },
            },
        });

        assert.deepStrictEqual(expectedReply, response);
    });

    it('should list all contacts, with per page = 5 and cursor set to next page', async () => {
        nock('https://api.intercom.io')
            .get(
                '/contacts?per_page=5&starting_after=WzE2MzU3NzU4NjkwMDAsIjYxODJiNjJhMDMwZTk4OTBkZWU4NGM5YiIsMl0='
            )
            .reply(200, {});
        const client = new Client({
            usernameAuth: { username: 'foo', password: 'bar' },
        });
        const response = await client.contacts.list({
            perPage: 5,
            startingAfter:
                'WzE2MzU3NzU4NjkwMDAsIjYxODJiNjJhMDMwZTk4OTBkZWU4NGM5YiIsMl0=',
        });

        assert.deepStrictEqual({}, response);
    });

    it('should list attached companies of contact by id', async () => {
        const id = '536e564f316c83104c000020';

        const expectedReply = {};

        nock('https://api.intercom.io')
            .get(`/contacts/${id}/companies?per_page=5&page=1`)
            .reply(200, expectedReply);

        const client = new Client({
            usernameAuth: { username: 'foo', password: 'bar' },
        });

        const response = await client.contacts.listAttachedCompanies({
            id,
            perPage: 5,
            page: 1,
        });

        assert.deepStrictEqual(expectedReply, response);
    });

    it('should list attached tags of contact by id', async () => {
        const id = '536e564f316c83104c000020';

        const expectedReply = {};

        nock('https://api.intercom.io')
            .get(`/contacts/${id}/tags`)
            .reply(200, expectedReply);

        const client = new Client({
            usernameAuth: { username: 'foo', password: 'bar' },
        });

        const response = await client.contacts.listAttachedTags({ id });

        assert.deepStrictEqual(expectedReply, response);
    });

    it('should list attached segments of contact by id', async () => {
        const id = '536e564f316c83104c000020';

        const expectedReply = {};

        nock('https://api.intercom.io')
            .get(`/contacts/${id}/segments`)
            .reply(200, expectedReply);

        const client = new Client({
            usernameAuth: { username: 'foo', password: 'bar' },
        });

        const response = await client.contacts.listAttachedSegments({ id });

        assert.deepStrictEqual(expectedReply, response);
    });

    it('should list attached email subscriptions of contact by id', async () => {
        const id = '536e564f316c83104c000020';

        const expectedReply = {};

        nock('https://api.intercom.io')
            .get(`/contacts/${id}/subscriptions`)
            .reply(200, expectedReply);

        const client = new Client({
            usernameAuth: { username: 'foo', password: 'bar' },
        });

        const response = await client.contacts.listAttachedEmailSubscriptions({
            id,
        });

        assert.deepStrictEqual(expectedReply, response);
    });
});
