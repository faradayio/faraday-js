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
 * (Parameters used to PATCH the `ConnectionOptionsSegment` type.)
 * 
 * Segment connection options
 * @export
 * @interface ConnectionOptionsSegmentMergePatch
 */
export interface ConnectionOptionsSegmentMergePatch {
    /**
     * API Key for the Segment connection
     * @type {string}
     * @memberof ConnectionOptionsSegmentMergePatch
     */
    api_key?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsSegmentMergePatch
     */
    type: string;
}

export function ConnectionOptionsSegmentMergePatchFromJSON(json: any): ConnectionOptionsSegmentMergePatch {
    return ConnectionOptionsSegmentMergePatchFromJSONTyped(json, false);
}

export function ConnectionOptionsSegmentMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsSegmentMergePatch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'api_key': !exists(json, 'api_key') ? undefined : json['api_key'],
        'type': json['type'],
    };
}

export function ConnectionOptionsSegmentMergePatchToJSON(value?: ConnectionOptionsSegmentMergePatch | null): any {
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
