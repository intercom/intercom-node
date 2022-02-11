import { Client } from '.';
import {
    GenericDeletedResponse,
    OperationById,
    Paginated,
} from './common/common.types';
import {
    CollectionObject,
    GroupTranslatedContentObject,
    SectionObject,
} from './helpCenter/helpCenter.types';

export default class HelpCenter {
    public readonly collections: Collection;
    public readonly sections: Section;

    constructor(client: Client) {
        this.collections = new Collection(client);
        this.sections = new Section(client);
    }
}

class Collection {
    public readonly baseUrl = 'help_center/collections';

    constructor(private readonly client: Client) {
        this.client = client;
    }

    create({ name, description, translatedContent }: CreateCollectionData) {
        const data = {
            name,
            description,
            translated_content: translatedContent,
        };

        return this.client.post<CollectionObject>({
            url: `/${this.baseUrl}`,
            data,
        });
    }
    find({ id }: CollectionFindByIdData) {
        return this.client.get<CollectionObject>({
            url: `/${this.baseUrl}/${id}`,
        });
    }
    update({ id, name, description, translatedContent }: UpdateCollectionData) {
        const data = {
            name,
            description,
            translated_content: translatedContent,
        };

        return this.client.put<CollectionObject>({
            url: `/${this.baseUrl}/${id}`,
            data,
        });
    }
    delete({ id }: CollectionDeleteByIdData) {
        return this.client.delete<CollectionDeleteByIdResponse>({
            url: `/${this.baseUrl}/${id}`,
        });
    }
    list({ page, perPage: per_page }: CollectionListData) {
        const params = {
            page,
            per_page,
        };

        return this.client.get<CollectionListResponse>({
            url: `/${this.baseUrl}`,
            params,
        });
    }
}

interface CreateCollectionData {
    name: string;
    description?: string;
    translatedContent?: Omit<GroupTranslatedContentObject, 'type'>;
}

type CollectionFindByIdData = OperationById;

type UpdateCollectionData = Partial<CreateCollectionData> & OperationById;

type CollectionDeleteByIdData = OperationById;

type CollectionDeleteByIdResponse = GenericDeletedResponse<'collection'>;

type CollectionListData = {
    page?: number;
    perPage?: number;
};

type CollectionListResponse = Paginated<CollectionObject>;

class Section {
    public readonly baseUrl = 'help_center/sections';

    constructor(private readonly client: Client) {
        this.client = client;
    }

    create({ name, parentId, translatedContent }: CreateSectionData) {
        const data = {
            name,
            parent_id: parentId,
            translated_content: translatedContent,
        };

        return this.client.post<SectionObject>({
            url: `/${this.baseUrl}`,
            data,
        });
    }
    find({ id }: SectionFindByIdData) {
        return this.client.get<SectionObject>({
            url: `/${this.baseUrl}/${id}`,
        });
    }
    update({ id, name, parentId, translatedContent }: UpdateSectionData) {
        const data = {
            name,
            parent_id: parentId,
            translated_content: translatedContent,
        };

        return this.client.put<SectionObject>({
            url: `/${this.baseUrl}/${id}`,
            data,
        });
    }
    delete({ id }: SectionDeleteByIdData) {
        return this.client.delete<SectionDeleteByIdResponse>({
            url: `/${this.baseUrl}/${id}`,
        });
    }
    list({ page, perPage: per_page }: SectionListData) {
        const params = {
            page,
            per_page,
        };

        return this.client.get<SectionListResponse>({
            url: `/${this.baseUrl}`,
            params,
        });
    }
}

interface CreateSectionData {
    name: string;
    parentId: string;
    translatedContent?: Omit<GroupTranslatedContentObject, 'type'>;
}

type SectionFindByIdData = OperationById;

type UpdateSectionData = Partial<CreateSectionData> & OperationById;

type SectionDeleteByIdData = OperationById;

type SectionDeleteByIdResponse = GenericDeletedResponse<'section'>;

type SectionListData = {
    page?: number;
    perPage?: number;
};

type SectionListResponse = Paginated<SectionObject>;
