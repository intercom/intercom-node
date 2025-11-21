import { Intercom } from "../../src";
import { tryDeleteContact } from "./helpers";
import { randomString } from "./utils/random";
import { createClient } from "./utils/createClient";

describe("Notes", () => {
    let adminId: string;
    let contact: Intercom.Contact;
    let note: Intercom.Note;

    const client = createClient();

    beforeAll(async () => {
        // arrange
        const admins = await client.admins.list();
        adminId = admins.admins?.[0]?.id ?? "0";

        contact = await client.contacts.create({
            external_id: randomString(),
        });

        note = await client.notes.create({
            admin_id: adminId,
            body: randomString(),
            contact_id: contact.id!,
        });
    });

    afterAll(async () => {
        // cleanup
        await tryDeleteContact(client, contact.id!);
    });

    it("create", async () => {
        // act
        const response = await client.notes.create({
            admin_id: adminId,
            body: randomString(),
            contact_id: contact.id!,
        });

        // assert
        expect(response).toBeDefined();
    });

    it("find", async () => {
        // act
        const response = await client.notes.find({ note_id: parseInt(note.id!, 10) });

        // assert
        expect(response).toBeDefined();
    });

    it("list", async () => {
        // act
        const response = await client.notes.list({
            contact_id: contact.id!,
            per_page: 25,
            page: 1,
        });

        // assert
        expect(response).toBeDefined();
    });
});
