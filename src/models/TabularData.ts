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
 * A table of arbitrary data. Purposefully untyped to allow for flexibility in the data.
 * @export
 * @interface TabularData
 */
export interface TabularData {
    /**
     * The headers of the table. Similar to a CSV header row.
     * @type {Array<string>}
     * @memberof TabularData
     */
    headers: Array<string>;
    /**
     * The rows of the table. Similar to a CSV data row. Each row must have the same number of columns as the `headers` array. The order of the columns must match the order of the headers.
     * @type {Array<Array<string>>}
     * @memberof TabularData
     */
    rows: Array<Array<string>>;
}

export function TabularDataFromJSON(json: any): TabularData {
    return TabularDataFromJSONTyped(json, false);
}

export function TabularDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): TabularData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'headers': json['headers'],
        'rows': json['rows'],
    };
}

export function TabularDataToJSON(value?: TabularData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'headers': value.headers,
        'rows': value.rows,
    };
}
