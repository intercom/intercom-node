/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The file attached to a part
 */
export interface PartAttachment {
    /** The type of attachment */
    type: string;
    /** The name of the attachment */
    name: string;
    /** The URL of the attachment */
    url: string;
    /** The content type of the attachment */
    content_type: string;
    /** The size of the attachment */
    filesize: number;
    /** The width of the attachment */
    width: number;
    /** The height of the attachment */
    height: number;
}
