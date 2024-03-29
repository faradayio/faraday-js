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
 * (Parameters used to PATCH the `TargetOptionsPinterestAds` type.)
 * 
 * Pinterest Ads target options
 * @export
 * @interface TargetOptionsPinterestAdsMergePatch
 */
export interface TargetOptionsPinterestAdsMergePatch {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsPinterestAdsMergePatch
     */
    type: string;
}

export function TargetOptionsPinterestAdsMergePatchFromJSON(json: any): TargetOptionsPinterestAdsMergePatch {
    return TargetOptionsPinterestAdsMergePatchFromJSONTyped(json, false);
}

export function TargetOptionsPinterestAdsMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsPinterestAdsMergePatch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
    };
}

export function TargetOptionsPinterestAdsMergePatchToJSON(value?: TargetOptionsPinterestAdsMergePatch | null): any {
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

