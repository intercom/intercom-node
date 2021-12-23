export type StringifiedTimestamp = string;
export type Timestamp = number;
export type Seconds = number;
export type JavascriptObject = Record<string | number, unknown>;

export type Paginated<T> = {
    type: string;
    data: T[];
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

type Join<K, P> = K extends string | number
    ? P extends string | number
        ? `${K}${'' extends P ? '' : '.'}${P}`
        : never
    : never;

type Prev = [
    never,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    ...0[]
];

// D is depth, we don't want to go past 3 nested objects
export type Paths<T, D extends number = 3> = [D] extends [never]
    ? never
    : T extends object
    ? {
          [K in keyof T]-?: K extends string | number
              ? `${K}` | Join<K, Paths<T[K], Prev[D]>>
              : never;
      }[keyof T]
    : '';

// D is depth, we don't want to go past 3 nested objects
export type Leaves<T, D extends number = 3> = [D] extends [never]
    ? never
    : T extends object
    ? { [K in keyof T]-?: Join<K, Leaves<T[K], Prev[D]>> }[keyof T]
    : '';

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

interface FlatQuery<T> {
    field: Leaves<T>;
    operator: Operators;
    value: string | number | null;
}

interface NestedQueries<T> {
    operator: Operators;
    value: Array<FlatQuery<T> | NestedQueries<T>> | string | number | null;
}

export interface GenericSearchFilters<T> {
    query: FlatQuery<T> | NestedQueries<T>;
}

export enum Order {
    DESC = 'desc',
    ASC = 'asc',
}
