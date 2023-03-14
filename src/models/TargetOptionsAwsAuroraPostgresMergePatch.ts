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
 * (Parameters used to PATCH the `TargetOptionsAwsAuroraPostgres` type.)
 * 
 * AWS Aurora Postgres target options
 * @export
 * @interface TargetOptionsAwsAuroraPostgresMergePatch
 */
export interface TargetOptionsAwsAuroraPostgresMergePatch {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsAwsAuroraPostgresMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsAwsAuroraPostgresMergePatch
     */
    type: string;
}

export function TargetOptionsAwsAuroraPostgresMergePatchFromJSON(json: any): TargetOptionsAwsAuroraPostgresMergePatch {
    return TargetOptionsAwsAuroraPostgresMergePatchFromJSONTyped(json, false);
}

export function TargetOptionsAwsAuroraPostgresMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsAwsAuroraPostgresMergePatch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'table_name': !exists(json, 'table_name') ? undefined : json['table_name'],
        'type': json['type'],
    };
}

export function TargetOptionsAwsAuroraPostgresMergePatchToJSON(value?: TargetOptionsAwsAuroraPostgresMergePatch | null): any {
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

