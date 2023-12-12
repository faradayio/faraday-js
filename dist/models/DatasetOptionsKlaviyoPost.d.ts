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
 * (Parameters used to POST a new value of the `DatasetOptionsKlaviyo` type.)
 *
 * Klaviyo dataset options
 * @export
 * @interface DatasetOptionsKlaviyoPost
 */
export interface DatasetOptionsKlaviyoPost {
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsKlaviyoPost
     */
    type: string;
}
export declare function DatasetOptionsKlaviyoPostFromJSON(json: any): DatasetOptionsKlaviyoPost;
export declare function DatasetOptionsKlaviyoPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsKlaviyoPost;
export declare function DatasetOptionsKlaviyoPostToJSON(value?: DatasetOptionsKlaviyoPost | null): any;
