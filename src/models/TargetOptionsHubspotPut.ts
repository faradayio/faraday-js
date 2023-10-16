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
 * (Parameters used to PUT a value of the `TargetOptionsHubspot` type.)
 * 
 * HubSpot target options
 * @export
 * @interface TargetOptionsHubspotPut
 */
export interface TargetOptionsHubspotPut {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsHubspotPut
     */
    type: string;
}

export function TargetOptionsHubspotPutFromJSON(json: any): TargetOptionsHubspotPut {
    return TargetOptionsHubspotPutFromJSONTyped(json, false);
}

export function TargetOptionsHubspotPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsHubspotPut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
    };
}

export function TargetOptionsHubspotPutToJSON(value?: TargetOptionsHubspotPut | null): any {
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
