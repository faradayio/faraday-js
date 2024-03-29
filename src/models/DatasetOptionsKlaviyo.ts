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
 * Klaviyo dataset options
 * @export
 * @interface DatasetOptionsKlaviyo
 */
export interface DatasetOptionsKlaviyo {
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsKlaviyo
     */
    type: string;
}

export function DatasetOptionsKlaviyoFromJSON(json: any): DatasetOptionsKlaviyo {
    return DatasetOptionsKlaviyoFromJSONTyped(json, false);
}

export function DatasetOptionsKlaviyoFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsKlaviyo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
    };
}

export function DatasetOptionsKlaviyoToJSON(value?: DatasetOptionsKlaviyo | null): any {
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

