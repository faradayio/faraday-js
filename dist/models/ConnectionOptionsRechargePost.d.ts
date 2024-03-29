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
 * (Parameters used to POST a new value of the `ConnectionOptionsRecharge` type.)
 *
 * Recharge connection options
 * @export
 * @interface ConnectionOptionsRechargePost
 */
export interface ConnectionOptionsRechargePost {
    /**
     * API Key for the Recharge connection
     * @type {string}
     * @memberof ConnectionOptionsRechargePost
     */
    api_key: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsRechargePost
     */
    type: string;
}
export declare function ConnectionOptionsRechargePostFromJSON(json: any): ConnectionOptionsRechargePost;
export declare function ConnectionOptionsRechargePostFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsRechargePost;
export declare function ConnectionOptionsRechargePostToJSON(value?: ConnectionOptionsRechargePost | null): any;
