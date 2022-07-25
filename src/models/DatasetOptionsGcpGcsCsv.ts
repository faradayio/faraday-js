/* tslint:disable */
/* eslint-disable */
/**
 * Faraday REST API
 * The [Faraday](https://faraday.ai) SDK makes it easy to predict customer behavior using a simple API.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * GCP Google Cloud Storage (GCS) CSV dataset options
 * @export
 * @interface DatasetOptionsGcpGcsCsv
 */
export interface DatasetOptionsGcpGcsCsv {
    /**
     * CSV delimiter
     * @type {string}
     * @memberof DatasetOptionsGcpGcsCsv
     */
    delimiter?: string;
    /**
     * Whether the files you uploaded are encrypted with Faraday's public key.
     * @type {boolean}
     * @memberof DatasetOptionsGcpGcsCsv
     */
    encrypted?: boolean;
    /**
     * The prefix inside the bucket. May optionally include full filename, file globs (not regexp), and stftime date parsing formatting (which will override blob storage's native timestamps). For example, orders/, orders/file.csv, orders/*.csv, or orders/files-%Y-%m-%d.csv
     * @type {string}
     * @memberof DatasetOptionsGcpGcsCsv
     */
    prefix: string;
    /**
     * Whether to replace all data with only the data in the latest file upon every ingestion.
     * @type {boolean}
     * @memberof DatasetOptionsGcpGcsCsv
     */
    replace_all_with_latest_file?: boolean;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsGcpGcsCsv
     */
    type: string;
}

export function DatasetOptionsGcpGcsCsvFromJSON(json: any): DatasetOptionsGcpGcsCsv {
    return DatasetOptionsGcpGcsCsvFromJSONTyped(json, false);
}

export function DatasetOptionsGcpGcsCsvFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsGcpGcsCsv {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'delimiter': !exists(json, 'delimiter') ? undefined : json['delimiter'],
        'encrypted': !exists(json, 'encrypted') ? undefined : json['encrypted'],
        'prefix': json['prefix'],
        'replace_all_with_latest_file': !exists(json, 'replace_all_with_latest_file') ? undefined : json['replace_all_with_latest_file'],
        'type': json['type'],
    };
}

export function DatasetOptionsGcpGcsCsvToJSON(value?: DatasetOptionsGcpGcsCsv | null): any {
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

