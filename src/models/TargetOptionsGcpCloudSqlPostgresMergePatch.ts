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
 * (Parameters used to PATCH the `TargetOptionsGcpCloudSqlPostgres` type.)
 * 
 * gcp_cloud_sql_postgres target options
 * @export
 * @interface TargetOptionsGcpCloudSqlPostgresMergePatch
 */
export interface TargetOptionsGcpCloudSqlPostgresMergePatch {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsGcpCloudSqlPostgresMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsGcpCloudSqlPostgresMergePatch
     */
    type: string;
}

export function TargetOptionsGcpCloudSqlPostgresMergePatchFromJSON(json: any): TargetOptionsGcpCloudSqlPostgresMergePatch {
    return TargetOptionsGcpCloudSqlPostgresMergePatchFromJSONTyped(json, false);
}

export function TargetOptionsGcpCloudSqlPostgresMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsGcpCloudSqlPostgresMergePatch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'table_name': !exists(json, 'table_name') ? undefined : json['table_name'],
        'type': json['type'],
    };
}

export function TargetOptionsGcpCloudSqlPostgresMergePatchToJSON(value?: TargetOptionsGcpCloudSqlPostgresMergePatch | null): any {
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

