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
    DatasetStreamPut,
    DatasetStreamPutFromJSON,
    DatasetStreamPutFromJSONTyped,
    DatasetStreamPutToJSON,
} from './DatasetStreamPut';

/**
 * (Parameters used to PUT a value of the `OutputToStreams` type.)
 * 
 * A mapping of {stream type} (ex. orders) -> {data map object}
 * 
 * Describes how to transform the dataset to a stream of events with canonical field names.
 * 
 * A data map object can have any keys, but it is recommended to include a `datetime` key if possible, as this will improve modeling. 
 * Each key must specificy at mimumum a `column_name` (source 
 * column) and optionally a `format`, which can be one of:
 *   * `currency_cents`
 *   * `currency_dollars`
 *   * `mm_dd_yy_slash`
 *   * `mm_dd_yyyy_slash`
 *   * `mm_dd_yy_dash`
 *   * `mm_dd_yyyy_dash`
 *   * `yyyy_mm_dd_slash`
 *   * `yy_mm_dd_slash`
 *   * `yyyy_mm_dd_dash`
 *   * `yy_mm_dd_dash`
 *   * `date_iso8601` (deprecated)
 *   * `date_month_day_fullyear` (deprecated)
 *   * `date_month_day_shortyear` (deprecated)
 *   * `date_month_day_fullyear_hours_minutes` (deprecated)
 *   * `date_month_day_fullyear_hours_minutes_seconds` (deprecated)
 *   * `list_comma_separated`
 *   * `list_semicolon_separated`
 *   * `list_single_value`
 * For the date formats, time values are ignored. In other words, if you have YYYY-MM-DDTHH:MM:SS, you can pick yyyy_mm_dd_dash.
 * @export
 * @interface OutputToStreamsPut
 */
export interface OutputToStreamsPut {
    [key: string]: DatasetStreamPut;
}

export function OutputToStreamsPutFromJSON(json: any): OutputToStreamsPut {
    return OutputToStreamsPutFromJSONTyped(json, false);
}

export function OutputToStreamsPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): OutputToStreamsPut {
    return json;
}

export function OutputToStreamsPutToJSON(value?: OutputToStreamsPut | null): any {
    return value;
}

