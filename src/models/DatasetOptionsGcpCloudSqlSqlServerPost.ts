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
 * (Parameters used to POST a new value of the `DatasetOptionsGcpCloudSqlSqlServer` type.)
 * 
 * gcp_cloud_sql_sql_server dataset options
 * @export
 * @interface DatasetOptionsGcpCloudSqlSqlServerPost
 */
export interface DatasetOptionsGcpCloudSqlSqlServerPost {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsGcpCloudSqlSqlServerPost
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsGcpCloudSqlSqlServerPost
     */
    type: string;
}

export function DatasetOptionsGcpCloudSqlSqlServerPostFromJSON(json: any): DatasetOptionsGcpCloudSqlSqlServerPost {
    return DatasetOptionsGcpCloudSqlSqlServerPostFromJSONTyped(json, false);
}

export function DatasetOptionsGcpCloudSqlSqlServerPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsGcpCloudSqlSqlServerPost {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'table_name': json['table_name'],
        'type': json['type'],
    };
}

export function DatasetOptionsGcpCloudSqlSqlServerPostToJSON(value?: DatasetOptionsGcpCloudSqlSqlServerPost | null): any {
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

