import { Timestamp } from '../common/common.types';

export type ArticleObject = {
    type: 'article';
    id: string;
    workspace_id: string;
    title: string;
    description: string;
    body: string;
    author_id: string;
    state: string;
    created_at: Timestamp;
    updated_at: Timestamp;
    url: string;
    parent_id: string;
    parent_type: string;
    default_locale: string;
    translated_content: TranslatedContentObject;
    statistics: StatisticsObject;
};

export enum Locales {
    ARABIC = 'ar',
    BULGARIAN = 'bg',
    BOSNIAN = 'bs',
    CATALAN = 'ca',
    CZECH = 'cs',
    DANISH = 'da',
    GERMAN = 'de',
    DE_FORM = 'de-form',
    GREEK = 'el',
    ENGLISH = 'en',
    SPANISH = 'es',
    ESTONIAN = 'et',
    FINNISH = 'fi',
    FRENCH = 'fr',
    HEBREW = 'he',
    CROATIAN = 'hr',
    HUNGARIAN = 'hu',
    INDONESIAN = 'id',
    ITALIAN = 'it',
    JAPANESE = 'ja',
    KOREAN = 'ko',
    LITHUANIAN = 'lt',
    LATVIAN = 'lv',
    MONGOLIAN = 'mn',
    NORWEGIAN = 'nb',
    DUTCH = 'nl',
    POLISH = 'pl',
    PORTUGUESE_BRAZIL = 'pt-BR',
    PORTUGUESE = 'pt',
    ROMANIAN = 'ro',
    RUSSIAN = 'ru',
    SLOVENIAN = 'sl',
    SERBIAN = 'sr',
    SWEDISH = 'sv',
    TURKISH = 'tr',
    VIETNAMESE = 'vi',
    CHINESE_S = 'zh-CN',
    CHINESE_T = 'zh-TW',
}

export interface ContentObject {
    type?: 'article_content';
    title: string;
    description: string;
    body: string;
    author?: string;
    author_id?: number;
    state: string;
    created_at?: Timestamp;
    updated_at?: Timestamp;
    url?: string;
}

export type ArticleLocalesMapping = {
    [key in Locales]: ContentObject;
};

export type TranslatedContentObject = {
    type: 'article_translated_content';
} & Partial<ArticleLocalesMapping>;

export type StatisticsObject = {
    type: 'article_statistics';
    views: number;
    conversations: number;
    reactions: number;
    happy_reaction_percentage: number;
    neutral_reaction_percentage: number;
    sad_reaction_percentage: number;
};
