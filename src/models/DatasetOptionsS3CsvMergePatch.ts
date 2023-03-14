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
 * (Parameters used to PATCH the `DatasetOptionsS3Csv` type.)
 * 
 * S3 dataset options
 * @export
 * @interface DatasetOptionsS3CsvMergePatch
 */
export interface DatasetOptionsS3CsvMergePatch {
    /**
     * CSV delimiter
     * @type {string}
     * @memberof DatasetOptionsS3CsvMergePatch
     */
    delimiter?: string | null;
    /**
     * Whether the files you uploaded are encrypted with Faraday's public key.
     * @type {boolean}
     * @memberof DatasetOptionsS3CsvMergePatch
     */
    encrypted?: boolean | null;
    /**
     * The prefix inside the bucket. May optionally include full filename, file globs (not regexp), and stftime date parsing formatting (which will override blob storage's native timestamps). For example, orders/, orders/file.csv, orders/*.csv, or orders/files-%Y-%m-%d.csv
     * @type {string}
     * @memberof DatasetOptionsS3CsvMergePatch
     */
    prefix?: string;
    /**
     * Whether to replace all data with only the data in the latest file upon every ingestion. If set to false, each successive upload is merged into the dataset - for example, you have files for 'january_orders,' 'february_orders,' etc, and you want them all included in an 'orders' dataset. Setting this option to true allows you to completely replace the existing dataset with the latest file - for example, once a month you copy your 'subscribers' table from your database into your subscribers dataset at Faraday.
     * @type {boolean}
     * @memberof DatasetOptionsS3CsvMergePatch
     */
    replace_all_with_latest_file?: boolean | null;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsS3CsvMergePatch
     */
    type: string;
}

export function DatasetOptionsS3CsvMergePatchFromJSON(json: any): DatasetOptionsS3CsvMergePatch {
    return DatasetOptionsS3CsvMergePatchFromJSONTyped(json, false);
}

export function DatasetOptionsS3CsvMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsS3CsvMergePatch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'delimiter': !exists(json, 'delimiter') ? undefined : json['delimiter'],
        'encrypted': !exists(json, 'encrypted') ? undefined : json['encrypted'],
        'prefix': !exists(json, 'prefix') ? undefined : json['prefix'],
        'replace_all_with_latest_file': !exists(json, 'replace_all_with_latest_file') ? undefined : json['replace_all_with_latest_file'],
        'type': json['type'],
    };
}

export function DatasetOptionsS3CsvMergePatchToJSON(value?: DatasetOptionsS3CsvMergePatch | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'delimiter': value.delimiter,
        'encrypted': value.encrypted,
        'prefix': value.prefix,
        'replace_all_with_latest_file': value.replace_all_with_latest_file,
        'type': value.type,
    };
}

