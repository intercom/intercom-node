import { Client } from '.';
import { TagObject } from './tag/tag.types';

export default class Tag {
    private tagsBaseUrl = 'tags';

    constructor(private readonly client: Client) {
        this.client = client;
    }

    create(data: CreateTagData) {
        return this.client.post<TagObject>({
            url: `/${this.tagsBaseUrl}`,
            data,
        });
    }
    update(data: UpdateTagData) {
        return this.client.post<TagObject>({
            url: `/${this.tagsBaseUrl}`,
            data,
        });
    }
    delete({ id }: DeleteTagData) {
        return this.client.delete<TagObject>({
            url: `/${this.tagsBaseUrl}/${id}`,
        });
    }
    tagContact({ contactId, tagId }: TagContactData) {
        const data = {
            id: tagId,
        };
        return this.client.post<TagObject>({
            url: `/${this.client.contacts.baseUrl}/${contactId}/${this.tagsBaseUrl}`,
            data,
        });
    }
    tagConversation({
        conversationId,
        tagId,
        adminId: admin_id,
    }: TagConversationData) {
        const data = {
            id: tagId,
            admin_id,
        };

        return this.client.post<TagObject>({
            url: `/${this.client.conversations.baseUrl}/${conversationId}/${this.tagsBaseUrl}`,
            data,
        });
    }
    tagCompanies({ tagName: name, companiesIds }: TagCompaniesData) {
        const data = {
            name,
            companies: companiesIds.map((id) => ({ id })),
        };

        return this.client.post<TagObject>({
            url: `/${this.tagsBaseUrl}`,
            data,
        });
    }
    untagContact({ contactId, tagId }: UntagContactData) {
        return this.client.delete<TagObject>({
            url: `/${this.client.contacts.baseUrl}/${contactId}/${this.tagsBaseUrl}/${tagId}`,
        });
    }
    untagConversation({
        conversationId,
        tagId,
        adminId: admin_id,
    }: UntagConversationData) {
        const data = {
            id: tagId,
            admin_id,
        };

        return this.client.delete<TagObject>({
            url: `/${this.client.conversations.baseUrl}/${conversationId}/${this.tagsBaseUrl}/${tagId}`,
            data,
        });
    }
    untagCompanies({ tagName: name, companiesIds }: UntagCompaniesData) {
        const data = {
            name,
            companies: companiesIds.map((id) => ({ id, untag: true })),
        };

        return this.client.post<TagObject>({
            url: `/${this.tagsBaseUrl}`,
            data,
        });
    }
    list() {
        return this.client.get<ListAllTagsResponse>({
            url: `/${this.tagsBaseUrl}`,
        });
    }
}

interface CreateTagData {
    name: string;
}
//
interface UpdateTagData extends CreateTagData {
    id: string;
}
//
interface DeleteTagData {
    id: string;
}
//
interface TagContactData {
    contactId: string;
    tagId: string;
}
//
interface TagConversationData {
    conversationId: string;
    tagId: string;
    adminId: string;
}
//
interface TagCompaniesData {
    tagName: string;
    companiesIds: string[];
}
//
type UntagContactData = TagContactData;
//
interface UntagConversationData {
    tagId: string;
    conversationId: string;
    adminId: string;
}
//
type UntagCompaniesData = TagCompaniesData;
//
interface ListAllTagsResponse {
    type: 'list';
    data: Array<TagObject>;
}
