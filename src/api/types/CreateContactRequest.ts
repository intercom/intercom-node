/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Payload to create a contact
 */
export type CreateContactRequest =
    | {
          email: string;
          phone?: string | undefined;
          name?: string | undefined;
          avatar?: string | undefined;
          signed_up_at?: number | undefined;
          last_seen_at?: number | undefined;
          owner_id?: number | undefined;
          unsubscribed_from_emails?: boolean | undefined;
          custom_attributes?: Record<string, unknown> | undefined;
      }
    | {
          external_id: string;
          phone?: string | undefined;
          name?: string | undefined;
          avatar?: string | undefined;
          signed_up_at?: number | undefined;
          last_seen_at?: number | undefined;
          owner_id?: number | undefined;
          unsubscribed_from_emails?: boolean | undefined;
          custom_attributes?: Record<string, unknown> | undefined;
      }
    | {
          role: string;
          phone?: string | undefined;
          name?: string | undefined;
          avatar?: string | undefined;
          signed_up_at?: number | undefined;
          last_seen_at?: number | undefined;
          owner_id?: number | undefined;
          unsubscribed_from_emails?: boolean | undefined;
          custom_attributes?: Record<string, unknown> | undefined;
      };