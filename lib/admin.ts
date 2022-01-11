import { Client } from '.';
import { AdminObject } from './admin/admin.types';
import { dateToUnixTimestamp } from './util/time';

export default class Admin {
    public readonly baseUrl = 'admins';

    constructor(private readonly client: Client) {
        this.client = client;
    }

    find({ id }: AdminGetByIdData) {
        return this.client.get<AdminObject>({ url: `/${this.baseUrl}/${id}` });
    }
    away({ adminId, enableAwayMode, enableReassignMode }: SetAdminAwayData) {
        const data = {
            away_mode_enabled: enableAwayMode,
            away_mode_reassign: enableReassignMode,
        };

        return this.client.put<AdminObject>({
            url: `/${this.baseUrl}/${adminId}/away`,
            data,
        });
    }
    listAllActivityLogs({ before, after }: ListAllActivityLogsData) {
        const params = {
            created_at_after: dateToUnixTimestamp(after),
            created_at_before: before ? dateToUnixTimestamp(before) : undefined,
        };

        return this.client.get<ListAllActivityLogsResponse>({
            url: `/${this.baseUrl}/activity_logs`,
            params,
        });
    }
    list() {
        return this.client.get<ListAllResponse>({ url: `/${this.baseUrl}` });
    }
}

interface AdminGetByIdData {
    id: string;
}

interface SetAdminAwayData {
    adminId: string;
    enableAwayMode: boolean;
    enableReassignMode: boolean;
}

interface ListAllActivityLogsData {
    after: Date;
    before?: Date;
}

interface ListAllActivityLogsResponse {
    type: 'activity_log.list';
    activityLogs: Array<ActivityObject>;
    pages?: Pages;
}

interface ActivityObject {
    id: string;
    activity_type: string;
    activity_description: string;
    metadata: Record<string | number, string | number>;
    performed_by: AdminObject;
}

interface Pages {
    type: 'pages';
    next: unknown | null;
    page: number;
    per_page: number;
    total_pages: number;
}

interface ListAllResponse {
    type: 'admin.list';
    admins: AdminObject[];
}
