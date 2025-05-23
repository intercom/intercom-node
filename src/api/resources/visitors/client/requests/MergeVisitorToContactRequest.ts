/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         type: "user",
 *         user: {
 *             id: "8a88a590-e1c3-41e2-a502-e0649dbf721c",
 *             email: "foo@bar.com"
 *         },
 *         visitor: {
 *             user_id: "3ecf64d0-9ed1-4e9f-88e1-da7d6e6782f3"
 *         }
 *     }
 */
export interface MergeVisitorToContactRequest {
    /** Represents the role of the Contact model. Accepts `lead` or `user`. */
    type: string;
    /** The unique identifiers retained after converting or merging. */
    user: MergeVisitorToContactRequest.User;
    /** The unique identifiers to convert a single Visitor. */
    visitor: MergeVisitorToContactRequest.Visitor;
}

export namespace MergeVisitorToContactRequest {
    /**
     * The unique identifiers retained after converting or merging.
     */
    export type User =
        | {
              id: string;
              email?: string | undefined;
          }
        | {
              user_id: string;
              email?: string | undefined;
          };
    /**
     * The unique identifiers to convert a single Visitor.
     */
    export type Visitor =
        | {
              id: string;
          }
        | {
              user_id: string;
          }
        | {
              email: string;
          };
}
