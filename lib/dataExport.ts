import { Client } from '.';
import { DataExportObject } from './dataExport/dataExport.types';
import { OperationById } from './common/common.types';

export default class DataExport {
    public readonly baseUrl = 'export';

    constructor(private readonly client: Client) {
        this.client = client;
    }

    find({ id }: DataExportByIdData) {
        return this.client.get<DataExportObject>({
            url: `/${this.baseUrl}/content/data/${id}`,
        });
    }

    create({ createdAtBefore, createdAtAfter }: CreateDataExportData) {
        const data = {
            created_at_before: createdAtBefore,
            created_at_after: createdAtAfter,
        };

        return this.client.post<DataExportObject>({
            url: `/${this.client.dataExport.baseUrl}/content/data/`,
            data,
        });
    }

    cancel({ id }: DataExportByIdData) {
        return this.client.post<DataExportObject>({
            url: `/${this.baseUrl}/cancel/${id}`,
            data: {},
        });
    }
}

interface CreateDataExportData {
    createdAtBefore: number;
    createdAtAfter: number;
}

type DataExportByIdData = OperationById;
