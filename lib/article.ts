import { Client } from '.';
import {
    ArticleObject,
    TranslatedContentObject,
} from './article/article.types';
import {
    GenericDeletedResponse,
    OperationById,
    Paginated,
} from './common/common.types';

export default class Article {
    public readonly baseUrl = 'articles';

    constructor(private readonly client: Client) {
        this.client = client;
    }

    create({
        title,
        description,
        body,
        authorId,
        state,
        parentId,
        parentType,
        translatedContent,
    }: CreateArticleData) {
        const data = {
            title,
            description,
            body,
            author_id: authorId,
            state,
            parent_id: parentId,
            parent_type: parentType,
            translated_content: translatedContent,
        };

        return this.client.post<ArticleObject>({
            url: `/${this.baseUrl}`,
            data,
        });
    }
    find({ id }: ArticleFindByIdData) {
        return this.client.get<ArticleObject>({
            url: `/${this.baseUrl}/${id}`,
        });
    }
    update({
        id,
        title,
        description,
        body,
        authorId,
        state,
        parentId,
        parentType,
        translatedContent,
    }: UpdateArticleData) {
        const data = {
            title,
            description,
            body,
            author_id: authorId,
            state,
            parent_id: parentId,
            parent_type: parentType,
            translated_content: translatedContent,
        };

        return this.client.put<ArticleObject>({
            url: `/${this.baseUrl}/${id}`,
            data,
        });
    }
    delete({ id }: ArticleDeleteByIdData) {
        return this.client.delete<ArticleDeleteByIdResponse>({
            url: `/${this.baseUrl}/${id}`,
        });
    }
    list({ page, perPage: per_page }: ArticleListData) {
        const params = {
            page,
            per_page,
        };

        return this.client.get<ArticleListResponse>({
            url: `/${this.baseUrl}`,
            params,
        });
    }
}

interface CreateArticleData {
    title: string;
    authorId: number;
    description?: string;
    body?: string;
    state?: string;
    parentId?: number;
    parentType?: string;
    translatedContent?: Omit<TranslatedContentObject, 'type'>;
}

type ArticleFindByIdData = OperationById;

type UpdateArticleData = Partial<CreateArticleData> & OperationById;

type ArticleDeleteByIdData = OperationById;

type ArticleDeleteByIdResponse = GenericDeletedResponse<'article'>;

type ArticleListData = {
    page?: number;
    perPage?: number;
};

type ArticleListResponse = Paginated<ArticleObject>;
