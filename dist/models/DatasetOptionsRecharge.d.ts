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
 * Recharge dataset options
 * @export
 * @interface DatasetOptionsRecharge
 */
export interface DatasetOptionsRecharge {
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsRecharge
     */
    type: string;
}
export declare function DatasetOptionsRechargeFromJSON(json: any): DatasetOptionsRecharge;
export declare function DatasetOptionsRechargeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsRecharge;
export declare function DatasetOptionsRechargeToJSON(value?: DatasetOptionsRecharge | null): any;
