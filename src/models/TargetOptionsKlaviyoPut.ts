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
 * (Parameters used to PUT a value of the `TargetOptionsKlaviyo` type.)
 * 
 * Klaviyo target options
 * @export
 * @interface TargetOptionsKlaviyoPut
 */
export interface TargetOptionsKlaviyoPut {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsKlaviyoPut
     */
    type: string;
}

export function TargetOptionsKlaviyoPutFromJSON(json: any): TargetOptionsKlaviyoPut {
    return TargetOptionsKlaviyoPutFromJSONTyped(json, false);
}

export function TargetOptionsKlaviyoPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsKlaviyoPut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
    };
}

export function TargetOptionsKlaviyoPutToJSON(value?: TargetOptionsKlaviyoPut | null): any {
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

