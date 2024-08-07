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
 * `output_to_streams` may not be not be specified when setting this parameter.
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
    /**
     * A list of column names that should only be used to generate traits.\
     *
     * If unspecified, all columns will be considered and `output_to_traits`
     * must be unset. If specified, only these columns will be considered and
     * `output_to_traits` may be set in conjunction. In this case, any detected
     * traits may not already be specified by `output_to_traits`; collisions will
     * result in error.
     * @type {Array<string>}
     * @memberof DatasetOutputAllColumnsAsTraits
     */
    include?: Array<string>;
}
export declare function DatasetOutputAllColumnsAsTraitsFromJSON(json: any): DatasetOutputAllColumnsAsTraits;
export declare function DatasetOutputAllColumnsAsTraitsFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOutputAllColumnsAsTraits;
export declare function DatasetOutputAllColumnsAsTraitsToJSON(value?: DatasetOutputAllColumnsAsTraits | null): any;
