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
 * Google Ads connection options
 * @export
 * @interface ConnectionOptionsGoogleAds
 */
export interface ConnectionOptionsGoogleAds {
    /**
     * Password for the Google Ads connection
     * @type {string}
     * @memberof ConnectionOptionsGoogleAds
     */
    password?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsGoogleAds
     */
    type: string;
    /**
     * Username for the Google Ads connection
     * @type {string}
     * @memberof ConnectionOptionsGoogleAds
     */
    username?: string;
}

export function ConnectionOptionsGoogleAdsFromJSON(json: any): ConnectionOptionsGoogleAds {
    return ConnectionOptionsGoogleAdsFromJSONTyped(json, false);
}

export function ConnectionOptionsGoogleAdsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsGoogleAds {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'password': !exists(json, 'password') ? undefined : json['password'],
        'type': json['type'],
        'username': !exists(json, 'username') ? undefined : json['username'],
    };
}

export function ConnectionOptionsGoogleAdsToJSON(value?: ConnectionOptionsGoogleAds | null): any {
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
