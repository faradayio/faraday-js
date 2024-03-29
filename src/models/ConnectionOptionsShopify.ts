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
 * Shopify connection options
 * @export
 * @interface ConnectionOptionsShopify
 */
export interface ConnectionOptionsShopify {
    /**
     * Password for the Shopify connection
     * @type {string}
     * @memberof ConnectionOptionsShopify
     */
    password?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsShopify
     */
    type: string;
    /**
     * Username for the Shopify connection
     * @type {string}
     * @memberof ConnectionOptionsShopify
     */
    username?: string;
}

export function ConnectionOptionsShopifyFromJSON(json: any): ConnectionOptionsShopify {
    return ConnectionOptionsShopifyFromJSONTyped(json, false);
}

export function ConnectionOptionsShopifyFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsShopify {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'password': !exists(json, 'password') ? undefined : json['password'],
        'type': json['type'],
        'username': !exists(json, 'username') ? undefined : json['username'],
    };
}

export function ConnectionOptionsShopifyToJSON(value?: ConnectionOptionsShopify | null): any {
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

