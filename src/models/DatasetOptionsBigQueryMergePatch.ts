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
 * (Parameters used to PATCH the `DatasetOptionsBigQuery` type.)
 * 
 * Google BigQuery dataset options
 * @export
 * @interface DatasetOptionsBigQueryMergePatch
 */
export interface DatasetOptionsBigQueryMergePatch {
    /**
     * Dataset name
     * @type {string}
     * @memberof DatasetOptionsBigQueryMergePatch
     */
    dataset_name?: string;
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsBigQueryMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsBigQueryMergePatch
     */
    type: string;
}

export function DatasetOptionsBigQueryMergePatchFromJSON(json: any): DatasetOptionsBigQueryMergePatch {
    return DatasetOptionsBigQueryMergePatchFromJSONTyped(json, false);
}

export function DatasetOptionsBigQueryMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsBigQueryMergePatch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dataset_name': !exists(json, 'dataset_name') ? undefined : json['dataset_name'],
        'table_name': !exists(json, 'table_name') ? undefined : json['table_name'],
        'type': json['type'],
    };
}

export function DatasetOptionsBigQueryMergePatchToJSON(value?: DatasetOptionsBigQueryMergePatch | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'dataset_name': value.dataset_name,
        'table_name': value.table_name,
        'type': value.type,
    };
}

