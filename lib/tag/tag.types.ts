export interface TagObject {
    id: string;
    name: string;
    type: 'tag';
}

export interface TagListObject {
    tags: (TagObject & {
        applied_at: string;
        applied_by: {
            id?: string;
            type: string;
        };
    })[];
    type: 'tag.list';
}
