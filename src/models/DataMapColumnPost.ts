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
 * @interface DataMapColumnPost
 */
export interface DataMapColumnPost {
    /**
     * The name of a column in the dataset. If format is "static_date_iso8601", then the static value.
     * @type {string}
     * @memberof DataMapColumnPost
     */
    column_name: string;
    /**
     * 
     * @type {DataMapColumnFormat}
     * @memberof DataMapColumnPost
     */
    format?: DataMapColumnFormat;
}

export function DataMapColumnPostFromJSON(json: any): DataMapColumnPost {
    return DataMapColumnPostFromJSONTyped(json, false);
}

export function DataMapColumnPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): DataMapColumnPost {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'column_name': json['column_name'],
        'format': !exists(json, 'format') ? undefined : DataMapColumnFormatFromJSON(json['format']),
    };
}

export function DataMapColumnPostToJSON(value?: DataMapColumnPost | null): any {
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

