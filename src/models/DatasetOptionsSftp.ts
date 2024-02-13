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
 * SFTP dataset options
 * @export
 * @interface DatasetOptionsSftp
 */
export interface DatasetOptionsSftp {
    /**
     * CSV delimiter
     * @type {string}
     * @memberof DatasetOptionsSftp
     */
    delimiter?: string;
    /**
     * Whether the files you uploaded are encrypted with Faraday's public key.
     * @type {boolean}
     * @memberof DatasetOptionsSftp
     */
    encrypted?: boolean;
    /**
     * A row of column headers. The delimiter must be the same as the `delimiter` parameter and match the data. If not provided, the first row of the CSV file will be used as the headers.
     * @type {string}
     * @memberof DatasetOptionsSftp
     */
    header_row?: string;
    /**
     * The path to the data inside the server. May optionally include full filename, file globs (not regexp), and stftime date parsing formatting. For example, orders/, orders/file.csv, orders/*.csv, or orders/files-%Y-%m-%d.csv
     * @type {string}
     * @memberof DatasetOptionsSftp
     */
    prefix: string;
    /**
     * Whether to replace all data with only the data in the latest file upon every ingestion. If set to false, each successive upload is merged into the dataset - for example, you have files for 'january_orders,' 'february_orders,' etc, and you want them all included in an 'orders' dataset. Setting this option to true allows you to completely replace the existing dataset with the latest file - for example, once a month you copy your 'subscribers' table from your database into your subscribers dataset at Faraday.
     * @type {boolean}
     * @memberof DatasetOptionsSftp
     */
    replace_all_with_latest_file?: boolean;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsSftp
     */
    type: string;
}

export function DatasetOptionsSftpFromJSON(json: any): DatasetOptionsSftp {
    return DatasetOptionsSftpFromJSONTyped(json, false);
}

export function DatasetOptionsSftpFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsSftp {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'delimiter': !exists(json, 'delimiter') ? undefined : json['delimiter'],
        'encrypted': !exists(json, 'encrypted') ? undefined : json['encrypted'],
        'header_row': !exists(json, 'header_row') ? undefined : json['header_row'],
        'prefix': json['prefix'],
        'replace_all_with_latest_file': !exists(json, 'replace_all_with_latest_file') ? undefined : json['replace_all_with_latest_file'],
        'type': json['type'],
    };
}

export function DatasetOptionsSftpToJSON(value?: DatasetOptionsSftp | null): any {
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
        'prefix': value.prefix,
        'replace_all_with_latest_file': value.replace_all_with_latest_file,
        'type': value.type,
    };
}

