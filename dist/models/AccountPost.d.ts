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
 * (Parameters used to POST a new value of the `Account` type.)
 *
 * The top-level organizing abstraction at Faraday. Data cannot be shared among accounts,
 * even if they are controlled by the same entity.
 * @export
 * @interface AccountPost
 */
export interface AccountPost {
    /**
     * The name of the account.
     * @type {string}
     * @memberof AccountPost
     */
    name: string;
}
export declare function AccountPostFromJSON(json: any): AccountPost;
export declare function AccountPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountPost;
export declare function AccountPostToJSON(value?: AccountPost | null): any;
