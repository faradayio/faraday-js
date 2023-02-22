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
 * (Parameters used to PATCH the `DatasetOptionsAwsRdsPostgres` type.)
 * 
 * RDS (Postgres) dataset options
 * @export
 * @interface DatasetOptionsAwsRdsPostgresMergePatch
 */
export interface DatasetOptionsAwsRdsPostgresMergePatch {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsAwsRdsPostgresMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsAwsRdsPostgresMergePatch
     */
    type: string;
}

export function DatasetOptionsAwsRdsPostgresMergePatchFromJSON(json: any): DatasetOptionsAwsRdsPostgresMergePatch {
    return DatasetOptionsAwsRdsPostgresMergePatchFromJSONTyped(json, false);
}

export function DatasetOptionsAwsRdsPostgresMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsAwsRdsPostgresMergePatch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'table_name': !exists(json, 'table_name') ? undefined : json['table_name'],
        'type': json['type'],
    };
}

export function DatasetOptionsAwsRdsPostgresMergePatchToJSON(value?: DatasetOptionsAwsRdsPostgresMergePatch | null): any {
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

