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
 * (Parameters used to PATCH the `DatasetOptionsSqlServer` type.)
 * 
 * SQL Server dataset options
 * @export
 * @interface DatasetOptionsSqlServerMergePatch
 */
export interface DatasetOptionsSqlServerMergePatch {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsSqlServerMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsSqlServerMergePatch
     */
    type: string;
}

export function DatasetOptionsSqlServerMergePatchFromJSON(json: any): DatasetOptionsSqlServerMergePatch {
    return DatasetOptionsSqlServerMergePatchFromJSONTyped(json, false);
}

export function DatasetOptionsSqlServerMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsSqlServerMergePatch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'table_name': !exists(json, 'table_name') ? undefined : json['table_name'],
        'type': json['type'],
    };
}

export function DatasetOptionsSqlServerMergePatchToJSON(value?: DatasetOptionsSqlServerMergePatch | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'table_name': value.table_name,
        'type': value.type,
    };
}

