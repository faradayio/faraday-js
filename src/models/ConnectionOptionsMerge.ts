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
 * Merge Dataset connection options
 * @export
 * @interface ConnectionOptionsMerge
 */
export interface ConnectionOptionsMerge {
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsMerge
     */
    type: string;
}

export function ConnectionOptionsMergeFromJSON(json: any): ConnectionOptionsMerge {
    return ConnectionOptionsMergeFromJSONTyped(json, false);
}

export function ConnectionOptionsMergeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsMerge {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
    };
}

export function ConnectionOptionsMergeToJSON(value?: ConnectionOptionsMerge | null): any {
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

