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
 * (Parameters used to POST a new value of the `DatasetOptionsClassic` type.)
 * 
 * Classic Faraday Sources dataset options
 * @export
 * @interface DatasetOptionsClassicPost
 */
export interface DatasetOptionsClassicPost {
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsClassicPost
     */
    type: string;
}

export function DatasetOptionsClassicPostFromJSON(json: any): DatasetOptionsClassicPost {
    return DatasetOptionsClassicPostFromJSONTyped(json, false);
}

export function DatasetOptionsClassicPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsClassicPost {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
    };
}

export function DatasetOptionsClassicPostToJSON(value?: DatasetOptionsClassicPost | null): any {
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

