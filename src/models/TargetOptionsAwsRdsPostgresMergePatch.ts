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
 * (Parameters used to PATCH the `TargetOptionsAwsRdsPostgres` type.)
 * 
 * RDS (Postgres) target options
 * @export
 * @interface TargetOptionsAwsRdsPostgresMergePatch
 */
export interface TargetOptionsAwsRdsPostgresMergePatch {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsAwsRdsPostgresMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsAwsRdsPostgresMergePatch
     */
    type: string;
}

export function TargetOptionsAwsRdsPostgresMergePatchFromJSON(json: any): TargetOptionsAwsRdsPostgresMergePatch {
    return TargetOptionsAwsRdsPostgresMergePatchFromJSONTyped(json, false);
}

export function TargetOptionsAwsRdsPostgresMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsAwsRdsPostgresMergePatch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'table_name': !exists(json, 'table_name') ? undefined : json['table_name'],
        'type': json['type'],
    };
}

export function TargetOptionsAwsRdsPostgresMergePatchToJSON(value?: TargetOptionsAwsRdsPostgresMergePatch | null): any {
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

