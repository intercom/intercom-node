import {
    Client,
    CompanySegmentCountResponse,
    CompanyTagCountResponse,
    CompanyUserCountResponse,
    UserCountResponse,
    UserSegmentCountResponse,
    UserTagCountResponse,
} from '.';
import {
    AdminConversationCountResponse,
    AppTotalCountResponse,
    CompanyCountResponse,
    ConversationCountResponse,
    CountEntity,
    CountType,
} from './count/count.types';

export default class Count {
    public readonly baseUrl = 'counts';

    constructor(private readonly client: Client) {
        this.client = client;
    }

    forApp() {
        return this.client.get<AppTotalCountResponse>({
            url: `/${this.baseUrl}`,
        });
    }

    countCompany() {
        return this.client.get<CompanyCountResponse>({
            url: `/${this.baseUrl}`,
            params: { type: CountType.COMPANY },
        });
    }
    countCompanySegment() {
        return this.client.get<CompanySegmentCountResponse>({
            url: `/${this.baseUrl}`,
            params: { type: CountType.COMPANY, count: CountEntity.SEGMENT },
        });
    }
    countCompanyTag() {
        return this.client.get<CompanyTagCountResponse>({
            url: `/${this.baseUrl}`,
            params: { type: CountType.COMPANY, count: CountEntity.TAG },
        });
    }
    countCompanyUser() {
        return this.client.get<CompanyUserCountResponse>({
            url: `/${this.baseUrl}`,
            params: { type: CountType.COMPANY, count: CountEntity.USER },
        });
    }
    countConversation() {
        return this.client.get<ConversationCountResponse>({
            url: `/${this.baseUrl}`,
            params: { type: CountType.CONVERSATION },
        });
    }
    countAdminConversation() {
        return this.client.get<AdminConversationCountResponse>({
            url: `/${this.baseUrl}`,
            params: { type: CountType.CONVERSATION, count: CountEntity.ADMIN },
        });
    }
    countUser() {
        return this.client.get<UserCountResponse>({
            url: `/${this.baseUrl}`,
            params: { type: CountType.USER },
        });
    }
    countUserSegment() {
        return this.client.get<UserSegmentCountResponse>({
            url: `/${this.baseUrl}`,
            params: { type: CountType.USER, count: CountEntity.SEGMENT },
        });
    }
    countUserTag() {
        return this.client.get<UserTagCountResponse>({
            url: `/${this.baseUrl}`,
            params: { type: CountType.USER, count: CountEntity.TAG },
        });
    }
}
