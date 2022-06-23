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
 * (Parameters used to PATCH the `ConnectionOptionsClassic` type.)
 * 
 * Classic Faraday Sources connection options
 * @export
 * @interface ConnectionOptionsClassicMergePatch
 */
export interface ConnectionOptionsClassicMergePatch {
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsClassicMergePatch
     */
    type: string;
}

export function ConnectionOptionsClassicMergePatchFromJSON(json: any): ConnectionOptionsClassicMergePatch {
    return ConnectionOptionsClassicMergePatchFromJSONTyped(json, false);
}

export function ConnectionOptionsClassicMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsClassicMergePatch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
    };
}

export function ConnectionOptionsClassicMergePatchToJSON(value?: ConnectionOptionsClassicMergePatch | null): any {
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

