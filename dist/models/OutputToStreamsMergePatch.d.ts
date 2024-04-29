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
import { DatasetStreamMergePatch } from './DatasetStreamMergePatch';
/**
 * (Parameters used to PATCH the `OutputToStreams` type.)
 *
 * Describes how to transform the dataset into one or more streams.
 *
 * Streams typically represent events. They can have multiple dataset sources and each dataset can be used to populate multiple streams.
 *
 * The shape of this parameter is a mapping of stream names to stream output columns, given by a `data_map` object. Ex:
 * ```
 * "output_to_streams": {
 *   "orders": {                               <-- stream name
 *       "data_map": {
 *         "datetime": {                       <-- stream column
 *           "column_name": "purchase_date",   <-- dataset column name
 *           "format": "mm_dd_yyyy_slash"      <-- dataset column format
 *         },
 *         "value": {
 *           "column_name": "purchase_amount"
 *         }
 *       }
 *     }
 *   }
 * }
 * ```
 *
 * Streams named here will be automatically generated if they do not exist. They can be fetched with <a href="https://faraday.ai/developers/reference/getstream">/streams/{stream_id_or_name}</a>.
 *
 * A `data_map` object can have any keys, but it is recommended to include the reserved `datetime` key as this will improve modeling.
 *
 * Each key of the `data_map` object must specificy at mimumum a `column_name` (source column) and optionally a `format`, which can be one of:
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
 *   * `yyyymmdd`
 *   * `yyyymm`
 *   * `list_comma_separated`
 *   * `list_semicolon_separated`
 *   * `list_single_value`
 *   * `static_date_iso8601`
 *   * `date_iso8601` (deprecated)
 *   * `date_month_day_fullyear` (deprecated)
 *   * `date_month_day_shortyear` (deprecated)
 *   * `date_month_day_fullyear_hours_minutes` (deprecated)
 *   * `date_month_day_fullyear_hours_minutes_seconds` (deprecated)
 *
 * If no format is provided, the dataset type will be retained (data uploaded through csv are text by default).
 *
 * For the date formats, time values are ignored. In other words, if you have YYYY-MM-DDTHH:MM:SS, you can pick yyyy_mm_dd_dash.
 *
 * Cannot be set in combination with `output_all_columns_as_traits`.
 * @export
 * @interface OutputToStreamsMergePatch
 */
export interface OutputToStreamsMergePatch {
    [key: string]: DatasetStreamMergePatch;
}
export declare function OutputToStreamsMergePatchFromJSON(json: any): OutputToStreamsMergePatch;
export declare function OutputToStreamsMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): OutputToStreamsMergePatch;
export declare function OutputToStreamsMergePatchToJSON(value?: OutputToStreamsMergePatch | null): any;
