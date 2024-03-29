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
 * Google Cloud SQL (MySQL) target options
 * @export
 * @interface TargetOptionsGcpCloudSqlMysql
 */
export interface TargetOptionsGcpCloudSqlMysql {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsGcpCloudSqlMysql
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsGcpCloudSqlMysql
     */
    type: string;
}

export function TargetOptionsGcpCloudSqlMysqlFromJSON(json: any): TargetOptionsGcpCloudSqlMysql {
    return TargetOptionsGcpCloudSqlMysqlFromJSONTyped(json, false);
}

export function TargetOptionsGcpCloudSqlMysqlFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsGcpCloudSqlMysql {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'table_name': json['table_name'],
        'type': json['type'],
    };
}

export function TargetOptionsGcpCloudSqlMysqlToJSON(value?: TargetOptionsGcpCloudSqlMysql | null): any {
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

