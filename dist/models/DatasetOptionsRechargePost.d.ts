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
 * (Parameters used to POST a new value of the `DatasetOptionsRecharge` type.)
 *
 * Recharge dataset options
 * @export
 * @interface DatasetOptionsRechargePost
 */
export interface DatasetOptionsRechargePost {
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsRechargePost
     */
    type: string;
}
export declare function DatasetOptionsRechargePostFromJSON(json: any): DatasetOptionsRechargePost;
export declare function DatasetOptionsRechargePostFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsRechargePost;
export declare function DatasetOptionsRechargePostToJSON(value?: DatasetOptionsRechargePost | null): any;
