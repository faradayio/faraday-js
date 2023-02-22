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
 * RDS (MySQL) dataset options
 * @export
 * @interface DatasetOptionsAwsRdsMysql
 */
export interface DatasetOptionsAwsRdsMysql {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsAwsRdsMysql
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsAwsRdsMysql
     */
    type: string;
}

export function DatasetOptionsAwsRdsMysqlFromJSON(json: any): DatasetOptionsAwsRdsMysql {
    return DatasetOptionsAwsRdsMysqlFromJSONTyped(json, false);
}

export function DatasetOptionsAwsRdsMysqlFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsAwsRdsMysql {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'table_name': json['table_name'],
        'type': json['type'],
    };
}

export function DatasetOptionsAwsRdsMysqlToJSON(value?: DatasetOptionsAwsRdsMysql | null): any {
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

