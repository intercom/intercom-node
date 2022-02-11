import { Client, NoteObject } from '../../dist';
import assert from 'assert';
import { token } from './utils/config';
import { randomString } from './utils/random';

describe('Notes', () => {
    let adminId: string;
    let contactId: string;
    let note: NoteObject;

    before(async () => {
        const randomContacts = await client.contacts.list({
            perPage: 1,
        });
        const admins = await client.admins.list();

        adminId = admins.admins[0].id;
        contactId = randomContacts.data[0].id;
    });

    const client = new Client({ tokenAuth: { token } });

    it('create', async () => {
        const response = await client.notes.create({
            adminId,
            body: randomString(),
            contactId,
        });

        note = response;

        assert.notEqual(response, undefined);
    });
    it('find', async () => {
        const response = await client.notes.find({ id: note.id });

        assert.notEqual(response, undefined);
    });
    it('list', async () => {
        const response = await client.notes.list({
            contactId,
            perPage: 25,
            page: 1,
        });

        assert.notEqual(response, undefined);
    });
});
