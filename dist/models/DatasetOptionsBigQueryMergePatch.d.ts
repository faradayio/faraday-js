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
 * (Parameters used to PATCH the `DatasetOptionsBigQuery` type.)
 *
 * BigQuery dataset options
 * @export
 * @interface DatasetOptionsBigQueryMergePatch
 */
export interface DatasetOptionsBigQueryMergePatch {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsBigQueryMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsBigQueryMergePatch
     */
    type: string;
}
export declare function DatasetOptionsBigQueryMergePatchFromJSON(json: any): DatasetOptionsBigQueryMergePatch;
export declare function DatasetOptionsBigQueryMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsBigQueryMergePatch;
export declare function DatasetOptionsBigQueryMergePatchToJSON(value?: DatasetOptionsBigQueryMergePatch | null): any;
