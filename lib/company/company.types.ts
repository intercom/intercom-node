import { Paginated } from '../common/common.types';

// TO-DO: Describe the type
type CompanyObject = any;

// TO-DO: Refactor to generic Paginated
export type ListCompaniesResponse = Paginated<CompanyObject>;
