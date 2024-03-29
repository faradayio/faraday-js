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
 * (Parameters used to POST a new value of the `ConnectionOptionsBigQuery` type.)
 *
 * BigQuery connection options
 * @export
 * @interface ConnectionOptionsBigQueryPost
 */
export interface ConnectionOptionsBigQueryPost {
    /**
     * Dataset name
     * @type {string}
     * @memberof ConnectionOptionsBigQueryPost
     */
    dataset_name: string;
    /**
     * Project ID
     * @type {string}
     * @memberof ConnectionOptionsBigQueryPost
     */
    project_id: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsBigQueryPost
     */
    type: string;
}
export declare function ConnectionOptionsBigQueryPostFromJSON(json: any): ConnectionOptionsBigQueryPost;
export declare function ConnectionOptionsBigQueryPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsBigQueryPost;
export declare function ConnectionOptionsBigQueryPostToJSON(value?: ConnectionOptionsBigQueryPost | null): any;
