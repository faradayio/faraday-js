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
 * (Parameters used to PATCH the `DatasetOptionsStripe` type.)
 *
 * Stripe dataset options
 * @export
 * @interface DatasetOptionsStripeMergePatch
 */
export interface DatasetOptionsStripeMergePatch {
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsStripeMergePatch
     */
    type: string;
}
export declare function DatasetOptionsStripeMergePatchFromJSON(json: any): DatasetOptionsStripeMergePatch;
export declare function DatasetOptionsStripeMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsStripeMergePatch;
export declare function DatasetOptionsStripeMergePatchToJSON(value?: DatasetOptionsStripeMergePatch | null): any;
