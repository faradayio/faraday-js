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
 * (Parameters used to POST a new value of the `ConnectionOptionsIterable` type.)
 * 
 * Iterable connection options
 * @export
 * @interface ConnectionOptionsIterablePost
 */
export interface ConnectionOptionsIterablePost {
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsIterablePost
     */
    type: string;
    /**
     * Webhook URL for the Iterable connection
     * @type {string}
     * @memberof ConnectionOptionsIterablePost
     */
    webhook_url?: string;
}

export function ConnectionOptionsIterablePostFromJSON(json: any): ConnectionOptionsIterablePost {
    return ConnectionOptionsIterablePostFromJSONTyped(json, false);
}

export function ConnectionOptionsIterablePostFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsIterablePost {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'webhook_url': !exists(json, 'webhook_url') ? undefined : json['webhook_url'],
    };
}

export function ConnectionOptionsIterablePostToJSON(value?: ConnectionOptionsIterablePost | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'webhook_url': value.webhook_url,
    };
}

