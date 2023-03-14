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
 * AWS Aurora Postgres target options
 * @export
 * @interface TargetOptionsAwsAuroraPostgres
 */
export interface TargetOptionsAwsAuroraPostgres {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsAwsAuroraPostgres
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsAwsAuroraPostgres
     */
    type: string;
}

export function TargetOptionsAwsAuroraPostgresFromJSON(json: any): TargetOptionsAwsAuroraPostgres {
    return TargetOptionsAwsAuroraPostgresFromJSONTyped(json, false);
}

export function TargetOptionsAwsAuroraPostgresFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsAwsAuroraPostgres {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'table_name': json['table_name'],
        'type': json['type'],
    };
}

export function TargetOptionsAwsAuroraPostgresToJSON(value?: TargetOptionsAwsAuroraPostgres | null): any {
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

