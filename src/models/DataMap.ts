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
    DataMapColumn,
    DataMapColumnFromJSON,
    DataMapColumnFromJSONTyped,
    DataMapColumnToJSON,
} from './DataMapColumn';

/**
 * A mapping from dataset columns to what they mean. Some fields have special meanings.
 * @export
 * @interface DataMap
 */
export interface DataMap {
    [key: string]: DataMapColumn | any;
    /**
     * 
     * @type {DataMapColumn}
     * @memberof DataMap
     */
    channel?: DataMapColumn;
    /**
     * 
     * @type {DataMapColumn}
     * @memberof DataMap
     */
    datetime?: DataMapColumn;
    /**
     * 
     * @type {DataMapColumn}
     * @memberof DataMap
     */
    product?: DataMapColumn;
    /**
     * 
     * @type {DataMapColumn}
     * @memberof DataMap
     */
    value?: DataMapColumn;
}

export function DataMapFromJSON(json: any): DataMap {
    return DataMapFromJSONTyped(json, false);
}

export function DataMapFromJSONTyped(json: any, ignoreDiscriminator: boolean): DataMap {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
            ...json,
        'channel': !exists(json, 'channel') ? undefined : DataMapColumnFromJSON(json['channel']),
        'datetime': !exists(json, 'datetime') ? undefined : DataMapColumnFromJSON(json['datetime']),
        'product': !exists(json, 'product') ? undefined : DataMapColumnFromJSON(json['product']),
        'value': !exists(json, 'value') ? undefined : DataMapColumnFromJSON(json['value']),
    };
}

export function DataMapToJSON(value?: DataMap | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
            ...value,
        'channel': DataMapColumnToJSON(value.channel),
        'datetime': DataMapColumnToJSON(value.datetime),
        'product': DataMapColumnToJSON(value.product),
        'value': DataMapColumnToJSON(value.value),
    };
}

