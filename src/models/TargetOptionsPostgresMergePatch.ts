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
 * (Parameters used to PATCH the `TargetOptionsPostgres` type.)
 * 
 * postgres target options
 * @export
 * @interface TargetOptionsPostgresMergePatch
 */
export interface TargetOptionsPostgresMergePatch {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsPostgresMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsPostgresMergePatch
     */
    type: string;
}

export function TargetOptionsPostgresMergePatchFromJSON(json: any): TargetOptionsPostgresMergePatch {
    return TargetOptionsPostgresMergePatchFromJSONTyped(json, false);
}

export function TargetOptionsPostgresMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsPostgresMergePatch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'table_name': !exists(json, 'table_name') ? undefined : json['table_name'],
        'type': json['type'],
    };
}

export function TargetOptionsPostgresMergePatchToJSON(value?: TargetOptionsPostgresMergePatch | null): any {
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

