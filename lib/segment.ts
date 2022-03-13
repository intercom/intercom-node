import { BaseClient } from './client';
import { SegmentObject } from './segment/segment.types';

export default class Segment {
    public readonly baseUrl = 'segments';

    constructor(private readonly client: BaseClient) {
        this.client = client;
    }
    list({ includeCount: include_count }: ListData) {
        const params = { include_count };

        return this.client.get<ListResponse>({
            url: `/${this.baseUrl}`,
            params,
        });
    }
    find({ id, includeCount: include_count }: FindSegmentData) {
        const params = { include_count };

        return this.client.get<SegmentObject>({
            url: `/${this.baseUrl}/${id}`,
            params,
        });
    }
}

interface ListData {
    includeCount?: boolean;
}
interface ListResponse {
    type: 'segment.list';
    segments: SegmentObject[];
}
//
interface FindSegmentData {
    id: string;
    includeCount?: boolean;
}
