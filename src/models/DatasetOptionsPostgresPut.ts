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
 * (Parameters used to PUT a value of the `DatasetOptionsPostgres` type.)
 * 
 * postgres dataset options
 * @export
 * @interface DatasetOptionsPostgresPut
 */
export interface DatasetOptionsPostgresPut {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsPostgresPut
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsPostgresPut
     */
    type: string;
}

export function DatasetOptionsPostgresPutFromJSON(json: any): DatasetOptionsPostgresPut {
    return DatasetOptionsPostgresPutFromJSONTyped(json, false);
}

export function DatasetOptionsPostgresPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsPostgresPut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'table_name': json['table_name'],
        'type': json['type'],
    };
}

export function DatasetOptionsPostgresPutToJSON(value?: DatasetOptionsPostgresPut | null): any {
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
