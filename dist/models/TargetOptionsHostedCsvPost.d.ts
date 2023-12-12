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
 * (Parameters used to POST a new value of the `TargetOptionsHostedCsv` type.)
 *
 * CSV target options
 * @export
 * @interface TargetOptionsHostedCsvPost
 */
export interface TargetOptionsHostedCsvPost {
    /**
     * CSV delimiter
     * @type {string}
     * @memberof TargetOptionsHostedCsvPost
     */
    delimiter?: string;
    /**
     * Whether files are gzipped.
     * @type {boolean}
     * @memberof TargetOptionsHostedCsvPost
     */
    gzip?: boolean;
    /**
     * Whether to always quote all fields, even if they don't require it. Some systems require this.
     * @type {boolean}
     * @memberof TargetOptionsHostedCsvPost
     */
    quote_all?: boolean;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsHostedCsvPost
     */
    type: string;
}
export declare function TargetOptionsHostedCsvPostFromJSON(json: any): TargetOptionsHostedCsvPost;
export declare function TargetOptionsHostedCsvPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsHostedCsvPost;
export declare function TargetOptionsHostedCsvPostToJSON(value?: TargetOptionsHostedCsvPost | null): any;
