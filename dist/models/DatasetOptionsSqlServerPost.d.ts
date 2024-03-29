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
 * (Parameters used to POST a new value of the `DatasetOptionsSqlServer` type.)
 *
 * SQL Server dataset options
 * @export
 * @interface DatasetOptionsSqlServerPost
 */
export interface DatasetOptionsSqlServerPost {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsSqlServerPost
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsSqlServerPost
     */
    type: string;
}
export declare function DatasetOptionsSqlServerPostFromJSON(json: any): DatasetOptionsSqlServerPost;
export declare function DatasetOptionsSqlServerPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsSqlServerPost;
export declare function DatasetOptionsSqlServerPostToJSON(value?: DatasetOptionsSqlServerPost | null): any;
