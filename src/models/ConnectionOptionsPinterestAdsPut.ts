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
 * (Parameters used to PUT a value of the `ConnectionOptionsPinterestAds` type.)
 * 
 * Pinterest Ads connection options
 * @export
 * @interface ConnectionOptionsPinterestAdsPut
 */
export interface ConnectionOptionsPinterestAdsPut {
    /**
     * The business ID is located below your business name on your Business Access page.
     * @type {string}
     * @memberof ConnectionOptionsPinterestAdsPut
     */
    business_id?: string;
    /**
     * Password for the Pinterest Ads connection
     * @type {string}
     * @memberof ConnectionOptionsPinterestAdsPut
     */
    password?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsPinterestAdsPut
     */
    type: string;
    /**
     * Username for the Pinterest Ads connection
     * @type {string}
     * @memberof ConnectionOptionsPinterestAdsPut
     */
    username?: string;
}

export function ConnectionOptionsPinterestAdsPutFromJSON(json: any): ConnectionOptionsPinterestAdsPut {
    return ConnectionOptionsPinterestAdsPutFromJSONTyped(json, false);
}

export function ConnectionOptionsPinterestAdsPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsPinterestAdsPut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'business_id': !exists(json, 'business_id') ? undefined : json['business_id'],
        'password': !exists(json, 'password') ? undefined : json['password'],
        'type': json['type'],
        'username': !exists(json, 'username') ? undefined : json['username'],
    };
}

export function ConnectionOptionsPinterestAdsPutToJSON(value?: ConnectionOptionsPinterestAdsPut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'business_id': value.business_id,
        'password': value.password,
        'type': value.type,
        'username': value.username,
    };
}

