/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Update an existing visitor.
 */
export type UpdateVisitorRequest =
    | {
          id: string;
          name?: string | undefined;
          custom_attributes?: Record<string, string> | undefined;
      }
    | {
          user_id: string;
          name?: string | undefined;
          custom_attributes?: Record<string, string> | undefined;
      };
