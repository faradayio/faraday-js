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
    DataMapColumnFormat,
    DataMapColumnFormatFromJSON,
    DataMapColumnFormatFromJSONTyped,
    DataMapColumnFormatToJSON,
} from './DataMapColumnFormat';

/**
 * 
 * @export
 * @interface DataMapColumn
 */
export interface DataMapColumn {
    /**
     * The name of a column in the dataset. If format is "static_date_iso8601", then the value provided in this field is used as a static value.
     * @type {string}
     * @memberof DataMapColumn
     */
    column_name: string;
    /**
     * 
     * @type {DataMapColumnFormat}
     * @memberof DataMapColumn
     */
    format?: DataMapColumnFormat;
}

export function DataMapColumnFromJSON(json: any): DataMapColumn {
    return DataMapColumnFromJSONTyped(json, false);
}

export function DataMapColumnFromJSONTyped(json: any, ignoreDiscriminator: boolean): DataMapColumn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'column_name': json['column_name'],
        'format': !exists(json, 'format') ? undefined : DataMapColumnFormatFromJSON(json['format']),
    };
}

export function DataMapColumnToJSON(value?: DataMapColumn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'column_name': value.column_name,
        'format': DataMapColumnFormatToJSON(value.format),
    };
}

