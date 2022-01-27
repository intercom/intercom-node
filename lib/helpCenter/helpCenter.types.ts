import { ArticleObject, Locales } from '../index';

export type CollectionObject = {
    type: 'collection';
    name: string;
    icon: string;
    order: number;
} & Pick<
    ArticleObject,
    | 'id'
    | 'workspace_id'
    | 'description'
    | 'created_at'
    | 'updated_at'
    | 'url'
    | 'default_locale'
    | 'translated_content'
>;

export type SectionObject = {
    type: 'section';
    parent_id: number;
} & Omit<CollectionObject, 'type'>;

export type GroupTranslatedContentObject = {
    type: 'group_translated_content';
} & Partial<HelpCenterLocalesMapping>;

export type HelpCenterLocalesMapping = {
    [key in Locales]: GroupContentObject;
};

export type GroupContentObject = {
    name: string;
    description: string;
    type?: 'group_content';
};
