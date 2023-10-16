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
 * (Parameters used to POST a new value of the `ConnectionOptionsLookupApi` type.)
 * 
 * Lookup API connection options
 * @export
 * @interface ConnectionOptionsLookupApiPost
 */
export interface ConnectionOptionsLookupApiPost {
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsLookupApiPost
     */
    type: string;
}

export function ConnectionOptionsLookupApiPostFromJSON(json: any): ConnectionOptionsLookupApiPost {
    return ConnectionOptionsLookupApiPostFromJSONTyped(json, false);
}

export function ConnectionOptionsLookupApiPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsLookupApiPost {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
    };
}

export function ConnectionOptionsLookupApiPostToJSON(value?: ConnectionOptionsLookupApiPost | null): any {
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
