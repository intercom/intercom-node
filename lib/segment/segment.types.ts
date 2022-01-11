import { Role, Timestamp } from '../common/common.types';

export type SegmentObject = {
    type: 'segment';
    id: string;
    name: string;
    created_at: Timestamp;
    updated_at: Timestamp;
    person_type: Role;
    count?: number;
};
