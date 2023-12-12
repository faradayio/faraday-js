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
 * (Parameters used to POST a new value of the `DatasetOptionsSftp` type.)
 *
 * SFTP dataset options
 * @export
 * @interface DatasetOptionsSftpPost
 */
export interface DatasetOptionsSftpPost {
    /**
     * CSV delimiter
     * @type {string}
     * @memberof DatasetOptionsSftpPost
     */
    delimiter?: string;
    /**
     * Whether the files you uploaded are encrypted with Faraday's public key.
     * @type {boolean}
     * @memberof DatasetOptionsSftpPost
     */
    encrypted?: boolean;
    /**
     * The path to the data inside the server. May optionally include full filename, file globs (not regexp), and stftime date parsing formatting. For example, orders/, orders/file.csv, orders/*.csv, or orders/files-%Y-%m-%d.csv
     * @type {string}
     * @memberof DatasetOptionsSftpPost
     */
    prefix: string;
    /**
     * Whether to replace all data with only the data in the latest file upon every ingestion. If set to false, each successive upload is merged into the dataset - for example, you have files for 'january_orders,' 'february_orders,' etc, and you want them all included in an 'orders' dataset. Setting this option to true allows you to completely replace the existing dataset with the latest file - for example, once a month you copy your 'subscribers' table from your database into your subscribers dataset at Faraday.
     * @type {boolean}
     * @memberof DatasetOptionsSftpPost
     */
    replace_all_with_latest_file?: boolean;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsSftpPost
     */
    type: string;
}
export declare function DatasetOptionsSftpPostFromJSON(json: any): DatasetOptionsSftpPost;
export declare function DatasetOptionsSftpPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsSftpPost;
export declare function DatasetOptionsSftpPostToJSON(value?: DatasetOptionsSftpPost | null): any;
