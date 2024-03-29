/**
 * Faraday REST API
 * The [Faraday](https://faraday.ai) API makes it easy to predict customer behavior programmatically.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@faraday.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Information about files previously uploaded as Datasets.
 * @export
 * @interface Upload
 */
export interface Upload {
    /**
     * When this file was uploaded
     * @type {Date}
     * @memberof Upload
     */
    created_at: Date;
    /**
     * The size of the uploaded file in bytes
     * @type {number}
     * @memberof Upload
     */
    file_size: number;
    /**
     * The result of an MD5 hash on the file uploaded.
     * This hash is a way of confirming Faraday's copy of the file matches yours.
     * @type {string}
     * @memberof Upload
     */
    md5_hash: string;
    /**
     * The file's name and directory
     * @type {string}
     * @memberof Upload
     */
    subpath: string;
}
export declare function UploadFromJSON(json: any): Upload;
export declare function UploadFromJSONTyped(json: any, ignoreDiscriminator: boolean): Upload;
export declare function UploadToJSON(value?: Upload | null): any;
