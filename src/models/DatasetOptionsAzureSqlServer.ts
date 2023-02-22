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
 * Azure SQL dataset options
 * @export
 * @interface DatasetOptionsAzureSqlServer
 */
export interface DatasetOptionsAzureSqlServer {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsAzureSqlServer
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsAzureSqlServer
     */
    type: string;
}

export function DatasetOptionsAzureSqlServerFromJSON(json: any): DatasetOptionsAzureSqlServer {
    return DatasetOptionsAzureSqlServerFromJSONTyped(json, false);
}

export function DatasetOptionsAzureSqlServerFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsAzureSqlServer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'table_name': json['table_name'],
        'type': json['type'],
    };
}

export function DatasetOptionsAzureSqlServerToJSON(value?: DatasetOptionsAzureSqlServer | null): any {
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

