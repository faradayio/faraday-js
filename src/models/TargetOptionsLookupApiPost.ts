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
 * (Parameters used to POST a new value of the `TargetOptionsLookupApi` type.)
 * 
 * Lookup API target options
 * @export
 * @interface TargetOptionsLookupApiPost
 */
export interface TargetOptionsLookupApiPost {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsLookupApiPost
     */
    type: string;
}

export function TargetOptionsLookupApiPostFromJSON(json: any): TargetOptionsLookupApiPost {
    return TargetOptionsLookupApiPostFromJSONTyped(json, false);
}

export function TargetOptionsLookupApiPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsLookupApiPost {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
    };
}

export function TargetOptionsLookupApiPostToJSON(value?: TargetOptionsLookupApiPost | null): any {
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
