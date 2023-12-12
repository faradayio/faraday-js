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
 * (Parameters used to PUT a value of the `DatasetOptionsStripe` type.)
 *
 * Stripe dataset options
 * @export
 * @interface DatasetOptionsStripePut
 */
export interface DatasetOptionsStripePut {
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsStripePut
     */
    type: string;
}
export declare function DatasetOptionsStripePutFromJSON(json: any): DatasetOptionsStripePut;
export declare function DatasetOptionsStripePutFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsStripePut;
export declare function DatasetOptionsStripePutToJSON(value?: DatasetOptionsStripePut | null): any;
