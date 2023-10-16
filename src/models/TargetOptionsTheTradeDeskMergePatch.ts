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
 * (Parameters used to PATCH the `TargetOptionsTheTradeDesk` type.)
 * 
 * The Trade Desk target options
 * @export
 * @interface TargetOptionsTheTradeDeskMergePatch
 */
export interface TargetOptionsTheTradeDeskMergePatch {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsTheTradeDeskMergePatch
     */
    type: string;
}

export function TargetOptionsTheTradeDeskMergePatchFromJSON(json: any): TargetOptionsTheTradeDeskMergePatch {
    return TargetOptionsTheTradeDeskMergePatchFromJSONTyped(json, false);
}

export function TargetOptionsTheTradeDeskMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsTheTradeDeskMergePatch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
    };
}

export function TargetOptionsTheTradeDeskMergePatchToJSON(value?: TargetOptionsTheTradeDeskMergePatch | null): any {
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
