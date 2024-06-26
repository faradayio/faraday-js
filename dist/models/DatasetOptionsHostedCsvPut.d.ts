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
 * (Parameters used to PUT a value of the `DatasetOptionsHostedCsv` type.)
 *
 * CSV dataset options
 * @export
 * @interface DatasetOptionsHostedCsvPut
 */
export interface DatasetOptionsHostedCsvPut {
    /**
     * Provide the delimiter character, such as `,` or `|`. Defaults to `,`. For tab-delimited files, paste a tab character or use `\t`.
     * @type {string}
     * @memberof DatasetOptionsHostedCsvPut
     */
    delimiter?: string;
    /**
     * Whether the files you uploaded are encrypted with Faraday's public key.
     * @type {boolean}
     * @memberof DatasetOptionsHostedCsvPut
     */
    encrypted?: boolean;
    /**
     * A row of column headers. The delimiter must be the same as the `delimiter` parameter and match the data. If not provided, the first row of the CSV file will be used as the headers.
     * @type {string}
     * @memberof DatasetOptionsHostedCsvPut
     */
    header_row?: string;
    /**
     * Whether to replace all data with only the data in the latest file upon every ingestion. If set to false, each successive upload is merged into the dataset - for example, you have files for 'january_orders,' 'february_orders,' etc, and you want them all included in an 'orders' dataset. Setting this option to true allows you to completely replace the existing dataset with the latest file - for example, once a month you copy your 'subscribers' table from your database into your subscribers dataset at Faraday.
     * @type {boolean}
     * @memberof DatasetOptionsHostedCsvPut
     */
    replace_all_with_latest_file?: boolean;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsHostedCsvPut
     */
    type: string;
    /**
     * Subdirectory of uploads where files are stored and retrieved.
     * A directory is dedicated to one or more files which ought to have the same shape and contents. One or more datasets can pull from that folder (and in different ways) and push to one or more event streams. So if you have two different types of orders from two different POS/ecommerce systems, you would put them each in separate folders. Then you would create two different datasets that would both point to an `orders` stream.
     * @type {string}
     * @memberof DatasetOptionsHostedCsvPut
     */
    upload_directory: string;
}
export declare function DatasetOptionsHostedCsvPutFromJSON(json: any): DatasetOptionsHostedCsvPut;
export declare function DatasetOptionsHostedCsvPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsHostedCsvPut;
export declare function DatasetOptionsHostedCsvPutToJSON(value?: DatasetOptionsHostedCsvPut | null): any;
