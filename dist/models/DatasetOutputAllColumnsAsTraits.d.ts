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
/**
 * If specified, all columns that are not excluded will be output as traits.
 *
 * `output_to_traits` and `output_to_streams` must be `null` or unspecified when setting this parameter.
 * @export
 * @interface DatasetOutputAllColumnsAsTraits
 */
export interface DatasetOutputAllColumnsAsTraits {
    /**
     * A list of column names to exclude from bulk trait generation.
     * @type {Array<string>}
     * @memberof DatasetOutputAllColumnsAsTraits
     */
    exclude: Array<string>;
}
export declare function DatasetOutputAllColumnsAsTraitsFromJSON(json: any): DatasetOutputAllColumnsAsTraits;
export declare function DatasetOutputAllColumnsAsTraitsFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOutputAllColumnsAsTraits;
export declare function DatasetOutputAllColumnsAsTraitsToJSON(value?: DatasetOutputAllColumnsAsTraits | null): any;
