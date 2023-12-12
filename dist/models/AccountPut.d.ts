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
 * (Parameters used to PUT a value of the `Account` type.)
 *
 * The top-level organizing abstraction at Faraday. Data cannot be shared among accounts,
 * even if they are controlled by the same entity.
 * @export
 * @interface AccountPut
 */
export interface AccountPut {
    /**
     * The name of the account.
     * @type {string}
     * @memberof AccountPut
     */
    name: string;
}
export declare function AccountPutFromJSON(json: any): AccountPut;
export declare function AccountPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountPut;
export declare function AccountPutToJSON(value?: AccountPut | null): any;
