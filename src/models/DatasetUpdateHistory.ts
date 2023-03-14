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
 * Dataset update history item
 * @export
 * @interface DatasetUpdateHistory
 */
export interface DatasetUpdateHistory {
    /**
     * Time of the update
     * @type {Date}
     * @memberof DatasetUpdateHistory
     */
    datetime: Date;
    /**
     * How many rows were added by the update
     * @type {number}
     * @memberof DatasetUpdateHistory
     */
    rows_added: number;
}

export function DatasetUpdateHistoryFromJSON(json: any): DatasetUpdateHistory {
    return DatasetUpdateHistoryFromJSONTyped(json, false);
}

export function DatasetUpdateHistoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetUpdateHistory {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'datetime': (new Date(json['datetime'])),
        'rows_added': json['rows_added'],
    };
}

export function DatasetUpdateHistoryToJSON(value?: DatasetUpdateHistory | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'datetime': (value.datetime.toISOString()),
        'rows_added': value.rows_added,
    };
}

