import { Client } from '.';
import {
    DataAttributeObject,
    ModelType,
} from './dataAttribute/dataAttribute.types';

export default class DataAttribute {
    public readonly baseUrl = 'data_attributes';

    constructor(private readonly client: Client) {
        this.client = client;
    }

    create({
        name,
        model,
        dataType: data_type,
        description,
        options,
    }: CreateDataAttributeData) {
        const data = {
            name,
            model,
            data_type,
            description,
            options,
        };

        return this.client.post<DataAttributeObject>({
            url: `/${this.baseUrl}`,
            data,
        });
    }
    update({ archived, description, id, options }: UpdateDataAttributeData) {
        const data = {
            archived,
            description,
            options,
        };

        return this.client.put<DataAttributeObject>({
            url: `/${this.baseUrl}/${id}`,
            data,
        });
    }
    list({ model, includeArchived: include_archived }: ListDataAttributeData) {
        const queryParams = {
            model,
            include_archived,
        };

        return this.client.get<ListAllResponse>({
            url: `/${this.baseUrl}`,
            params: queryParams,
        });
    }
}

interface CreateDataAttributeData {
    name: DataAttributeObject['name'];
    model: DataAttributeObject['model'];
    dataType: DataAttributeObject['data_type'];
    description?: DataAttributeObject['description'];
    options?: DataAttributeObject['options'];
}

interface UpdateDataAttributeData {
    id: string;
    archived?: DataAttributeObject['archived'];
    description?: DataAttributeObject['description'];
    options?: DataAttributeObject['options'];
}

interface ListDataAttributeData {
    model?: ModelType;
    includeArchived?: boolean;
}

interface ListAllResponse {
    type: 'list';
    data: DataAttributeObject[];
}
