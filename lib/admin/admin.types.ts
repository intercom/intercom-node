export interface AdminObject {
    type: 'admin';
    id: string;
    name: string;
    email: string;
    job_title: string;
    away_mode_enabled: boolean;
    away_mode_reassign: boolean;
    has_inbox_seat: boolean;
    team_ids: Array<number>;
    avatar: string | { image_url: string };
}
