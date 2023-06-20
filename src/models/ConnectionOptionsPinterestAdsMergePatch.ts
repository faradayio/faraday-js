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
 * (Parameters used to PATCH the `ConnectionOptionsPinterestAds` type.)
 * 
 * Pinterest Ads connection options
 * @export
 * @interface ConnectionOptionsPinterestAdsMergePatch
 */
export interface ConnectionOptionsPinterestAdsMergePatch {
    /**
     * Password for the Pinterest Ads connection
     * @type {string}
     * @memberof ConnectionOptionsPinterestAdsMergePatch
     */
    password?: string | null;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsPinterestAdsMergePatch
     */
    type: string;
    /**
     * Username for the Pinterest Ads connection
     * @type {string}
     * @memberof ConnectionOptionsPinterestAdsMergePatch
     */
    username?: string | null;
}

export function ConnectionOptionsPinterestAdsMergePatchFromJSON(json: any): ConnectionOptionsPinterestAdsMergePatch {
    return ConnectionOptionsPinterestAdsMergePatchFromJSONTyped(json, false);
}

export function ConnectionOptionsPinterestAdsMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsPinterestAdsMergePatch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'password': !exists(json, 'password') ? undefined : json['password'],
        'type': json['type'],
        'username': !exists(json, 'username') ? undefined : json['username'],
    };
}

export function ConnectionOptionsPinterestAdsMergePatchToJSON(value?: ConnectionOptionsPinterestAdsMergePatch | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'password': value.password,
        'type': value.type,
        'username': value.username,
    };
}

