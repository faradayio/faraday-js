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
 * (Parameters used to POST a new value of the `TargetOptionsTheTradeDesk` type.)
 * 
 * The Trade Desk target options
 * @export
 * @interface TargetOptionsTheTradeDeskPost
 */
export interface TargetOptionsTheTradeDeskPost {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsTheTradeDeskPost
     */
    type: string;
}

export function TargetOptionsTheTradeDeskPostFromJSON(json: any): TargetOptionsTheTradeDeskPost {
    return TargetOptionsTheTradeDeskPostFromJSONTyped(json, false);
}

export function TargetOptionsTheTradeDeskPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsTheTradeDeskPost {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
    };
}

export function TargetOptionsTheTradeDeskPostToJSON(value?: TargetOptionsTheTradeDeskPost | null): any {
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

