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
 * Segment connection options
 * @export
 * @interface ConnectionOptionsSegment
 */
export interface ConnectionOptionsSegment {
    /**
     * API Key for the Segment connection
     * @type {string}
     * @memberof ConnectionOptionsSegment
     */
    api_key: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsSegment
     */
    type: string;
}

export function ConnectionOptionsSegmentFromJSON(json: any): ConnectionOptionsSegment {
    return ConnectionOptionsSegmentFromJSONTyped(json, false);
}

export function ConnectionOptionsSegmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsSegment {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'api_key': json['api_key'],
        'type': json['type'],
    };
}

export function ConnectionOptionsSegmentToJSON(value?: ConnectionOptionsSegment | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'api_key': value.api_key,
        'type': value.type,
    };
}

