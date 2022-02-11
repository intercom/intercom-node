import { Client, NoteObject } from '../../dist';
import assert from 'assert';
import { adminId, contactId, token } from './utils/config';
import { randomString } from './utils/random';

describe('Notes', () => {
    let note: NoteObject;

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
