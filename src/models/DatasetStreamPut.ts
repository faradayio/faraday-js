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
import {
    DataMapPut,
    DataMapPutFromJSON,
    DataMapPutFromJSONTyped,
    DataMapPutToJSON,
} from './DataMapPut';
import {
    DatasetStreamCondition,
    DatasetStreamConditionFromJSON,
    DatasetStreamConditionFromJSONTyped,
    DatasetStreamConditionToJSON,
} from './DatasetStreamCondition';

/**
 * 
 * @export
 * @interface DatasetStreamPut
 */
export interface DatasetStreamPut {
    /**
     * List of conditions to use to filter events.
     * @type {Array<DatasetStreamCondition>}
     * @memberof DatasetStreamPut
     */
    conditions?: Array<DatasetStreamCondition>;
    /**
     * 
     * @type {DataMapPut}
     * @memberof DatasetStreamPut
     */
    data_map: DataMapPut;
}

export function DatasetStreamPutFromJSON(json: any): DatasetStreamPut {
    return DatasetStreamPutFromJSONTyped(json, false);
}

export function DatasetStreamPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetStreamPut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'conditions': !exists(json, 'conditions') ? undefined : ((json['conditions'] as Array<any>).map(DatasetStreamConditionFromJSON)),
        'data_map': DataMapPutFromJSON(json['data_map']),
    };
}

export function DatasetStreamPutToJSON(value?: DatasetStreamPut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'conditions': value.conditions === undefined ? undefined : ((value.conditions as Array<any>).map(DatasetStreamConditionToJSON)),
        'data_map': DataMapPutToJSON(value.data_map),
    };
}

