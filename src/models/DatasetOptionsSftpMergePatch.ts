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
 * (Parameters used to PATCH the `DatasetOptionsSftp` type.)
 * 
 * SFTP dataset options
 * @export
 * @interface DatasetOptionsSftpMergePatch
 */
export interface DatasetOptionsSftpMergePatch {
    /**
     * Provide the delimiter character, such as `,` or `|`. Defaults to `,`. For tab-delimited files, paste a tab character or use `\t`.
     * @type {string}
     * @memberof DatasetOptionsSftpMergePatch
     */
    delimiter?: string | null;
    /**
     * Whether the files you uploaded are encrypted with Faraday's public key.
     * @type {boolean}
     * @memberof DatasetOptionsSftpMergePatch
     */
    encrypted?: boolean | null;
    /**
     * A row of column headers. The delimiter must be the same as the `delimiter` parameter and match the data. If not provided, the first row of the CSV file will be used as the headers.
     * @type {string}
     * @memberof DatasetOptionsSftpMergePatch
     */
    header_row?: string | null;
    /**
     * The path to the data inside the server. May optionally include full filename, file globs (not regexp), and stftime date parsing formatting. For example, orders/, orders/file.csv, orders/*.csv, or orders/files-%Y-%m-%d.csv
     * @type {string}
     * @memberof DatasetOptionsSftpMergePatch
     */
    prefix?: string;
    /**
     * Whether to replace all data with only the data in the latest file upon every ingestion. If set to false, each successive upload is merged into the dataset - for example, you have files for 'january_orders,' 'february_orders,' etc, and you want them all included in an 'orders' dataset. Setting this option to true allows you to completely replace the existing dataset with the latest file - for example, once a month you copy your 'subscribers' table from your database into your subscribers dataset at Faraday.
     * @type {boolean}
     * @memberof DatasetOptionsSftpMergePatch
     */
    replace_all_with_latest_file?: boolean | null;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsSftpMergePatch
     */
    type: string;
}

export function DatasetOptionsSftpMergePatchFromJSON(json: any): DatasetOptionsSftpMergePatch {
    return DatasetOptionsSftpMergePatchFromJSONTyped(json, false);
}

export function DatasetOptionsSftpMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsSftpMergePatch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'delimiter': !exists(json, 'delimiter') ? undefined : json['delimiter'],
        'encrypted': !exists(json, 'encrypted') ? undefined : json['encrypted'],
        'header_row': !exists(json, 'header_row') ? undefined : json['header_row'],
        'prefix': !exists(json, 'prefix') ? undefined : json['prefix'],
        'replace_all_with_latest_file': !exists(json, 'replace_all_with_latest_file') ? undefined : json['replace_all_with_latest_file'],
        'type': json['type'],
    };
}

export function DatasetOptionsSftpMergePatchToJSON(value?: DatasetOptionsSftpMergePatch | null): any {
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

