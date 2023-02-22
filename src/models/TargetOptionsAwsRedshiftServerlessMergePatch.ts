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
 * (Parameters used to PATCH the `TargetOptionsAwsRedshiftServerless` type.)
 * 
 * Redshift Serverless target options
 * @export
 * @interface TargetOptionsAwsRedshiftServerlessMergePatch
 */
export interface TargetOptionsAwsRedshiftServerlessMergePatch {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsAwsRedshiftServerlessMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsAwsRedshiftServerlessMergePatch
     */
    type: string;
}

export function TargetOptionsAwsRedshiftServerlessMergePatchFromJSON(json: any): TargetOptionsAwsRedshiftServerlessMergePatch {
    return TargetOptionsAwsRedshiftServerlessMergePatchFromJSONTyped(json, false);
}

export function TargetOptionsAwsRedshiftServerlessMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsAwsRedshiftServerlessMergePatch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'table_name': !exists(json, 'table_name') ? undefined : json['table_name'],
        'type': json['type'],
    };
}

export function TargetOptionsAwsRedshiftServerlessMergePatchToJSON(value?: TargetOptionsAwsRedshiftServerlessMergePatch | null): any {
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

