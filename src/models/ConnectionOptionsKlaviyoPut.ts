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
 * (Parameters used to PUT a value of the `ConnectionOptionsKlaviyo` type.)
 * 
 * Klaviyo connection options
 * @export
 * @interface ConnectionOptionsKlaviyoPut
 */
export interface ConnectionOptionsKlaviyoPut {
    /**
     * API Key for the Klaviyo connection
     * @type {string}
     * @memberof ConnectionOptionsKlaviyoPut
     */
    api_key: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsKlaviyoPut
     */
    type: string;
}

export function ConnectionOptionsKlaviyoPutFromJSON(json: any): ConnectionOptionsKlaviyoPut {
    return ConnectionOptionsKlaviyoPutFromJSONTyped(json, false);
}

export function ConnectionOptionsKlaviyoPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsKlaviyoPut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'api_key': json['api_key'],
        'type': json['type'],
    };
}

export function ConnectionOptionsKlaviyoPutToJSON(value?: ConnectionOptionsKlaviyoPut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'api_key': value.api_key,
        'type': value.type,
    };
}

