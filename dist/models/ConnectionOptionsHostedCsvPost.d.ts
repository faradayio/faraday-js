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
 * (Parameters used to POST a new value of the `ConnectionOptionsHostedCsv` type.)
 *
 * CSV connection options
 * @export
 * @interface ConnectionOptionsHostedCsvPost
 */
export interface ConnectionOptionsHostedCsvPost {
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsHostedCsvPost
     */
    type: string;
}
export declare function ConnectionOptionsHostedCsvPostFromJSON(json: any): ConnectionOptionsHostedCsvPost;
export declare function ConnectionOptionsHostedCsvPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsHostedCsvPost;
export declare function ConnectionOptionsHostedCsvPostToJSON(value?: ConnectionOptionsHostedCsvPost | null): any;