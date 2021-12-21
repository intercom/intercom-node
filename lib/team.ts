import { Client } from '.';
import { TeamObject } from './team/team.types';

export default class Team {
    private readonly baseUrl = 'teams';

    constructor(private readonly client: Client) {
        this.client = client;
    }

    find({ id }: IFindTeamData) {
        return this.client.get<TeamObject>({
            url: `/${this.baseUrl}/${id}`,
        });
    }

    list() {
        return this.client.get<IListTeamsResponse>({
            url: `/${this.baseUrl}`,
        });
    }
}

interface IFindTeamData {
    id: string;
}

interface IListTeamsResponse {
    type: 'team.list';
    teams: TeamObject[];
}
