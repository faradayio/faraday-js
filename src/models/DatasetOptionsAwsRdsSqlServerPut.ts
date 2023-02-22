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
 * (Parameters used to PUT a value of the `DatasetOptionsAwsRdsSqlServer` type.)
 * 
 * RDS (SQL Server) dataset options
 * @export
 * @interface DatasetOptionsAwsRdsSqlServerPut
 */
export interface DatasetOptionsAwsRdsSqlServerPut {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsAwsRdsSqlServerPut
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsAwsRdsSqlServerPut
     */
    type: string;
}

export function DatasetOptionsAwsRdsSqlServerPutFromJSON(json: any): DatasetOptionsAwsRdsSqlServerPut {
    return DatasetOptionsAwsRdsSqlServerPutFromJSONTyped(json, false);
}

export function DatasetOptionsAwsRdsSqlServerPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsAwsRdsSqlServerPut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'table_name': json['table_name'],
        'type': json['type'],
    };
}

export function DatasetOptionsAwsRdsSqlServerPutToJSON(value?: DatasetOptionsAwsRdsSqlServerPut | null): any {
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

