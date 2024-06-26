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
 * TikTok connection options
 * @export
 * @interface ConnectionOptionsTiktok
 */
export interface ConnectionOptionsTiktok {
    /**
     * Account id for the TikTok connection
     * @type {string}
     * @memberof ConnectionOptionsTiktok
     */
    tiktok_account_id?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsTiktok
     */
    type: string;
}

export function ConnectionOptionsTiktokFromJSON(json: any): ConnectionOptionsTiktok {
    return ConnectionOptionsTiktokFromJSONTyped(json, false);
}

export function ConnectionOptionsTiktokFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsTiktok {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tiktok_account_id': !exists(json, 'tiktok_account_id') ? undefined : json['tiktok_account_id'],
        'type': json['type'],
    };
}

export function ConnectionOptionsTiktokToJSON(value?: ConnectionOptionsTiktok | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'tiktok_account_id': value.tiktok_account_id,
        'type': value.type,
    };
}

