import { Client } from '.';

export default class Scroll<EntityType> {
    constructor(
        private readonly client: Client,
        private readonly scrollUrlDataType: string,
        private scrollParam?: string
    ) {
        this.client = client;
        this.scrollParam = scrollParam;
    }

    async each(params: IEachData): Promise<EntityType[]> {
        this.scrollParam = params.scrollParam ?? undefined;

        return this.eachInternal();
    }

    async eachInternal(storedData: EntityType[] = []): Promise<EntityType[]> {
        const response = await this.client.get<IScrollableResponse<EntityType>>(
            {
                url: this.scrollUrl(),
            }
        );
        const dataFromResponse = response.data;
        const combinedData = [...dataFromResponse, ...storedData];

        if (dataFromResponse.length > 0) {
            this.scrollParam = response.scroll_param;
            return this.eachInternal(combinedData);
        }

        return combinedData;
    }

    async next({
        scrollParam,
    }: INextData): Promise<IScrollableResponse<EntityType>> {
        this.scrollParam = scrollParam;

        const response = await this.client.get<IScrollableResponse<EntityType>>(
            {
                url: this.scrollUrl(),
            }
        );

        return response;
    }

    scrollUrl() {
        const baseScrollUrl = `/${this.scrollUrlDataType}/scroll`;

        return this.scrollParam && this.scrollParam.length > 0
            ? `${baseScrollUrl}?scroll_param=${this.scrollParam}`
            : baseScrollUrl;
    }
}

interface ScrollableResponse<EntityType> {
    type: 'list';
    data: EntityType[];
    pages: number | null;
    total_count: number | null;
    scroll_param?: string;
}

interface EachData {
    scrollParam?: string;
}

type INextData = IEachData;
