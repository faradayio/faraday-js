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
 * (Parameters used to PUT a value of the `DatasetOptionsSftp` type.)
 *
 * SFTP dataset options
 * @export
 * @interface DatasetOptionsSftpPut
 */
export interface DatasetOptionsSftpPut {
    /**
     * CSV delimiter
     * @type {string}
     * @memberof DatasetOptionsSftpPut
     */
    delimiter?: string;
    /**
     * Whether the files you uploaded are encrypted with Faraday's public key.
     * @type {boolean}
     * @memberof DatasetOptionsSftpPut
     */
    encrypted?: boolean;
    /**
     * A row of column headers. The delimiter must be the same as the `delimiter` parameter and match the data. If not provided, the first row of the CSV file will be used as the headers.
     * @type {string}
     * @memberof DatasetOptionsSftpPut
     */
    header_row?: string;
    /**
     * The path to the data inside the server. May optionally include full filename, file globs (not regexp), and stftime date parsing formatting. For example, orders/, orders/file.csv, orders/*.csv, or orders/files-%Y-%m-%d.csv
     * @type {string}
     * @memberof DatasetOptionsSftpPut
     */
    prefix: string;
    /**
     * Whether to replace all data with only the data in the latest file upon every ingestion. If set to false, each successive upload is merged into the dataset - for example, you have files for 'january_orders,' 'february_orders,' etc, and you want them all included in an 'orders' dataset. Setting this option to true allows you to completely replace the existing dataset with the latest file - for example, once a month you copy your 'subscribers' table from your database into your subscribers dataset at Faraday.
     * @type {boolean}
     * @memberof DatasetOptionsSftpPut
     */
    replace_all_with_latest_file?: boolean;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsSftpPut
     */
    type: string;
}
export declare function DatasetOptionsSftpPutFromJSON(json: any): DatasetOptionsSftpPut;
export declare function DatasetOptionsSftpPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsSftpPut;
export declare function DatasetOptionsSftpPutToJSON(value?: DatasetOptionsSftpPut | null): any;