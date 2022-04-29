import { Client, NoteObject } from '.';
import { OperationById, Paginated } from './common/common.types';

export default class Note {
    public readonly baseUrl = 'notes';

    constructor(private readonly client: Client) {
        this.client = client;
    }

    create({ adminId, body, contactId }: CreateNoteData) {
        const data = {
            admin_id: adminId,
            body,
        };

        return this.client.post<NoteObject>({
            url: `/${this.client.contacts.baseUrl}/${contactId}/${this.baseUrl}`,
            data,
        });
    }
    find({ id }: FindNoteByIdData) {
        return this.client.get<NoteObject>({
            url: `/${this.baseUrl}/${id}`,
        });
    }
    list({ contactId, page, perPage: per_page }: ListNotesData) {
        const params = {
            page,
            per_page,
        };

        return this.client.get<ListNotesResponse>({
            url: `/${this.client.contacts.baseUrl}/${contactId}/${this.baseUrl}`,
            params,
        });
    }
}

interface CreateNoteData {
    adminId: string;
    body: string;
    contactId: string;
}

type FindNoteByIdData = OperationById;

type ListNotesData = {
    contactId: string;
    page?: number;
    perPage?: number;
};

type ListNotesResponse = Paginated<NoteObject>;
