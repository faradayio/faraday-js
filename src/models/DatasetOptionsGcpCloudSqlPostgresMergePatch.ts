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
 * (Parameters used to PATCH the `DatasetOptionsGcpCloudSqlPostgres` type.)
 * 
 * gcp_cloud_sql_postgres dataset options
 * @export
 * @interface DatasetOptionsGcpCloudSqlPostgresMergePatch
 */
export interface DatasetOptionsGcpCloudSqlPostgresMergePatch {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsGcpCloudSqlPostgresMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsGcpCloudSqlPostgresMergePatch
     */
    type: string;
}

export function DatasetOptionsGcpCloudSqlPostgresMergePatchFromJSON(json: any): DatasetOptionsGcpCloudSqlPostgresMergePatch {
    return DatasetOptionsGcpCloudSqlPostgresMergePatchFromJSONTyped(json, false);
}

export function DatasetOptionsGcpCloudSqlPostgresMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsGcpCloudSqlPostgresMergePatch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'table_name': !exists(json, 'table_name') ? undefined : json['table_name'],
        'type': json['type'],
    };
}

export function DatasetOptionsGcpCloudSqlPostgresMergePatchToJSON(value?: DatasetOptionsGcpCloudSqlPostgresMergePatch | null): any {
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
