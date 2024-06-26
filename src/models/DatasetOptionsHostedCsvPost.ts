/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
/**
 * (Parameters used to POST a new value of the `DatasetOptionsHostedCsv` type.)
 * 
 * CSV dataset options
 * @export
 * @interface DatasetOptionsHostedCsvPost
 */
export interface DatasetOptionsHostedCsvPost {
    /**
     * Provide the delimiter character, such as `,` or `|`. Defaults to `,`. For tab-delimited files, paste a tab character or use `\t`.
     * @type {string}
     * @memberof DatasetOptionsHostedCsvPost
     */
    delimiter?: string;
    /**
     * Whether the files you uploaded are encrypted with Faraday's public key.
     * @type {boolean}
     * @memberof DatasetOptionsHostedCsvPost
     */
    encrypted?: boolean;
    /**
     * A row of column headers. The delimiter must be the same as the `delimiter` parameter and match the data. If not provided, the first row of the CSV file will be used as the headers.
     * @type {string}
     * @memberof DatasetOptionsHostedCsvPost
     */
    header_row?: string;
    /**
     * Whether to replace all data with only the data in the latest file upon every ingestion. If set to false, each successive upload is merged into the dataset - for example, you have files for 'january_orders,' 'february_orders,' etc, and you want them all included in an 'orders' dataset. Setting this option to true allows you to completely replace the existing dataset with the latest file - for example, once a month you copy your 'subscribers' table from your database into your subscribers dataset at Faraday.
     * @type {boolean}
     * @memberof DatasetOptionsHostedCsvPost
     */
    replace_all_with_latest_file?: boolean;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsHostedCsvPost
     */
    type: string;
    /**
     * Subdirectory of uploads where files are stored and retrieved.
     * A directory is dedicated to one or more files which ought to have the same shape and contents. One or more datasets can pull from that folder (and in different ways) and push to one or more event streams. So if you have two different types of orders from two different POS/ecommerce systems, you would put them each in separate folders. Then you would create two different datasets that would both point to an `orders` stream.
     * @type {string}
     * @memberof DatasetOptionsHostedCsvPost
     */
    upload_directory: string;
}

export function DatasetOptionsHostedCsvPostFromJSON(json: any): DatasetOptionsHostedCsvPost {
    return DatasetOptionsHostedCsvPostFromJSONTyped(json, false);
}

export function DatasetOptionsHostedCsvPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsHostedCsvPost {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'delimiter': !exists(json, 'delimiter') ? undefined : json['delimiter'],
        'encrypted': !exists(json, 'encrypted') ? undefined : json['encrypted'],
        'header_row': !exists(json, 'header_row') ? undefined : json['header_row'],
        'replace_all_with_latest_file': !exists(json, 'replace_all_with_latest_file') ? undefined : json['replace_all_with_latest_file'],
        'type': json['type'],
        'upload_directory': json['upload_directory'],
    };
}

export function DatasetOptionsHostedCsvPostToJSON(value?: DatasetOptionsHostedCsvPost | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'delimiter': value.delimiter,
        'encrypted': value.encrypted,
        'header_row': value.header_row,
        'replace_all_with_latest_file': value.replace_all_with_latest_file,
        'type': value.type,
        'upload_directory': value.upload_directory,
    };
}

