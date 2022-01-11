import { Client } from '.';
import { SegmentObject } from './segment/segment.types';

export default class Segment {
    public readonly baseUrl = 'segments';

    constructor(private readonly client: Client) {
        this.client = client;
    }
    list({ includeCount: include_count }: IListData) {
        const params = { include_count };

        return this.client.get<IListResponse>({
            url: `/${this.baseUrl}`,
            //TO-DO: Change to `params`
            data: params,
        });
    }
    find({ id, includeCount: include_count }: IFindSegmentData) {
        const params = { include_count };

        return this.client.get<SegmentObject>({
            url: `/${this.baseUrl}/${id}`,
            //TO-DO: Change to `params`
            data: params,
        });
    }
}

interface IListData {
    includeCount?: boolean;
}
interface IListResponse {
    type: 'segment.list';
    segments: SegmentObject[];
}
//
interface IFindSegmentData {
    id: string;
    includeCount?: boolean;
}
