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
 * MySQL dataset options
 * @export
 * @interface DatasetOptionsMysql
 */
export interface DatasetOptionsMysql {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsMysql
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsMysql
     */
    type: string;
}

export function DatasetOptionsMysqlFromJSON(json: any): DatasetOptionsMysql {
    return DatasetOptionsMysqlFromJSONTyped(json, false);
}

export function DatasetOptionsMysqlFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsMysql {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'table_name': json['table_name'],
        'type': json['type'],
    };
}

export function DatasetOptionsMysqlToJSON(value?: DatasetOptionsMysql | null): any {
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

