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
 * (Parameters used to PUT a value of the `DatasetOptionsGcpGcsCsv` type.)
 *
 * GCS dataset options
 * @export
 * @interface DatasetOptionsGcpGcsCsvPut
 */
export interface DatasetOptionsGcpGcsCsvPut {
    /**
     * CSV delimiter
     * @type {string}
     * @memberof DatasetOptionsGcpGcsCsvPut
     */
    delimiter?: string;
    /**
     * Whether the files you uploaded are encrypted with Faraday's public key.
     * @type {boolean}
     * @memberof DatasetOptionsGcpGcsCsvPut
     */
    encrypted?: boolean;
    /**
     * A row of column headers. The delimiter must be the same as the `delimiter` parameter and match the data. If not provided, the first row of the CSV file will be used as the headers.
     * @type {string}
     * @memberof DatasetOptionsGcpGcsCsvPut
     */
    header_row?: string;
    /**
     * The prefix inside the bucket. May optionally include full filename, file globs (not regexp), and stftime date parsing formatting (which will override blob storage's native timestamps). For example, orders/, orders/file.csv, orders/*.csv, or orders/files-%Y-%m-%d.csv
     * @type {string}
     * @memberof DatasetOptionsGcpGcsCsvPut
     */
    prefix: string;
    /**
     * Whether to replace all data with only the data in the latest file upon every ingestion. If set to false, each successive upload is merged into the dataset - for example, you have files for 'january_orders,' 'february_orders,' etc, and you want them all included in an 'orders' dataset. Setting this option to true allows you to completely replace the existing dataset with the latest file - for example, once a month you copy your 'subscribers' table from your database into your subscribers dataset at Faraday.
     * @type {boolean}
     * @memberof DatasetOptionsGcpGcsCsvPut
     */
    replace_all_with_latest_file?: boolean;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsGcpGcsCsvPut
     */
    type: string;
}
export declare function DatasetOptionsGcpGcsCsvPutFromJSON(json: any): DatasetOptionsGcpGcsCsvPut;
export declare function DatasetOptionsGcpGcsCsvPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsGcpGcsCsvPut;
export declare function DatasetOptionsGcpGcsCsvPutToJSON(value?: DatasetOptionsGcpGcsCsvPut | null): any;
