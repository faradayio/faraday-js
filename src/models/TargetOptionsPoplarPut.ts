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
 * (Parameters used to PUT a value of the `TargetOptionsPoplar` type.)
 * 
 * Poplar target options
 * @export
 * @interface TargetOptionsPoplarPut
 */
export interface TargetOptionsPoplarPut {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsPoplarPut
     */
    type: string;
}

export function TargetOptionsPoplarPutFromJSON(json: any): TargetOptionsPoplarPut {
    return TargetOptionsPoplarPutFromJSONTyped(json, false);
}

export function TargetOptionsPoplarPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsPoplarPut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
    };
}

export function TargetOptionsPoplarPutToJSON(value?: TargetOptionsPoplarPut | null): any {
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

