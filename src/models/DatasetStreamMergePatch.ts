/* tslint:disable */
/* eslint-disable */
/**
 * Faraday REST API
 * The [Faraday](https://faraday.ai) SDK makes it easy to predict customer behavior using a simple API.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    DataMapMergePatch,
    DataMapMergePatchFromJSON,
    DataMapMergePatchFromJSONTyped,
    DataMapMergePatchToJSON,
} from './DataMapMergePatch';

/**
 * 
 * @export
 * @interface DatasetStreamMergePatch
 */
export interface DatasetStreamMergePatch {
    /**
     * 
     * @type {DataMapMergePatch}
     * @memberof DatasetStreamMergePatch
     */
    data_map?: DataMapMergePatch;
}

export function DatasetStreamMergePatchFromJSON(json: any): DatasetStreamMergePatch {
    return DatasetStreamMergePatchFromJSONTyped(json, false);
}

export function DatasetStreamMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetStreamMergePatch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data_map': !exists(json, 'data_map') ? undefined : DataMapMergePatchFromJSON(json['data_map']),
    };
}

export function DatasetStreamMergePatchToJSON(value?: DatasetStreamMergePatch | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data_map': DataMapMergePatchToJSON(value.data_map),
    };
}

