/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         id: 1,
 *         display_as: "plaintext"
 *     }
 */
export interface RetrieveConversationRequest {
    /**
     * The id of the conversation to target
     */
    id: number;
    /**
     * Set to plaintext to retrieve conversation messages in plain text.
     */
    display_as?: string;
}
