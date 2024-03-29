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
 * (Parameters used to PUT a value of the `DatasetOptionsRecharge` type.)
 * 
 * Recharge dataset options
 * @export
 * @interface DatasetOptionsRechargePut
 */
export interface DatasetOptionsRechargePut {
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsRechargePut
     */
    type: string;
}

export function DatasetOptionsRechargePutFromJSON(json: any): DatasetOptionsRechargePut {
    return DatasetOptionsRechargePutFromJSONTyped(json, false);
}

export function DatasetOptionsRechargePutFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsRechargePut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
    };
}

export function DatasetOptionsRechargePutToJSON(value?: DatasetOptionsRechargePut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
    };
}

