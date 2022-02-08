import { Client, ContactObject } from '.';
import { Role } from './common/common.types';
import { VisitorObject } from './visitor/visitor.types';

export default class Visitor {
    public readonly baseUrl = 'visitors';

    constructor(private readonly client: Client) {
        this.client = client;
    }

    find({ id, userId }: FindVisitorByIdData) {
        const query = userId ? { user_id: userId } : {};
        const url = `/${this.baseUrl}${id ? `/${id}` : ''}`;

        return this.client.get<VisitorObject>({
            url,
            params: query,
        });
    }
    update({ id, userId, name, customAttributes }: UpdateVisitorData) {
        const data = {
            id,
            user_id: userId,
            name,
            custom_attributes: customAttributes,
        };

        return this.client.put<VisitorObject>({
            url: `/${this.baseUrl}`,
            data,
        });
    }
    delete({ id }: DeleteVisitorByIdData) {
        return this.client.delete<VisitorObject>({
            url: `/${this.baseUrl}/${id}`,
        });
    }
    mergeToContact({ visitor, user, type }: MergeVisitorToContactData) {
        const data = {
            visitor: {
                id: visitor.id,
                user_id: visitor.userId,
                email: visitor.email,
            },
            user: {
                id: user.id,
                user_id: user.userId,
                email: user.email,
            },
            type,
        };

        return this.client.post<ContactObject>({
            url: `/${this.baseUrl}/convert`,
            data,
        });
    }
}

export type IdentificationForVisitor =
    | { id: string; userId?: never }
    | { id?: never; userId: string };

type FindVisitorByIdData = IdentificationForVisitor;

type UpdateVisitorData = IdentificationForVisitor & {
    name?: string;
    customAttributes?: VisitorObject['custom_attributes'];
};

type DeleteVisitorByIdData = { id: string };

export type MergeVisitorToContactData = {
    visitor: VisitorObjectForMerge;
    user: ContactObjectForMerge;
    type: Role;
};

export type VisitorObjectForMerge =
    | { id: string; userId?: never; email?: never }
    | { id?: never; userId: string; email?: never }
    | { id?: never; userId?: never; email: string };

export type ContactObjectForMerge = IdentificationForVisitor & {
    email?: string;
};
