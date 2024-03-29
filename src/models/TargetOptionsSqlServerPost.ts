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
 * (Parameters used to POST a new value of the `TargetOptionsSqlServer` type.)
 * 
 * SQL Server target options
 * @export
 * @interface TargetOptionsSqlServerPost
 */
export interface TargetOptionsSqlServerPost {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsSqlServerPost
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsSqlServerPost
     */
    type: string;
}

export function TargetOptionsSqlServerPostFromJSON(json: any): TargetOptionsSqlServerPost {
    return TargetOptionsSqlServerPostFromJSONTyped(json, false);
}

export function TargetOptionsSqlServerPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsSqlServerPost {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'table_name': json['table_name'],
        'type': json['type'],
    };
}

export function TargetOptionsSqlServerPostToJSON(value?: TargetOptionsSqlServerPost | null): any {
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

