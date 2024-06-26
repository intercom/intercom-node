// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as RunAssignmentRulesAPI from './run-assignment-rules';
import * as Shared from '../shared';

export class RunAssignmentRules extends APIResource {
  /**
   * You can let a conversation be automatically assigned following assignment rules.
   * {% admonition type="attention" name="When using workflows" %} It is not possible
   * to use this endpoint with Workflows. {% /admonition %}
   */
  create(
    id: string,
    params?: RunAssignmentRuleCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Conversation>;
  create(id: string, options?: Core.RequestOptions): Core.APIPromise<Shared.Conversation>;
  create(
    id: string,
    params: RunAssignmentRuleCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Conversation> {
    if (isRequestOptions(params)) {
      return this.create(id, {}, params);
    }
    const { 'Intercom-Version': intercomVersion } = params;
    return this._client.post(`/conversations/${id}/run_assignment_rules`, {
      ...options,
      headers: {
        ...(intercomVersion?.toString() != null ?
          { 'Intercom-Version': intercomVersion?.toString() }
        : undefined),
        ...options?.headers,
      },
    });
  }
}

export interface RunAssignmentRuleCreateParams {
  /**
   * Intercom API version.By default, it's equal to the version set in the app
   * package.
   */
  'Intercom-Version'?:
    | '1.0'
    | '1.1'
    | '1.2'
    | '1.3'
    | '1.4'
    | '2.0'
    | '2.1'
    | '2.2'
    | '2.3'
    | '2.4'
    | '2.5'
    | '2.6'
    | '2.7'
    | '2.8'
    | '2.9'
    | '2.10'
    | '2.11'
    | 'Unstable';
}

export namespace RunAssignmentRules {
  export import RunAssignmentRuleCreateParams = RunAssignmentRulesAPI.RunAssignmentRuleCreateParams;
}
