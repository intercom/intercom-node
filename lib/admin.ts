import { Client } from '.';
import { AdminObject } from './admin/admin.types';
import { dateToUnixTimestamp } from './util/time';

export default class Admin {
    public readonly baseUrl = 'admins';

    constructor(private readonly client: Client) {
        this.client = client;
    }

    find({ id }: IAdminGetByIdData) {
        return this.client.get<AdminObject>({ url: `/${this.baseUrl}/${id}` });
    }
    away({ adminId, enableAwayMode, enableReassignMode }: ISetAdminAwayData) {
        const data = {
            away_mode_enabled: enableAwayMode,
            away_mode_reassign: enableReassignMode,
        };

        return this.client.put<AdminObject>({
            url: `/${this.baseUrl}/${adminId}/away`,
            data,
        });
    }
    listAllActivityLogs({ before, after }: IListAllActivityLogsData) {
        const data = {
            created_at_before: dateToUnixTimestamp(before),
            created_at_after: after ? dateToUnixTimestamp(after) : undefined,
        };

        return this.client.get<IListAllActivityLogsResponse>({
            url: `/${this.baseUrl}/activity_logs`,
            data,
        });
    }
    list() {
        return this.client.get<IListAllResponse>({ url: `/${this.baseUrl}` });
    }
}

interface IAdminGetByIdData {
    id: string;
}

interface ISetAdminAwayData {
    adminId: string;
    enableAwayMode: boolean;
    enableReassignMode: boolean;
}

interface IListAllActivityLogsData {
    before: Date;
    after?: Date;
}

interface IListAllActivityLogsResponse {
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

interface IListAllResponse {
    type: 'admin.list';
    admins: AdminObject[];
}
