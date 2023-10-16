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
 * (Parameters used to PUT a value of the `TargetOptionsGoogleAds` type.)
 * 
 * Google Ads target options
 * @export
 * @interface TargetOptionsGoogleAdsPut
 */
export interface TargetOptionsGoogleAdsPut {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsGoogleAdsPut
     */
    type: string;
}

export function TargetOptionsGoogleAdsPutFromJSON(json: any): TargetOptionsGoogleAdsPut {
    return TargetOptionsGoogleAdsPutFromJSONTyped(json, false);
}

export function TargetOptionsGoogleAdsPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsGoogleAdsPut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
    };
}

export function TargetOptionsGoogleAdsPutToJSON(value?: TargetOptionsGoogleAdsPut | null): any {
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
