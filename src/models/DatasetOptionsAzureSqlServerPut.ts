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
 * (Parameters used to PUT a value of the `DatasetOptionsAzureSqlServer` type.)
 * 
 * Microsoft Azure SQL Server dataset options
 * @export
 * @interface DatasetOptionsAzureSqlServerPut
 */
export interface DatasetOptionsAzureSqlServerPut {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsAzureSqlServerPut
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsAzureSqlServerPut
     */
    type: string;
}

export function DatasetOptionsAzureSqlServerPutFromJSON(json: any): DatasetOptionsAzureSqlServerPut {
    return DatasetOptionsAzureSqlServerPutFromJSONTyped(json, false);
}

export function DatasetOptionsAzureSqlServerPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsAzureSqlServerPut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'table_name': json['table_name'],
        'type': json['type'],
    };
}

export function DatasetOptionsAzureSqlServerPutToJSON(value?: DatasetOptionsAzureSqlServerPut | null): any {
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

