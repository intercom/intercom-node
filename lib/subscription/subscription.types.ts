export type SubscriptionObject = {
    type: 'subscription';
    id: string;
    state: SubscriptionState;
    default_translation: TranslationObject;
    translations: TranslationObject[];
    consent_type: 'opt_out';
};

export enum SubscriptionState {
    ARCHIVED = 'archived',
    DRAFT = 'draft',
    LIVE = 'live',
}

export type TranslationObject = {
    name: string;
    description: string;
    locale: string;
};
