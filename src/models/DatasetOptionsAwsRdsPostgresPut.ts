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
 * (Parameters used to PUT a value of the `DatasetOptionsAwsRdsPostgres` type.)
 * 
 * aws_rds_postgres dataset options
 * @export
 * @interface DatasetOptionsAwsRdsPostgresPut
 */
export interface DatasetOptionsAwsRdsPostgresPut {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsAwsRdsPostgresPut
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsAwsRdsPostgresPut
     */
    type: string;
}

export function DatasetOptionsAwsRdsPostgresPutFromJSON(json: any): DatasetOptionsAwsRdsPostgresPut {
    return DatasetOptionsAwsRdsPostgresPutFromJSONTyped(json, false);
}

export function DatasetOptionsAwsRdsPostgresPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsAwsRdsPostgresPut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'table_name': json['table_name'],
        'type': json['type'],
    };
}

export function DatasetOptionsAwsRdsPostgresPutToJSON(value?: DatasetOptionsAwsRdsPostgresPut | null): any {
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

