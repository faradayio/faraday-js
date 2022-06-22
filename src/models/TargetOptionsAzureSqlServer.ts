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
 * Microsoft Azure SQL Server target options
 * @export
 * @interface TargetOptionsAzureSqlServer
 */
export interface TargetOptionsAzureSqlServer {
    /**
     * Schema
     * @type {string}
     * @memberof TargetOptionsAzureSqlServer
     */
    schema: string;
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsAzureSqlServer
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsAzureSqlServer
     */
    type: string;
}

export function TargetOptionsAzureSqlServerFromJSON(json: any): TargetOptionsAzureSqlServer {
    return TargetOptionsAzureSqlServerFromJSONTyped(json, false);
}

export function TargetOptionsAzureSqlServerFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsAzureSqlServer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': json['schema'],
        'table_name': json['table_name'],
        'type': json['type'],
    };
}

export function TargetOptionsAzureSqlServerToJSON(value?: TargetOptionsAzureSqlServer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': value.schema,
        'table_name': value.table_name,
        'type': value.type,
    };
}
