import { BaseClient } from './client';
import { TeamObject } from './team/team.types';

export default class Team {
    private readonly baseUrl = 'teams';

    constructor(private readonly client: BaseClient) {
        this.client = client;
    }

    find({ id }: FindTeamData) {
        return this.client.get<TeamObject>({
            url: `/${this.baseUrl}/${id}`,
        });
    }

    list() {
        return this.client.get<ListTeamsResponse>({
            url: `/${this.baseUrl}`,
        });
    }
}

interface FindTeamData {
    id: string;
}

interface ListTeamsResponse {
    type: 'team.list';
    teams: TeamObject[];
}
