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
 * Google Cloud SQL (SQL Server) target options
 * @export
 * @interface TargetOptionsGcpCloudSqlSqlServer
 */
export interface TargetOptionsGcpCloudSqlSqlServer {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsGcpCloudSqlSqlServer
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsGcpCloudSqlSqlServer
     */
    type: string;
}

export function TargetOptionsGcpCloudSqlSqlServerFromJSON(json: any): TargetOptionsGcpCloudSqlSqlServer {
    return TargetOptionsGcpCloudSqlSqlServerFromJSONTyped(json, false);
}

export function TargetOptionsGcpCloudSqlSqlServerFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsGcpCloudSqlSqlServer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'table_name': json['table_name'],
        'type': json['type'],
    };
}

export function TargetOptionsGcpCloudSqlSqlServerToJSON(value?: TargetOptionsGcpCloudSqlSqlServer | null): any {
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

