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
 * mysql target options
 * @export
 * @interface TargetOptionsMysql
 */
export interface TargetOptionsMysql {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsMysql
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsMysql
     */
    type: string;
}

export function TargetOptionsMysqlFromJSON(json: any): TargetOptionsMysql {
    return TargetOptionsMysqlFromJSONTyped(json, false);
}

export function TargetOptionsMysqlFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsMysql {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'table_name': json['table_name'],
        'type': json['type'],
    };
}

export function TargetOptionsMysqlToJSON(value?: TargetOptionsMysql | null): any {
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
