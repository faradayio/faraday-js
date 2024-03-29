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
export declare function DatasetUpdateHistoryFromJSON(json: any): DatasetUpdateHistory;
export declare function DatasetUpdateHistoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetUpdateHistory;
export declare function DatasetUpdateHistoryToJSON(value?: DatasetUpdateHistory | null): any;
