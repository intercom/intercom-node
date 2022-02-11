import { Client, ContactObject } from '../../dist';
import assert from 'assert';
import { token } from './utils/config';
import { randomString } from './utils/random';

describe('Contacts', () => {
    let randomContact: ContactObject;
    let createdUser: ContactObject;
    let createdLead: ContactObject;
    let mergedLeadAndUser: ContactObject;

    const client = new Client({ tokenAuth: { token } });

    it('list', async () => {
        const response = await client.contacts.list({ perPage: 5 });

        randomContact = response && response.data[2];

        assert.notEqual(response, undefined);
    });
    it('createUser', async () => {
        const response = await client.contacts.createUser({
            externalId: randomString(),
            phone: randomContact.phone,
        });

        createdUser = response;

        assert.notEqual(response, undefined);
    });
    it('createLead', async () => {
        const response = await client.contacts.createLead({
            name: 'Roman Bowling',
        });

        createdLead = response;

        assert.notEqual(response, undefined);
    });
    it('find - by id', async () => {
        const response = await client.contacts.find({
            id: randomContact.id,
        });

        assert.notEqual(response, undefined);
    });
    it('update', async () => {
        const response = await client.contacts.update({
            id: randomContact.id,
            name: 'Nico Bellic',
        });

        assert.notEqual(response, undefined);
    });
    it('archive', async () => {
        const response = await client.contacts.archive({
            id: randomContact.id,
        });
        assert.notEqual(response, undefined);
    });
    it('unarchive', async () => {
        const response = await client.contacts.unarchive({
            id: randomContact.id,
        });

        assert.notEqual(response, undefined);
    });
    it('mergeLeadInUser', async () => {
        const response = await client.contacts.mergeLeadInUser({
            leadId: createdLead && createdLead.id,
            userId: createdUser && createdUser.id,
        });

        mergedLeadAndUser = response;

        assert.notEqual(response, undefined);
    });
    it('delete', async () => {
        const response = await client.contacts.delete({
            id: mergedLeadAndUser.id,
        });

        assert.notEqual(response, undefined);
    });
    it('listAttachedCompanies', async () => {
        const response = await client.contacts.listAttachedCompanies({
            id: randomContact.id,
        });

        assert.notEqual(response, undefined);
    });
    it('listAttachedEmailSubscriptions', async () => {
        const response = await client.contacts.listAttachedEmailSubscriptions({
            id: randomContact.id,
        });

        assert.notEqual(response, undefined);
    });
    it('listAttachedSegments', async () => {
        const response = await client.contacts.listAttachedSegments({
            id: randomContact.id,
        });

        assert.notEqual(response, undefined);
    });
    it('listAttachedTags', async () => {
        const response = await client.contacts.listAttachedTags({
            id: randomContact.id,
        });

        assert.notEqual(response, undefined);
    });
});
