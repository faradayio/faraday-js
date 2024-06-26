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
 * (Parameters used to POST a new value of the `ConnectionOptionsMerge` type.)
 *
 * Merge Dataset connection options
 * @export
 * @interface ConnectionOptionsMergePost
 */
export interface ConnectionOptionsMergePost {
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsMergePost
     */
    type: string;
}
export declare function ConnectionOptionsMergePostFromJSON(json: any): ConnectionOptionsMergePost;
export declare function ConnectionOptionsMergePostFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsMergePost;
export declare function ConnectionOptionsMergePostToJSON(value?: ConnectionOptionsMergePost | null): any;
