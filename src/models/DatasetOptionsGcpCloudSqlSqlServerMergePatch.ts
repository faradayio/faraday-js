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
 * (Parameters used to PATCH the `DatasetOptionsGcpCloudSqlSqlServer` type.)
 * 
 * gcp_cloud_sql_sql_server dataset options
 * @export
 * @interface DatasetOptionsGcpCloudSqlSqlServerMergePatch
 */
export interface DatasetOptionsGcpCloudSqlSqlServerMergePatch {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsGcpCloudSqlSqlServerMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsGcpCloudSqlSqlServerMergePatch
     */
    type: string;
}

export function DatasetOptionsGcpCloudSqlSqlServerMergePatchFromJSON(json: any): DatasetOptionsGcpCloudSqlSqlServerMergePatch {
    return DatasetOptionsGcpCloudSqlSqlServerMergePatchFromJSONTyped(json, false);
}

export function DatasetOptionsGcpCloudSqlSqlServerMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsGcpCloudSqlSqlServerMergePatch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'table_name': !exists(json, 'table_name') ? undefined : json['table_name'],
        'type': json['type'],
    };
}

export function DatasetOptionsGcpCloudSqlSqlServerMergePatchToJSON(value?: DatasetOptionsGcpCloudSqlSqlServerMergePatch | null): any {
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

