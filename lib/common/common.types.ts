export type StringifiedTimestamp = string;
export type Timestamp = number;
export type Seconds = number;
export type JavascriptObject = Record<string | number, unknown>;

export enum Role {
    USER = 'user',
    LEAD = 'lead',
}

export type PaginatedBase = {
    type: string;
    pages: {
        type: 'pages';
        next?: {
            page: number;
            starting_after?: string;
        };
        page: number;
        per_page: number;
        total_pages: number;
    };
    total_count: number;
};

export type Paginated<T> = PaginatedBase & {
    data: T[];
};

export enum Operators {
    AND = 'AND',
    OR = 'OR',
    EQUALS = '=',
    NOT_EQUALS = '!=',
    IN = 'IN',
    NIN = 'NIN',
    GREATER_THAN = '>',
    LESS_THAN = '<',
    CONTAINS = '~',
    NOT_CONTAINS = '!~',
    STARTS_WITH = '^',
    ENDS_WITH = '$',
}

interface FlatQuery {
    field: string;
    operator: Operators;
    value: string | number | string[] | number[] | null;
}

interface NestedQueries {
    operator: Operators;
    value:
        | Array<FlatQuery | NestedQueries>
        | string
        | number
        | string[]
        | number[]
        | null;
}

export interface GenericSearchFilters {
    query: FlatQuery | NestedQueries;
}

export enum Order {
    DESC = 'desc',
    ASC = 'asc',
}

export interface PaginationParams {
    page?: number;
    perPage?: number;
}

export interface GenericDeletedResponse<ObjectType extends string> {
    id: string;
    object: ObjectType;
    deleted: boolean;
}

export interface OperationById {
    id: string;
}
