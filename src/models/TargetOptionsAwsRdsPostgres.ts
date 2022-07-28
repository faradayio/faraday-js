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
 * aws_rds_postgres target options
 * @export
 * @interface TargetOptionsAwsRdsPostgres
 */
export interface TargetOptionsAwsRdsPostgres {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsAwsRdsPostgres
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsAwsRdsPostgres
     */
    type: string;
}

export function TargetOptionsAwsRdsPostgresFromJSON(json: any): TargetOptionsAwsRdsPostgres {
    return TargetOptionsAwsRdsPostgresFromJSONTyped(json, false);
}

export function TargetOptionsAwsRdsPostgresFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsAwsRdsPostgres {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'table_name': json['table_name'],
        'type': json['type'],
    };
}

export function TargetOptionsAwsRdsPostgresToJSON(value?: TargetOptionsAwsRdsPostgres | null): any {
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
