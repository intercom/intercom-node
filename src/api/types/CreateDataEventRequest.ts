/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 *
 */
export type CreateDataEventRequest =
    | {
          id: string;
          event_name: string;
          created_at: number;
          metadata?: Record<string, string> | undefined;
      }
    | {
          user_id: string;
          event_name: string;
          created_at: number;
          metadata?: Record<string, string> | undefined;
      }
    | {
          email: string;
          event_name: string;
          created_at: number;
          metadata?: Record<string, string> | undefined;
      };
