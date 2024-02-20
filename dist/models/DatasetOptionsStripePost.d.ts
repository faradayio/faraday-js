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
 * (Parameters used to POST a new value of the `DatasetOptionsStripe` type.)
 *
 * Stripe dataset options
 * @export
 * @interface DatasetOptionsStripePost
 */
export interface DatasetOptionsStripePost {
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsStripePost
     */
    type: string;
}
export declare function DatasetOptionsStripePostFromJSON(json: any): DatasetOptionsStripePost;
export declare function DatasetOptionsStripePostFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsStripePost;
export declare function DatasetOptionsStripePostToJSON(value?: DatasetOptionsStripePost | null): any;