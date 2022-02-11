import { AdminObject, Timestamp } from '..';

export type NoteObject = {
    type: 'note';
    id: string;
    created_at: Timestamp;
    contact: {
        type: 'contact';
        id: string;
    };
    author?: Pick<
        AdminObject,
        | 'type'
        | 'id'
        | 'name'
        | 'email'
        | 'away_mode_enabled'
        | 'away_mode_reassign'
        | 'avatar'
    >;
    body: string;
};
