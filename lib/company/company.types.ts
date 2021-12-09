import { Paginated } from "../common/common.types";

// TO-DO: Describe the type
type CompanyObject = any;

export type ListCompaniesResponse = Paginated & {companies: Array<CompanyObject>};
