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
 * (Parameters used to POST a new value of the `TargetOptionsSegment` type.)
 * 
 * Segment target options
 * @export
 * @interface TargetOptionsSegmentPost
 */
export interface TargetOptionsSegmentPost {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsSegmentPost
     */
    type: string;
}

export function TargetOptionsSegmentPostFromJSON(json: any): TargetOptionsSegmentPost {
    return TargetOptionsSegmentPostFromJSONTyped(json, false);
}

export function TargetOptionsSegmentPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsSegmentPost {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
    };
}

export function TargetOptionsSegmentPostToJSON(value?: TargetOptionsSegmentPost | null): any {
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
