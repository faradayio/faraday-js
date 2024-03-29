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
 * (Parameters used to POST a new value of the `TargetOptionsTiktok` type.)
 * 
 * TikTok target options
 * @export
 * @interface TargetOptionsTiktokPost
 */
export interface TargetOptionsTiktokPost {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsTiktokPost
     */
    type: string;
}

export function TargetOptionsTiktokPostFromJSON(json: any): TargetOptionsTiktokPost {
    return TargetOptionsTiktokPostFromJSONTyped(json, false);
}

export function TargetOptionsTiktokPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsTiktokPost {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
    };
}

export function TargetOptionsTiktokPostToJSON(value?: TargetOptionsTiktokPost | null): any {
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

