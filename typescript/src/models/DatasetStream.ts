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
    DataMap,
    DataMapFromJSON,
    DataMapFromJSONTyped,
    DataMapToJSON,
} from './DataMap';

/**
 * 
 * @export
 * @interface DatasetStream
 */
export interface DatasetStream {
    /**
     * 
     * @type {DataMap}
     * @memberof DatasetStream
     */
    dataMap: DataMap;
    /**
     * 
     * @type {string}
     * @memberof DatasetStream
     */
    streamId: string;
}

export function DatasetStreamFromJSON(json: any): DatasetStream {
    return DatasetStreamFromJSONTyped(json, false);
}

export function DatasetStreamFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetStream {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dataMap': DataMapFromJSON(json['data_map']),
        'streamId': json['stream_id'],
    };
}

export function DatasetStreamToJSON(value?: DatasetStream | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data_map': DataMapToJSON(value.dataMap),
        'stream_id': value.streamId,
    };
}

