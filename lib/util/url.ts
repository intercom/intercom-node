import { URLSearchParams } from 'url';
import { omitBy, isEmpty } from 'lodash';

export const encodeParamsForURL = (
    params: Record<string, string | ReadonlyArray<string>>
): URLSearchParams => new URLSearchParams(purifyFromEmptiness(params));

const purifyFromEmptiness = (
    object: Record<string, string | ReadonlyArray<string>>
): Record<string, string | ReadonlyArray<string>> => omitBy(object, isEmpty);
