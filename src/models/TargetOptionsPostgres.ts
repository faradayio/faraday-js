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
 * Postgres target options
 * @export
 * @interface TargetOptionsPostgres
 */
export interface TargetOptionsPostgres {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsPostgres
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsPostgres
     */
    type: string;
}

export function TargetOptionsPostgresFromJSON(json: any): TargetOptionsPostgres {
    return TargetOptionsPostgresFromJSONTyped(json, false);
}

export function TargetOptionsPostgresFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsPostgres {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'table_name': json['table_name'],
        'type': json['type'],
    };
}

export function TargetOptionsPostgresToJSON(value?: TargetOptionsPostgres | null): any {
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

