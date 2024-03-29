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
 * (Parameters used to POST a new value of the `ConnectionOptionsKlaviyo` type.)
 * 
 * Klaviyo connection options
 * @export
 * @interface ConnectionOptionsKlaviyoPost
 */
export interface ConnectionOptionsKlaviyoPost {
    /**
     * API Key for the Klaviyo connection
     * @type {string}
     * @memberof ConnectionOptionsKlaviyoPost
     */
    api_key: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsKlaviyoPost
     */
    type: string;
}

export function ConnectionOptionsKlaviyoPostFromJSON(json: any): ConnectionOptionsKlaviyoPost {
    return ConnectionOptionsKlaviyoPostFromJSONTyped(json, false);
}

export function ConnectionOptionsKlaviyoPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsKlaviyoPost {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'api_key': json['api_key'],
        'type': json['type'],
    };
}

export function ConnectionOptionsKlaviyoPostToJSON(value?: ConnectionOptionsKlaviyoPost | null): any {
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

