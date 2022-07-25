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
 * (Parameters used to PATCH the `TargetOptionsAzureSqlServer` type.)
 * 
 * Microsoft Azure SQL Server target options
 * @export
 * @interface TargetOptionsAzureSqlServerMergePatch
 */
export interface TargetOptionsAzureSqlServerMergePatch {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsAzureSqlServerMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsAzureSqlServerMergePatch
     */
    type: string;
}

export function TargetOptionsAzureSqlServerMergePatchFromJSON(json: any): TargetOptionsAzureSqlServerMergePatch {
    return TargetOptionsAzureSqlServerMergePatchFromJSONTyped(json, false);
}

export function TargetOptionsAzureSqlServerMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsAzureSqlServerMergePatch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'table_name': !exists(json, 'table_name') ? undefined : json['table_name'],
        'type': json['type'],
    };
}

export function TargetOptionsAzureSqlServerMergePatchToJSON(value?: TargetOptionsAzureSqlServerMergePatch | null): any {
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

