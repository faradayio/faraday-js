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
 * (Parameters used to POST a new value of the `ConnectionOptionsClassic` type.)
 * 
 * Classic Faraday Sources connection options
 * @export
 * @interface ConnectionOptionsClassicPost
 */
export interface ConnectionOptionsClassicPost {
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsClassicPost
     */
    type: string;
}

export function ConnectionOptionsClassicPostFromJSON(json: any): ConnectionOptionsClassicPost {
    return ConnectionOptionsClassicPostFromJSONTyped(json, false);
}

export function ConnectionOptionsClassicPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsClassicPost {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
    };
}

export function ConnectionOptionsClassicPostToJSON(value?: ConnectionOptionsClassicPost | null): any {
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

