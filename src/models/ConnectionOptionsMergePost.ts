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
 * (Parameters used to POST a new value of the `ConnectionOptionsMerge` type.)
 * 
 * Merge Dataset connection options
 * @export
 * @interface ConnectionOptionsMergePost
 */
export interface ConnectionOptionsMergePost {
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsMergePost
     */
    type: string;
}

export function ConnectionOptionsMergePostFromJSON(json: any): ConnectionOptionsMergePost {
    return ConnectionOptionsMergePostFromJSONTyped(json, false);
}

export function ConnectionOptionsMergePostFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsMergePost {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
    };
}

export function ConnectionOptionsMergePostToJSON(value?: ConnectionOptionsMergePost | null): any {
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

