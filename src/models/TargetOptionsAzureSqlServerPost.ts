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
 * (Parameters used to POST a new value of the `TargetOptionsAzureSqlServer` type.)
 * 
 * Azure SQL target options
 * @export
 * @interface TargetOptionsAzureSqlServerPost
 */
export interface TargetOptionsAzureSqlServerPost {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsAzureSqlServerPost
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsAzureSqlServerPost
     */
    type: string;
}

export function TargetOptionsAzureSqlServerPostFromJSON(json: any): TargetOptionsAzureSqlServerPost {
    return TargetOptionsAzureSqlServerPostFromJSONTyped(json, false);
}

export function TargetOptionsAzureSqlServerPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsAzureSqlServerPost {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'table_name': json['table_name'],
        'type': json['type'],
    };
}

export function TargetOptionsAzureSqlServerPostToJSON(value?: TargetOptionsAzureSqlServerPost | null): any {
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

