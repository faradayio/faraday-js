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
 * (Parameters used to PATCH the `TargetOptionsSqlServer` type.)
 * 
 * SQL Server target options
 * @export
 * @interface TargetOptionsSqlServerMergePatch
 */
export interface TargetOptionsSqlServerMergePatch {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsSqlServerMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsSqlServerMergePatch
     */
    type: string;
}

export function TargetOptionsSqlServerMergePatchFromJSON(json: any): TargetOptionsSqlServerMergePatch {
    return TargetOptionsSqlServerMergePatchFromJSONTyped(json, false);
}

export function TargetOptionsSqlServerMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsSqlServerMergePatch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'table_name': !exists(json, 'table_name') ? undefined : json['table_name'],
        'type': json['type'],
    };
}

export function TargetOptionsSqlServerMergePatchToJSON(value?: TargetOptionsSqlServerMergePatch | null): any {
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

