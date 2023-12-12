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
 * (Parameters used to POST a new value of the `ConnectionOptionsGcpGcsCsv` type.)
 *
 * GCS connection options
 * @export
 * @interface ConnectionOptionsGcpGcsCsvPost
 */
export interface ConnectionOptionsGcpGcsCsvPost {
    /**
     * Bucket name
     * @type {string}
     * @memberof ConnectionOptionsGcpGcsCsvPost
     */
    bucket_name: string;
    /**
     * Project ID
     * @type {string}
     * @memberof ConnectionOptionsGcpGcsCsvPost
     */
    project_id: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsGcpGcsCsvPost
     */
    type: string;
}
export declare function ConnectionOptionsGcpGcsCsvPostFromJSON(json: any): ConnectionOptionsGcpGcsCsvPost;
export declare function ConnectionOptionsGcpGcsCsvPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsGcpGcsCsvPost;
export declare function ConnectionOptionsGcpGcsCsvPostToJSON(value?: ConnectionOptionsGcpGcsCsvPost | null): any;
