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
 * (Parameters used to PATCH the `DatasetOptionsIterable` type.)
 * 
 * Iterable dataset options
 * @export
 * @interface DatasetOptionsIterableMergePatch
 */
export interface DatasetOptionsIterableMergePatch {
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsIterableMergePatch
     */
    type: string;
}

export function DatasetOptionsIterableMergePatchFromJSON(json: any): DatasetOptionsIterableMergePatch {
    return DatasetOptionsIterableMergePatchFromJSONTyped(json, false);
}

export function DatasetOptionsIterableMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsIterableMergePatch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
    };
}

export function DatasetOptionsIterableMergePatchToJSON(value?: DatasetOptionsIterableMergePatch | null): any {
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

