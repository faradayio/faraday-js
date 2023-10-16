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
 * (Parameters used to POST a new value of the `TargetOptionsKlaviyo` type.)
 * 
 * Klaviyo target options
 * @export
 * @interface TargetOptionsKlaviyoPost
 */
export interface TargetOptionsKlaviyoPost {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsKlaviyoPost
     */
    type: string;
}

export function TargetOptionsKlaviyoPostFromJSON(json: any): TargetOptionsKlaviyoPost {
    return TargetOptionsKlaviyoPostFromJSONTyped(json, false);
}

export function TargetOptionsKlaviyoPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsKlaviyoPost {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
    };
}

export function TargetOptionsKlaviyoPostToJSON(value?: TargetOptionsKlaviyoPost | null): any {
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
