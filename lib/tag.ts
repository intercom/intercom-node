import { Client } from '.';
import { TagObject } from './tag/tag.types';

export default class Tag {
    private tagsBaseUrl = 'tags';

    constructor(private readonly client: Client) {
        this.client = client;
    }

    create(data: ICreateTagData) {
        return this.client.post<TagObject>({
            url: `/${this.tagsBaseUrl}`,
            data,
        });
    }
    update(data: IUpdateTagData) {
        return this.client.post<TagObject>({
            url: `/${this.tagsBaseUrl}`,
            data,
        });
    }
    delete({ id }: IDeleteTagData) {
        return this.client.delete<TagObject>({
            url: `/${this.tagsBaseUrl}/${id}`,
        });
    }
    tagContact({ contactId, tagId }: ITagContactData) {
        const data = {
            id: tagId,
        };
        return this.client.post<TagObject>({
            url: `/${this.client.contacts.baseUrl}/${contactId}/${this.tagsBaseUrl}`,
            data,
        });
    }
    tagConversation({ conversationId, tagId, adminId }: ITagConversationData) {
        const data = {
            id: tagId,
            adminId,
        };

        return this.client.post<TagObject>({
            url: `/${this.client.conversations.baseUrl}/${conversationId}/${this.tagsBaseUrl}`,
            data,
        });
    }
    tagCompanies({ name, companiesIds }: ITagCompaniesData) {
        const data = {
            name,
            companies: companiesIds.map((id) => ({ id })),
        };

        return this.client.post<TagObject>({
            url: `/${this.tagsBaseUrl}`,
            data,
        });
    }
    untagContact({ contactId, tagId }: IUntagContactData) {
        return this.client.delete<TagObject>({
            url: `/${this.client.contacts.baseUrl}/${contactId}/${this.tagsBaseUrl}/${tagId}`,
        });
    }
    untagConversation({ conversationId, tagId }: IUntagConversationData) {
        return this.client.delete<TagObject>({
            url: `/${this.client.conversations.baseUrl}/${conversationId}/${this.tagsBaseUrl}/${tagId}`,
        });
    }
    untagCompanies({ name, companiesIds }: IUntagCompaniesData) {
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
        return this.client.get<IListAllTagsResponse>({
            url: `/${this.tagsBaseUrl}`,
        });
    }
}

interface ICreateTagData {
    name: string;
}
//
interface IUpdateTagData extends ICreateTagData {
    id: string;
}
//
interface IDeleteTagData {
    id: string;
}
//
interface ITagContactData {
    contactId: string;
    tagId: string;
}
//
interface ITagConversationData {
    conversationId: string;
    tagId: string;
    adminId: string;
}
//
interface ITagCompaniesData {
    name: string;
    companiesIds: string[];
}
//
type IUntagContactData = ITagContactData;
//
interface IUntagConversationData {
    tagId: string;
    conversationId: string;
}
//
type IUntagCompaniesData = ITagCompaniesData;
//
interface IListAllTagsResponse {
    type: 'list';
    data: Array<TagObject>;
}
